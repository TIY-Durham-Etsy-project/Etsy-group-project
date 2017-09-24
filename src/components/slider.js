import React, { Component } from 'react';
import '../styles/App.css';


export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.sendDataUp = this.sendDataUp.bind(this);
        this.reloadSlider = this.reloadSlider.bind(this);
        // this.props.arrayFromAPI has an array from API.
    }

    // fxn callback
    sendDataUp(event){
      if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
        this.props.sendDataUp(event.target.id);
      }
    }

    reloadSlider(e){
      e.preventDefault();
      this.props.reloadSlider(e);
    }

    addKeys(arr) {
      return arr.map((obj, idx) => {
        if (obj instanceof Object && obj.hasOwnProperty('key') && obj.key === null) {
          return React.cloneElement(obj, {key: idx});
        }
        return obj;
      });
    };

  // want to make "see more" link refresh gifts slider since there is no "gift-ideas" page
  render() {
    let mapper = false;
    if(this.props.arrayOfSix[5] !== undefined){
      mapper = this.props.arrayOfSix.map((thing) =>{
        return (
          < div key={thing.listing_id} className="slider-child">
            <div onClick={this.sendDataUp}>
                <picture>
                  <img className="hover-frontpage-image-add-pointer" id={thing.listing_id} src={thing.MainImage.url_170x135} alt=""/>
                </picture>
                <div className="slider-productinfo">
                  <h3>{thing.taxonomy_path[0]}</h3>
                  {this.props.headline==="Trending" ?
                    this.addKeys([
                      <h4>Username</h4>,
                      <div>Rating</div>,
                      <h5>{thing.price}</h5>
                    ]) :
                      <div></div>
                  }
                </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div className="slider-row">
        <h2>{this.props.headline}</h2>
        <div className="slider-parent">
          {mapper}
        </div>
        {this.props.headline==="Gifts" ?
          this.addKeys([<div onClick={this.reloadSlider}>
            <p className="slider-seemore">See more ></p>
          </div>
        ]) :
          <div></div>
        }
      </div>
    )
  }
}
