import React, { Component } from 'react';

export default class Headerleft extends Component {
  render(){
    return(
      <div className="headerleft">
        <div className ='header-left-items'>
          <div className = "shop-icon">
            <img src = "#" alt = "shop icon"/>
          </div>
          <div className = "shop-name fav-btn">
            <h2>Shop Name Here</h2>
            <button className = "fav-heart">&hearts; Favorite Shop</button>
          </div>
        </div>
        <div className = "header-right-items">
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item sample-item-count">number of items</div>
        </div>
      </div>
    )
  }
};
