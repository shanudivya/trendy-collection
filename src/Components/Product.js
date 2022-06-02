import React,{useContext} from "react";
import { faCartPlus, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GlobalCartContext} from '../context/CartContext';
import {  useToasts } from 'react-toast-notifications';
import {v4 as uuidv4} from 'uuid';
import "../styles/Product.scss";



export default function Product(props) {
  const { addToast } = useToasts();
  
  
  const {addItemTocart}= useContext(GlobalCartContext)
  
  function  handleAddToCart(data) {
    
    const stockData =  data.inventoryInfo
    const itemsStockData = stockData.map(stockLevel=>(stockLevel.inventory))
    const newCartItem={
      productname: data.productName,
      cartItemId: uuidv4(),
      id: data.productId,
      price: data.price,
      discount: data.discount,
      color: data.productId,
      size: data.sizes,
      selectedSize:0,//data.size[0],
      product_status: data.advanceOrderTag,
      product_stock: itemsStockData,
      product_selected_qty:1,
      product_image: data.searchImage,
      brand: data.brand,
      product_details: data.productName
    }
    addItemTocart(newCartItem);
    addToast(data.productName+" successfully added to your cart", { appearance: 'success', autoDismiss: true, })
   
  }
   
  const stockData =  props.data.inventoryInfo
  const itemStockData = stockData.map(stockLevel=>(stockLevel.inventory))
  const productLevel =itemStockData;
  
  let bannerStockLevel = "";
  let stockLevelMessage = "";
  let product_name = props.data.productName.replace(/ /g, "_");
  
  if (productLevel > 0 && productLevel < 100) {
    bannerStockLevel = "product-banner-stock-level-low";
    stockLevelMessage = `Low stock, only ${productLevel} left.`;
  } else if (productLevel === 0) {
    bannerStockLevel = "product-banner-stock-level-out-of-stock";
    stockLevelMessage = `Out of  stock`;
  }
  
 
  return (
    <div className="col-lg-4 col-md-6 col-sm-7  col-product-container">
      <div className="card-product">
          
          <img
            className="card-img-top"
            src={props.data.searchImage}
            alt='SearchImage'
          />

        <div
          className={`${
            props.data.searchImage === "New"
              ? "product-banner-new"
              : "product-banner-trending"
          }`}
        >
          {props.data.productName}
        </div>
        <div className={bannerStockLevel}>{stockLevelMessage}</div>
        <div className="card-body">
          <h2 className="card-title">
            {props.data.productName}</h2>
          <div className="row">
            <div className="col-lg-7  col-md-6 col-sm-6">
              {props.data.discount > 0 ? (
                <h3>
                  {" "}
                  <span className="product-price-after-discount">
                    
                    {
                      
                    new Intl.NumberFormat('en-US', {style: 'currency', currency:'INR'}).format( props.data.price
                    )
                  
                  }
                  </span>{" "}
                  <span className="product-price-before-discount">
                    {" "}
                    {
                 
                    new Intl.NumberFormat('en-US', {style: 'currency', currency:'INR'}).format(  props.data.mrp) 
                    }
                           
                  </span>{" "}
                  <span className="product-discount-rate">
                    -{props.data.discountDisplayLabel}{" "}
                  </span>
                </h3>
              ) : (
                <h3>
                  {" "}
                  <span className="product-price-whit-no-discount">
                    {
                 
                    new Intl.NumberFormat('en-US', {style: 'currency', currency:'INR'}).format(  props.data.price) 
                    }
                  </span>
                </h3>
              )}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 ">
              <div className="card-product-action-icons">
                {2 >=1 ?
                <span
                  name="id"
                  value={props.data.productId}
                  className="card-product-action-cart-icon add-to-cart-icon"
                  
                  onClick={ () => handleAddToCart(props.data)}
                >
         
                  <FontAwesomeIcon 
                  icon={faCartPlus}
                 
                   />
                </span>
                :""}

                <span>
                  <a
              
                    className="card-product-action-cart-icon"
                  >
                    <FontAwesomeIcon icon={faSearchPlus} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
