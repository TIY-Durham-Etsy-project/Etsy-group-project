import React, { Component } from 'react';
import '../styles/App.css';

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

  componentDidMount() {
    if(this.props.imagesdata[0] !== undefined){
      this.setState({
          mainPicture: this.state.imageCarouselValue
      })
    }
  }

  handlePictureChange(event){
    console.log("Event: " + event.currentTarget.id);
    let value = event.currentTarget.id;
    let x = this.props.imagesdata[value-1].url_570xN;
    this.setState({
        mainPicture: this.props.imagesdata[event.currentTarget.id-1].url_570xN,
        ImageCarouselValue: this.props.imagesdata[event.currentTarget.id-1].url_570xN
      })
    this.state.imageCarouselValue = event.currentTarget.id-1;
    this.state.mainPicture = this.props.imagesdata[event.currentTarget.id-1].url_570xN;
    console.log("mainPicture src: ", this.state.mainPicture);
    // this.setState({
    //     mainPicture: this.props.imagesdata[event.currentTarget.id-1].url_570xN
    //   })
    let place_Image = document.getElementById('mainPictureForCarousel');
    place_Image.src = this.state.mainPicture;
  }

  // plusSlides(n) {
  // this.state.imageCarouselValue += n;
  // this.state.mainPicture = this.props.imagesdata[this.state.imageCarouselValue].url_570xN;
  // let place_Image = document.getElementById('mainPictureForCarousel');
  // place_Image.src = this.state.mainPicture;
  // console.log(this.state.mainPicture);
  // }

  minusSlides(){
    this.state.imageCarouselValue = this.state.imageCarouselValue - 1;
    this.state.mainPicture = this.props.imagesdata[this.state.imageCarouselValue].url_570xN;
    let place_Image = document.getElementById('mainPictureForCarousel');
    place_Image.src = this.state.mainPicture;
    console.log(this.state.mainPicture);
  }
  plusSlides(){
    // this.state.imageCarouselValue = this.state.imageCarouselValue + 1;
    this.state.imageCarouselValue++;
    let x = this.state.imageCarouselValue - 1;
    this.setState({
        ImageCarouselValue: x + 1
      })
    if(x > this.props.imagesdata){
      this.state.imageCarouselValue = 0;
    }
    if(this.props.imagesdata[this.state.imageCarouselValue] === undefined){
      this.setState({
          ImageCarouselValue: 0
        })
        this.state.imageCarouselValue = 0;
    }
    console.log(this.state.imageCarouselValue);

    this.state.mainPicture = this.props.imagesdata[this.state.imageCarouselValue].url_570xN;

    let place_Image = document.getElementById('mainPictureForCarousel');
    place_Image.src = this.state.mainPicture;
    console.log(this.state.mainPicture);
  }

  render(){
    let imageItem = false;
    // let link = {};
    if(this.props.imagesdata[0] !== undefined){
      console.log(this.props.imagesdata);
      // this.setState({
      //     mainPicture: this.props.imagesdata[0].url_75x75
      // });
      this.state.mainPicture = this.props.imagesdata[0].url_570xN;
      this.state.imageArray = this.props.imagesdata;

    let count = 0;
    imageItem = this.props.imagesdata.map(image => {
      console.log(image);
      // this.state.imageArray[{count}] = image.url_570xN;
      count++;
      return (
        <div key = {image.id} className = "itemsBoxes">
          <div className="card" id={count} onClick={this.handlePictureChange}>
            <div className="card-block">
              <img src={image.url_75x75} />
            </div>
          </div>
        </div>
        )
        // console.log(this.state.imageArray);
      })
      console.log(this.state.imageArray);
      }
    return(
      <div className="imagecarousel">
        <p>Carousel:</p>
        {/* <img src={link[0]} />
        <img src={link[1]} /> */}
        <div class="slideshow-container">

        <img id="mainPictureForCarousel" src={this.state.mainPicture} />
        {/* <a class="prev" onclick={this.minusSlides}>&#10094;</a>
        <a class="next" onclick={this.plusSlides}>&#10095;</a> */}
        <form className="button">
              <button onClick={this.plusSlides}  id="countDown" type="button" className="btn btn-success">Change Image: {this.state.imageCarouselValue}</button>
            </form>
        </div>
        {imageItem}
        {/* {this.state.imageItems} */}
         {/* {this.state.pictures} */}
        {/* <img src={link[2]} />
        <img src={link[3]} /> */}
      </div>
    )
  }
};
