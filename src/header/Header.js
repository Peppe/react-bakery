import React, { Component } from 'react';
import './Header.css';
import ViewItem from './ViewItem.js'
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="name">Café<br />Sunshine</div>
        <div className="views">
            <div className="container">
              <ViewItem view="storefront" name="Storefront" />
              <ViewItem view="dashboard" name="Dashboard" active="true" />
              <ViewItem view="users" name="Users" />
              <ViewItem view="products" name="Products" />
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
