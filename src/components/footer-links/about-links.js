import React, { Component } from 'react';


class AboutLinks extends Component {
  render() {
    return (
      <div className="AboutLinks">
        <h3>About</h3>
        <ul>
          <li>
            <a href="https://www.etsy.com/about?ref=ftr">Etsy, Inc.</a>
          </li>
          <li>
            <a href="https://www.etsy.com/legal?ref=ftr">Policies</a>
          </li>
          <li>
            <a href="https://investors.etsy.com/">Investors</a>
          </li>
          <li>
            <a href="https://www.etsy.com/careers?ref=ftr">Careers</a>
          </li>
          <li>
            <a href="https://www.etsy.com/press?ref=ftr">Press</a>
          </li>
        </ul>
        </div>
    );
  }
}

export default AboutLinks;
