import React, { Component } from 'react';

export default class Overview extends Component {
  render(){
    let shipsto = false;
    if (this.props.shippinginfodata && this.props.shippinginfodata.destination_country_name === "United States"){
      shipsto = "Only to the United States";
    } else if (this.props.shippinginfodata){
      shipsto = "Worldwide";
    }
    return(
      <div className="overview">
        <h3 className="overview-title">Overview</h3>
        <ul className = "overview-list">
          {this.props.listingdata.used_manufacturer ? (<li>Manufactured</li>) : (<li>Handmade Item</li>)}
          <li>Primary Color: </li>
          <li>Category: {this.props.listingdata ? this.props.listingdata.category_path[0] : ""}</li>
          <li>Materials: {this.props.listingdata ? this.props.listingdata.materials.join(", ") : ""}</li>
          <li>When Made: {this.props.listingdata ? this.props.listingdata.when_made.replace(/_/g, " ") : ""}</li>
          <li>Ships {shipsto} From {this.props.listingdata ? this.props.shippinginfodata.origin_country_name : ""} </li>
          <li>Feedback:<a href = "" className = "etsy-orange-link"> {this.props.shopdata ? this.props.shopdata[2].feedback_info : ""} reviews</a> </li>
          <li>Favorited by: <a href = "" className = "etsy-orange-link">{this.props.listingdata.num_favorers} People</a></li>
          <li>View <a href = "" className = "etsy-orange-link">shop policies</a></li>
        </ul>
        <div className = "accepts-gift-cards">
          <div><img alt = "giftcard.png" src = "giftcard.png"/></div>
          <div><span>This shop accepts Etsy gift cards</span></div>
        </div>
      </div>
    )
  }
};
