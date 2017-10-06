import React, { Component } from 'react';
import './ViewItem.css';

class ViewItem extends Component {
  render() {
    return (
      <a className={"view" + (this.props.active ? ' active' : '')} 
         href={this.props.view}>
        <span className="label">
          {this.props.name}
        </span>
      </a>
    );
  }
}

export default ViewItem;
