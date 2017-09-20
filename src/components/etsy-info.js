import React, { Component } from 'react';
import '../styles/App.css';

export default class EtsyInfo extends Component {
  render() {
    return (
      <div className="etsyinfo-parent">
        {/* <div>
          {/* -----------tried to copy this code from etsy page for check symbol; currently not working -----------*/}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path> */}
          {/* </svg> */}
        {/* </div> */}
        <div className="etsyinfo-child">
          {/* <div className="etsyinfo-check"></div> */}
          <h3><span className="etsyinfo-check">&#10003;</span> Unique everything</h3>
          <p>We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).</p>
        </div>
        <div className="etsyinfo-child">
          <h3><span className="etsyinfo-check">&#10003;</span> Independent sellers</h3>
          <p>Buy directly from someone who put their heart and soul into making something special.</p>
        </div>
        <div className="etsyinfo-child">
          <h3><span className="etsyinfo-check">&#10003;</span> Secure shopping</h3>
          <p>We use best-in-class technology to protect your transactions.</p>
        </div>
      </div>
    )
  }
}
