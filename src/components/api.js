import React from 'react';

export default class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
    itemObjects: [],
  }

  let openApi = "https://openapi.etsy.com/v2";
  let apiKey = "api_key=dza1vj8ckkf1tbkxs30wjahj";
  let include3 = "&category=clothing";

  componentDidMount() {
    // want to change URL with variables for different filters
    fetch(`${openApi}/listings/trending?${apiKey}&includes=MainImage`)
    .then(r => r.json())
    .then(responseData => {
      let dataArray = responseData.r.results
      this.setState({itemObjects: dataArray});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  // filter through itemObjects to remove missing values
  let filteredObjects = itemObjects.filter((filterObject) => {
    return filterObject.state = "active" && filterObject.category_path && filterObject.MainImage.url_170x135
  })

    render() {
      return (<div>MyComponent</div>);
    }
}

API.propTypes = {
};
