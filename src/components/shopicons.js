import React, { Component } from 'react';

export default class ShopIcons extends Component {
  render(){
    let iconboxes = false;
    if (this.props.shoplistingimagesdatalarge){
      iconboxes = this.props.shoplistingimagesdatalarge.map((x, i)=>{
        return (
        <div className = "shopicon-box" key={x}>
          <div className = "shopicon-photo">
            <img src = {x} alt = "store item img"/>
          </div>
          <div className = "shopicon-text">
            <p className="shopicon-text-title">{this.props.shoplistingdata.results[i].title}</p>
            <p>${this.props.shoplistingdata.results[i].price}</p>
          </div>
        </div>
        )
      });
    };
    return(
      <div className="shopicons">
        <div className = "shop-icon-small">
          <img src = {this.props.shopdata ? this.props.shopdata[0].icon_url_fullxfull : ""} alt = "shop icon" width="50" height="50"/>
        </div>
        <div className  = "shopicons-header-text">
          <h5 className = "shop-icon-shop-name">{this.props.shopdata ? this.props.shopdata[0].shop_name : ""}</h5>
          <p className = "shop-icon-shop-location">in <strong>{this.props.shopdata ? this.props.shopdata[3].city : ""}</strong>, <strong>{this.props.shopdata ? this.props.shopdata[3].region : ""}</strong></p>
        </div>
        <div className = "shopicons-wrapper">
        {iconboxes ? iconboxes : ""}
        </div>
      </div>
    )
  }
};
