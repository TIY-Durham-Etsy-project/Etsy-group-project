import React, { Component } from 'react';
import '../styles/App.css';

export default class Slider extends Component {
  render() {
    return (
      <div className="slider-parent">
      	<div className="slider-child">
      		<a href="https://www.etsy.com/c/toys-and-games?anchor_listing_id=521141958&ref=hp">
        		<picture>
          		<img width="100%" src="https://img1.etsystatic.com/208/0/9581272/il_340x270.1261108935_s445.jpg" alt/>
            </picture>
        		<div>
        			<h3>Toys & Games</h3>
        		</div>
      		</a>
      </div>
      <div className="slider-child">Test</div>
      <div className="slider-child">Test</div>
      <div className="slider-child">Test</div>
      <div className="slider-child">Test</div>
      <div className="slider-child">Test</div>
    </div>
    )
  }
}
