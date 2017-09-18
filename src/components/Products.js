
import React, { Component } from 'react';
import Product from '../components/Product.js';

export default class Products extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount(){
    fetch('https://openapi.etsy.com/v2/listings/active?api_key=4o6v874o0s0w78131mpf9ni0').then(results => {
      return results.json();
    }).then(data => {
      this.setState({items: data.results});
    })
  }

  render(){
    console.log(this.state.items);
    return(
      <div className = "products-wrapper">
        {this.state.items.map(item => <Product item={ item } key={item.listing_id}/>)}
      </div>
    )
  }
};
