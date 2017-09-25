import React, { Component } from 'react';
import Slider from './slider.js';

export default class API extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
    this.reloadSlider = this.reloadSlider.bind(this);
    this.state = {
      // itemObjects: null,
      meta: false,
      sixArrays: [],
      mergedArray: [],
      visitedIdsArray: [],
      visitedIdsAlreadyFetched: [],
      visited: [],
      visitedReady: false,
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
      trendingUrl: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/trending?includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj",
      category :[
          {stateArray: "homeAndLiving", url: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?category=home_and_living&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "jewelry", url: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?keywords=Jewelry&filter=Jewelry&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "clothing", url: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?keywords=Clothing&filter=Clothing&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
          {stateArray: "toysAndGames", url: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?category=toys&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "crafty", url:  "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?category=craft_supplies_and_tools&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"},
          {stateArray: "weddings", url: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"}],
      giftUrl :[
          {stateArray: "gifts", url: "https://boiling-castle-73930.herokuapp.com/https://openapi.etsy.com/v2/listings/active?keywords=gifts&filter=gifts&limit=100&offset=0&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"},
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
    const proxyurl = "https://boiling-castle-73930.herokuapp.com/";
    var headers = new Headers();
    headers['access-control-allow-origin'] = '*';
    var fetchConfig = { method: 'GET',
                   headers: headers,
                   mode: 'cors',
                   cache: 'default' };
        if(this.props.idsOfVisitedPages){
          this.props.idsOfVisitedPages.map((id) => {
            if(!this.state.visitedIdsAlreadyFetched.includes(id)){
              return (
                fetch(`${proxyurl}https://openapi.etsy.com/v2/listings/${id}?includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj`, fetchConfig)
                .then(r => r.json())
                .then((responseData) => {
                  let dataArray = responseData.results;
                  let holderArray = this.state.visited;
                  holderArray.push(dataArray[0]);
                  this.setState({visited: holderArray});
                  let idHolder = this.state.visitedIdsAlreadyFetched;
                  idHolder.push(id);
                  this.setState({visitedIdsAlreadyFetched: idHolder});
                  this.setState({visitedReady: false});
                })
                .catch((error) => {
                  console.log("Error with Fetching : ", error);
                })
              )
            }
          })
        }
        if(this.props.display.type==="Trending"){
          fetch(this.state.trendingUrl, fetchConfig)
          .then(r => r.json())
          .then((responseData) => {
            let dataArray = this.filterArrayOfMissingData(responseData.results);
            this.setState({trending: dataArray});
          })
          .catch((error) => {
            console.log("Error with Fetching : ", error);
          });
        }
        if(this.props.display.type==="Gifts"){
          fetch(this.state.giftUrl[0].url, fetchConfig)
          .then(r => r.json())
          .then((responseData) => {
            let dataArray = this.filterArrayOfMissingData(responseData.results);
            // let forNow = this.state.giftUrl[0].url;
            this.setState({gifts: dataArray});
          })
          .catch((error) => {
            console.log("Error with Fetching : ", error);
          });
        }
        if(this.props.display.type==="Category"){
          this.state.category.map((cat) => {
            return (
              fetch(cat.url, fetchConfig)
              .then(r => r.json())
              .then((responseData) => {
                let dataArray = this.filterArrayOfMissingData(responseData.results);
                let currentArray = cat.stateArray;
                this.setState({[currentArray]: dataArray});
              })
              .catch((error) => {
                console.log("Error with Fetching : ", error);
              })
            )
          })
        }
  }

  componentDidUpdate() {
    if(this.state.visited[0] && this.state.visited.length===this.props.idsOfVisitedPages.length && this.state.visitedReady===false){
      this.setState({display: "Recently viewed & more"});
      if(this.state.visited.length>=6){
        this.trimToSix(this.state.visited);
        this.setState({visitedReady: true});
        this.setState({meta: true});
      }
      if(this.state.visited.length<6 && this.state.trending){
        this.mergeVisitedAndTrending(this.state.visited, this.state.trending);
        this.setState({visitedReady: true});
        this.setState({meta: true});
      }
    }
    if(this.state.trending && this.state.trendingReady===false){
      this.trimToSix(this.state.trending);
      this.setState({trendingReady: true});
      this.setState({meta: true});
    }
    if(this.state.gifts && this.state.giftsReady===false){
      this.trimToSix(this.state.gifts);
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
    let randomNumArray = [];
    for (var i = 0; i < fxnArray.length; i++) {
      let trojan = fxnArray[i].stateArray;
      randomNumber = Math.floor(Math.random() * eval(`this.state.${trojan}.length`));
      if(!randomNumArray.includes(randomNumber)){
        bsArray.push(eval(`this.state.${trojan}[${randomNumber}]`));
        randomNumArray.push(randomNumber);
      }else{
        i -= 1;
      }
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

  mergeVisitedAndTrending = (visited, trending) =>{
    let arrayToMap = [];
    let randomNumber = 0;
    let randomNumArray = [];
    for (var i = 0; i < visited.length; i++) {
      arrayToMap.push(visited[i]);
    }
    for (var j = 0; j < (6-visited.length); j++) {
      randomNumber = Math.floor(Math.random() * trending.length);
      if(!randomNumArray.includes(randomNumber)){
        arrayToMap.push(trending[randomNumber]);
        randomNumArray.push(randomNumber);
      }else{
        j -= 1;
      }
    }
    this.setState({mergedArray: arrayToMap});
      return this.state.mergedArray
  }

  render() {
      return (
        <div>
          {(this.state.trendingReady || this.state.categoryReady || this.state.giftsReady) ? (
            <div>
              <Slider sendDataUp={this.sendDataUp}
              reloadSlider={this.reloadSlider}
              displayMeta={this.state.meta}
              arrayOfSix={this.state.visitedReady ?
                this.state.mergedArray :
                this.state.sixArrays
              }
              headline={this.state.visitedReady ?
                this.state.display :
                this.props.display.type
              }
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
