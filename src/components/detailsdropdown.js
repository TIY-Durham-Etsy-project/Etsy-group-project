import React, { Component } from 'react';

export default class DetailsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineheight: 0
    }
  }
  componentWillMount(){
    let detailsdropdown = document.getElementsByClassName('detailsdropdown')[0];
    if (detailsdropdown !== undefined){
      const value = document.defaultView.getComputedStyle(detailsdropdown, null);
      console.log(value.height)
    }
  }
  render(){
    console.log("RENDER");
    return(
      <div className="detailsdropdown">
      <h3>Details</h3>
      <p>{this.props.listingdata ? this.props.listingdata.description.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : ""}</p>
      </div>
    )
  }
};
