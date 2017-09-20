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
    this.state.imageCarouselValue = this.props.imagesdata[event.currentTarget.id-1].url_570xN

    this.state.mainPicture = this.props.imagesdata[event.currentTarget.id-1].url_570xN;
    console.log("mainPicture src: ", this.state.mainPicture);
    // this.setState({
    //     mainPicture: this.props.imagesdata[event.currentTarget.id-1].url_570xN
    //   })
    let play_Song = document.getElementById('music_Here');
    play_Song.src = this.state.mainPicture;
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
        <img id="music_Here" src={this.state.mainPicture} />
        {imageItem}
        {/* {this.state.imageItems} */}
         {/* {this.state.pictures} */}
        {/* <img src={link[2]} />
        <img src={link[3]} /> */}
      </div>
    )
  }
};
