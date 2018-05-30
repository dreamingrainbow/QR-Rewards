import React, { Component } from 'react';
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
          <NavbarBrand className="text-info  float-left" href="/">QR Rewards</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar.bind(this)} className="mr-auto bg-info text-white float-right" />
          <Collapse isOpen={!this.state.collapsed} navbar>      
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Campaigns</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Accounts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Transactions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Add Points</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Spend Points</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default MainMenu;
