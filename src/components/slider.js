import React, { Component } from 'react';
import '../styles/App.css';
import API from './api.js';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: null
        };
        // this.props.display has values
    },

    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    },
    otherFn = () => {
        // [...within this other function now I still have access to this.state.listDataFromChild...]
    }
    render() {
        return (
            <div>
                 <API callbackFromParent={this.myCallback}/>
                 {/* [...now here I can pass this.state.listDataFromChild as a prop to any other child component...]   */}

            </div>
        );
    }
});

  render() {
    return (
      <div className="slider-row">
        <h2>Headline Goes Here</h2>
      <div className="slider-parent">

      	<div className="slider-child">
      		<a href="https://www.etsy.com/c/toys-and-games?anchor_listing_id=521141958&ref=hp">
        		<picture>

          		<img src="https://img1.etsystatic.com/208/0/9581272/il_340x270.1261108935_s445.jpg" alt=""/>



            </picture>
        		<div className="slider-productinfo">
        			<h3>Toys & Games</h3>
              <h4>Username</h4>
              <div>Rating</div>
              <h5>$8.00</h5>
        		</div>
      		</a>
        </div>
        {/* --------these are currently just filler: ------- */}
        <div className="slider-child">Test</div>
        <div className="slider-child">Test</div>
        <div className="slider-child">Test</div>
        <div className="slider-child">Test</div>
        <div className="slider-child">Test</div>
        {/* --------end filler -----------*/}
      </div>
      <p className="slider-seemore">See more ></p>
    </div>
    )
  }
}
