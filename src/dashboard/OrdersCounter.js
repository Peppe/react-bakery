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
        type: 'pie' /* should be solidgauge but throws error */
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
      exporting: {
        enabled: false
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

    return (
      <div className="orders-counter">
        <div className='chart-wrapper' ref={c => this.myDiv = c}>
        {this.props.displayChart &&
            <vaadin-chart class="transparent" id="solid-gauge" ref={c => this.myChart = c} title="foo"></vaadin-chart>
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

export default OrdersCounter;
