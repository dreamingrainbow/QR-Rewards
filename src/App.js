import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { withRouter, Link } from 'react-router-dom';
import Sidebar from './components/sidebar';
import MainMenu from './components/main-menu';
import BodyContent from './components/body-content';
import Footer from './components/footer';
import RequireAuth from './components/RequireAuth';
import SignIn from './components/sign-in';
import RegisterUser from './components/register-user';
import PrivacyPolicy from './components/privacy-policy';
import TermsOfService from './components/terms-of-service';
import Help from './components/help';
import Pricing from './components/pricing';
import { Container, Row, Col, UncontrolledAlert } from 'reactstrap';
class App extends Component {
  constructor(props) {
      super(props);
      document.title = 'QR Rewards'
  }
  breadcrumbLocation(){
    return '';//<Link to={this.props.location.pathname}>Other</Link>;
  }
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
            <span className="float-left pl-3"><small><Link to="/">QR Rewards</Link> > {this.props.location.pathname === "/" ? <Link to="/">Home</Link> : this.breadcrumbLocation()}</small></span>
            <span className="float-right px-3 text-center pt-2 pb-0"><br /><Link to="/Sign-In">Sign In</Link> <br /> <Link to="/Register">Register</Link></span>
            <br/>
            <MainMenu /> 
            <Switch>
              <Route path="/" component={BodyContent} exact />
              <Route path="/Sign-In" component={SignIn}  exact/>
              <Route path="/Register" component={RegisterUser} exact/>
              <Route path="/Sign-Out" component={BodyContent} exact/>
              <Route path="/Help" component={Help} exact/>
              <Route path="/Testemonials" component={BodyContent} exact/>
              <Route path="/Pricing" component={Pricing} exact/>
              <Route path="/Privacy-Policy" component={PrivacyPolicy} exact/>
              <Route path="/Terms-Of-Service" component={TermsOfService} exact/>
              <Route path="/Developer/API" component={BodyContent} exact/>                
              <Route path="/Reward-Campaigns" component={RequireAuth(BodyContent)} exact/>
              <Route path="/Reward-Campaigns/Manage/:campaign" component={RequireAuth(BodyContent)} exact/>
              <Route path="/Reward-Accounts" component={RequireAuth(BodyContent)} exact/>
              <Route path="/Reward-Accounts/Manage/:account_id" component={RequireAuth(BodyContent)} exact/>                
              <Route path="/Reward-Accounts/Spend-Points" component={RequireAuth(BodyContent)} exact/>
              <Route path="/Reward-Accounts/Refill-Points" component={RequireAuth(BodyContent)} />
              <Route path="/Reward-Accounts/Earn-Points" component={RequireAuth(BodyContent)} exact/>                
              <Route path="/Transactions" component={RequireAuth(BodyContent)} exact/>
            </Switch>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(App));
