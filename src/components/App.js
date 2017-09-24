import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Homepage from './homepage.js';
import ItemPageApp from './itempageApp.js';
import Footer from './footer.js';

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
    console.log("listingidpage has changes. New value is:")
    console.log(this.state.listingidpage);
  }
  render() {
    return (
      <div className="App">
        {/* <Header sendDataUpToParent={this.handleIncommingData}/> */}
        {this.state.listingidpage ? (<ItemPageApp idvariable={this.state.listingidpage} sendDataUpToParent={this.handleIncommingData}/>) : (<Homepage sendDataUp={this.handleIncommingData} sendDataUpToParent={this.handleIncommingData}/>)}
        <Footer/>
      </div>
    );
  }
}

export default App;
