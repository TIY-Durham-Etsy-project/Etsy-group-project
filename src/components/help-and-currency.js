import React, { Component } from 'react';
import '../styles/App.css';


class HelpAndCurrency extends Component {
  render() {
    return (
      <div className="HelpAndCurrency">
        <p>Help and Currency Placeholder</p>
        <div className="float-left">
          <img src={require("./logo.svg")} alt="?" height='20'/>
          <span>
            Need help? Visit the
            <a href="https://www.etsy.com/help?ref=ftr">help center</a>
          </span>
        </div>
        {this.props.children}
        <div className="float-right">
          <div className="display-table">
            <div className="display-table-cell">
              <img src={require("./logo.svg")} alt="flag" height='20'/>
              United States
            </div>
            <div className="display-table-cell">
              English (USD)
            </div>
            <div className="display-table-cell">
              $(USD)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpAndCurrency;
