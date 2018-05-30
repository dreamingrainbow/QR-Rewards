import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Sidebar from './components/sidebar';
import MainMenu from './components/main-menu';
import BodyContent from './components/body-content';
import Footer from './components/footer';
import { Container, Row, Col, UncontrolledAlert, UncontrolledCarousel } from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Container fluid className="no-gutters px-0 bg-light h-100">
        <Row className="h-100 no-gutters">
          <Col size={2} md={2} className="h-100 d-none d-md-block d-lg-block d-xl-block">
            <Sidebar />
          </Col>
          <Col size={10} md={10} className="py-1 bg-dark text-info justify-content-center">
            <UncontrolledAlert color="primary" className="text-center mt-3 mx-2">
              <h3><strong>Welcome to <br className="d-block d-sm-none"/>Qr Rewards</strong> <Link to="/Register">Register now</Link> to get started.</h3>
            </UncontrolledAlert>
            <span className="float-left pl-3"><small><Link to="/">QR Rewards</Link> > <Link to="/">Home</Link></small></span>
            <span className="float-right px-3 text-center pt-2 pb-0"><br /><Link to="/Sign-In">Sign In</Link> <br /> <Link to="/Register">Register</Link></span>
            <br/>
            <MainMenu />            
            <UncontrolledCarousel items={[{
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
              src:'//placehold.it/800x300?text=Slide 3'}]} />
              <Switch>
                <Route path="/" component={BodyContent} exact />
                <Route path="/Become-A-Vendor" component={BodyContent} />                
                <Route path="/Reward-Campaigns" component={BodyContent} />
                <Route path="/Reward-Accounts" component={BodyContent} />
                <Route path="/Transactions" component={BodyContent} />
                <Route path="/Reward-Accounts/Earn-Points" component={BodyContent} />
                <Route path="/Reward-Accounts/Spend-Points" component={BodyContent} />
              </Switch>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
