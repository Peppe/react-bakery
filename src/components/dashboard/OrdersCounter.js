import React, { Component } from 'react';
import '@vaadin/vaadin-charts';
import './OrdersCounter.css';

class OrdersCounter extends Component {
  render() {
    var data = parseInt(this.props.count, 10);
    var color = this.props.countColor;
    this.options = {
      chart: {
        type: 'solidgauge'
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
      tooltip: {
        enabled: 'false'
      },
      yAxis: [{
        labels: {
          enabled: false
        },
      }],
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled:false
          }
        }
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: {
          backgroundColor: 'rgba(23, 68, 128, 0.1)', /* TODO: to css? */
          borderWidth: '0', /* TODO: to css? */
          shape: 'arc',
          innerRadius: '100%',
          outerRadius: '110%'
        }
      }
    };
    const json = JSON.stringify(this.options)

    return (
      <div className="orders-counter">
        <div className='count-wrapper'>
          <span className="count-digit" style={{color: this.props.countColor}}>{this.props.count}</span>
          {this.props.displayChart &&
              <vaadin-chart class="transparent counter-chart" additional-options={json}></vaadin-chart>
          }
        </div>
        <h4>{this.props.title}</h4>
        <div className="subtitle">{this.props.subtitle}</div>
      </div>
    );
  }
}

export default OrdersCounter;
