import React, { Component } from 'react';

export default class DetailsDropdown extends Component {
  render(){
    console.log(this.props);
    return(
      <div className="detailsdropdown">
      <h3>Details</h3>
      <p>{this.props.listingdata ? this.innerHTML = this.props.listingdata.description : ""}</p>
      </div>
    )
  }
};
