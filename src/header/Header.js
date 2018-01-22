import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="name">Café<br />Sunshine</div>
        <div className="views">
            <div className="container">
              <NavLink to={baseUrl + "/storefront"} className="view" activeClassName="active">Storefront</NavLink>
              <NavLink to={baseUrl + "/dashboard"} className="view" activeClassName="active">Dashboard</NavLink>
              <NavLink to={baseUrl + "/users"} className="view" activeClassName="active">Users</NavLink>
              <NavLink to={baseUrl + "/products"} className="view" activeClassName="active">Products</NavLink>
            </div>
        </div>
        <div className="avatar">
          <img alt="Göran" src="https://randomuser.me/api/portraits/men/34.jpg" />
          <div>Göran ⌄</div>
        </div>
      </div>
    );
  }
}

export default Header;
