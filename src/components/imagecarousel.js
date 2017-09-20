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
    console.log("handlePictureChange: ", event.currentTarget.id);
    // These set the state to the event specific image array position (id-1)
    this.setState({
        mainPicture: this.props.imagesdata[event.currentTarget.id-1].url_570xN,
        ImageCarouselValue: event.currentTarget.id-1
    })
    // These set the page items to the event specific image array position (id-1)
    this.state.imageCarouselValue = event.currentTarget.id-1;
    this.state.mainPicture = this.props.imagesdata[event.currentTarget.id-1].url_570xN;
    // This gets the image by class and the changes the src to the event specific image.
    let place_Image = document.getElementById('mainPictureForCarousel');
    place_Image.src = this.state.mainPicture;
  }

  plusSlides(){
    // This increases the imageCarouselValue.
    this.state.imageCarouselValue++;
    // The code works without the following setState but the this.state.imageCarouselValue appears unchanged.
    this.setState({
        ImageCarouselValue: this.state.imageCarouselValue
    })
    if(this.props.imagesdata[this.state.imageCarouselValue] === undefined){
      this.setState({
          ImageCarouselValue: 0
      })
      this.state.imageCarouselValue = 0;
    }
    // This sets and places the appropriate image from the array.
    if(this.props.imagesdata[this.state.imageCarouselValue] !== undefined){
      this.state.mainPicture = this.props.imagesdata[this.state.imageCarouselValue].url_570xN;
      let place_Image = document.getElementById('mainPictureForCarousel');
      place_Image.src = this.state.mainPicture;
    }
  }

  // This function is not working yet.
  minusSlides(){
    // This decreases the imageCarouselValue.
    this.state.imageCarouselValue--;
    // The code works without the following setState but the this.state.imageCarouselValue appears unchanged.
    this.setState({
        ImageCarouselValue: this.state.imageCarouselValue
    })
    if(this.props.imagesdata[this.state.imageCarouselValue] === undefined){
      this.setState({
          ImageCarouselValue: this.props.imagesdata.length-1
      })
      this.state.imageCarouselValue = this.props.imagesdata.length-1;
    }
    // This sets and places the appropriate image from the array.
    if(this.props.imagesdata[this.state.imageCarouselValue] !== undefined){
      this.state.mainPicture = this.props.imagesdata[this.state.imageCarouselValue].url_570xN;
      let place_Image = document.getElementById('mainPictureForCarousel');
      place_Image.src = this.state.mainPicture;
    }
  }

  render(){
    let imageItem = false;
    if(this.props.imagesdata[0] !== undefined){
      this.state.mainPicture = this.props.imagesdata[0].url_570xN;
      this.state.imageArray = this.props.imagesdata;
      let count = 0;
      imageItem = this.props.imagesdata.map(image => {
        count++;
        return (
          <div key={image.id} className="itemsBoxes">
            <div className="card" id={count} onClick={this.handlePictureChange}>
              <div className="card-block">
                <img className="subCarouselImage" src={image.url_75x75}/>
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
            <a className="prev">&#10094;</a>
          </div>
          <div className="carouselArrowBoxRight" onClick={this.plusSlides}>
            <a className="next">&#10095;</a>
          </div>
          
          <div className="mainPictureForCarouselHolder">
            <img id="mainPictureForCarousel" src={this.state.mainPicture}/>
          </div>
        </div>
        <div className="subCarouselImageHolder">
          {imageItem}
        </div>
      </div>
    )
  }
};
