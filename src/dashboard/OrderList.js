import React, { Component } from 'react';
import './OrderList.css';

class OrderList extends Component {

  render() {
    const orders = [
      {
        key: 1,
        name: "Haley Cortez",
        order: "hey",
        status: "ready",
        day: "",
        time: "13:00 PM",
        location: "Store"
      },
      {
        key: 2,
        name: "Elaine LeBlanc",
        order: "hey",
        status: "ready",
        day: "",
        time: "18:00 PM",
        location: "Bakery"
      },
      {
        key: 3,
        name: "Jessica Carver",
        order: "hey",
        status: "new",
        day: "Thu 12",
        time: "13:00 PM",
        location: "Store"
      },
      {
        key: 4,
        name: "Kerry Rich",
        order: "hey",
        status: "problem",
        day: "Thu 13",
        time: "10:00 AM",
        location: "Store"
      },
      {
        key: 5,
        name: "Octavia Moore",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery"
      },
      {
        key: 6,
        name: "Sylvia Blevins",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery"
      },
      {
        key: 7,
        name: "Ferdinand Carver",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery"
      },
      {
        key: 8,
        name: "Haley Lyons",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery"
      },
      {
        key: 9,
        name: "Lael Maldonado",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery"
      },
      {
        key: 10,
        name: "Skyler Patton",
        order: "hey",
        status: "cancelled",
        day: "Fri 13",
        time: "14:00 PM",
        location: "Bakery"
      }];
    const json = JSON.stringify(orders)
    return (
      <div className="order-list-wrapper">
        <vaadin-grid items={json}>
          <vaadin-grid-column>
            <Template className="header">{'Status'}</Template>
            <Template>{'[[item.status]]'}</Template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <Template className="header">{'Delivery'}</Template>
            <Template>{{day ? 'foo' : 'bar'}
              '<h3>[[item.day]]</h3>'+
              '[[item.time]]<br/>'+
              '[[item.location]]'
            }</Template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <Template className="header">{'Order'}</Template>
            <Template>{'<h3>[[item.name]]</h3>'}</Template>
          </vaadin-grid-column>
        </vaadin-grid>
      </div>
    );
  }

}
function Template({ children, ...attrs }) {
  return (
    <template
      {...attrs}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
export default OrderList;
