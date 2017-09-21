import React, { Component } from 'react';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.handledropdown = this.handledropdown.bind(this);
    this.state = {
      initdropdown: false,
      dropdownclassname: "reviews-dropdown-container-minimized",
      dropDownButtonText: "+ More",
    }
  }
  handledropdown(event){
    event.preventDefault();
    if (this.state.dropdownclassname === "reviews-dropdown-container-full"){
      this.setState({ dropdownclassname: "reviews-dropdown-container-minimized", dropDownButtonText: "+ More" });
    } else if (this.state.dropdownclassname === "reviews-dropdown-container-minimized"){
      this.setState({ dropdownclassname: "reviews-dropdown-container-full", dropDownButtonText: "- Less" });
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    if (this.props.feedbackdata !== nextProps.feedbackdata || this.state.initdropdown !== nextState.initdropdown || this.state.dropdownclassname !== nextState.dropdownclassname) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(){
    let reviewsdropdown = document.getElementsByClassName('detailsdropdown')[0];
    if (reviewsdropdown !== undefined && this.state.initdropdown === false){
      const lineheight = document.defaultView.getComputedStyle(reviewsdropdown, null);
      if (parseInt(lineheight.height, 10) > 150){
        this.setState({ initdropdown: true });
      }
    }
  }
  render(){
    // console.log(this.props.feedbackdata);
    let reviewsObjects = false;
    if (this.props.feedbackdata){
      reviewsObjects = this.props.feedbackdata.map((x, i)=>{
        //<p>{this.props.feedbackdata ? this.props.listingdata.message.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"') : ""}</p>
        return (
        <div>

        </div>
        )
      })
    }
    return(
      <div className="reviews">
        <h3 className = "details-header">Reviews</h3>
        <div className={this.state.dropdownclassname}>
        {reviewsObjects ? reviewsObjects : ""}
        </div>
        <button onClick={this.handledropdown}>{this.state.dropDownButtonText}</button>
      </div>
    )
  }
};
