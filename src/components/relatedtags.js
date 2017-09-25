import React, { Component } from 'react';

export default class RelatedTags extends Component {
  render(){
    let relatedtagdivs = false;
    if (this.props.listingdata){
      relatedtagdivs = this.props.listingdata.tags.map((x, i)=>{
        return (
          <div className="related-tags-tag-holder-div" key={x}>
            {x}
          </div>
        )
      })
    }
    let dateForReference = new Date(0);
    dateForReference.setUTCSeconds(this.props.listingdata.creation_tsz);
    return(
      <div className="relatedtags">
        <div className = "relatedtags-top">
        <h6>Related to this item</h6>
        {relatedtagdivs ? relatedtagdivs : ""}
      </div>
      <div className = "relatedtags-fine-print">
        <div className = "relatedtags-fine-print-left">
          <span>Listed on {this.props.listingdata ? dateForReference.toDateString() : ""    }     </span>
          <span> <a href = "" className = "etsy-orange-link">{this.props.listingdata ? this.props.listingdata.num_favorers : ""} favorites</a></span>
        </div>
        <div className = "relatedtags-fine-print-right">
          <a href = "">Report this item to Etsy</a>
        </div>
      </div>
    </div>
    )
  }
};
