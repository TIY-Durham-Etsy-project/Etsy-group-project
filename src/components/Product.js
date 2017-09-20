import React from 'react';

const Product = ({ item }) => (
  <div className = "results">
    <p>Product Name: {item.title}</p>
  </div>
);

export default Product;
