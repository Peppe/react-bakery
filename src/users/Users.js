import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  render() {
    return (
      <div className="users">
        <h3>Vaadin Core Elements</h3>
        <div className="controls">
          <vaadin-text-field placeholder="This is vaadin-text-field"></vaadin-text-field>
          <vaadin-checkbox>and this, vaadin-checkbox</vaadin-checkbox>
          <vaadin-date-picker placeholder="fancy a vaadin-date-picker?"></vaadin-date-picker>
        </div>
      </div>
    );
  }
}

export default Users;
