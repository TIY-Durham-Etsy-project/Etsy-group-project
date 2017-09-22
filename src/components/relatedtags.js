import React, { Component } from 'react';

export default class RelatedTags extends Component {
  render(){
    return(
      <div className="relatedtags">
        <div className = "relatedtags-top">
        <h6>Related to this item</h6>
        <ul></ul>
      </div>
      <div className = "relatedtags-fine-print">
        <div className = "relatedtags-fine-print-left">
          <span>Listed on DATE HERE </span>
          <span>NUMBER HERE favorites</span>
        </div>
        <div className = "relatedtags-fine-print-right">
          <a href = "">Report this item to Etsy</a>
        </div>
      </div>
    </div>
    )
  }
};
