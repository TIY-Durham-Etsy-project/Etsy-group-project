import React, { Component } from 'react';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    let link = "";
    if(this.props.imagesdata[0] !== undefined){
      console.log(this.props.imagesdata)
      link = this.props.imagesdata[0].url_75x75;
    }
    return(
      <div className="imagecarousel">
      </div>
    )
  }
};
