import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class Footer extends Component {
  render() {
    return (
    <footer className="bg-dark text-light pt-5">    
        <Container>
            <Row className="py-4 d-flex align-items-center">
                <Col md={6} lg={5} className="text-center text-md-left mb-4 mb-md-3">
                    <h6 className="mb-0">Get connected with us on social networks!</h6>
                </Col>
                <Col md={6} lg={7} className="text-center text-md-right">
                    <a className="tw-ic" href="https://twitter.com/Free2CodeIt">
                        <i className="fa fa-twitter white-text mr-4"> </i>
                    </a>
                    <a className="li-ic" href="https://www.linkedin.com/in/michael-dennis-89b80752/">
                        <i className="fa fa-linkedin white-text mr-4"> </i>
                    </a>
                    <a className="ins-ic" href="https://www.instagram.com/michaeldennis5827/">
                        <i className="fa fa-instagram white-text"> </i>
                    </a>
                </Col>
            </Row>
        </Container>
        <Container className="text-center text-md-left mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">QR Rewards</h6>
                    <hr className="indigo accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                    <p className="text-justify text-primary">With QR Rewards its easy to bring your current rewards system into the blockchain age. Register to get started now.</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">Products</h6>
                    <hr className="purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p>
                        <a href="#!">Register</a>
                    </p>
                    <p>
                        <a href="#!">Sign-In</a>
                    </p>
                    <p>
                        <a href="#!">Testemonials</a>
                    </p>
                    <p>
                        <a href="#!">Pricing</a>
                    </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p>
                        <a href="#!">Sign In | Sign Out</a>
                    </p>
                    <p>
                        <a href="#!">Find Us on Github!</a>
                    </p>
                    <p>
                        <a href="#!">Developer API</a>
                    </p>
                    <p>
                        <a href="#!">Help</a>
                    </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p><i className="fa fa-home mr-3"></i> Glendale, AZ 85303, US</p>
                    <p><i className="fa fa-envelope mr-3"></i> michaeladennis@yahoo.com</p>
                    <p><i className="fa fa-phone mr-3"></i> + 01 480 433 8495</p>
                    <p><i className="fa fa-comment mr-3"></i> + 01 480 433 8495</p>
                </div>
            </div>
        </Container>        
        <Container fluid className="justify-content-center pb-0">
            <Row>
                <div className="col-md-4 col-lg-4 col-xl-4">
                
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 text-center">
                    © 2018 Copyright <a href="https://dreamingrainbow.com"> dreamingrainbow.com</a>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                    <span className="float-right"><a href="#!">Privacy</a> | <a href="#!">Terms Of Service</a></span>
                </div>
            </Row>
        </Container>        
    </footer>         
    );
  }
}

export default Footer;
