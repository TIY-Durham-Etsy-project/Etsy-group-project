import React, { Component } from 'react';
import '../styles/App.css';
import carouselData from '../data/carousel-data.js';



export default class Carousel extends Component {



  render() {

    let sliderArray = carouselData.map((slider) => {

    return (

        <div className="carousel-parent item">
          <div className="carousel-textbox">
            <h1>{slider.headline}</h1>
            <h3>{slider.subhead}</h3>
          </div>
          <div className="carousel-image">
            <img height="100%" src={slider.image} alt=""/>
          </div>
        </div>

  )
});
return (
  <div className="container">
    <h2>Carousel Example</h2>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
        <li data-target="#carouselExampleControls" data-slide-to="4"></li>

      </ol>


      <div className="carousel-inner" role="listbox">
        {sliderArray}
      </div>

      <a className="left carousel-control" href="#carouselExampleControls" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carouselExampleControls" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
    );
  }
}
