import React, { Component } from 'react';
import '../styles/App.css';
import Homepage from './homepage.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {           ?
        <Homepage /> :
        <itemPageApp />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
