import React, { Component } from 'react';

export default class FavoriteButton extends Component {
  render(){
    return(
      <div className="favorite-button">
      <button className = "fav-heart">&hearts; Favorite </button>
      <p className="item-like">Like this item?<br/> Add it to your favorites to revisit it later.</p>
      </div>
    )
  }
};
