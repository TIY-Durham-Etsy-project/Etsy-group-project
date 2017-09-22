import React, { Component } from 'react';

class SellLinks extends Component {
  render() {
    return (
      <div className="SellLinks">
        <h3>Sell</h3>
            <a href="https://www.etsy.com/sell?ref=ftr">
              <span>
                Sell on Etsy
              </span>
            </a>
            <a href="https://www.etsy.com/teams?ref=ftr">
              <span>
                Teams
              </span>
            </a>
            <a href="https://www.etsy.com/forums?ref=ftr">
              <span>
                Forums
              </span>
            </a>
      </div>
    );
  }
}

export default SellLinks;
