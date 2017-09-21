import React, { Component } from 'react';

export default class MeetTheOwner extends Component {
  render(){
    return(
      <div className="meettheowner">
        <div className = "meettheowner-header-text">
        <h5 className = "shop-icon-shop-name">Meet the owner of <a href = "">{this.props.shopdata ? this.props.shopdata[0].shop_name : ""}</a></h5>
          <p><a href = "">Learn more about their shop and process</a></p>
        </div>
        <div className = "shop-owner-profile">
            <img className = "shop-owner-profile-image"src = {this.props.shopdata ? this.props.shopdata[3].image_url_75x75 : ""}/>
          <div className = "shop-owner-profile-name">
            <h6><a href = "">
              {this.props.shopdata ? this.props.shopdata[3].first_name : ""}{" "}
              {this.props.shopdata ? this.props.shopdata[3].last_name : ""}

            </a></h6>
          </div>
        </div>
      </div>
    )
  }
};
