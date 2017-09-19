import React, { Component } from 'react';

export default class ItemHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
}
  render(){
    return(
      <div className="item-header">
        <div className ='header-left-items'>
          <div className = "shop-icon">
            <img src ={this.props.shopIcon}  alt = "shop icon"/>
          </div>
          <div className = "shop-name fav-btn">
            <h2>{this.props.shopTitle}</h2>
            <button className = "fav-heart">&hearts; Favorite Shop</button>
          </div>
        </div>
        <div className = "header-right-items">
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item"><img src = "" alt = "store item img"/></div>
          <div className = "sample-item sample-item-count">{this.props.sampleItemCount}</div>
        </div>
      </div>
    )
  }
};
