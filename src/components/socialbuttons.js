import React, { Component } from 'react';

export default class SocialButtons extends Component {
  render(){
    return(
      <div className="socialbuttons">
      <div className="add-to">
      <button className = "fav-heart">&hearts; Favorite </button>
      <button className = "add-to">&#9776; Add to &#9662; </button>
      <hr/>
      </div>
      <a href="http://fontawesome.io/icon/facebook-official/" className="fa fa-facebook">Share</a>
      <a href="http://fontawesome.io/icon/pinterest/" className="fa fa-pinterest"> Save </a>
      <a href="http://fontawesome.io/icon/twitter/" className="fa fa-twitter"> Tweet </a>
      <hr/>
      </div>
    )
  }
};
