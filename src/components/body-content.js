import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
    Container, 
    Row, 
    Col, 
    Card,
    CardHeader, 
    UncontrolledCarousel, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    CardFooter, 
    Jumbotron
} from 'reactstrap';

class BodyContent extends Component {
    render() {
        return (
            [
                <UncontrolledCarousel key={`main_carousel`} items={[{
                    altText: 'Slide 1',
                    caption: 'Slide 1',
                    header: 'Slide 1 Header', 
                    src:'//placehold.it/800x300?text=Slide 1'},
                    {
                        altText: 'Slide 2',
                        caption: 'Slide 2',
                        header: 'Slide 2 Header', 
                        src:'//placehold.it/800x300?text=Slide 2'},
                    {
                    altText: 'Slide 3',
                    caption: 'Slide 3',
                    header: 'Slide 3 Header', 
                    src:'//placehold.it/800x300?text=Slide 3'}]} />,    
            <Container fluid className="text-center bg-secondary" key={`top_section`}>
                <section>
                    <Row className="text-white">
                        <Col>
                            <Jumbotron className="mx-2 my-4 text-info">
                                <h3>QR Reward, a natural evolution to your current reward programs</h3>
                            </Jumbotron>
                        </Col>
                    </Row>
                </section>
            </Container>,
            <Container fluid className="mx-auto py-2 text-center bg-info" key={`thumbnail_type_a`}>
                <section>
                    <Row className="justify-content-center text-white">
                        <Col>
                            <h3>QR Reward, a natural evolution to your current reward programs</h3>
                            <h4>Blockchain reward systems are here!</h4>
                            <Row className="my-4 text-info">
                                <Col size={4} sm={12} md={4}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Header</CardTitle>
                                            <img alt="" className="img-thumbnail img-responsive" src="//placehold.it/175x175?text=card1"/>
                                            <CardText>
                                                Some text about this section.
                                            </CardText>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardSubtitle>Header</CardSubtitle>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col size={4} sm={12} md={4}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Header</CardTitle>
                                            <img alt="" className="img-thumbnail img-responsive" src="//placehold.it/175x175?text=card2"/>
                                            <CardText>
                                                Some text about this section.
                                            </CardText>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardSubtitle>Header</CardSubtitle>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col size={4} sm={12} md={4}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Header</CardTitle>
                                            <img alt="" className="img-thumbnail img-responsive" src="//placehold.it/175x175?text=card3"/>
                                            <CardText>
                                                Some text about this section.
                                            </CardText>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardSubtitle>Header</CardSubtitle>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>,
            <Container fluid className="mx-auto py-2 text-center bg-primary" key={`banner_type_a`}>
                <section>
                    <Row>
                        <Col>
                            <h3 className="my-3 py-2 text-white">QR Reward, a natural evolution to your current reward systems</h3>
                            <Jumbotron className="mx-2 my-4 text-primary">
                                <Row>
                                    <Col>
                                            Reward Systems
                                    </Col>
                                    <Col>
                                            + 
                                    </Col>
                                    <Col>
                                            Blockchain
                                    </Col>
                                    <Col>
                                            =
                                    </Col>
                                    <Col>
                                            No Paper Resources!
                                    </Col>
                                </Row>
                            </Jumbotron>
                            <h4 className="my-3 py-1 text-white">Technology moving into the future.</h4>
                        </Col>
                    </Row>
                </section>
            </Container>,
            <Container fluid className="mx-auto py-2 text-center bg-info" key={`thumbnail_type_b`}>
                <section>
                    <Row className="justify-content-center text-white">
                        <Col>
                            <h3>Explore how blockchain can change the way you handle data.</h3>
                            <h4>Decentralized data storage across your network.</h4>
                            <Row className="my-4 text-info">
                                <Col size={4} sm={12} md={4}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Header</CardTitle>
                                            <img alt="" className="img-thumbnail img-responsive rounded-circle" src="//placehold.it/175x175?text=card1"/>
                                            <CardText>
                                                Some text about this section.
                                            </CardText>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardSubtitle>Header</CardSubtitle>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col size={4} sm={12} md={4}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Header</CardTitle>
                                            <img alt="" className="img-thumbnail img-responsive rounded-circle" src="//placehold.it/175x175?text=card2"/>
                                            <CardText>
                                                Some text about this section.
                                            </CardText>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardSubtitle>Header</CardSubtitle>
                                        </CardFooter>
                                    </Card>
                                </Col>
                                <Col size={4} sm={12} md={4}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Header</CardTitle>
                                            <img alt="" className="img-thumbnail img-responsive rounded-circle" src="//placehold.it/175x175?text=card3"/>
                                            <CardText>
                                                Some text about this section.
                                            </CardText>
                                        </CardHeader>
                                        <CardFooter>
                                            <CardSubtitle>Header</CardSubtitle>
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>,
            <Container fluid className="text-center bg-secondary" key={`banner_section`}>
                <section>
                    <Row className="text-white">
                        <Col>
                            <Jumbotron className="mx-2 my-4 text-info">
                                <h3>QR Reward, a natural evolution to your current reward programs</h3>
                            </Jumbotron>
                        </Col>
                    </Row>
                </section>
            </Container>
        ]
        );
    }
}
  
const mapStateToProps = state => {
    return state;
};
  
export default withRouter(connect(mapStateToProps)(BodyContent));
