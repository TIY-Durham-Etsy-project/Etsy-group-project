import React, { Component } from 'react';
import '../styles/App.css';
import CustomOrder from './customorder.js';
import DetailsDropdown from './detailsdropdown.js';
import FAQs from './faqs.js';
import FavoriteButton from './favoritebutton.js';
import Header from './header.js';
import ItemHeader from './ItemHeader.js';
import ImageCarousel from './imagecarousel.js';
import MeetTheOwner from './meettheowner.js';
import Overview from './overview.js';
import ProductDescription from './productdescription.js';
import RelatedTags from './relatedtags.js';
import Reviews from './reviews.js';
import ShopIcons from './shopicons.js';
import SocialButtons from './socialbuttons.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
    this.state = {
      idvariable: "",
      listingdata: false,
      imagesdata: false,
      shopdata: false,
      shoplistingdata: false,
      shoplistingimagesdata: false
    };
  }
  // This mounts the page.
  componentDidMount() {

  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({idvariable: event.target.value});
  }
  handlesubmit(event){
    event.preventDefault();
    this.fetchData();
  }
  fetchData = () => {
    //LISTING DATA FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ listingdata: data.results });
    })
    //IMAGES FETCH
    // fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/images?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({ imagesdata: data.results });
    // })
    //PERSONALIZATION FETCH
    // fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/inventory?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({ imagesdata: data.results });
    // })
    //SHOP DATA FETCH
    fetch(`https://openapi.etsy.com/v2/shops/listing/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ shopdata: data.results });
      fetch(`https://openapi.etsy.com/v2/shops/${data.results[0].shop_id}/listings/active?limit=5&api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
        return results.json();
      }).then(data => {
        let array = [];
        let i = 0;
        while (i < 4){
          fetch(`https://openapi.etsy.com/v2/listings/${data.results[i].listing_id}/images?api_key=xu3t5vf2ok7saualskn524az`).then(results => {
            return results.json();
          }).then(data => {
            array.push(data.results[0].url_75x75);
          })
          i++
        }
        this.setState({ shoplistingdata: data, shoplistingimagesdata: array });
      })
    })
  }
  render() {
    return (
      <div className="App">
          <div className="PlayListForm">
            <form onSubmit={this.handlesubmit}>
              <input onChange={this.handleTextChange} type="text" id="idnumber"
              placeholder="ID" value={this.state.idvariable}/>
              <button type="submit">"SUBMIT"</button>
            </form>
          </div>
        <Header/>
        <ItemHeader
        shopdata={this.state.shopdata}
        shoplistingdata={this.state.shoplistingdata}
        shoplistingimagesdata={this.state.shoplistingimagesdata}/>
        <FavoriteButton/>
        <ImageCarousel imagesdata={this.state.imagesdata}/>
        <CustomOrder/>
        <DetailsDropdown/>
        <Reviews/>
        <MeetTheOwner/>
        <FAQs/>
        <ProductDescription/>
        <Overview/>
        <SocialButtons/>
        <ShopIcons/>
        <RelatedTags/>
      </div>
    );
  }
}

export default App;
