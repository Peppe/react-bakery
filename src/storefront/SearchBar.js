import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <div className="wrapper">
          <vaadin-text-field class="searchbar-search" placeholder="Search"><iron-icon slot="prefix" icon="vaadin:search"></iron-icon></vaadin-text-field>
          <vaadin-button class="searchbar-new" theme="primary"><iron-icon icon="vaadin:plus"></iron-icon>New Order</vaadin-button>
          <vaadin-checkbox class="searchbar-past">Show past orders</vaadin-checkbox>
          <vaadin-button class="searchbar-clear">Clear search</vaadin-button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
