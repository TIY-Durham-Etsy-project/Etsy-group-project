import React, { Component } from 'react';
import Slider from './slider.js';

export default class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemObjects: null,
      listInfo: []
    }
    // this.props.display.type = "type of Slider" ex: category
  }

  getUrlToCall = (type) =>{
    if(type==="category"){
      let UrlArray = ["https://openapi.etsy.com/v2/listings/active?category=home_and_living&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj", "https://openapi.etsy.com/v2/listings/active?keywords=Jewelry&filter=Jewelry&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage", "https://openapi.etsy.com/v2/listings/active?keywords=Clothing&filter=Clothing&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage", "https://openapi.etsy.com/v2/listings/active?category=toys&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj",  "https://openapi.etsy.com/v2/listings/active?category=craft_supplies_and_tools&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj", "https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj"];
    }
    if(type==="gifts"){

    }
  }
  // // params/filters -- only work with listings/active
  // these might move to category.js
  // if(this.props.display==="category"){
    // maybe change: push to an array to map over -> 6 API calls


  // want to change URL with variables for different filters
  componentDidMount() {
    // fetch(`${openApi}/listings/active?${apiKey}&includes=MainImage${keywords2}${filter2}`)
    fetch('https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj')
    .then(r => r.json())
    .then((responseData) => {
      let dataArray = responseData.results;
      console.log(dataArray);
      this.setState({itemObjects: dataArray});
    })
    // .then(
      // this.setState({listInfo: this.filterArrayOfMissingData(this.state.itemObjects)})
      //   // return this.props.callbackFromParent(listInfo);

    // )
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
    console.log(this.state.itemObjects);
    console.log(this.state.listInfo);
  }

  // run for each category
  filterArrayByTaxonomyPath(array, category){
    let catFilteredArray = array.filter((object) => {
      return object.taxonomy_path = category;
    })
    return catFilteredArray;
  }

  // filter through itemObjects to remove missing values
  filterArrayOfMissingData = (array) => {
    let filteredObjects = array.filter((filterObject) => {
      return filterObject.taxonomy_path && filterObject.MainImage.url_170x135
    })
    console.log(filteredObjects);
    return filteredObjects;
  }

  // categories needs ----
  // need one object from each of 6 categories. Either standard 6 or random
  // standard = home & living, jewelry, clothing, toys & games, craft supplies, weddings

  // gifts needs ----

    someFn = () => {
        // [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
        // let listInfo = filterArrayOfMissingData(this.state.itemObjects);
        // return this.props.callbackFromParent(listInfo);
    }

    trimToSix() {
      let arrayToMap = [];
      for (var i = 0; i < 6; i++) {
        arrayToMap.push(this.props.arrayFromAPI[i]);
      }
      this.setState({arrayOfSix: arrayToMap});
    }

    render() {
      return (
        <div>
        {this.state.itemObjects ? (

        <div>
          <Slider arrayFromAPI={this.filterArrayOfMissingData(this.state.itemObjects)}/>
        </div>
        ):(<div></div>)
        }
      </div>
      );
    }
}

API.propTypes = {
};
