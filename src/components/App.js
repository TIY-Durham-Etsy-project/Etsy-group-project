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
import Products from './Products.js';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
          exVariable: '',
          shopIcon: '',
          shopTitle: '',
          favHeart: '',
          sampleItem: '',
          sampleItemCount:''

        };
        this.exVariableUpdate = this.exVariableUpdate.bind(this);

      }

      // This function is in case we need to set information based upon data from the homepage.
      exVariableUpdate() {
        this.setState({
          exVariable: ''
        });
      }
      // This mounts the page.
      componentDidMount() {
        fetch('https://openapi.etsy.com/v2/listings/175112598/images?api_key=xu3t5vf2ok7saualskn524az')
               .then(results => {
                 return results.json();
               })
                 .then(data => {
                   console.log(data);
                   this.setState({
                     exVariable: data,
                     shopIcon: data.results[0].url_75x75
                   });
                   console.log("state", this.state.exVariable);
                   console.log("shopIcon", this.state.shopIcon);

                 })
      }


  render() {
    return (
      <div className="App">
        <ItemHeader
         shopIcon={this.state.shopIcon}
        />
        <FavoriteButton/>
        <ImageCarousel/>
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
        <Products/>
      </div>
    );
  }
}

export default App;
