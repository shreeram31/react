import React from 'react';
import './productt.css';

function Product() {
  return (
    <div className="container">
      <h1>Distilled Product</h1>
      
      <div className="card">
 
        <img src="https://www.livcheers.com/static/content/images/brand/bro-code.webp" alt="Product" />
        <h3>BRO CODE</h3>
        <p className="price">$1000</p>
      </div>

    </div>
  );
}

export default Product;