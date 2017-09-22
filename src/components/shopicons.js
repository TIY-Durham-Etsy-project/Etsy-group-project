import React, { Component } from 'react';

export default class ShopIcons extends Component {
  constructor(props) {
    super(props);
    this.sendData = this.sendData.bind(this);
  }
  sendData(event){
    event.preventDefault();
    if (event.target.id !== "" && event.target.id !== undefined && this.props.shopdata){
      this.props.sendDataUpToParent(event.target.id);
    }
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
    let iconboxes = false;
    if (this.props.shoplistingimagesdatalarge && this.props.shoplistingdata && this.props.shoplistingdata.results !== undefined){
      iconboxes = this.props.shoplistingimagesdatalarge.map((x, i)=>{
        return (
        <div className = "shopicon-box" key={x}>
          <div className = "shopicon-photo">
            <img onClick ={this.sendData} id={this.props.shoplistingdata.results[i].listing_id} src = {x} alt = "store item img"/>
          </div>
          <div className = "shopicon-text">
            <p className="shopicon-text-title">{this.props.shoplistingdata ? this.props.shoplistingdata.results[i].title : ""}</p>
            <p>${this.props.shoplistingdata ? this.props.shoplistingdata.results[i].price : ""}</p>
          </div>
        </div>
        )
      });
    };
    return(
      <div className="shopicons">
        <div className = "shop-icon-small">
          <img src = {shopimage ? shopimage : ""} alt = "shop icon" width="50" height="50"/>
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
