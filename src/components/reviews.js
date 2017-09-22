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
    let avgRating = false;
    if (this.props.shopdata && this.props.shopdata.ratings_aggregate !== null){
      switch (Math.round(this.props.shopdata.ratings_aggregate.rating)) {
        case 5:
          avgRating = "fivestarreview.png";
          break;
        case 4:
          avgRating = "fourstarreview.png";
          break;
        case 3:
          avgRating = "threestarreview.png";
          break;
        case 2:
          avgRating = "twostarreview.png";
          break;
        case 1:
          avgRating = "onestarreview.png";
          break;
        default:
      }
    }
    let reviewsObjects = false;
    if (this.props.feedbackdata){
      reviewsObjects = this.props.feedbackdata.map((x, i)=>{
        let stars = false;
        if (x.value === 1){
          stars = "fivestarreview.png";
        } else if (x.value === -1){
          stars = "onestarreview.png";
        } else {
          stars = "threestarreview.png";
        }
        if (x.message !== null){
          return (
          <div className="single-user-review" key={x.transaction_id}>
            <div className = "single-user-left">
              <div className = "single-user-review-circle"><p></p></div>
              <div className  ="single-user-reviewed-by"><p>Reviewed By</p></div>
              <div className = 'orange-user'><a href = ""><p>{this.props.feedbackdata ? x.transaction_id : ""}</p></a></div>
            </div>
            <div className = "single-user-right">
              <div className = "review-stars-and-date">
                <div><p className = "review-stars"><img alt="" className = "reviews-stars-image-holder" src = {stars ? stars : ""}/></p></div>
                <div className = "review-date"><p>Date goes here</p></div>
              </div>
                <div><p>{this.props.feedbackdata ? x.message.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#39;/g, "'") : ""}</p></div>
          </div>
        </div>
          )
        } else {
          return (
          <div className="single-user-review" key={x.transaction_id}>
            <div className = "single-user-left">
              <div className = "single-user-review-circle"><p></p></div>
              <div className  ="single-user-reviewed-by"><p>Reviewed By</p></div>
              <div className = 'orange-user'><a href = ""><p>{this.props.feedbackdata ? x.transaction_id : ""}</p></a></div>
            </div>
            <div className = "single-user-right">
              <div className = "review-stars-and-date">
                <div><p className = "review-stars"><img alt="" className = "reviews-stars-image-holder" src = {stars ? stars : ""}/></p></div>
                <div className = "review-date"><p>Date goes here</p></div>
              </div>
          </div>
        </div>
          )
        }
      })
    }
    return(
      <div className="reviewsdropdown">
        <h3 className = "details-header">Reviews <img alt="" className = "reviews-stars-image-holder" src = {avgRating ? avgRating : ""}/> ({this.props.shopdata ? this.props.shopdata[2].feedback_info.count : ""})</h3>
        <div className={this.state.dropdownclassname}>
        {reviewsObjects ? reviewsObjects : ""}
        </div>
        <button onClick={this.handledropdown}>{this.state.dropDownButtonText}</button>
      </div>
    )
  }
};
