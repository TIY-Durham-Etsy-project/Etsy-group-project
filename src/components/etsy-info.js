import React, { Component } from 'react';
import '../styles/App.css';

export default class EtsyInfo extends Component {
  render() {
    return (
      <div className="etsyinfo-parent">
        <div className="etsyinfo-child">
          <h3>Unique everything</h3>
          <p>We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).</p>
        </div>
        <div className="etsyinfo-child">
          <h3>Independent sellers</h3>
          <p>Buy directly from someone who put their heart and soul into making something special.</p>
        </div>
        <div className="etsyinfo-child">
          <h3>Secure shopping</h3>
          <p>We use best-in-class technology to protect your transactions.</p>
        </div>
      </div>
    )
  }
}
