import React, { Component } from 'react';
import './Order.css';

class Order extends Component {
  render() {
    const order = this.props.order;
    const itemList = order.items.map((item, index) =>
    <div className="item" key={index}>
      <span className="count">{item.count}</span>
      <div>{item.item}</div>
    </div>
    );
    return (
      <div className="order" onClick={this.props.onClick}>
        <div className="background">
          <div className={"badge " + order.status}><div className="badge-wrapper">{order.status}</div></div>
          <div className="time-place">
            <h3 className="day">{order.day}</h3>
            <div className="time">{order.time}</div>
            <div className="location">{order.location}</div>
          </div>
          <div className="name-items">
            <h3 className="name">{order.name}</h3>
            <div className="goods">
              {itemList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Order;
