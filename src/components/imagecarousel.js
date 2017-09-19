import React, { Component } from 'react';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
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

  render(){
    let imageItem = false;
    let link = {};
    if(this.props.imagesdata[0] !== undefined){
      console.log(this.props.imagesdata);
      let imagesdata = this.props.imagesdata;
      for(let i = 0; i < imagesdata.length; i++ ){
        link[i] = this.props.imagesdata[i].url_75x75;
      }

    let count = 0;
    imageItem = this.props.imagesdata.map(image => {
      console.log(image);
      count++;
      return (
        <div key = {image.id} className = "itemsBoxes">
          <div className="card" id={count}
            // onClick={this.handleImageClick}
            >
            <div className="card-block">
              <img src={image.url_75x75} />
            </div>
          </div>
        </div>
        )
      })
      }
    return(
      <div className="imagecarousel">
        <p>Carousel:</p>
        {/* <img src={link[0]} />
        <img src={link[1]} /> */}
        {imageItem}
        {/* {this.state.imageItems} */}
         {/* {this.state.pictures} */}
        {/* <img src={link[2]} />
        <img src={link[3]} /> */}
      </div>
    )
  }
};
