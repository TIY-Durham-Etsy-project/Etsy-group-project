import React, { Component } from 'react';
import '../styles/App.css';
import EtsyInfo from './etsy-info.js';
import API from './api.js';
import Carousel from './carousel.js';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
    this.state = {
      trending: {type: "Trending"},
      category: {type: "Category"},
      gifts: {type: "Gifts"}
      // needed in each object: MainImage.url, meta tag (taxonomy_path or custom), listing Id, source, price
    }
  }
  sendDataUp(id){
    this.props.sendDataUp(id);
  }
  // call API with each of the above state objects to give the object the key:values needed in Slider

  render() {
    return (
      <div className="App homepage-wrapper container">
        <Carousel />
        <EtsyInfo />
        <API sendDataUp={this.sendDataUp} display={this.state.trending}/>
        <API sendDataUp={this.sendDataUp} display={this.state.category}/>
        <API sendDataUp={this.sendDataUp} display={this.state.gifts}/>
      </div>
    );
  }
}

Homepage.propTypes = {
};
