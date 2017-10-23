import React, { Component } from 'react';
import './ProductSplit.css';

class ProductSplit extends Component {
  render() {


    this.options = {
      //   <data-series size="218" inner-size="137">
      title: {
        text: 'Products delivered in October',
        color: 'rgba(42, 71, 110, 0.6)',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      chart: {
        borderRadius: 4,
        type: 'pie',
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Count',
        colorByPoint: true,
        innerSize: '60%',
        data: [{
          name: 'Strawberry bun',
          y: 22
        }, {
          name: 'Vanilla cracker',
          y: 55,
        }, {
          name: 'Vanilla pastry',
          y: 61
        }, {
          name: 'Vanilla blueberry cake',
          y: 125
        }, {
          name: 'Blueberry cheese cake',
          y: 160.5
        }, {
          name: 'Raspberry blueberry tart',
          y: 107
        }, {
          name: 'Strawberry cheese cake',
          y: 39
        }, {
          name: 'Strawberry tart',
          y: 41
        }, {
          name: 'Blueberry cookie',
          y: 7
        }]
      }],


      xAxis: {
        tickInterval: 1,
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          enabled: false
        },
        gridLineColor: 'rgba(23, 68, 128, 0.1)'  /* move to css.... */
      },
      legend: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        symbolRadius: 6,
        symbolHeight: 12,
        symbolWidth: 12,
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
    }

    return (
      <div className="product-split-wrapper" >
        <vaadin-chart id="product-split" ref={c => this.myChart = c}></vaadin-chart>
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

export default ProductSplit;
