import React, { Component } from 'react';
import '../styles/App.css';
import carouselData from '../data/carousel-data.js';



export default class Carousel extends Component {




  render() {

    let sliderArray = carouselData.map((slider) => {

    return (

        <div className={slider.className}>
          {/* <div className="carousel-textbox"> */}
            <h1>{slider.headline}</h1>
            <h3>{slider.subhead}</h3>
          {/* </div> */}
          {/* <div className="carousel-image"> */}
            <img className="d-block img-fluid" src={slider.image} alt={slider.alt}/>
          {/* </div> */}
        </div>

  )
});
return (


    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>


      <div className="carousel-inner" role="listbox">
        {sliderArray}
      </div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>

    );
  }
}
