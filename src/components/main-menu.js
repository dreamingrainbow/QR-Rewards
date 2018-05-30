import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavLink, NavItem, Collapse, NavbarToggler } from 'reactstrap';
class MainMenu extends Component {  constructor(props){
  super(props);
    this.state = {
      collapsed:true
    }
  }

  toggleNavbar(){
    this.setState({
      collapsed:!this.state.collapsed
    })
  }
  
  render() {
    return (
      <Navbar color="secondary" expand="sm" className="navbar-dark mt-2">
          <NavbarBrand className="text-info  float-left" tag={Link} to="/">QR Rewards</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar.bind(this)} className="mr-auto bg-info text-white float-right" />
          <Collapse isOpen={!this.state.collapsed} navbar>      
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/Reward-Campaigns">Campaigns</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Reward-Accounts/Refill-Points">Refill Points</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Transactions">Transactions</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default MainMenu;
