import React, { Component } from 'react';

export default class Overview extends Component {
  render(){
    return(
      <div className="overview">
        <h3 className="overview-title">Overview</h3>
        <ul className = "overview-list">
          <li>Is it handmade?</li>
          <li>Primary Color: </li>
          <li>Secondary Color: </li>
          <li>Materials: </li>
          <li>Ships ---- from ---- </li>
          <li>Feedback:<a href = "" className = "etsy-orange-link"> BLANK reviews</a> </li>
          <li>Favorited by: <a href = "" className = "etsy-orange-link"> BLANK people</a></li>
          <li>View <a href = "" className = "etsy-orange-link">shop policies</a></li>
        </ul>
        <div className = "accepts-gift-cards">
          <div><img src = "giftcard.png"/></div>
          <div><span>This shop accepts Etsy gift cards</span></div>
        </div>
      </div>
    )
  }
};
