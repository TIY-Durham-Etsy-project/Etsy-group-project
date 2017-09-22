import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import ItemPageApp from './itempageApp.js';

import TESTHOMEPAGE from './TESTHOMEPAGE.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleIncommingData = this.handleIncommingData.bind(this);
    this.state = {
      listingidpage: false
    };
  }
  handleIncommingData(value){
    this.setState({ listingidpage: value });
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.listingidpage ? (<ItemPageApp idvariable={this.state.listingidpage} sendDataUpToParent={this.handleIncommingData}/>) : (<TESTHOMEPAGE sendDataUpToParent={this.handleIncommingData}/>)}
        {/* ADD OTHER GROUPS FOOTER HERE */}
      </div>
    );
  }
}

export default App;
