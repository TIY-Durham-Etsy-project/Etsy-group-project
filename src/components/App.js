import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './footer.js';
import Slider from './slider.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default App;
