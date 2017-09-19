import React, { Component } from 'react';

class SellLinks extends Component {
  render() {
    return (
      <div className="SellLinks">
        <h3>Sell</h3>
        <ul>
          <li>
            <a href="https://www.etsy.com/sell?ref=ftr">Sell on Etsy</a>
          </li>
          <li>
            <a href="https://www.etsy.com/teams?ref=ftr">Teams</a>
          </li>
          <li>
            <a href="https://www.etsy.com/forums?ref=ftr">Forums</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SellLinks;
