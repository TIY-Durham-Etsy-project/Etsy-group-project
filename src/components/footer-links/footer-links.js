import React, { Component } from 'react';
import ShopLinks from "./shop-links.js";
import SellLinks from "./sell-links.js";
import AboutLinks from "./about-links.js";
import ShareLinks from "../share-links.js";

class FooterLinks extends Component {
  render() {
    return (
      <div className="FooterLinks">
        <ShopLinks />
        <SellLinks />
        <AboutLinks />
        {/* This is where ShareLinks will render if @media>600 */}
        <ShareLinks />
      </div>
    );
  }
}

export default FooterLinks;
