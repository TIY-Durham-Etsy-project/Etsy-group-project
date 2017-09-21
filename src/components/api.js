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
      let UrlOne = "https://openapi.etsy.com/v2/listings/active?keywords=gifts&filter=gifts&api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage"
    }
    if(type==="recently"){

    }
  }


  // takes this.props.display.type as flow control.
  componentDidMount() {

    fetch('https://openapi.etsy.com/v2/listings/active?category=weddings&includes=MainImage&api_key=dza1vj8ckkf1tbkxs30wjahj')
    .then(r => r.json())
    .then((responseData) => {
      let dataArray = responseData.results;
      console.log(dataArray);
      this.setState({itemObjects: dataArray});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }


  // filter through itemObjects to remove missing values
  filterArrayOfMissingData = (array) => {
    let filteredObjects = array.filter((filterObject) => {
      return filterObject.taxonomy_path && filterObject.MainImage.url_170x135
    })
    console.log(filteredObjects);
    return filteredObjects;
  }


  // needs to take 6 objects and make one array
    fxnCombineObjects = () => {

    }


    // needs to take an array and reduce to 6 objects (randomly)
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
          <Slider arrayOfSix={this.filterArrayOfMissingData(this.state.itemObjects)}/>
        </div>
        ):(<div></div>)
        }
      </div>
      );
    }
}

API.propTypes = {
};
