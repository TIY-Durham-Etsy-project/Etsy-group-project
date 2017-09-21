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
                    <div>
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
                      <button className="header-button dropbtn"><li className="dropdown-content-2">"Boys' Shoes"</li></button>
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
                      <button className="header-button dropbtn"><li className="dropdown-content-2">All Shoes</li></button>



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


                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Weddings</li></button>
                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Entertainment</li></button>
                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Home & Living</li></button>
                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Kids & Baby</li></button>
                  </div>
                  <div>
                    <button className="header-button dropbtn"><li className="header-list-item">Vintage</li></button>
                  </div>
                  </ul>
                </div>



      </div>

    )
  }
};
