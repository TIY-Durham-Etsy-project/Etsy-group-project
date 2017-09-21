import React, { Component } from 'react';
import '../styles/App.css';
import carouselData from '../data/carousel-data.js';

export default class Carousel extends Component {
    constructor(props) {
    super(props);

    this.state = {
      arrayPosition: 0
    };
    this.handlePositionChange = this.handlePositionChange.bind(this);
  }

  handlePositionChange(event) {
    event.preventDefault()
    this.setState({
      arrayPosition: this.state.arrayPosition + 1
    })
    console.log(this.state.arrayPosition);
  }

  render() {
    let position = this.state.arrayPosition;
    return (
      <div className="carousel-box">
        {/* ----CREATES CAROUSEL SLIDER----- */}
        <div className="carousel-parent">
          <form onSubmit={this.handlePositionChange}>
            <button className="carousel-back" type="submit" value="&#60;"></button>
          </form>

          <div className="carousel-forward">&#62;</div>
          <div className="carousel-textbox">
            <h1>{carouselData[position].headline}</h1>
            <h3>{carouselData[position].subhead}</h3>
          </div>
          <div className="carousel-image">
            <img height="100%" src={carouselData[position].image} alt=""/>
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
