import React, { Component } from 'react';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCarouselValue: 0,
      zoomedimg: false
    }
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.zoomInCurrentImg = this.zoomInCurrentImg.bind(this);
    this.unZoomCurrentImg = this.unZoomCurrentImg.bind(this);
  }

  // This brings up a sub-image to the main image position when clicked.
  handlePictureChange(event){
    event.preventDefault();
    // These set the state to the event specific image array position (id-1)
    this.setState({
        imageCarouselValue: event.currentTarget.id-1
    })
    // These set the page items to the event specific image array position (id-1)
  }

  plusSlides(){
    // The code works without the following setState but the this.state.imageCarouselValue appears unchanged.
    if (this.state.imageCarouselValue+1 > this.props.imagesdata.length-1){
      this.setState({
        imageCarouselValue: 0
      })
    } else {
      // This increases the imageCarouselValue.
      this.setState({
          imageCarouselValue: this.state.imageCarouselValue+1
      })
    }
  }

  minusSlides(){
    // The code works without the following setState but the this.state.imageCarouselValue appears unchanged.
    if (this.state.imageCarouselValue-1 < 0){
      this.setState({
          imageCarouselValue: this.props.imagesdata.length-1
      })
    } else {
      // This decreases the imageCarouselValue.
      this.setState({
          imageCarouselValue: this.state.imageCarouselValue-1
      })
    }
  }
  zoomInCurrentImg(){
    if(this.props.imagesdata){
      this.setState({ zoomedimg: this.props.imagesdata[this.state.imageCarouselValue].url_570xN })
    }
  }
  unZoomCurrentImg(){
    if(this.props.imagesdata){
      this.setState({ zoomedimg: false })
    }
  }
  render(){
    console.log(this.props.imagesdata[this.state.imageCarouselValue])
    let imageItem = false;
    if(this.props.imagesdata[0] !== undefined){
      let count = 0;
      imageItem = this.props.imagesdata.map(image => {
        count++;
        return (
          <div key={image.url_75x75} className="itemsBoxesForCarouselImage">
            <div className="cardForCarouselImage" id={count} onClick={this.handlePictureChange}>
              <div className="card-blockForCarouselImage">
                <img alt="subCarouselImage" className="subCarouselImage" src={image.url_75x75}/>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div className="imageCarouselAll">
      {this.state.zoomedimg ? (
        <div onClick={this.unZoomCurrentImg} className="zoom-image-overtake-outside-div">
          <div className="zoom-image-inside-div" >
            <img alt="" src={this.props.imagesdata ? this.state.zoomedimg : ""}/>
          </div>
        </div>
      ) : ("")}
        <div className="slideshow-container">
          {/* <div class="arrow">▻</div> */}
          <div className="carouselArrowBox" onClick={this.minusSlides}>
            <a className="prevCarouselImage">&#10094;</a>
          </div>
          <div className="carouselArrowBoxRight" onClick={this.plusSlides}>
            <a className="nextCarouselImage">&#10095;</a>
          </div>
          <div className="mainPictureForCarouselHolder">
            <img alt="mainPictureForCarousel" id="mainPictureForCarousel" src={this.props.imagesdata ? this.props.imagesdata[this.state.imageCarouselValue].url_570xN : ""}/>
          </div>
        </div>
        <div className="subCarouselImageHolder">
          {imageItem}
          <button onClick={this.zoomInCurrentImg}>Zoom</button>
        </div>
      </div>
    )
  }
};
