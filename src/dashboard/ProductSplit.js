import React, { Component } from 'react';
import './ProductSplit.css';

class ProductSplit extends Component {
  render() {
    //TODO I wasn't able to put this directly into a vaadin-chart-series
    const values = [
      { name: 'Strawberry bun', y: 22 }, 
      { name: 'Vanilla cracker', y: 55 },
      { name: 'Vanilla pastry', y: 61 }, 
      { name: 'Vanilla blueberry cake', y: 125 }, 
      { name: 'Blueberry cheese cake', y: 160.5 }, 
      { name: 'Raspberry blueberry tart',  y: 107 }, 
      { name: 'Strawberry cheese cake', y: 39 }, 
      { name: 'Strawberry tart', y: 41 }, 
      { name: 'Blueberry cookie', y: 7 }
    ];

    this.options = {
      chart: {
        type: 'pie',
      },
      series: [{
        name: 'Count',
        colorByPoint: true,
        innerSize: '60%',
        data: values
      }],
      plotOptions: {
        pie: {
          shadow: false
        }
      },
    }
    const json = JSON.stringify(this.options);

    return (
      <div className="product-split-wrapper" >
        <vaadin-chart 
          class="product-split" 
          title="Products delivered in October"
          additional-options={json}>
        </vaadin-chart>
      </div>
    );
  }
}

export default ProductSplit;
