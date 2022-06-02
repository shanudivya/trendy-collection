import React from "react";
import '../styles/ProductCategories.scss';
import ShoppingWomen from '../assets/images/women-s-pink-sweatshirt-and-brown-plaid-skirt-794064.jpg';
import ShoppingMen from '../assets/images/selective-focus-photo-of-man-wearing-black-turtleneck-top-837140.jpg';
import ShoppingKids from '../assets/images/boy-wearing-blue-shirt-and-red-pants-sitting-on-table-3121075.jpg';

export default function ProductCategories() {
  return (
    <div className="products-category-container">
    
       <div className="row">
       <div className="col-lg-5 secondary-intro-fisrt-image-container">
      <div className="card-product card-body-product-categories">
      <img className="card-img-top " 
       src={ShoppingMen}
       
       alt="Products" />
        <div className="card-body">
          <h3 className="card-title">
           Shop Men's
          </h3>
         
        </div>
        <div className="card-country-info">
          <a
            href="/collections/Men"
            className="stretched-link"
          > </a>
        </div>
      </div>
    </div>
    <div className="col-lg-5 secondary-intro-fisrt-image-container">    
      <div className="card-product card-body-product-categories">
      <img className="card-img-top" 
        src={ShoppingWomen}
       
       alt="Products" />
        <div className="card-body ">
        <h3 className="card-title ">
           Shop Women's
          </h3>
          <a
            href="/collections/Women"
            className="stretched-link"
          > </a>
        </div>
       
      </div>
    </div>



      </div>
    
  
         </div>
  );
}
