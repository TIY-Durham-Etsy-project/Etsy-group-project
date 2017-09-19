import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import ItemPageApp from './itempageApp.js';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ItemPageApp/>
      
      </div>
    );
  }
}

export default App;
