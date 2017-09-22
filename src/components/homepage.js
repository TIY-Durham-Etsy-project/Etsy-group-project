import React, { Component } from 'react';
import '../styles/App.css';
import EtsyInfo from './etsy-info.js';
import API from './api.js';
import Slider from './slider.js';
import Footer from './footer.js';
import Carousel from './carousel.js';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
    this.state = {
      recently: {type: "recently"},
      category: {type: "category"},
      gifts: {type: "gifts"}
      // needed in each object: MainImage.url, meta tag (taxonomy_path or custom), listing Id, source, price
    }
  }
  sendDataUp(id){
    this.props.sendDataUp(id);
  }
  // call API with each of the above state objects to give the object the key:values needed in Slider

  render() {
    return (
      <div className="App">
        <Carousel />
        <EtsyInfo />
        {/* <Slider display={this.state.recently}/> */}
        <API sendDataUp={this.sendDataUp} display={this.state.gifts}/>
        {/* <Slider display={this.state.gifts}/> */}
      </div>
    );
  }
}

Homepage.propTypes = {
};
