import React, { Component } from 'react';
import '../styles/App.css';
import OptInForm from './opt-in-form.js'
import Trademark from './trademark.js'
import HelpAndCurrency from './help-and-currency.js'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>Footer Placeholder</p>
        <OptInForm />
        <HelpAndCurrency />
        <Trademark />
      </div>
    );
  }
}

export default Footer;
