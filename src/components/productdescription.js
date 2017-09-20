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
        <div className = "options-drop-down-wrapper">
          <label for= "quantity-drop-down">Quantity</label><br/>
              <select className = "quantity-drop-down" placeholder="quantity">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
      </div>
      <button className = "add-to-cart-btn">
        Add to cart
      </button>
      <div className = "etsy-purchase-guarantee">
        <div className = "etsy-purchase-guarantee-left">
          <img src = "shield.png"/>
        </div>
        <div className = "etsy-purchase-guarantee-right">
          <h2>Etsy Purchase Guarantee</h2>
          <p>Get what you ordered or your money back.</p>
          <p className = "pseudo-link">Learn More</p>
        </div>
      </div>
    </div>
    )
  }
};
