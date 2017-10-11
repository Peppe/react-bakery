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
        text: title,
        color: 'rgba(42, 71, 110, 0.6)',
        fontSize: '16px',
        fontWeight: 'bold'
      },
      chart: {
        borderRadius: 4,
        backgroundColor: '#ffffff', /* needs to be moved to css */
        type: 'column', /* should be solidgauge but missing js file */
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
      legend: {
        enabled: false
      },
      series: [{
        name: name,
        colorByPoint: false,
        data: values,
        /*colorIndex: 1 // css theming is not possible and without it, this makes the bar black */ 
        /*data: [{
          y: values,
          color: 'rgba(34, 70, 117, 0.5)', /* should be rgba(24, 119, 242, 0.5) when highlighted *./
          radius: '110%',
          innerRadius: '100%'
        }]*/
      }],
      tooltip: { /*needs the plotoptions item to work?*/
        enabled: 'false'
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
      }
    }

    return (
      <div className="column-chart-wrapper">
			<vaadin-chart id="column-chart" ref={c => this.myChart = c}></vaadin-chart>
		</div>
    );
  }
  componentDidMount() {
    if (this.myChart) {
      this.myChart.update(this.options);
    }
  }
}

export default ColumnChart;
