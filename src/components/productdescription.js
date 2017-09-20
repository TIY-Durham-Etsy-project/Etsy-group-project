import React, { Component } from 'react';

export default class ProductDescription extends Component {
  render(){
    console.log(this.props);
    return(
      <div className="productdescription">
        <h2>{this.props.listingdata.title}</h2>
        <div className = "item-price ask">
          <div><h3>${this.props.listingdata.price}</h3></div>
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
      {this.props.listingdata.quantity<50 ? (
        <div className = "limited-availability-section">
          Don't miss out. There's only {this.props.listingdata.quantity} available and many other people have this in their cart right now.
        </div>
      ) : (<div></div>)}
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
