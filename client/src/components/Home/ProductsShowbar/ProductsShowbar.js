import React from 'react';

import "./ProductsShowbar.scss"

const ProductsShowbar = () => {
  return (
    <div className="products-show-bar bar-cards">

      <div className="product-card">
        <div className="product-image">
          <img src={"https://images.unsplash.com/photo-1590954361270-cccca456f6ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="something" />
        </div>
        <div className="product-description">
          <p>Product desc</p>
          <p>Type of Product</p>
          <p>For Some1</p>
          <a href="/" >shop now</a>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src={"https://images.unsplash.com/photo-1590954361270-cccca456f6ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="something" />
        </div>
        <div className="product-description">
          <p>Product desc</p>
          <p>Type of Product</p>
          <p>For Some1</p>
          <a href="/" >shop now</a>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src={"https://images.unsplash.com/photo-1590954361270-cccca456f6ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="something" />
        </div>
        <div className="product-description">
          <p>Product desc</p>
          <p>Type of Product</p>
          <p>For Some1</p>
          <a href="/" >shop now</a>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src={"https://images.unsplash.com/photo-1590954361270-cccca456f6ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} alt="something" />
        </div>
        <div className="product-description">
          <p>Product desc</p>
          <p>Type of Product</p>
          <p>For Some1</p>
          <a href="/" >shop now</a>
        </div>
      </div>

    </div>
  );
}

export default ProductsShowbar;