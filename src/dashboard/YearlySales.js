import React, { Component } from 'react';
import './YearlySales.css';

class YearlySales extends Component {
  render() {
    
    
    this.options = {

      title: {
        text: 'Sales last year',
        color: 'rgba(42, 71, 110, 0.6)',
        fontSize: '16px',
        fontWeight: 'bold'
      },
      chart: {
        borderRadius: 4,
        backgroundColor: '#ffffff', /* needs to be moved to css */
        type: 'areaspline'
      },
      colors: ["#18ddf2", "#1877f3", "#1bca66"], /* This needs to go to CSS to work. */
      series: [{
        name: '2017',
        data: [1037451, 918249, 984372, 983721, 948372, 1192301, 920394, 1029345, 1293405, 841048]
      }, {
        name: '2016',
        data: [993328, 938463, 918234, 829321, 859604, 923940, 901293, 842039, 845022, 802934, 739432, 756958]
      }, {
        name: '2015',
        data: [834532, 810049, 738493, 710394, 759102, 764930, 692834, 693842, 585938, 586976, 604392, 843293]
      }],

      xAxis: {
        tickInterval: 1,
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      },
      yAxis: {
        title: {
          enabled: false
        },
        gridLineColor: 'rgba(23, 68, 128, 0.1)'  /* move to css.... */
      },
      legend: {
        backgroundColor:  'rgba(0, 0, 0, 0)',
        symbolRadius: 6,
        symbolHeight: 12,
        symbolWidth: 12,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.1
        }
      },
    }

    return (
      <div className="sales-chart-wrapper" >
        <vaadin-chart id="sales-chart" ref={c => this.myChart = c}></vaadin-chart>
      </div>
    );
  }
  componentDidMount() {
    if (this.myChart) {
      this.myChart.update(this.options);
    }
  }
}

export default YearlySales;
