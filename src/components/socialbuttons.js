import React, { Component } from 'react';

export default class SocialButtons extends Component {
  render(){
    return(
      <div className="socialbuttons">
        <div className = "favorite-and-addto-btns">
          <button className = "fav-heart">&hearts; Favorite </button>
          <button className = "add-to-btn">&#9776; Add to &#9662; </button>
        </div>
        <div className = "facebook-pinterest-twitter-icons">
          <button className = "social-fake-buttons">
          <div><a href="http://fontawesome.io/icon/facebook-official/" className="fa fa-facebook"></a>
            <span className = "social-text">Share</span>
          </div>
          </button>
          <button className = "social-fake-buttons">
          <div><a href="http://fontawesome.io/icon/pinterest/" className="fa fa-pinterest"></a>
          <span className = "social-text">Save</span>
          </div>
        </button>
        <button className = "social-fake-buttons">
          <div>
            <a href="http://fontawesome.io/icon/twitter/" className="fa fa-twitter"></a>
            <span className = "social-text">Tweet</span>
          </div>
        </button>
      </div>
    </div>
    )
  }
};
