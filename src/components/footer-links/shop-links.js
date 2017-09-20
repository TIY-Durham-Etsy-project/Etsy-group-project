import React, { Component } from 'react';

class ShopLinks extends Component {
  render() {
    return (
      <div className="ShopLinks">
        <h3>Shop</h3>
        <ul>
          <li>
            <a href="https://www.etsy.com/giftcards?ref=ftr">Gift cards</a>
          </li>
          <li>
            <a href="https://blog.etsy.com/en/?ref=ftr">Etsy blog</a>
          </li>
          <li>
            <a href="https://www.etsy.com/wholesale?ref=ftr">Wholesale</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ShopLinks;
