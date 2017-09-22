import React, { Component } from 'react';
import Slider from './slider.js';

export default class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // itemObjects: null,
      sixArrays: [],
      listInfo: [],
      gifts: [{array: []}],
      homeAndLiving: [{array: []}],
      jewelry: [{array: []}],
      clothing: [{array: []}],
      toysAndGames: [{array: []}],
      crafty: [{array: []}],
      weddings: [{array: []}]
    }
    // this.props.display.type = "type of Slider" ex: category
  }


  getUrlToCall = (type) =>{
    if(type==="category"){
      let UrlArray = [
        {stateArray: homeAndLiving, url: "https://openapi.etsy.com/v2/listings/active?category=home_and_living&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
        {stateArray: jewelry, url: "https://openapi.etsy.com/v2/listings/active?keywords=Jewelry&filter=Jewelry&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
        {stateArray: clothing, url: "https://openapi.etsy.com/v2/listings/active?keywords=Clothing&filter=Clothing&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
        {stateArray: toysAndGames, url: "https://openapi.etsy.com/v2/listings/active?category=toys&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
        {stateArray: crafty, url:  "https://openapi.etsy.com/v2/listings/active?category=craft_supplies_and_tools&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
        {stateArray: weddings, url: "https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"}];
      return UrlArray
    }
    if(type==="gifts"){
      let UrlOne = "https://openapi.etsy.com/v2/listings/active?keywords=gifts&filter=gifts&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage";
      return UrlOne
    }
    if(type==="recently"){

    }
  }


  // takes this.props.display.type to use for flow control.
  componentDidMount() {
    if(this.props.display.type==="gifts"){
      fetch(getUrlToCall(this.props.display.type))
      .then(r => r.json())
      .then((responseData) => {
        let dataArray = responseData.results;
        console.log(dataArray);
        this.setState({gifts.array: dataArray});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
    }
    if(this.props.display.type==="category"){
      getUrlToCall(this.props.display.type).map((cat) => {
        return (
          fetch(getUrlToCall(cat.url))
          .then(r => r.json())
          .then((responseData) => {
            let dataArray = responseData.results;
            console.log(dataArray);
            this.setState({cat.stateArray: dataArray});
          })
        )
      })
    }
    // if(this.props.display.type==="")
  }


  // filter through itemObjects to remove missing values
  filterArrayOfMissingData = (array) => {
    let filteredObjects = array.filter((filterObject) => {
      return filterObject.taxonomy_path && filterObject.MainImage.url_170x135
    })
    console.log(filteredObjects);
    return filteredObjects;
  }


  // needs to take 6 objects and make one array -- need to wait until fetch promisses are returned
  // call in turnery with (getUrlToCall(this.props.display.type))
  fxnCombineObjects = (fxnArray) => {
    this.state.sixArrays.push({headline: this.props.display.type});
    // may want this some where else
    let bsArray = [];
    let randomNumber = 0;
    for (var i = 0; i < fxnArray.length; i++) {
      randomNumber = Math.floor(Math.random() *
      this.state.(fxnArray[i].stateArray).array.length)
      bsArray.push(this.state.(fxnArray[i].stateArray).array[randomNumber];
    }
    this.state.sixArrays.push({array: bsArray});
    console.log(this.state.sixArrays);
    return this.state.sixArrays
  }


    // needs to take an array and reduce to 6 objects (randomly)
  trimToSix(trimArray) {
    this.state.sixArrays.push({headline: this.props.display.type});
      let arrayToMap = [];
      let randomNumber = 0;
      for (var i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * trimArray.length);
        arrayToMap.push(trimArray[randomNumber]);
        // may induce duplicates
      }
      this.state.sixArrays.push({array: arrayToMap});
      console.log(this.state.sixArrays);
      return this.state.sixArrays
  }

  function Notification( state ) {
    switch(state) {
        case 'gifts':
            return <Slider arrayOfSix={this.trimToSix(this.filterArrayOfMissingData(this.state.gifts.array))} />;
        case 'category':
            return <Slider arrayOfSix={this.fxnCombineObjects(this.getUrlToCall(this.props.display.type))} />;
        case 'error':
            return <Slider arrayOfSix={text} />;
        default:
            return null;
    }
  }
    // need to pass header to Slider arrayOfSix = [{header: "HeaderName", array: [{},{}...]}]
  render() {
      return (
        <div>
          {this.state.weddings.array ? (
            <div>
              <Slider arrayOfSix={this.fxnCombineObjects(this.getUrlToCall(this.props.display.type))} />
            </div>
          ):(<div></div>)
          }
          {this.state.gifts.array ? (
            <div>
              <Slider arrayOfSix={this.trimToSix(this.filterArrayOfMissingData(this.state.gifts.array))} />;
            </div>
          ):(<div></div>)
          }
        </div>
      );
  }
}

API.propTypes = {
};
