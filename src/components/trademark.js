import React, { Component } from 'react';
import '../styles/App.css';


class Trademark extends Component {
  render() {
    return (
      <div className="Trademark">
        <div className="float-left">
          <div className="display-table">
              <div className="display-table-cell">
                <img src={require('./logo.svg')} alt="Etsy Logo" height="20"/>
              </div>
              <div className="display-table-cell">
                "We make it easier to find your thing."
              </div>
          </div>
        </div>
        <div className="float-right">
          <div className="display-table-cell">
            © 2017 Etsy-group-project
          </div>
          <div className="display-table">
            <div className="display-table-cell">
              <a href="https://www.etsy.com/legal/?ref=ftr">Terms of Use</a>
            </div>
            <div className="display-table-cell">
              <a href="https://www.etsy.com/legal/privacy/?ref=ftr">Privacy</a>
            </div>
            <div className="display-table-cell">
              <a href="https://www.etsy.com/legal/policy/cookies-tracking-technologies/44797645975?ref=ftr">Interest-based ads</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trademark;
