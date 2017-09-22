import React, { Component } from 'react';
import '../styles/App.css';


class Trademark extends Component {
  render() {
    return (
      <div className="Trademark">
        <div className="float-left">
          <div className="display-table">
              <div className="display-table-cell dtc-logo">
                <img src={require('./logo.svg')} alt="Etsy Logo" height="20"/>
              </div>
              <div className="display-table-cell dtc-tag">
                We make it easy to find your thing.
              </div>
          </div>
        </div>
        <div className="float-right">
          <div className="display-table-cell dtc-copyright">
            © 2017 Etsy-group-project
          </div>
          <div className="display-table">
            <div className="display-table-cell dtc-terms">
              <a href="https://www.etsy.com/legal/?ref=ftr">Terms of Use</a>
            </div>
            <div className="display-table-cell dtc-privacy">
              <a href="https://www.etsy.com/legal/privacy/?ref=ftr">Privacy</a>
            </div>
            <div className="display-table-cell dtc-ads">
              <a href="https://www.etsy.com/legal/policy/cookies-tracking-technologies/44797645975?ref=ftr">Interest-based ads</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trademark;
