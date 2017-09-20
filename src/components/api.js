import React from 'react';

export default class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
    itemObjects: [],
  }

  componentDidMount() {
    fetch('https://openapi.etsy.com/v2/listings/trending?api_key=dza1vj8ckkf1tbkxs30wjahj&includes=MainImage')
    .then(r => r.json())
    .then(responseData => {
      this.setState({itemObjects: responseData.r.results});
    })
    .catch((error) => {
      console.log("Error with Fetching : ", error);
    });
  }

  

    render() {
      return (<div>MyComponent</div>);
    }
}

API.propTypes = {
};
