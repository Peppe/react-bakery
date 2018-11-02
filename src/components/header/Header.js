import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'
import '@vaadin/vaadin-tabs';

class Header extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <div className="header">
        <img src={baseUrl + "/images/logo.svg"} className="logo" alt="logo" />
        <div className="name">Café<br />Sunshine</div>
        <div className="views">
            <div className="container">
              <NavLink to={baseUrl + "/storefront"} className="view" activeClassName="active">Storefront</NavLink>
              <NavLink exact to={baseUrl + "/"} className="view" activeClassName="active">Dashboard</NavLink>
              <NavLink to={baseUrl + "/users"} className="view" activeClassName="active">Users</NavLink>
              <NavLink to={baseUrl + "/products"} className="view" activeClassName="active">Products</NavLink>
            </div>
        </div>
        <div className="avatar">
          <img alt="Göran" src="https://randomuser.me/api/portraits/men/34.jpg" />
          <div>Göran <iron-icon class="icon" icon="vaadin:angle-down"></iron-icon></div>
        </div>
      </div>
    );
  }
}

export default Header;
