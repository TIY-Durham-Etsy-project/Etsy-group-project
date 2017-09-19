import React, { Component } from 'react';

export default class FavoriteButton extends Component {
  render(){
    return(
      <div className="favorite-button">
        <div className = "fav-btn">
      <button className = "fav-heart single-fav">&hearts; Favorite </button>
      </div>
      <p className="item-like">
        <strong>Like this item?</strong><br/> Add it to your favorites to revisit it later.</p>
      </div>
    )
  }
};
