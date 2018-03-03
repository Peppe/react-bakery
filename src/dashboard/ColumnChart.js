import React, { Component } from 'react';
import './ColumnChart.css';

class ColumnChart extends Component {
  render() {
    var categories = JSON.parse(this.props.categories);
    var name = this.props.name;
    var values = JSON.parse(this.props.values);
    this.options = {
      chart: {
        type: 'column'
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: name,
      }]
    }
    const json = JSON.stringify(this.options)

    return (
      <div className="column-chart-wrapper">
        <vaadin-chart 
          id="column-chart" 
          title={this.props.title}
          additional-options={json}>
          <vaadin-chart-series values={this.props.values} type="column"></vaadin-chart-series>
          </vaadin-chart>
      </div>
    );
  }
}

export default ColumnChart;
