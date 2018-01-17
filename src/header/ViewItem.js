import React, { Component } from 'react';
import './ViewItem.css';
import Link from 'react-router-dom/Link';

class ViewItem extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.view} className={"view" + (this.props.active ? ' active' : '')}>{this.props.name}</Link>
      </div>
    );
  }
}

export default ViewItem;
