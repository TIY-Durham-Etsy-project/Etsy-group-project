import React, { Component } from 'react';
import '../styles/App.css';
import OptInForm from './opt-in-form.js'
import Trademark from './trademark.js'
import HelpAndCurrency from './help-and-currency.js'
import FooterLinks from './footer-links/footer-links.js'

class Footer extends Component {
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

  componentDidMount() {
    window.addEventListener("resize", this.setMedia);
  }

  render() {
    return (
      <div className="Footer">
        <OptInForm />
        <FooterLinks />
        <HelpAndCurrency />
        <Trademark />
      </div>
    );
  }
}

export default Footer;
