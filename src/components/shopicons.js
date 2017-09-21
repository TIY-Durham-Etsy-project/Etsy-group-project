import React, { Component } from 'react';

export default class ShopIcons extends Component {
  render(){
    return(
      <div className="shopicons">
        <div className = "shop-icon-small">
          <img src = {this.props.shopdata ? this.props.shopdata[0].icon_url_fullxfull : ""} alt = "shop icon" width="50" height="50"/>
        </div>
        <div className  = "shopicons-header-text">
          <h5 className = "shop-icon-shop-name">{this.props.shopdata ? this.props.shopdata[0].shop_name : ""}</h5>
          <p className = "shop-icon-shop-location">in <strong>{this.props.shopdata ? this.props.shopdata[3].city : ""}</strong></p>
        </div>
        <div className = "shopicons-wrapper">
          <div className = "shopicon-box">
            <div className = "shopicon-photo">
              <img src = {this.props.shoplistingimagesdatalarge[0] ? this.props.shoplistingimagesdatalarge[0] : ""} alt = "store item img"/>
            </div>
            <div className = "shopicon-text">
              <p>Item Name</p>
              <p>Price</p>
            </div>
          </div>
          <div className = "shopicon-box">
            <div className = "shopicon-photo">
              <img src = {this.props.shoplistingimagesdatalarge[1] ? this.props.shoplistingimagesdatalarge[1] : ""} alt = "store item img"/>
            </div>
            <div className = "shopicon-text">
              <p>Item Name</p>
              <p>Price</p>
            </div>
          </div>    <div className = "shopicon-box">
            <div className = "shopicon-photo">
              <img src = {this.props.shoplistingimagesdatalarge[2] ? this.props.shoplistingimagesdatalarge[2] : ""} alt = "store item img"/>
            </div>
            <div className = "shopicon-text">
              <p>Item Name</p>
              <p>Price</p>
            </div>
          </div>    <div className = "shopicon-box">
            <div className = "shopicon-photo">
              <img src = {this.props.shoplistingimagesdatalarge[3] ? this.props.shoplistingimagesdatalarge[3] : ""} alt = "store item img"/>
            </div>
            <div className = "shopicon-text">
              <p>Item Name</p>
              <p>Price</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
