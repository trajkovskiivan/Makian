import React from 'react';

import "./ProductsShowbar.scss"

const ProductsShowbar = () => {
  return (
    <div className="products-show-bar">
      <div className="product-card">
        <div className="product-image">
          <img src={"https://images.unsplash.com/photo-1582586131113-f9f71cda5265?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="something" />
        </div>
        <div className="product-description">
          <p>Blanket</p>
          <p>Type of Blanket</p>
          <p>For Some1</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsShowbar;