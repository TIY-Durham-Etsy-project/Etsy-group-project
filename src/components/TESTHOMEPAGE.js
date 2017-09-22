import React, { Component } from 'react';

export default class TESTHOMEPAGE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "287107273"
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.sendData = this.sendData.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  sendData(event){
    console.log("fired");
    event.preventDefault();
    if (event.target.id !== "" && event.target.id !== undefined){
      this.props.sendDataUpToParent(event.target.id);
    }
  }
  submitData(event){
    event.preventDefault();
    console.log(this.state.text)
    if (this.state.text!== "" && this.state.text !== undefined){
      this.props.sendDataUpToParent(this.state.text);
    }
  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({text: event.target.value});
  }
  render(){
    return(
      <div className="TESTHOMEPAGE">
      <h1>THIS IS A HOMEPAGE</h1>
      <form onSubmit={this.submitData}>
        <input onChange={this.handleTextChange} type="text" id="idnumber"
        placeholder="ID" value={this.state.text}/>
        <button type="submit">"SUBMIT"</button>
      </form>
      <div key="499471843" onClick ={this.sendData} className = "sample-item">
        <img id="499471843" src = "hourglass.png" alt = "store item img"/>
      </div>
      </div>
    )
  }
};
