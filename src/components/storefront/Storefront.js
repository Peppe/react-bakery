import React, { Component } from 'react';
import './Storefront.css';
import SearchBar from './SearchBar';
import VisibleOrderList from '../../containers/storefront/VisibleOrderList';

class Storefront extends Component {
  render() {
    return (
      <div className="storefront">
        <SearchBar />
        <VisibleOrderList />
      </div>
    );
  }
}

export default Storefront;
