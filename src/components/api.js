import React, { Component } from 'react';
import when from 'when';
import Slider from './slider.js';

export default class API extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
    this.reloadSlider = this.reloadSlider.bind(this);
    this.state = {
      // itemObjects: null,
      sixArrays: [],
      currentArray: [],
      trending: false,
      trendingReady: false,
      gifts: false,
      giftsReady: false,
      homeAndLiving: false,
      jewelry: false,
      clothing: false,
      toysAndGames: false,
      crafty: false,
      weddings: false,
      categoryReady: false,
      trendingUrl: "https://openapi.etsy.com/v2/listings/trending?includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj",
      category :[
          {stateArray: "homeAndLiving", url: "https://openapi.etsy.com/v2/listings/active?category=home_and_living&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "jewelry", url: "https://openapi.etsy.com/v2/listings/active?keywords=Jewelry&filter=Jewelry&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "clothing", url: "https://openapi.etsy.com/v2/listings/active?keywords=Clothing&filter=Clothing&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "toysAndGames", url: "https://openapi.etsy.com/v2/listings/active?category=toys&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "crafty", url:  "https://openapi.etsy.com/v2/listings/active?category=craft_supplies_and_tools&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "weddings", url: "https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"}],
      giftUrl :[
          {stateArray: "gifts", url: "https://openapi.etsy.com/v2/listings/active?keywords=gifts&filter=gifts&limit=100&offset=0&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "Fall entertaining and decor", url: ""},
          {stateArray: "Gifts for him under $30"},

      ]
    };
    // this.props.display.type = "type of Slider" ex: category

  }
  sendDataUp(id){
    this.props.sendDataUp(id);
  }

  reloadSlider(e){
    e.preventDefault();
    this.setState({giftsReady: false});
  }

  componentWillMount() {
    if(this.props.display.type==="Trending"){
      fetch(this.state.trendingUrl)
      .then(r => r.json())
      .then((responseData) => {
        let dataArray = responseData.results;
        this.setState({trending: dataArray});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
    }
    if(this.props.display.type==="Gifts"){
      fetch(this.state.giftUrl)
      .then(r => r.json())
      .then((responseData) => {
        let dataArray = responseData.results;
        let forNow = this.state.giftUrl[0].url;
        this.setState({[gifts]: dataArray});
      })
      .catch((error) => {
        console.log("Error with Fetching : ", error);
      });
    }
    if(this.props.display.type==="Category"){
      this.state.category.map((cat) => {
        return (
          fetch(cat.url)
          .then(r => r.json())
          .then((responseData) => {
            let dataArray = responseData.results;
            let whatever = cat.stateArray;
            this.setState({[whatever]: dataArray});
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
    if(this.state.trending && this.state.trendingReady===false){
      this.trimToSix(this.filterArrayOfMissingData(this.state.trending))
      this.setState({trendingReady: true});
    }
    if(this.state.gifts && this.state.giftsReady===false){
      this.trimToSix(this.filterArrayOfMissingData(this.state.gifts))
      this.setState({giftsReady: true});
    }
    if(this.state.homeAndLiving && this.state.jewelry && this.state.clothing && this.state.toysAndGames && this.state.crafty && this.state.weddings && this.state.categoryReady===false){
      this.fxnCombineObjects(this.state.category);
      this.setState({categoryReady: true});
    }
  }

  filterArrayOfMissingData = (array) => {
    let filteredObjects = array.filter((filterObject) => {
      return filterObject.taxonomy_path && filterObject.MainImage.url_170x135
    })
    return filteredObjects; //array
  }

  fxnCombineObjects = (fxnArray) => {
    let bsArray = [];
    let randomNumber = 0;
    for (var i = 0; i < fxnArray.length; i++) {
      let trojan = fxnArray[i].stateArray;
      randomNumber = Math.floor(Math.random() * eval(`this.state.${trojan}.length`))
      bsArray.push(eval(`this.state.${trojan}[${randomNumber}]`));
    }
    this.setState({sixArrays: bsArray});
  }

  trimToSix = (trimArray) => {
      let arrayToMap = [];
      let randomNumber = 0;
      let randomNumArray = [];
      for (var i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * trimArray.length);
        if(!randomNumArray.includes(randomNumber)){
          arrayToMap.push(trimArray[randomNumber]);
          randomNumArray.push(randomNumber);
        }else{
          i -= 1;
        }
      }
      this.setState({sixArrays: arrayToMap});
        return this.state.sixArrays
  }

  render() {
      return (
        <div>
          {(this.state.trendingReady || this.state.categoryReady || this.state.giftsReady) ? (
            <div>
              <Slider sendDataUp={this.sendDataUp}
              reloadSlider={this.reloadSlider}
              arrayOfSix={this.state.sixArrays}
              headline={this.props.display.type}
              />
            </div>
          ):(<div></div>)
          }
        </div>
      );
  }
}

API.propTypes = {
};
