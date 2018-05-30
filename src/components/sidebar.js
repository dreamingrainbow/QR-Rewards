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
              <NavLink tag={Link} to="/Reward-Campaigns"><i className="img-thumbnail fa fa-book text-primary"></i> Campaigns<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Reward-Accounts" ><i className="img-thumbnail fa fa-ticket text-primary"></i> Accounts<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Transactions" ><i className="img-thumbnail fa fa-comments text-primary"></i> Transactions<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Reward-Campaigns/Manage/Create" ><i className="img-thumbnail fa fa-address-card text-primary"></i> Create Campaign<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Reward-Accounts/Refill-Points" ><i className="img-thumbnail fa fa-cart-plus text-primary"></i> Refill Reward Points<div className="align-self-center"></div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Reward-Accounts/Spend-Points" ><i className="img-thumbnail fa fa-credit-card text-primary"></i> Spend Reward Points<div className="align-self-center"></div></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Sidebar;
