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
                  <ul className="header-list " >
                    <div className="dropdown">

                    <button className="header-button dropbtn "><li className="header-list-item-clothing">Clothing & Accessories</li></button>
                      {/* <div className="dropdown-content"></div> */}
                      <div className="accessories_sub_items">
                        <button className="header-button dropbtn">
                          <li className="dropdown-content-clothing">Accessories</li>
                        </button>
                        <button className="header-button dropbtn">
                          <li className="dropdown-content-clothing-2">Belts & Suspenders</li>
                        </button>
                        <button className="header-button dropbtn"><li className="dropdown-content-clothing-2">Gloves & Mittens</li></button>
                        {/* <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Accessories</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Fascinators & Mini Hats</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Headbands</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Ties & Elastics</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Hats & Caps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Keychains & Lanyards</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Patches & Pins</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Scarves & Wraps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Suit & Tie Accessories</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sunglasses & Eyewear</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Umbrellas & Rain Accessories</li></button> */}
                      </div>

                      <button className="header-button dropbtn"><li className="dropdown-content-clothing">Bags & Purses</li></button>
                        {/* <button className="header-button dropbtn"><li className="dropdown-content-2">Backpacks</li></button>
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
                        <button className="header-button dropbtn"><li className="dropdown-content-2">All Bags & Purses</li></button> */}

                        <button className="header-button dropbtn"><li className="dropdown-content-clothing">Clothing</li></button>
                        {/* <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Clothing"</li></button>
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
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Clothing</li></button> */}


                      <button className="header-button dropbtn"><li className="dropdown-content-clothing">Shoes</li></button>
                      {/* <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Shoes"</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Booties & Crib Shoes</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Boots</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Loafers & Slip Ons</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sandals</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Slippers</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Girls' Shoes"</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Booties & Crib Shoes</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Boots</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Mary Janes</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sandals</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Slippers</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Men's Shoes"</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Boots</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Costume Shoes</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Oxfords & Wingtips</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sandals</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Slippers</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Sneakers & Athletic Shoes</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Women's Shoes"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Boots</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Oxfords & Tie Shoes</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Pumps</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Sandals</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Slippers</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Shoes</li></button> */}



                    </div>

                    <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">All Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content">Body Jewelry</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Anklets</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Arm Bands</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Barbells</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Belly Chains</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Belly Rings</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Gauge & Plug Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Lip Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Nipple Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Nose Rings & Studs</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Pinchers & Spirals</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Shoulder Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Toe Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Body Jewelry</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Bangles</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Beaded Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Chain & Link Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Charm Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">ID & Medical Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Woven & Braided Bracelets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Bracelets</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Cuff Links & Tie Clips</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff Links</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Shirt Studs</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Tie Clips & Tacks</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Cuff Links & Tie Clips</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Chandelier Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Clip On Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cluster Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff & Wrap Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Dangle & Drop Earrings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Ear Jacks & Climbers</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Ear Weights</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Gauge & Plug Earrings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Hoop Earrings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Screw Back Earrings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Stud Earrings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Threader Earrings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Earrings</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Beaded Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Bib Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cameo Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Chains</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Charm Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Chokers</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Crystal Necklaces</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Lariat & Y Necklaces</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Lockets</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Monogram & Name Necklaces</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Multi Strand Necklaces</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Pendants</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Tassel Necklaces</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Necklaces</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Bands</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Midi Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Multistone Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Ring Guards & Spacers</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Signet Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Solitaire Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Stackable Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Statement Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding & Engagement</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Anniversary Rings</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Bridal Sets</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Claddagh Rings</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Engagement Rings</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Promise Rings</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding Bands</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Rings</li></button>

                    </div>
                    <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Craft Supplies & Tools</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content">Home & Hobby</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Candle Making</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Doll & Model Making</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Electronics & Circuitry</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Floral & Garden Crafts</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Basket Weaving</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Floral Arranging</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Gardening & Plants</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Food & Fermenting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baking</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Brewing</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Candy Making</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Canning & Preserving</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Dairy & Kombucha</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Winemaking</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Framing</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Home Improvement</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Woodworking & Carpentry</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Home & Hobby</li></button>

                  <button className="header-button dropbtn"><li className="dropdown-content">Jewelry & Beauty</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Hat Making & Hair Crafts</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Blanks</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Haberdashery</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Jewelry Making & Beading</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Beads</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Cabochons</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Charms</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Findings</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Pendants</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Storage</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Watchmaking & Repair</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Wire</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Makeup & Face Painting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Nail Art</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Soap Making & Bath</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Jewelry & Beauty</li></button>

                  <button className="header-button dropbtn"><li className="dropdown-content">Paper, Party & Kids</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">"Kids' Crafts"</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Coloring</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">"Kids' Art Supplies"</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Papercraft</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Bookbinding</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Card Making & Stationary</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Origami</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Scrapbooking</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Stamping</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Party & Gifting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baking & Cake Decoration</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Decorations & Décor</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Party Favors & Games</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Paper, Party & Kids</li></button>

                  <button className="header-button dropbtn"><li className="dropdown-content">Sculpting & Forming</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Carving & Whittling</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Ceramics & Pottery</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Glass Art</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Glass Blowing</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Glass Fusing</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Lampworking & Shaping</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Neon Art</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Stained Glass</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Metalworking</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Molding & Casting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Materials</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Molds</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Mosaic Making</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Robotics</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Sculpting & Forming</li></button>

                  <button className="header-button dropbtn"><li className="dropdown-content">Sewing & Fiber</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Crochet</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Knitting</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Leatherworking</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Macrame</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Rug Making</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Sewing & Needlecraft</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Crewel</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cross Stitch</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Embroidery</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Felting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Needlepoint</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Plastic Canvas</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Quilting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Sewing</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Tatting & Lacemaking</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Shoemaking</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Spinning</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Upholstery</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Weaving & Tapestry</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Sewing & Fiber</li></button>

                  <button className="header-button dropbtn"><li className="dropdown-content">Visual Arts</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Calligraphy</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Pens</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Collage</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Drawing & Drafting</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Dyeing & Batik</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Dyes</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Fabric</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Painting</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Photography</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cameras</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cases</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Frames</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Printing & Printmaking</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Visual Arts</li></button>

                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Weddings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content">All Weddings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content">Accessories</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Bags & Purses</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Bouquets & Corsages</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Bouquets</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cover Ups & Scarves</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cummerbunds</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Accessories</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Barrettes & Clips</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Decorative Combs</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Fascinators & Mini Hats</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Jewelry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Pins</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Wreaths & Tiaras</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Hats</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Neckties</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Something Blue</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Umbrellas</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Veils</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Accessories</li></button>

                  <button className="header-button dropbtn"><li className="dropdown-content">Clothing</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Dresses</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Bridal Gowns & Separates</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Bridesmaid Dresses</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Flower Girl Dresses</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Mother of the Bride Dresses</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Lingerie & Garters</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding Garters</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding Lingerie</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">Suits</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Suits"</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">"Girls' Suits"</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">"Men's Suits"</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">"Women's Suits"</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Clothing</li></button>

                    <button className="header-button dropbtn"><li className="dropdown-content">Decorations</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baskets & Boxes</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cake Toppers</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Candles & Holders</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Centerpieces</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Plants</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Ring Bearer Pillows</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Serving & Dining</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cake Servers & Knives</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Table Décor</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding Forks</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Decorations</li></button>

                    <button className="header-button dropbtn"><li className="dropdown-content">Gifts & Mementos</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Albums & Scrapbooks</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">"Bridesmaids' Gifts"</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Gifts For The Couple</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Groomsmen Gifts</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Guest Books</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Portraits & Frames</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding Favors</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Gifts & Mementos</li></button>

                    <button className="header-button dropbtn"><li className="dropdown-content">Invitations & Paper</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Announcements</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Greeting Cards</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Invitation Kits</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Invitations</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Save The Dates</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Templates</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Thank You Cards</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Invitations & Paper</li></button>

                    <button className="header-button dropbtn"><li className="dropdown-content">Jewelry</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Bracelets</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Brooches</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff Links & Tie Clips</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff Links</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Shirt Studs</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Tie Clips & Tacks</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Earrings</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Jewelry Sets</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Necklaces</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Pendants</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Anniversary Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Bridal Sets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Claddagh Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Engagement Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Promise Rings</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Ring Bearer Pillows</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding Bands</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Jewelry</li></button>

                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Entertainment</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content">Books, Movies & Music</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Books</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Art & Photography Books</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Blank Books</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Book Accessories</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Calendars & Planners</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">"Children's Books"</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Comics & Graphic Novels</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Craft & Hobby Books</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Guides & How Tos</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Literature & Fiction</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Poetry</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Zines & Magazines</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Movies</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Music</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Instrument Straps</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Musical Instruments</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Recorded Audio</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Sheet Music</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Books, Movies & Music</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Electronics & Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Audio</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cameras</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Flashes & Lighting</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Lenses & Filters</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Photography Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Car Parts & Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cell Phone Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Computers & Peripherals</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">DIY Kits</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Decals & Skins</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Docking & Stands</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Electronics Cases</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Laptop Bags</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Laptop Sleeves</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Phone Cases</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Tablet & Reader Cases</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Gadgets</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Telephones & Handsets</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Video Games</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">All Electronics & Accessories</li></button>

                    <button className="header-button dropbtn"><li className="dropdown-content">Toys & Games</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Games & Puzzles</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Board Games</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Card Games</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Dice & Tile Games</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Marbles</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Sports & Outdooor Recreation</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Fishing</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Juggling & Hula Hoops</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Lawn Games</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Toys</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Baby & Toddler Toys</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Balls</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Dolls & Action Figures</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Kids' Costumes"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Kids' Crafts"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Learning & School</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Miniature Toys</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Play Tents & Playhouses</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Puppets</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Stuffed Animals & Plushies</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Wind-up Toys</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Yo Yos & Tops</li></button>
                  <button className="header-button dropbtn"><li className="dropdown-content-2">All Toys & Games</li></button>
                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Home & Living</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content">Art & Collectibles</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Artist Trading Cards</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Clip Art</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Collectibles</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Coins & Money</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Figurines</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Memorabilia</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Music Boxes</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Dolls & Miniatures</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Drawing & Illustration</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Fiber Arts</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Glass Art</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Mixed Media & Collage</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Painting</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Acrylic</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Oil</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Watercolor</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Photography</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Prints</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Sculpture</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Art & Collectibles</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Bath & Beauty</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Bath Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Essential Oils</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Fragrances</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Care</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Makeup & Cosmetics</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Personal Care</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Deodorant</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Shaving & Grooming</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Skin Care</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Moisturizers</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Salves & Balms</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Soaps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Bath Bombs</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Bath Oils</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Bath Salts & Scrubs</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Body Washes & Liquid Soaps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Spa & Relaxation</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Aromatherapy</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Spa Kits & Gifts</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">All Bath & Beauty</li></button>

                        <button className="header-button dropbtn"><li className="dropdown-content">Home & Living</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Bathroom</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Bedding</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Floor & Rugs</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Food & Drink</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Furniture</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Home Décor</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Candles & Holders</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Clocks</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Decorative Pillows</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Picture Frames & Displays</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Vases</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Wall Décor</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Wreaths & Door Hangers</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Kitchen & Dining</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Lighting</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Chandeliers & Pendant Lights</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Lamps</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Office</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Outdoor & Gardening</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Storage & Organization</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">All Home & Living</li></button>

                          <button className="header-button dropbtn"><li className="dropdown-content">Paper & Party Supplies</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Paper</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Calendars & Planners</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Calligraphy</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Erasers & Sharpeners</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Gift Wrapping</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Greeting Cards</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Invitations & Announcements</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Stationary</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Stickers, Labels & Tags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Party Supplies</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Party Décor</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Party Favors & Games</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">All Paper & Party Supplies</li></button>

                          <button className="header-button dropbtn"><li className="dropdown-content">Pet Supplies</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Bedding</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Blankets</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Mats & Pads</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Carriers & Houses</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Clothing, Accessories & Shoes</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Accessories</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Clothing</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Shoes & Booties</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Collars & Leashes</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Feeding</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Furniture</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Health & Wellness</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pet Toys</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Bird Toys</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Cat Toys</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Dog Toys</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Urns & Memorials</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">All Pet Supplies</li></button>
                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Kids & Baby</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baby & Child Care</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baby & Toddler Toys</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baby Accessories</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baby Blankets</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">"Baby Boys' Clothing"</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">"Baby Girls' Clothing"</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content-2">Baby Headbands</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Clothing"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Shoes"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Children's Books"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Diaper Bags</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Girls' Clothing"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Girls' Shoes"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Kids' Crafts"</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Kids' Furniture"</li></button>

                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Vintage</li></button>
                    <button className="header-button dropbtn"><li className="dropdown-content">Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Belts & Suspenders</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Belt Buckles</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Gloves & Mittens</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Evening & Formal Gloves</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Hair Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Barrettes & Clips</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Decorative Combs</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Hats & Caps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Baseball & Trucker Caps</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Fedoras</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Formal Hats</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Keychains & Lanyards</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Patches & Pins</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Scarves & Wraps</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Collars & Bibs</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Handkerchiefs</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Scarves</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Shawls & Wraps</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Suit & Tie Accessories</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Bolo Ties</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Cufflinks & Tie Clips</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Neckties</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Sunglasses & Eyewear</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Glasses</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Sunglasses</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Accessories</li></button>

                      <button className="header-button dropbtn"><li className="dropdown-content">Art & Collectibles</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Artist Trading Cards</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Collectibles</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Coins & Money</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Collectible Glass</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Collectible Plates</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Dolls & Miniatures</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Figurines</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Music Boxes</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Postage Stamps</li></button>
                      <button className="header-button dropbtn"><li className="dropdown-content-2">Drawing & Illustration</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Fiber Arts</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Glass Art</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Mixed Media & Collage</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Painting</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Photography</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Prints</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Music & Movie Posters</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">All Art & Collectibles</li></button>

                        <button className="header-button dropbtn"><li className="dropdown-content">Bags & Purses</li></button>
                        <button className="header-button dropbtn"><li className="dropdown-content-2">Accessory Cases</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Backpacks</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Cosmetic & Toiletry Storage</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Vanity Storage</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Handbags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Clutches & Evening Bags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Crossbody Bags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Hobo Bags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Shoulder Bags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Top Handle Bags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Luggage & Travel</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Briefcases & Attaches</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Duffel Bags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Overnight Bags</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Suitcases</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Train Cases</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Messenger Bags</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pouches & Coin Purses</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Totes</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Wallets & Money Clips</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Wallets</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">All Bags & Purses</li></button>

                          <button className="header-button dropbtn"><li className="dropdown-content">Clothing</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Clothing"</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">"Baby Boys' Clothing"</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pants</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Tops</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">"Girl's Clothing"</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">"Baby Girls' Clothing"</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Dresses</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Jackets & Coats</li></button>

                          <button className="header-button dropbtn"><li className="dropdown-content-2">"Men's Clothing"</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Jackets & Coats</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Pants</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Shirts</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Suits & Sport Coats</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Sweaters</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">"Women's Clothing"</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Dresses</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Jackets & Coats</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Lingerie</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pants & Capris</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Shorts & Skorts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Skirts</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Sweaters</li></button>

                          <button className="header-button dropbtn"><li className="header-list-item">Craft Supplies & Tools</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content">Fabric</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Framing</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Jewelry & Beading</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Beads</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Charms</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Findings & Hardware</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Pendants</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Scrapbooking</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Scrapbooking Paper</li></button>
                          <button className="header-button dropbtn"><li className="dropdown-content-2">Sewing & Fiber</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Buttons & Fasteners</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Crochet Patterns</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Knitting Patterns</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Sewing Machines</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Sewing Patterns</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">All Craft Supplies & Tools</li></button>

                            <button className="header-button dropbtn"><li className="dropdown-content">Home & Living</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Bathroom</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Bedding</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Curtains & Window Treatments</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Floor & Rugs</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Furniture</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Home Décor</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Clocks</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Decorative Pillows</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Globes & Maps</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Mirrors</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">Ornaments & Accents</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Picture Frames & Displays</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Vases</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Kitchen & Dining</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Dining & Serving</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Lighting</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Chandeliers & Pendant Lights</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Lamps</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Storage & Organization</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">All Home & Living</li></button>

                              <button className="header-button dropbtn"><li className="dropdown-content">Jewelry</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Bracelets</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Bangles</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Charm Bracelets</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff Bracelets</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Brooches</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Cuff Links & Tie Tacks</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Earrings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Chandelier Earrings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Clip On Earrings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Dangle & Drop Earrings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Stud Earrings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Jewelry Sets</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Necklaces</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Lockets</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Pendants</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Rings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Solitaire Rings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Statement Rings</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Wedding & Engagement</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Watches</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">All Jewelry</li></button>

                              <button className="header-button dropbtn"><li className="dropdown-content">Toys & Games</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Games & Puzzles</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Board Games</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Dice & Tile Games</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Marbles</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Video Games</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Sports & Outdooor Recreation</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Bikes & Cycling</li></button>
                              <button className="header-button dropbtn"><li className="dropdown-content-2">Kites & Pinwheels</li></button>
                                <button className="header-button dropbtn"><li className="dropdown-content-2">Toys</li></button>
                                <button className="header-button dropbtn"><li className="dropdown-content-2">Dolls & Action Figures</li></button>
                                <button className="header-button dropbtn"><li className="dropdown-content-2">Puppets</li></button>
                                <button className="header-button dropbtn"><li className="dropdown-content-2">Ride On & Rocking Toys</li></button>
                                <button className="header-button dropbtn"><li className="dropdown-content-2">Stuffed Animals & Plushies</li></button>
                            <button className="header-button dropbtn"><li className="dropdown-content-2">All Toys & Games</li></button>

                  </div>
                  </ul>
                </div>



      </div>

    )
  }
};
