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

  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({idvariable: event.target.value});
  }
  handlesubmit(event){
    event.preventDefault();
    this.fetchData();
  }
  fetchData = () => {
    //LISTING DATA FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ listingdata: data.results });
    })
    //IMAGES FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/images?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ imagesdata: data.results });
    })
    //PERSONALIZATION FETCH
    // fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/inventory?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({ listingInventoryData: data.results });
    // })
    //SHOP DATA FETCH
    fetch(`https://openapi.etsy.com/v2/shops/listing/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ shopdata: data.results });
      fetch(`https://openapi.etsy.com/v2/shops/${data.results[0].shop_id}/listings/active?limit=5&api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
        return results.json();
      }).then(data => {
        let array = [];
        let i = 0;
        while (i < 4){
          fetch(`https://openapi.etsy.com/v2/listings/${data.results[i].listing_id}/images?api_key=88vhbyb8aqimszfdxfugwgnd`).then(results => {
            return results.json();
          }).then(data => {
            array.push(data.results[0].url_75x75);
          })
          i++
        }
        this.setState({ shoplistingdata: data, shoplistingimagesdata: array });
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* FRONT PAGE SHOULD GO HERE */}
        <ItemPageApp />
        {/* ADD OTHER GROUPS FOOTER HERE */}
      </div>
    );
  }
}

export default App;
