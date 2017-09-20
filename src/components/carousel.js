import React, { Component } from 'react';
import '../styles/App.css';
import carouselData from '../data/carousel-data.js';

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel-box">
        {/* ----CREATES CAROUSEL SLIDER----- */}
        <div className="carousel-parent">
          <div className="carousel-textbox">
            <h1>{carouselData[0].headline}</h1>
            <h3>{carouselData[0].subhead}</h3>
          </div>
          <div className="carousel-image">
            <img src={carouselData[0].image} alt=""/>
          </div>
        </div>

        <div className="carousel-banners">
          <div className="carousel-banner1">Banner1</div>
          <div className="carousel-banner2">Banner2</div>
        </div>

      </div>
    )
  }
}
