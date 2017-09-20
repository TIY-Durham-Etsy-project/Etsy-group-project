import React, { Component } from 'react';

export default class DetailsDropdown extends Component {
  constructor(props) {
    super(props);
    this.handledropdown = this.handledropdown.bind(this);
    this.state = {
      initdropdown: false,
      dropdownclassname: false
    }
  }
  handledropdown(event){
    event.preventDefault();
    this.setState({ dropdownclassname: "details-dropdown-container-full" });
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.listingdata !== nextProps.listingdata || this.state.initdropdown !== nextState.initdropdown || this.state.dropdownclassname !== nextState.dropdownclassname) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(){
    let detailsdropdown = document.getElementsByClassName('detailsdropdown')[0];
    if (detailsdropdown !== undefined && this.state.initdropdown === false){
      const lineheight = document.defaultView.getComputedStyle(detailsdropdown, null);
      if (parseInt(lineheight.height) > 150){
        this.setState({ initdropdown: true, dropdownclassname: "details-dropdown-container-minimized" });
      }
    }
  }
  render(){
    console.log("RENDER");
    return(
      <div className="detailsdropdown">
      <h3>Details</h3>
      {this.state.initdropdown ? (
        <div>
          <div className={this.state.dropdownclassname}>
            <p>{this.props.listingdata ? this.props.listingdata.description.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : ""}</p>
          </div>
          <div className="details-dropdown-button">
            <button onClick={this.handledropdown}>"More +"</button>
          </div>
        </div>
      ) : (
        <div className="details-dropdown-container-full">
          <p>{this.props.listingdata ? this.props.listingdata.description.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") : ""}</p>
        </div>
      )}
      </div>
    )
  }
};
