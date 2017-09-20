import React, { Component } from 'react';

export default class ProductDescription extends Component {
  render(){
    return(
      <div className="productdescription">
        <h2>Product Title Goes Here</h2>
        <div className = "item-price ask">
          <div><h3>$0.00</h3></div>
          <div><button className = "fav-btn">Ask a question</button></div>
        </div>
      </div>
    )
  }
};
