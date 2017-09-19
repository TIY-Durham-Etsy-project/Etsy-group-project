import React, { Component } from 'react';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicture: false,
      imageArray: {}
    }
    this.handlePictureChange = this.handlePictureChange.bind(this);
  }

  componentDidMount() {
    // this.state.pictureslet
    // let countUp = 0;
    // if(this.props.imagesdata[0] !== undefined){
    // let countUp = 0;
    // let pictures = this.props.imagesdata.map((image) => {
    //     console.log(image);
    //     countUp++;
    //     return (
    //
    //       <div className='pic justify-content-center ' key={countUp}>
    //         <img src={image} />
    //       </div>
    //
    //     )
    //   })
    // }
  }

  handlePictureChange(event){
    this.setState({
        mainPicture: event.target.value
      })
  }

  render(){
    let imageItem = false;
    // let link = {};
    if(this.props.imagesdata[0] !== undefined){
      // this.setState({
      //     mainPicture: this.props.imagesdata[0].url_75x75
      // });
      this.state.mainPicture = this.props.imagesdata[0].url_570xN;
      console.log(this.props.imagesdata);
      // let imagesdata = this.props.imagesdata;
      // for(let i = 0; i < imagesdata.length; i++ ){
      //   link[i] = this.props.imagesdata[i].url_75x75;
      // }

    let count = 0;
    imageItem = this.props.imagesdata.map(image => {
      console.log(image);
      this.state.imageArray[{count}] = image.url_75x75;
      count++;
      return (
        <div key = {image.id} className = "itemsBoxes">
          <div className="card" id={count} onClick={this.handleSongChange}>
            <div className="card-block">
              <img src={image.url_75x75} />
            </div>
          </div>
        </div>
        )
        // console.log(this.state.imageArray);
      })
      // console.log(this.state.imageArray);
      }
    return(
      <div className="imagecarousel">
        <p>Carousel:</p>
        {/* <img src={link[0]} />
        <img src={link[1]} /> */}
        <img src={this.state.mainPicture} />
        {imageItem}
        {/* {this.state.imageItems} */}
         {/* {this.state.pictures} */}
        {/* <img src={link[2]} />
        <img src={link[3]} /> */}
      </div>
    )
  }
};
