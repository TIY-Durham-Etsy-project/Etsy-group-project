import React, { Component } from 'react';

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="upper-nav">
          <div className="upper-nav-left">
          <div> <h1 className="etsy-font"> Etsy </h1></div>
          <div className = "search-bar">
          <input className="search-input clearable dropdown-relative-positioned rounded" type="text" placeholder="Search for items or shops"></input>
          <button className="search-button" type="submit" value="Search">Search</button>
        </div>
          </div>
            <div className="upper-nav-right">
              <div><p className="header-font">Sell on Etsy</p></div>
              <div><p className="header-font">Register</p></div>
              <div><button className="header -font sign-in">Sign In</button></div>
              <div> <i className="fa fa-shopping-cart" aria-hidden="true">Cart</i></div>
            </div>
        </div>

                <div className="lower-nav">
                  <ul className="header-list dropdown" >
                    <button className="header-button dropbtn"><li className="header-list-item">Clothing & Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Accessories</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Belts & Suspenders</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Gloves & Mittens</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Accessories</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Fascinators & Mini Hats</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Headbands</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Ties & Elastics</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Hats & Caps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Keychains & Lanyards</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Patches & Pins</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Scarves & Wraps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Suit & Tie Accessories</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sunglasses & Eyewear</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Umbrellas & Rain Accessories</li></button>


                      <button className="header-button dropbtn"><li className="dropdown-content">Bags & Purses</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Backpacks</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Diaper Bags</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Electronic Cases</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Laptop Bags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Laptop Sleeves</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Phone Cases</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Handbags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Clutches & Evening Bags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Shoulder Bags</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Keychains & Lanyards</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Luggage & Travel</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Briefcases & Attaches</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Duffel Bags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Luggage Tags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Suitcases</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Suitcases</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Messenger Bags</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Pouches & Coin Purses</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Totes</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Wallets & Money Clips</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">All Bags & Purses</li></button>


                      <button className="header-button dropbtn"><li className="dropdown-content">Clothing</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Clothing"</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pants</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Shorts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Sweaters</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Tops</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">"Girl's Clothing"</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Dresses</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pants</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Shorts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Skirts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Sweaters</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Tops</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">"Men's Clothing"</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pants</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Shirts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Shorts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Sweaters</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Women's Clothing"</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Dresses</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Jackets & Coats</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Pants & Capris</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Skirts</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sweaters</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Swimwear</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Tops & Tees</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Clothing</li></button>


                      <button className="header-button dropbtn"><li className="dropdown-content">Shoes</li></button>

                    <button className="header-button dropbtn"><li className="header-list-item">Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">All Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Body Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Cuff Links & Tie Clips</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Rings</li></button>


                    <button className="header-button dropbtn"><li className="header-list-item">Craft Supplies & Tools</li></button>

                    <button className="header-button dropbtn"><li className="header-list-item">Weddings</li></button>

                    <button className="header-button dropbtn"><li className="header-list-item">Entertainment</li></button>

                    <button className="header-button dropbtn"><li className="header-list-item">Home & Living</li></button>

                    <button className="header-button dropbtn"><li className="header-list-item">Kids & Baby</li></button>

                    <button className="header-button dropbtn"><li className="header-list-item">Vintage</li></button>
                  </ul>
                </div>



      </div>

    )
  }
};
