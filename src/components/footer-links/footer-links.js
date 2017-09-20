import React, { Component } from 'react';
import ShopLinks from "./shop-links.js";
import SellLinks from "./sell-links.js";
import AboutLinks from "./about-links.js";
import ShareLinks from "../share-links.js";

class FooterLinks extends Component {
  constructor(props){
    super(props);

        this.state= {
          media: 0,
          parent: {}
        }

        this.setMedia = this.setMedia.bind(this)

      };

      setMedia() {
       this.setState({media: window.innerWidth});
     }

      componentWillMount() {
        let media = window.innerWidth;
        console.log(media);
        this.setMedia();
      }


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
