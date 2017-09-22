import React, { Component } from 'react';

export default class LoadingPage extends Component {
  render(){
    return(
      <div className="loadingpage">
        <h1>LOADING</h1>
        <div>
          <img alt="loadingimg" src="loading.gif"/>
        </div>
      </div>
    )
  }
};
