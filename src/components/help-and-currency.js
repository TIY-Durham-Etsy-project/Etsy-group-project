import React, { Component } from 'react';
import '../styles/App.css';
import ShareLinks from './share-links.js'
const snapSize = 650;


class HelpAndCurrency extends Component {
  constructor(props){
    super(props);

        this.state= {
          media: 0,
          parent: {}
        }

        this.setMedia = this.setMedia.bind(this)

      };

      setMedia() {
       this.setState({media: window.innerWidth});
     }


      componentDidMount(){
        window.addEventListener("resize", this.setMedia);
      }


  render() {
    let media = this.state.media;

    let shareLinks = null;
    if (media < snapSize+1){
      shareLinks = <ShareLinks />;
    }

    return (
      <div className="HelpAndCurrency">
        <div className="float-left">
          <img src={require("./logo.svg")} alt="?" height='20'/>
          <span>
            Need help? Visit the
            <a href="https://www.etsy.com/help?ref=ftr">help center</a>
          </span>
        </div>
        {shareLinks}
        <div className="float-right">
          <button className="locale-settings-button" onClick={()=>alert("This is your localization button!")}>
            <div className="display-table-cell">
              <img src={require("./logo.svg")} alt="flag" height='20'/>
              United States
            </div>
            <div className="display-table-cell">
              English (USD)
            </div>
            <div className="display-table-cell">
              $(USD)
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default HelpAndCurrency;
