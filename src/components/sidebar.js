import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavLink, NavItem } from 'reactstrap';
class Sidebar extends Component {
  render() {
    return (
      <Navbar fixed="top" color="light" className="col-md-2">
          <NavbarBrand tag={Link} to="/" className="text-primary">QR Rewards</NavbarBrand>
          <Nav navbar className="col-12">
            <NavItem >
              <NavLink tag={Link} to="/">Reward Campaigns<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" >Reward Accounts<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" >Account Transactions<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" >Create Reward Account<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" >Add Reward Points<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/" >Spend Reward Points<div className="align-self-center"></div></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Sidebar;
