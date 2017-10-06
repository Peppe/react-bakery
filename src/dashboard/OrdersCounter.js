import React, { Component } from 'react';
import './OrdersCounter.css';

class OrdersCounter extends Component {
  render() {
    var data = parseInt(this.props.count, 10);
    var color = this.props.countColor;
    this.options = {
      title: {
        text: ''
      },
      chart: {
        backgroundColor: '#ff0000', /* needs to be moved to css */
        type: 'line', /* should be solidgauge but missing js file */
      },
      series: [{
        name: 'Orders',
        data: [{
          y: data,
          color: color,
          radius: '110%',
          innerRadius: '100%'
        }]
      }],
      tooltip: { /*needs the plotoptions item to work?*/
        enabled: 'false'
      },
      yAxis: {
        lineWidth: 0,
        minorTickWidth: 0,
        tickWidth: 0,
        labels: {
          enabled: false
        }
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 0,
            borderWidth: 0,
            useHTML: true,
            format: '<div></div>'
          }
        }
      },

      /* did not see any exporting features anyhow 
      <exporting enabled="false"></exporting>
      */

      /* chart breaks if i add 'pane: ' to the configuration
      <pane start-angle="0" end-angle="360">
        <background background-color="rgba(23, 68, 128, 0.1)" inner-radius="100%" outer-radius="110%"
          shape="arc" border-width="0"></background>
      </pane>
      */
    };

    return (
      <div className="orders-counter">
        <div className='chart-wrapper' ref={c => this.myDiv = c}>
        {this.props.displayChart &&
            <vaadin-chart id="solid-gauge" ref={c => this.myChart = c} title="foo"></vaadin-chart>
        }
        </div>
        <div className="count-wrapper">
          <span id="count_digit" className="count-digit" style={{color: this.props.countColor}}>{this.props.count}</span>
        </div>

        <h4>{this.props.title}</h4>
        <div className="subtitle">{this.props.subtitle}</div>
      </div>
    );
  }

  componentDidMount() {
    if (this.myChart) {
      this.myChart.update(this.options);
    }
  }
}

export default OrdersCounter;
