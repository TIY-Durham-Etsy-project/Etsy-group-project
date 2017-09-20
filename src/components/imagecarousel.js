import React, { Component } from 'react';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicture: false,
      imageArray: {},
      imageCarouselValue: 0
    }
    this.handlePictureChange = this.handlePictureChange.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
  }

  // This brings up a sub-image to the main image position when clicked.
  handlePictureChange(event){
    event.preventDefault();
    console.log("handlePictureChange: ", event.currentTarget.id);
    // These set the state to the event specific image array position (id-1)
    this.setState({
        mainPicture: this.props.imagesdata[event.currentTarget.id-1].url_570xN,
        imageCarouselValue: event.currentTarget.id-1
    })
    // These set the page items to the event specific image array position (id-1)
  }

  plusSlides(){
    // This increases the imageCarouselValue.
    this.setState({
        imageCarouselValue: this.state.imageCarouselValue++
    })
    // The code works without the following setState but the this.state.imageCarouselValue appears unchanged.
    if (this.state.imageCarouselValue > this.props.imagesdata.length-1){
      this.setState({
        imageCarouselValue: 0,
        mainPicture: this.props.imagesdata[0].url_570xN
      })
    } 
  }

  // This function is not working yet.
  minusSlides(){
    // This decreases the imageCarouselValue.
    this.setState({
        imageCarouselValue: this.state.imageCarouselValue--
    })
    // The code works without the following setState but the this.state.imageCarouselValue appears unchanged.
    if (this.state.imageCarouselValue < 0){
      this.setState({
          imageCarouselValue: this.props.imagesdata.length-1
      })
    }
  }

  render(){
    // This sets and places the appropriate image from the array.
    //MOVED THIS FROM FUNCTIONS TO RENDER
    if(this.props.imagesdata[this.state.imageCarouselValue] !== undefined){
      this.state.mainPicture = this.props.imagesdata[this.state.imageCarouselValue].url_570xN;
      let place_Image = document.getElementById('mainPictureForCarousel');
      place_Image.src = this.state.mainPicture;
    }
    let imageItem = false;
    if(this.props.imagesdata[0] !== undefined){
      this.state.mainPicture = this.props.imagesdata[0].url_570xN;
      this.state.imageArray = this.props.imagesdata;
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
        <div className="slideshow-container">
          {/* <div class="arrow">▻</div> */}
          <div className="carouselArrowBox" onClick={this.minusSlides}>
            <a className="prevCarouselImage">&#10094;</a>
          </div>
          <div className="carouselArrowBoxRight" onClick={this.plusSlides}>
            <a className="nextCarouselImage">&#10095;</a>
          </div>
          <div className="mainPictureForCarouselHolder">
            <img alt="mainPictureForCarousel" id="mainPictureForCarousel" src={this.state.mainPicture}/>
          </div>
        </div>
        <div className="subCarouselImageHolder">
          {imageItem}
        </div>
      </div>
    )
  }
};
