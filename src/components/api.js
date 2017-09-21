import React from 'react';

export default class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
    itemObjects: [],
  }


  let openApi = "https://openapi.etsy.com/v2";
  let apiKey = "api_key=dza1vj8ckkf1tbkxs30wjahj";
  // params/filters -- only work with listings/active
  let size = "limit=100&offset=0";
  // these might move to category.js
  if(this.props.display.type==="category"){
    // maybe change: push to an array to map over -> 6 API calls
    let keywords1 = ""
    let keywords2 = "&keywords=Jewelry";
    let filter2 = "&filter=Jewelry";
    let keywords3 = "&keywords=Clothing";
  }

  componentDidMount() {
    // want to change URL with variables for different filters
    fetch(`${openApi}/listings/active?${apiKey}&includes=MainImage${keywords2}${filter2}`)
    .then(r => r.json())
    .then(responseData => {
      let dataArray = responseData.r.results
      this.setState({itemObjects: dataArray});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  // run for each category
  function filterArrayByTaxonomyPath(array, category){
    let catFilteredArray = array.filter((object) => {
      return object.taxonomy_path = category;
    })
    return catFilteredArray;
  }

  // filter through itemObjects to remove missing values
  function filterArrayOfMissingData(array){
    let filteredObjects = itemObjects.filter((filterObject) => {
      return filterObject.state = "active" && filterObject.taxonomy_path && filterObject.MainImage.url_170x135
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
        let listInfo = filterArrayOfMissingData(itemObjects);
        this.props.callbackFromParent(listInfo);
    },

    render() {
      return (
        <div>
          <h3>I could return nothing if = false</h3>
        </div>
      );
    }
}

API.propTypes = {
};
