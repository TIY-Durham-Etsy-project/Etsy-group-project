import React, { Component } from 'react';

export default class Overview extends Component {
  render(){
    return(
      <div className="overview">
        <h5>Overview</h5>
        <ul className = "overview-list">
          <li>Is it handmade?</li>
          <li>Primary Color: </li>
          <li>Secondary Color: </li>
          <li>Materials: </li>
          <li>Ships ---- from ---- </li>
          <li>Feedback: </li>
          <li>Favorited by: </li>
          <li>View <a href = "">shop policies</a></li>
        </ul>
        <div className = "accepts-gift-cards">
          <p>This shop accepts Etsy gift cards</p>
        </div>
      </div>
    )
  }
};
