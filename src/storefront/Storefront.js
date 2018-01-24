import React, { Component } from 'react';
import './Storefront.css';
import SearchBar from './SearchBar';
import List from './List';

class Storefront extends Component {
  render() {
    return (
      <div className="storefront">
        <SearchBar />
        <List />
      </div>
    );
  }
}

export default Storefront;
