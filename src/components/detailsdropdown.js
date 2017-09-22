import React, { Component } from 'react';

export default class DetailsDropdown extends Component {
  constructor(props) {
    super(props);
    this.handledropdown = this.handledropdown.bind(this);
    this.state = {
      initdropdown: false,
      dropdownclassname: "details-dropdown-container-minimized",
      dropDownButtonText: "+ More",
    }
  }
  handledropdown(event){
    event.preventDefault();
    if (this.state.dropdownclassname === "details-dropdown-container-full"){
      this.setState({ dropdownclassname: "details-dropdown-container-minimized", dropDownButtonText: "+ More" });
    } else if (this.state.dropdownclassname === "details-dropdown-container-minimized"){
      this.setState({ dropdownclassname: "details-dropdown-container-full", dropDownButtonText: "- Less" });
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.listingdata !== nextProps.listingdata || this.state.initdropdown !== nextState.initdropdown || this.state.dropdownclassname !== nextState.dropdownclassname) {
      return true;
    } else {
      return false;
    }
  }
  componentDidMount(){
    let detailsdropdown = document.getElementsByClassName('detailsdropdown')[0];
    if (detailsdropdown !== undefined && this.state.initdropdown === false){
      const lineheight = document.defaultView.getComputedStyle(detailsdropdown, null);
      if (parseInt(lineheight.height, 10) > 150){
        this.setState({ initdropdown: true });
      }
    }
  }
  render(){
    return(
      <div className="detailsdropdown">
      <h3 className = "details-header">Details</h3>
      {this.state.initdropdown ? (
        <div>
          <div className={this.state.dropdownclassname}>
            <p>{this.props.listingdata ? this.props.listingdata.description.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"') : ""}</p>
          </div>
          <button onClick={this.handledropdown}>{this.state.dropDownButtonText}</button>
        </div>
      ) : (
        <div className="details-dropdown-container-full">
          <p>{this.props.listingdata ? this.props.listingdata.description.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"') : ""}</p>
        </div>
      )}
      </div>
    )
  }
};
