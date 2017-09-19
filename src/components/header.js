import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="upper-nav">
          <div className="upper-nav-left">
          <div> <h4 className="etsy-font"> Etsy </h4></div>
          <input className="search-input clearable dropdown-relative-positioned rounded" type="text" placeholder="Search for items or shops"></input>
          <button className="btn btn-primary" type="submit" value="Search">Search</button>
          </div>
            <div className="upper-nav-right">
              <p className="header-font">Sell on Etsy</p>
              <p className="header-font">Register</p>
              <button className="sign-in ">Sign In</button>
              <hr/>
              <div> <i className="fa fa-shopping-cart" aria-hidden="true">Cart</i></div>
              <br/>
            </div>

        </div>
      </div>

    )
  }
};
