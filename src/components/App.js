import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import ItemPageApp from './itempageApp.js';

class App extends Component {
  constructor(props) {
    super(props);
    //There should be some kind of "state" that starts empty.
    //There should be a turnery statement that says "if state is empty, show frontpage. if it has a number, show itempage"
  }

  render() {
    return (
      <div className="App">
        <Header/>
        //FRONT PAGE SHOULD GO HERE
        <ItemPageApp/>
      </div>
    );
  }
}

export default App;
