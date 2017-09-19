import React, { Component } from 'react';
import '../styles/App.css';
import CustomOrder from './customorder.js';
import DetailsDropdown from './detailsdropdown.js';
import FAQs from './faqs.js';
import FavoriteButton from './favoritebutton.js';
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
      listingdata: "",
      imagesdata: "",
      userdata: "",
      shopdata: "",
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
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      console.log(data.results);
      this.setState({ listingdata: data.results });
    })
    fetch(`https://openapi.etsy.com/v2/shops/listing/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      console.log(data.results);
      console.log(data.results[2]);
      this.setState({ shopdata: data.results, userdata: data.results[2] });
    })
    // fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/images?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
    //   return results.json();
    // }).then(data => {
    //   this.setState({ imagesdata: data.results });
    // })
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
        <ItemHeader/>
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
