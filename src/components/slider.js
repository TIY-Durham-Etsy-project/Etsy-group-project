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
    return (
      <div className="slider-row">
        <h2>{this.props.headline}</h2>
        {/* <API callbackFromParent={this.myCallback} display={this.state.type}/> */}
        <div className="slider-parent">
          {this.props.arrayOfSix.map((thing) =>{
            return (
              < div key={thing._id} className="slider-child">
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
          })}
          	{/* <div className="slider-child">
          		<a href="https://www.etsy.com/c/toys-and-games?anchor_listing_id=521141958&ref=hp">
            		<picture>

              		<img src="https://img1.etsystatic.com/208/0/9581272/il_340x270.1261108935_s445.jpg" alt=""/>



                </picture>
            		<div className="slider-productinfo">
            			<h3>Toys & Games</h3>
                  <h4>Username</h4>
                  <div>Rating</div>
                  <h5>$8.00</h5>
            		</div>
          		</a>
            </div> */}
            {/* --------these are currently just filler: ------- */}
            {/* <div className="slider-child">Test</div>
            <div className="slider-child">Test</div>
            <div className="slider-child">Test</div>
            <div className="slider-child">Test</div>
            <div className="slider-child">Test</div> */}
            {/* --------end filler -----------*/}

          </div>
        <p className="slider-seemore">See more ></p>
      </div>
    )
  }
}
