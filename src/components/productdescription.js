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
          <p>Quantity</p>
            <form>
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
        </form>
      </div>
      <button className = "add-to-cart-btn">
        Add to cart
      </button>
    </div>
    )
  }
};
