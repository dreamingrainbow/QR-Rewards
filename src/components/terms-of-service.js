import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
    Container, 
    Row,
    Col, 
    Card, 
    CardHeader, 
    CardTitle,  
    CardBody, 
    CardFooter
} from 'reactstrap';

class TermsOfService extends Component {
    render() {
        return (
            <Container fluid className="no-gutters px-0 py-3 bg-light">
                <Container>
                    <Row className="align-content-center justify-content-center my-2">
                        <Col md={10} className="align-self-center">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Terms of Service</CardTitle>
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                                <CardFooter>
                                    By using this service you agree to these terms of service.
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

export default withRouter(connect(mapStateToProps)(TermsOfService));
