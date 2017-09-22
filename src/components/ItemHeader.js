import React, { Component } from 'react';

export default class ItemHeader extends Component {
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
    let headerrightitems = false;
    if (this.props.shoplistingdata && this.props.shoplistingimagesdata){
      headerrightitems = this.props.shoplistingimagesdata.map((x, i)=>{
        return (
          <div key={this.props.shoplistingdata.results[i].listing_id} onClick ={this.sendData} className = "sample-item">
            <img id={this.props.shoplistingdata ? this.props.shoplistingdata.results[i].listing_id : ""} src = {x ? this.props.shoplistingimagesdata[i] : ""} alt = "store item img"/>
          </div>
        )
      })
    }
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
        {headerrightitems ? headerrightitems : ""}
          <div className = "sample-item sample-item-count"><div><p>{this.props.shoplistingdata ? this.props.shoplistingdata.count : ""}<br/>items</p></div></div>
        </div>
      </div>
    )
  }
};
