import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavLink, NavItem } from 'reactstrap';
class Sidebar extends Component {
  render() {
    return (
      <Navbar fixed="top" color="light" className="col-md-2">
          <NavbarBrand href="/" className="text-primary">QR Rewards</NavbarBrand>
          <Nav navbar >
            <NavItem >
              <NavLink href="/components/">Create Reward Campaign</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">List Reward Accounts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">List Account Transactions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Create Reward Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Add Reward Points</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Spend Reward Points</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Sidebar;
