import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
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
    Button,
    FormGroup,
    InputGroup,
    Input
} from 'reactstrap';

class SignIn extends Component {
    render() {
        return (
            <Container fluid className="no-gutters px-0 py-3 bg-light">
                <Container>
                    <Row className="align-content-center justify-content-center my-2">
                        <Col md={5} className="align-self-center">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sign - In</CardTitle>
                                </CardHeader>
                                <CardBody>
                                
                                    <FormGroup>
                                        <InputGroup>
                                            <Input type="text" name="Username" placeholder="Username" />
                                        </InputGroup>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <CardSubtitle className="text-center"><Button className="float-left" color="primary" tag={Link} to="/Register" outline>Register Now</Button><Button tag={Link} to="/User-Reset" outline>Forgot Username?</Button><Button color="info" className="float-right" outline>Sign-In</Button></CardSubtitle>
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

export default withRouter(connect(mapStateToProps)(SignIn));
