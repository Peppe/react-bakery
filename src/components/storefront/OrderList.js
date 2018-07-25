import React, { Component } from 'react';
import './List.css';
import Order from './Order';
import ReactList from 'react-list';

class OrderList extends Component {

  renderItem(index, key) {
    return <Order key={key} onClick={() => this.onOrderClick(index)} order={this.props.orders[index]} />;
  }

  onOrderClick(index){
    console.log("Order " + index + " was clicked");
  }

  render() {
    console.log("props");
    console.log(this.props);
    return (
      <div className="list">
        <ReactList
            itemRenderer={this.renderItem.bind(this)}
            length={this.props.orders.length}
            type='uniform'
          />
      </div>
    );
  }
}

export default OrderList;
