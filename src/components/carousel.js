import React, { Component } from 'react';
import '../styles/App.css';
import carouselData from '../data/carousel-data.js';



export default class Carousel extends Component {




  render() {

    let sliderArray = carouselData.map((slider) => {

    return (

        <div className={slider.className}>
          <div className="carousel-caption d-inline-block">
            <h1>{slider.headline}</h1>
            <a href={slider.link}>{slider.subhead}</a>
           </div>
           <div>
            <img className="img-fluid d-inline-block" src={slider.image} alt={slider.alt}/>
          </div>
        </div>

  )
});
return (

  <div className="carousel-container">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>


      <div className="carousel-inner d-flex p-2" role="listbox">
        {sliderArray}
      </div>

      <a className="carousel-control-prev carousel-icons" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" id="previous-button" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next carousel-icons" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" id="next-button" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>

      <div className="carousel-banners">
        <div className="carousel-banner1"></div>
        <div className="carousel-banner2"><p>Terrifying (in a fun way) Halloween decorations ></p></div>
      </div>
    </div>
     );
  }
}
