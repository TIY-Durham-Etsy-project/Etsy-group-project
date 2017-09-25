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
      listingidpage: false,
      visitedIdsArray: []
    };
  }
  handleIncommingData(value){
    this.setState({ listingidpage: value });
    if(!value===false&&!this.state.visitedIdsArray.includes(value)){
        let holderArray = this.state.visitedIdsArray;
        holderArray.push(value);
      this.setState({visitedIdsArray: holderArray});
    }
  }

  // sendDataUp gets listing IDs from sliders. handleIncommingData gets a
  render() {
    return (
      <div className="App">
        <Header sendDataUpToParent={this.handleIncommingData}/>
        {this.state.listingidpage ? (<ItemPageApp idvariable={this.state.listingidpage} sendDataUpToParent={this.handleIncommingData}/>) : (<Homepage sendDataUp={this.handleIncommingData} idsOfVisitedPages={this.state.visitedIdsArray}/>)}
        <Footer/>
      </div>
    );
  }
}

export default App;
