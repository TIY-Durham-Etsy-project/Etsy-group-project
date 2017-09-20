import React, { Component } from 'react';

export default class DetailsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initdropdown: false
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.listingdata !== nextProps.listingdata) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(){
    let detailsdropdown = document.getElementsByClassName('detailsdropdown')[0];
    if (detailsdropdown !== undefined){
      const lineheight = document.defaultView.getComputedStyle(detailsdropdown, null);
      if (parseInt(lineheight.height) > 150){
        console.log("ITS TOO BIG")
      }
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
