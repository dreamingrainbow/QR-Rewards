import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { checkUsername, sendRegistration } from '../actions';
import  fileDownload from 'js-file-download';

import { 
    Container, 
    Row,
    Col, 
    Card, 
    CardHeader, 
    CardTitle, 
    CardSubtitle, 
    CardBody, 
    CardFooter, 
    ButtonGroup,
    Button,
    InputGroup,
    Input,
    InputGroupAddon, 
    UncontrolledAlert,
    Badge,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import QR_Rewards from '../QRRewards';
const qrRewards = new QR_Rewards();
class RegisterUser extends Component {
    constructor(props){
        super(props);
        this.state = { 
            page : 'register',
            userExists : props.userExists
        }
        this.pages = { 
                register : {
                    username : { 
                        isValid : false
                    }
                },
                create : { 
                    wallet : {
                        isValid : false
                    }
                },
                confirm : {
                    downloaded : {
                        confirmed : false
                    },
                    lostWallet : {
                        confirmed : false
                    }
                },
                signature : {
                    passphrase : {
                        created : false
                    },
                    verified : {
                        confirmed : false
                    }
                }
            };
    }

    checkUsername(e){
        const v = e.target.value;
        if(v !== '' && v.length > 8) {
            this.setState({
                username : v,
                userExists : this.props.checkUsername(v)
            });
        }       
    }

    generateWallet() {
        this.pages.register.username.isValid = true;
        const wallet = qrRewards.generateKeyPair();
        const user = {
            username : this.state.username,
            publicAddress : wallet.exportKey(true),
            privateAddress : wallet.exportKey(false),
            qrImage : wallet.extractBase64(true),
            created : Date.now()
        }
        this.pages.create.wallet.isValid = true;
        this.setState({
            user,
            walletGenerated : true,
            username : undefined,
            validPassphrase : false
        });
    }

    downloadTag() {
        const address = this.state.user.privateAddress;
        address.shift();
        address.pop();
        address.unshift('-----    START QR REWARDS PRIVATE KEY    -----');
        address.push('-----    END QR REWARDS PRIVATE KEY    -----');
        fileDownload(this.state.user.privateAddress.join('\n'), 'Wallet.key');
        this.pages.confirm.downloaded.confirmed = true;
        this.setState({
            downloaded : true
        })
    }

    validatePassphrase(e){
        let validPassphrase = false;
        let validPassphraseConfirmed = false;
        switch(e.target.name){
            case 'passphrase-redo' :
                if(e.target.value === this.state.passphrase) {
                    validPassphraseConfirmed = true;
                }
                this.pages.signature.passphrase.verified = true;                
                this.setState({
                    validPassphraseConfirmed
                })
                break;
            case 'passphrase' :
            default:
                if(e.target.value !== '') {
                    if(e.target.value.split(' ').length > 2) {
                        validPassphrase = true;
                    }
                }
                this.setState({
                    passphrase : e.target.value,
                    validPassphrase
                })
        }
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.changePage();
        }
    }

    setAffirmation() {
        this.pages.confirm.lostWallet.confirmed = true
        this.setState({
            affirmation : !this.state.affirmation
        })
    }

    signRegistration() {
        const signedTransaction = qrRewards.sign(this.state.user.username, this.state.passphrase, { created:this.state.user.created, address : this.state.user.publicAddress })
        const _qrRewards = new QR_Rewards();
        _qrRewards.setPublicKey(this.state.user.publicAddress.join('\n'));
        if(_qrRewards.verify(signedTransaction)){
            this.pages.signature.verified = true        
            const user = this.state.user;
            user.signedTransaction = signedTransaction;
            this.setState({
                signatureVerified : true
            });
        }

    }

    sendRegistration() {
        this.changePage();
        this.props.sendRegistration(this.state.user.signedTransaction);
        this.setState({
            processing : true
        })
    }

    renderAlerts() {
        if( this.props.userExists && this.props.userExists.error)
            return (<UncontrolledAlert color="danger" className="mt-2 mb-0"><strong>Danger !</strong> Error message goes here!</UncontrolledAlert>);
        else
            return null;
    }

    renderSection() {
        switch(this.state.page) {
            case 'final' :
                return <ListGroup>
                    {this.props.userAdded ? <h1><strong>Complete</strong></h1> : null }
                    {this.props.userAddError ? <strong>{this.props.userAddError}</strong> : null }
                    </ListGroup>
            case 'send' :
                return <ListGroup>
                        <ListGroupItem className="text-center">
                            <Col size={12}>
                                Username : {this.state.user.username}
                            </Col>
                            <Col size={12} md={12}>
                                <ButtonGroup className="w-100  text-center">
                                    <Button className="col-md-2" disabled color="primary"><i className="fa fa-vcard-o"></i></Button>
                                    <Button className="col-md-8" onClick={this.signRegistration.bind(this)} title="Sign your registration data.">Click to Sign</Button>
                                    <Button className="col-md-2" disabled>{!this.state.signatureVerified ? <i className="fa fa-close text-danger"></i> : <i className="fa fa-check text-success"></i>}</Button>
                                </ButtonGroup>
                            </Col>
                            <Col size={12} md={12}>
                                Date Created : <br/>
                                {Date(this.state.user.created)} <br/>
                            </Col>
                        </ListGroupItem>            
                    </ListGroup>                
            case 'signature':
                return <ListGroup className="w-100">
                            <ListGroupItem className="text-center">
                            <Col size={12}>
                                Username : {this.state.user.username}
                            </Col>
                            <Col size={12} md={12}>
                                <form>
                                    <InputGroup size="sm" className="px-0 py-0" >
                                        <Input name="passphrase" autoComplete="registration" placeholder="Enter a Passphrase." type="password" onChange={this.validatePassphrase.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
                                        <InputGroupAddon addonType="append" >
                                        {this.state.validPassphrase ? <span className="input-group-text" ><i className="fa fa-check text-success"></i></span> : <span className="input-group-text" ><i className="fa fa-close text-danger"></i></span> }
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <InputGroup size="sm" className="px-0 py-0">                                            
                                        <Input name="passphrase-redo" autoComplete="registration" placeholder="Re-Enter your Passphrase." type="password" onChange={this.validatePassphrase.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
                                        <InputGroupAddon addonType="append" >
                                        {this.state.validPassphraseConfirmed ? <span className="input-group-text" ><i className="fa fa-check text-success"></i></span> : <span className="input-group-text" ><i className="fa fa-close text-danger"></i></span> }
                                        </InputGroupAddon>
                                    </InputGroup>
                                </form>
                            </Col>
                            <Col size={12} md={12}>
                                Date Created : <br/>
                                {Date(this.state.user.created)} <br/>
                            </Col>
                        </ListGroupItem>
                    </ListGroup>;
            case 'wallet':
                return <Row className="justify-content-center">
                            <Col className="align-self-center">
                            <h4>Welcome : <Badge color="primary"><i className="fa fa-user"></i> {this.state.username || this.state.user.username}</Badge></h4>
                                <ListGroup className="w-100">
                                    <ListGroupItem className="text-center">
                                        <ButtonGroup className="w-100  text-center">
                                            <Button className="col-md-2" disabled color="primary"><i className="fa fa-vcard-o"></i></Button>
                                            <Button className="col-md-8" onClick={this.generateWallet.bind(this)} title="Generate your rsa key which will act as your wallet">Click to Generate</Button>
                                            <Button className="col-md-2" disabled>{!this.state.walletGenerated ? <i className="fa fa-close text-danger"></i> : <i className="fa fa-check text-success"></i>}</Button>
                                        </ButtonGroup>
                                    </ListGroupItem>
                                    <ListGroupItem className="text-center">
                                        <ButtonGroup className="w-100">
                                            <Button className="col-md-2" disabled color="primary"><i className="fa fa-key"></i></Button>
                                            <Button className="col-md-8" disabled={!this.state.walletGenerated} title="download your wallet now" onClick={this.downloadTag.bind(this)}>Click to Download</Button>
                                            <Button className="col-md-2" disabled>{!this.state.downloaded ? <i className="fa fa-close text-danger"></i> : <i className="fa fa-check text-success"></i>}</Button>
                                        </ButtonGroup>
                                    </ListGroupItem>
                                    
                                    <ListGroupItem className="text-center">
                                        <Input type="checkbox" name="lost-wallet-affirmation" onClick={this.setAffirmation.bind(this)}/>
                                        By checking this box you agree that you understand, that you and you alone are responsible for your wallet key. We will never store your key and can never recover it for you. By continueing you agree to this and all of our policies and procedures found through out our site.
                                    </ListGroupItem>
                                </ListGroup>
                        </Col>
                    </Row>;
            case 'register':
            default:
                return <InputGroup>
                    <Input type="text" name="Username" placeholder="Username" onChange={this.checkUsername.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} ref="username"/>
                        <InputGroupAddon addonType="append" >
                            {this.props.userExists === null ? '?' : this.props.userExists ? <span className="input-group-text" ><i className="fa fa-close text-danger"></i></span> : <span className="input-group-text" ><i className="fa fa-check text-success"></i></span> }
                        </InputGroupAddon>                                   
                    </InputGroup>
        }
    }

    renderSectionButtons() {
        switch(this.state.page) {
            case 'final' : 
                return <CardSubtitle className="text-center">
                            <Link to="/Sign-in" alt="Sign In to your new account and select a rewards package.">Sign In</Link> to pick your package!
                        </CardSubtitle>
            case 'send':
                return <CardSubtitle className="text-center">
                            <Button className="float-right" color="info" outline disabled={!this.state.signatureVerified} onClick={this.sendRegistration.bind(this)}>Send Registration</Button>
                        </CardSubtitle>
            case 'signature':
                return <CardSubtitle className="text-center">
                            <Button className="float-right" color="info" outline disabled={!this.state.validPassphraseConfirmed} onClick={this.changePage.bind(this)}>Sign Registration</Button>
                        </CardSubtitle>
            case 'wallet':
                return <CardSubtitle className="text-center">
                    <Button className="float-right" color="info" outline disabled={this.state.walletGenerated && this.state.downloaded && this.state.affirmation ? false : true} onClick={this.changePage.bind(this)}>Continue Registration</Button>
                </CardSubtitle>
            case 'register':
            default:
                return <CardSubtitle className="text-center">
                <Button tag={Link} to="/Sign-In" color="primary" className="float-left" outline title="Already have an account? Click here to Sign-In.">Sign-In</Button>
                <Button className="float-right" color="info" outline disabled={this.props.userExists === null || this.props.userExists.error !== undefined ? true : false } onClick={this.changePage.bind(this)}>Register Now</Button>
            </CardSubtitle>
        }
    }

    changePage() {
        if(this.state.page === 'register')
            this.setState({
                page :  'wallet'
            });
        if(this.state.page === 'wallet')
            this.setState({
                page :  'signature'
            });
        if(this.state.page === 'signature')
            this.setState({
                page :  'send'
            });
        if(this.state.page === 'send')
            this.setState({
                page :  'final'
            });
    }

    render() {
        return (
            <Container fluid className="no-gutters px-0 py-3 bg-light">
                <Container>
                    <Row className="align-content-center justify-content-center my-2">
                        <Col md={5} className="align-self-center">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Register to create Campaigns today!</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    {this.renderSection()}                                
                                    {this.state.userExists !== null ? this.renderAlerts() : null} 
                                </CardBody>
                                <CardFooter>
                                    {this.renderSectionButtons()}
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps, {checkUsername, sendRegistration})(RegisterUser));
