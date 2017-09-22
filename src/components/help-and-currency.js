import React, { Component } from 'react';
import '../styles/App.css';
import ShareLinks from './share-links.js'
const snapSize = 650;


class HelpAndCurrency extends Component {
  constructor(props){
    super(props);

        this.state= {
          media: null,
          parent: {}
        }

        this.setMedia = this.setMedia.bind(this)

      };

      setMedia() {
       this.setState({media: window.innerWidth});
     }

     componentWillMount(){
       this.setMedia();
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
          <svg>
            <path d="M12,22A10,10,0,1,1,22,12,10.012,10.012,0,0,1,12,22ZM12,4a8,8,0,1,0,8,8A8.009,8.009,0,0,0,12,4Z"></path><circle cx="12" cy="16.5" r="1.5"></circle><path d="M13,14H11a3.043,3.043,0,0,1,1.7-2.379C13.5,11.055,14,10.674,14,10a2,2,0,1,0-4,0H8a4,4,0,1,1,8,0,4,4,0,0,1-2.152,3.259A2.751,2.751,0,0,0,13,14Z">
            </path>
          </svg>
          <span>
            Need help? Visit the
            <a href="https://www.etsy.com/help?ref=ftr">help center</a>
          </span>
        </div>
        {shareLinks}
        <div className="float-right">
          <button className="locale-settings-button" onClick={()=>alert("This is your localization button!")}>
            <div className="display-table-cell dtc-one">
              <svg>

                <path fill="#FFF" mask="url(#b)" d="M-.004 4.506h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 6.502h20v-2.5h-20m0-1.5h20v-2.5h-20"></path>
                <path fill="#FFF" mask="url(#b)" d="M-.004 8.502h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 10.498h20v-2.5h-20"></path>
                <path fill="#FFF" mask="url(#b)" d="M-.004 12.506h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 14.502h20v-2.5h-20"></path>
                <path fill="#FFF" mask="url(#b)" d="M-.004 16.502h20v-2.5h-20m0 6.5h20v-2.5h-20"></path>
                <path fill="#B73C24" mask="url(#b)" d="M-.004 18.498h20v-2.5h-20"></path>
                <path fill="#00247F" mask="url(#b)" d="M-.004 10.002H10V.006H-.003"></path>
                <path d="M8.996 1.007c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m5.292 3.996c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5M7.65 7c0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.277.224-.5.5-.5s.5.223.5.5M5.005 7c0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.277.224-.5.5-.5s.5.223.5.5M2.36 7c0 .275-.225.5-.5.5-.277 0-.5-.225-.5-.5 0-.277.223-.5.5-.5.275 0 .5.223.5.5m5.29-3.997c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.645 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.645 0c0 .276-.225.5-.5.5-.277 0-.5-.224-.5-.5s.223-.5.5-.5c.275 0 .5.224.5.5m6.636 6.004c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-2.646 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5m-3 0c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5" fill="#FFF" mask="url(#b)">
                </path>

              </svg>
              United States
            </div>
            <div className="display-table-cell dtc-two">
              English (USD)
            </div>
            <div className="display-table-cell dtc-three">
              $(USD)
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default HelpAndCurrency;
