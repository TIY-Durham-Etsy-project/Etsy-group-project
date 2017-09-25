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
    let mapper1 = false;
    let mapper2 = false;
    if(this.props.arrayOfSix[5] !== undefined){
      mapper1 = this.props.arrayOfSix.map((thing, index) =>{
        if(index<=2){
          return (
            < div key={thing.listing_id} className="slider-tile">
              <div onClick={this.sendDataUp}>
                  <picture>
                    <img className="hover-frontpage-image-add-pointer" id={thing.listing_id} src={thing.MainImage.url_170x135} alt=""/>
                  </picture>
                  <div className="slider-productinfo">
                    {this.props.displayMeta ?
                      this.addKeys([
                        <h3 className="text-truncate ">{thing.title}</h3>,
                        <div className="slider-productinfo disp-inl">
                          <h4>Shop name</h4>
                          <h5>{thing.price}</h5>
                        </div>
                      ]) :
                        <h3>{thing.taxonomy_path[0]}</h3>
                    }
                  </div>
              </div>
            </div>
          )
        }
      })
      mapper2 = this.props.arrayOfSix.map((thing, index) =>{
        if(index>2){
          return (
            < div key={thing.listing_id} className="slider-tile">
              <div onClick={this.sendDataUp}>
                  <picture>
                    <img className="hover-frontpage-image-add-pointer" id={thing.listing_id} src={thing.MainImage.url_170x135} alt=""/>
                  </picture>
                  <div className="slider-productinfo">
                    {this.props.displayMeta ?
                      this.addKeys([
                        <h3 className="text-truncate ">{thing.title}</h3>,
                        <div className="slider-productinfo disp-inl">
                          <h4>Shop name</h4>
                          <h5>{thing.price}</h5>
                        </div>
                      ]) :
                        <h3>{thing.taxonomy_path[0]}</h3>
                    }
                  </div>
              </div>
            </div>
          )
        }
      })
    }
    return (
      <div className="slider-row">
        <h2>{this.props.headline}</h2>
        <div className="slider-parent">
          <div className="slider-child">
            {mapper1}
          </div>
          <div className="slider-child">
            {mapper2}
          </div>
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
