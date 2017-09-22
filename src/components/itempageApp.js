import React, { Component } from 'react';
import '../styles/App.css';
import CustomOrder from './customorder.js';
import DetailsDropdown from './detailsdropdown.js';
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
import LoadingPage from './loadingpage.js';

class ItemPageApp extends Component {
  constructor(props) {
    super(props);
    this.handleIncommingData = this.handleIncommingData.bind(this);
    this.goBacktoHome = this.goBacktoHome.bind(this);
    this.state = {
      // idvariable: "499471843",
      idvariable: "",
      listingdata: false,
      listinginventorydata: false,
      imagesdata: false,
      shippinginfodata: false,
      shopdata: false,
      shoplistingdata: false,
      shoplistingimagesdata: false,
      shoplistingimagesdatalarge: false,
      feedbackdata: false,
    };
  }
  // This mounts the page.
  componentWillMount() {
    this.setState({ idvariable: this.props.idvariable,
    listingdata: false,
    listinginventorydata: false,
    imagesdata: false,
    shippinginfodata: false,
    shopdata: false,
    shoplistingdata: false,
    shoplistingimagesdata: false,
    shoplistingimagesdatalarge: false,
    feedbackdata: false, });
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.idvariable !== prevState.idvariable){
      this.fetchData();
    }
  }
  handleIncommingData(value){
    this.setState({ idvariable: value,
    listingdata: false,
    listinginventorydata: false,
    imagesdata: false,
    shippinginfodata: false,
    shopdata: false,
    shoplistingdata: false,
    shoplistingimagesdata: false,
    shoplistingimagesdatalarge: false,
    feedbackdata: false, });
    // this.fetchData();
  }
  goBacktoHome(){
    this.props.sendDataUpToParent(false);
  }
  fetchData = () => {
    //LISTING DATA FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}?api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ listingdata: data.results[0] });
      // FEEDBACK FETCH
      fetch(`https://openapi.etsy.com/v2/users/${data.results[0].user_id}/feedback/as-subject?limit=100&api_key=4o6v874o0s0w78131mpf9ni0`).then(results => {
        return results.json();
      }).then(data => {
        this.setState({ feedbackdata: data.results });
      })
    })
    // SHIPPING INFO FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/shipping/info?api_key=88vhbyb8aqimszfdxfugwgnd`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ shippinginfodata: data.results[0] });
    })
    // IMAGES FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/images?api_key=2o28zyiccm6dxpspusptspb0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ imagesdata: data.results });
    })
    // PERSONALIZATION FETCH
    fetch(`https://openapi.etsy.com/v2/listings/${this.state.idvariable}/inventory?api_key=2o28zyiccm6dxpspusptspb0`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ listinginventorydata: data.results });
    })
    //SHOP DATA FETCH (INCLUDES USERDATA)
    fetch(`https://openapi.etsy.com/v2/shops/listing/${this.state.idvariable}?api_key=nn7mkmoan2c7xamo4c3pnax4`).then(results => {
      return results.json();
    }).then(data => {
      this.setState({ shopdata: data.results });
      //FETCHES ACTIVE SHOP LISTINGS
      fetch(`https://openapi.etsy.com/v2/shops/${data.results[0].shop_id}/listings/active?limit=5&api_key=nn7mkmoan2c7xamo4c3pnax4`).then(results => {
        return results.json();
      }).then(data => {
        let i = 0;
        while (i < 4){
          //THIS FETCHES THE IMAGES OF THE SHOPS FEATURES
          fetch(`https://openapi.etsy.com/v2/listings/${data.results[i].listing_id}/images?api_key=xu3t5vf2ok7saualskn524az`).then(results => {
            return results.json();
          }).then(data => {
            this.setState(prevState => ({
              shoplistingimagesdata: [...prevState.shoplistingimagesdata, data.results[0].url_75x75],
              shoplistingimagesdatalarge: [...prevState.shoplistingimagesdatalarge, data.results[0].url_170x135]
            }))
          })
          i++
        }
        this.setState({ shoplistingdata: data });
      })
    })
  }
  render() {
    return (
      <div>
      {this.state.shoplistingdata ? (
        <div className="ItemPageApp" key={this.state.idvariable}>
          <div className="backbutton-item-page">
            <form onSubmit={this.goBacktoHome}>
              <button type="submit">"GoBack"</button>
            </form>
          </div>
          <ItemHeader
          sendDataUpToParent={this.handleIncommingData}
          shopdata={this.state.shopdata}
          shoplistingdata={this.state.shoplistingdata}
          shoplistingimagesdata={this.state.shoplistingimagesdata}/>
          <div className = "item-page-wrapper">
            <div className = "left-content">
              <FavoriteButton/>
              <ImageCarousel imagesdata={this.state.imagesdata}/>
              <CustomOrder/>
              <DetailsDropdown
              listingdata={this.state.listingdata}/>
              <Reviews
              shopdata={this.state.shopdata}
              feedbackdata={this.state.feedbackdata}/>
              <MeetTheOwner
                shopdata={this.state.shopdata}/>
            </div>
            <div className = "right-content">
              <ProductDescription
              listingdata={this.state.listingdata}
              listinginventorydata={this.state.listinginventorydata}/>
              <Overview
              shopdata={this.state.shopdata}
              listingdata={this.state.listingdata}
              shippinginfodata={this.state.shippinginfodata}/>
              <SocialButtons/>
              <ShopIcons
                sendDataUpToParent={this.handleIncommingData}
                shopdata={this.state.shopdata}
                shoplistingdata={this.state.shoplistingdata}
                shoplistingimagesdatalarge={this.state.shoplistingimagesdatalarge}
              />
            </div>
          </div>
          <RelatedTags listingdata={this.state.listingdata}/>
        </div>
      ) : (<div><LoadingPage/></div>)}
      </div>
    );
  }
}

export default ItemPageApp;
