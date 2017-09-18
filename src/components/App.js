
import React, { Component } from 'react';
import '../styles/App.css';
import Products from '../components/Products.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
      </div>
    );
  }
}

export default App;
