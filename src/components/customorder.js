import React, { Component } from 'react';

export default class CustomOrder extends Component {
  render(){
    let shopimage = false
    if (this.props.shopdata){
      if (this.props.shopdata[0].icon_url_fullxfull === null){
        shopimage = this.props.shopdata[3].image_url_49x49
      } else {
        shopimage = this.props.shopdata[0].icon_url_fullxfull
      }
    }
    return(
        <div className="customorder-pic">
          <img src = {shopimage ? shopimage : ""} alt = "shop icon" width="49" height="49"/>
            <div className="customorder">
              <p><a href = "">Request a custom order <br/></a></p>
              <p>and have something made just for you.</p>
            </div>
        </div>

    )
  }
};
