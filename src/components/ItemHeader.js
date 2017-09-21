import React, { Component } from 'react';

export default class ItemHeader extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  sendData(value){
    this.props.sendDataUpToParent(value);
  }
  render(){
    let shopimage = false
    if (this.props.shopdata){
      if (this.props.shopdata[0].icon_url_fullxfull === null){
        shopimage = this.props.shopdata[3].image_url_75x75
      } else {
        shopimage = this.props.shopdata[0].icon_url_fullxfull
      }
    }
    return(
      <div className="item-header">
        <div className ='header-left-items'>
          <div className = "shop-icon">
            <img src = {shopimage ? shopimage : ""} alt = "shop icon" width="75" height="75"/>
          </div>
          <div className = "shop-name fav-btn">
            <h2 className = "shop-title">{this.props.shopdata ? this.props.shopdata[0].shop_name : ""}</h2>
            <button className = "fav-heart">&hearts; Favorite Shop</button>
          </div>
        </div>
        <div className = "header-right-items">
          <div className = "sample-item"><img src = {this.props.shoplistingimagesdata[0] ? this.props.shoplistingimagesdata[0] : ""} alt = "store item img"/></div>
          <div className = "sample-item"><img src = {this.props.shoplistingimagesdata[1] ? this.props.shoplistingimagesdata[1] : ""} alt = "store item img"/></div>
          <div className = "sample-item"><img src = {this.props.shoplistingimagesdata[2] ? this.props.shoplistingimagesdata[2] : ""} alt = "store item img"/></div>
          <div className = "sample-item"><img src = {this.props.shoplistingimagesdata[3] ? this.props.shoplistingimagesdata[3] : ""} alt = "store item img"/></div>
          <div className = "sample-item sample-item-count"><div><p>{this.props.shoplistingdata ? this.props.shoplistingdata.count : ""}<br/>items</p></div></div>
        </div>
      </div>
    )
  }
};
