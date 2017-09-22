import React, { Component } from 'react';
import '../styles/App.css';


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          // changes routes
          // listing ID
        };
        // this.props.arrayFromAPI has an array from API.
    }

    // fxn callback

  render() {
    let mapper = false;
    if(this.props.arrayOfSix[5] !== undefined){

      mapper = this.props.arrayOfSix.map((thing) =>{
        return (
          < div key={thing.url} className="slider-child">
            <div onClick="">
              <a href={thing.url}>
                <picture>
                  <img src={thing.MainImage.url_170x135} alt=""/>
                </picture>
                <div className="slider-productinfo">
                  <h3>{thing.taxonomy_path[0]}</h3>
                  <h4>Username</h4>
                  <div>Rating</div>
                  <h5>{thing.price}</h5>
                </div>
              </a>
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
