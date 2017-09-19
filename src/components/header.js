import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="upper-nav">
          <h4 clasName="etsy-font"> Etsy </h4>
          <input className="search-input clearable dropdown-relative-positioned rounded" type="text" placeholder="Search for items or shops"></input>
          <button className="btn btn-primary" type="submit" value="Search">Search</button>
          <p className="header-font">Sell on Etsy</p>
          <p className="header-font">Register</p>
          <button>Sign In</button>
            <div class="verticalLine">
            </div>
        </div>
      </div>

    )
  }
};
