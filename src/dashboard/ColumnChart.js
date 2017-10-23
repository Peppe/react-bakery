import React, { Component } from 'react';
import './ColumnChart.css';

class ColumnChart extends Component {
  render() {
    var title = this.props.title;
    var categories = JSON.parse(this.props.categories);
    var name = this.props.name;
    var values = JSON.parse(this.props.values);

    this.options = {
      title: {
        text: title
      },
      chart: {
        borderRadius: 4,
        type: 'column'
      },
      xAxis: {
        tickInterval: 1,
        categories: categories
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      series: [{
        name: name,
        colorByPoint: false,
        data: values,
        colorIndex: 1
      }]
    }

    return (
      <div className="column-chart-wrapper">
        <vaadin-chart id="column-chart" ref={c => this.myChart = c}></vaadin-chart>
      </div>
    );
  }
  componentDidMount() {
    const myChart = this.myChart
    const update = () => {
      if (myChart && myChart.update) {
        myChart.update(this.options);
      }
    };
    window.addEventListener('WebComponentsReady', function (e) {
      update();
    });
  }
}

export default ColumnChart;
