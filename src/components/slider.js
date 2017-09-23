import React, { Component } from 'react';
import '../styles/App.css';


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.sendDataUp = this.sendDataUp.bind(this);
        // this.props.arrayFromAPI has an array from API.
    }

    // fxn callback
    sendDataUp(event){
      if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
        this.props.sendDataUp(event.target.id);
      }
    }
  render() {
    let mapper = false;
    if(this.props.arrayOfSix[5] !== undefined){
      mapper = this.props.arrayOfSix.map((thing) =>{
        return (
          < div key={thing.listing_id} className="slider-child">
            <div onClick={this.sendDataUp}>
                <picture>
                  <img className="hover-frontpage-image-add-pointer" id={thing.listing_id} src={thing.MainImage.url_170x135} alt=""/>
                </picture>
                <div className="slider-productinfo">
                  <h3>{thing.taxonomy_path[0]}</h3>
                  <h4>Username</h4>
                  <div>Rating</div>
                  <h5>{thing.price}</h5>
                </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div className="slider-row">
        <h2>{this.props.headline}</h2>
        {/* <API callbackFromParent={this.myCallback} display={this.state.type}/> */}
        <div className="slider-parent">
          {mapper}
          </div>
        <p className="slider-seemore">See more ></p>
      </div>
    )
  }
}
