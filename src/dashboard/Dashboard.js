import React, { Component } from 'react';
import './Dashboard.css';
import OrdersCounter from './OrdersCounter';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h3>Vaadin Core Elements</h3>
        <div className="controls">
          <vaadin-text-field placeholder="This is vaadin-text-field"></vaadin-text-field>
          <vaadin-checkbox>and this, vaadin-checkbox</vaadin-checkbox>
          <vaadin-date-picker placeholder="fancy a vaadin-date-picker?"></vaadin-date-picker>
        </div>
        <h3>Dashboard with Board and Charts</h3>
        <vaadin-board>
          <vaadin-board-row>
            <OrdersCounter count="4" overall="8" countColor="#55BF3B" displayChart="true" title='Remaining Today' subtitle='Next Delivery 16:00' />
            <OrdersCounter count="1" title='Not Available' subtitle='Delivery tomorrow' countColor="#ff473a"/>
            <OrdersCounter count="159" title='New' subtitle='Last just added' countColor="#1877f3"/>
            <OrdersCounter count="2" title='Tomorrow' subtitle='First Delivery 08:00' countColor="rgba(45, 71, 105, 0.7)"/>
          </vaadin-board-row>
          <vaadin-board-row>
            <dashboard-column-chart data="[[deliveriesThisMonth]]"></dashboard-column-chart>
            <dashboard-column-chart data="[[deliveriesThisYear]]"></dashboard-column-chart>
          </vaadin-board-row>
          <vaadin-board-row>
            <dashboard-yearly-sales series="[[salesGraphSeries]]" title="[[salesGraphTitle]]"></dashboard-yearly-sales>
          </vaadin-board-row>
          <vaadin-board-row>
            <dashboard-pie-chart data="[[productDeliveriesThisMonth]]"></dashboard-pie-chart>
            <dashboard-orders-list id="ordersList" orders-count="[[ordersCount]]" on-page-request="loadOrdersPage"></dashboard-orders-list>
          </vaadin-board-row>
        </vaadin-board>
      </div>
    );
  }
}

export default Dashboard;
