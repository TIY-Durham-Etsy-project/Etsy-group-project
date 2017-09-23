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
<<<<<<< HEAD
      // Put in listing id here to see product page. Number in quotes
      //false to go to home page
      //"175112598"
      listingidpage: "175112598"
      // listingidpage: false

=======
      listingidpage: false
>>>>>>> be8b784e38eeb81206f4e5dc526127bad9cf5764
    };
  }
  handleIncommingData(value){
    this.setState({ listingidpage: value });
  }
  render() {
    return (
      <div className="App">
        <Header sendDataUpToParent={this.handleIncommingData}/>
        {this.state.listingidpage ? (<ItemPageApp idvariable={this.state.listingidpage} sendDataUpToParent={this.handleIncommingData}/>) : (<Homepage sendDataUp={this.handleIncommingData} sendDataUpToParent={this.handleIncommingData}/>)}
        <Footer/>
      </div>
    );
  }
}

export default App;
