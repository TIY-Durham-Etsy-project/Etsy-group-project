import React, { Component } from 'react';
import when from 'when';
import Slider from './slider.js';

export default class API extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
    this.state = {
      // itemObjects: null,
      sixArrays: [],
      currentArray: [],
      gifts: null,
      giftsReady: false,
      homeAndLiving: false,
      jewelry: false,
      clothing: false,
      toysAndGames: false,
      crafty: false,
      weddings: false,
      categoryReady: false,
      category :[
          {stateArray: "homeAndLiving", url: "https://openapi.etsy.com/v2/listings/active?category=home_and_living&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "jewelry", url: "https://openapi.etsy.com/v2/listings/active?keywords=Jewelry&filter=Jewelry&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "clothing", url: "https://openapi.etsy.com/v2/listings/active?keywords=Clothing&filter=Clothing&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "toysAndGames", url: "https://openapi.etsy.com/v2/listings/active?category=toys&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "crafty", url:  "https://openapi.etsy.com/v2/listings/active?category=craft_supplies_and_tools&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "weddings", url: "https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"}],
      giftUrl : "https://openapi.etsy.com/v2/listings/active?keywords=gifts&filter=gifts&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"
    };
    // this.props.display.type = "type of Slider" ex: category

  }
  sendDataUp(id){
    console.log(id);
  }


  // takes this.props.display.type to use for flow control.
  componentWillMount() {
    if(this.props.display.type==="gifts"){
      fetch(this.state.giftUrl)
      .then(r => r.json())
      .then((responseData) => {
        let dataArray = responseData.results;
        // console.log(dataArray);
        // console.log(this.state.gifts);
        // let currentArray = this.state.gifts.array;
        this.setState({gifts: dataArray});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
    }
    if(this.props.display.type==="category"){
      this.state.category.map((cat) => {
        return (
          fetch(cat.url)
          .then(r => r.json())
          .then((responseData) => {
            let dataArray = responseData.results;
            // console.log(dataArray);
            let whatever = cat.stateArray;
            // let currentArray = `${whatever}.array`;
            this.setState({[whatever]: dataArray});
            // this.setState(function(cat.stateArray, dataArray){
              // return {cat.stateArray: dataArray}
            // }
          })
          .catch((error) => {
            console.log("Error with Fetching : ", error);
          })
        )
      })
    }
    // if(this.props.display.type==="")
  }

  componentDidUpdate() {
    if(this.state.gifts && this.state.giftsReady===false){
      this.trimToSix(this.filterArrayOfMissingData(this.state.gifts))
      this.setState({giftsReady: true});
    }
    if(this.state.homeAndLiving && this.state.jewelry && this.state.clothing && this.state.toysAndGames && this.state.crafty && this.state.weddings && this.state.categoryReady===false){
      this.fxnCombineObjects(this.state.category);    this.setState({categoryReady: true});
    }
  }
  // when.all(this.state.gifts).then(function() {
  //   // this.setState({gifts.array: currentArray});
  //   console.log(this.state.gifts);
  //   this.setState({giftsReady: true});
  // });

  // filter through itemObjects to remove missing values
  filterArrayOfMissingData = (array) => {
    let filteredObjects = array.filter((filterObject) => {
      return filterObject.taxonomy_path && filterObject.MainImage.url_170x135
    })
    console.log(filteredObjects);
    return filteredObjects; //array
  }


  // needs to take 6 objects and make one array -- need to wait until fetch promisses are returned
  // call in turnery with (getUrlToCall(this.props.display.type))
  fxnCombineObjects = (fxnArray) => {
    // may want this some where else
    let bsArray = [];
    let randomNumber = 0;
    for (var i = 0; i < fxnArray.length; i++) {
      let trojan = fxnArray[i].stateArray;
      randomNumber = Math.floor(Math.random() *
      [`this.state.${trojan}.length`])
      console.log(randomNumber);
      console.log(`this.state.${trojan}.[${randomNumber}]`);
      bsArray.push(`this.state.${trojan}.[${randomNumber}]`);
    }
    // let arrayToSet = this.state.sixArrays;
    this.setState({sixArrays: bsArray});
    // when.all(arrayToSet).then(function() {
    //   // this.setState({gifts.array: currentArray});
    //   console.log(this.state.sixArrays);
    //   return this.state.sixArrays
    // });
  }


    // needs to take an array and reduce to 6 objects (randomly)
  trimToSix = (trimArray) => {
      let arrayToMap = [];
      let randomNumber = 0;
      console.log(trimArray.length);
      for (var i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * trimArray.length);
        arrayToMap.push(trimArray[randomNumber]);
        // may induce duplicates
      }
      // let arrayToSet = this.state.sixArrays;
      this.setState({sixArrays: arrayToMap});
      // when.all(arrayToSet).then(function() {
      //   // this.setState({gifts.array: currentArray});
      //   console.log(this.state.sixArrays);
      //   return this.state.sixArrays
      // });
        return this.state.sixArrays
  }

  // function Notification( state ) {
  //   switch(state) {
  //       case 'gifts':
  //           return <Slider arrayOfSix={this.trimToSix(this.filterArrayOfMissingData(this.state.gifts.array))} />;
  //       case 'category':
  //           return <Slider arrayOfSix={this.fxnCombineObjects(this.getUrlToCall(this.props.display.type))} />;
  //       case 'error':
  //           return <Slider arrayOfSix={text} />;
  //       default:
  //           return null;
  //   }
  // }

    // need to pass header to Slider objectWithArrayOfSix = {headline: "HeaderName", array: [{},{}...]}
  render() {
      return (
        <div>
          {this.state.categoryReady ? (
            <div>
              <Slider sendDataUp={this.sendDataUp} arrayOfSix={this.state.sixArrays}
              />
            </div>
          ):(<div></div>)
          }
          {this.state.giftsReady ? (
            <div>
              <Slider sendDataUp={this.sendDataUp} arrayOfSix={this.state.sixArrays} />;
            </div>
          ):(<div></div>)
          }
        </div>
      );
  }
}

API.propTypes = {
};
