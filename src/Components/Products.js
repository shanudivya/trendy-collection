import React, { useState, useEffect } from "react";
//import data from "../data/Allproducts.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Products.scss";
import Product from "./Product";

export default function Products(props) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProducts] = useState([]);
  const [searchresult, setsearchresult] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://demo7303877.mockable.io/")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setProducts(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}, [])
const prdData = product
const data = prdData.products

  const collectionname = props.collectionname;
  let products = [];
  let header_collection;
console.log(data);
  switch (collectionname) {
    case "Women":
      if(data!=undefined)
      {
      products = data.filter((product) => product.gender === collectionname);
      header_collection = "Best of " + collectionname.toUpperCase();
      }
      break;
    case "Men":
      if(data!=undefined)
       {products = data.filter((product) => product.gender === collectionname);
      header_collection = "Best of " + collectionname.toUpperCase();
    }
      break;
    default:
      products = data;
      header_collection="Products list";
  }

  return (
    product &&
    <div className="container-products">
      <div className="header-products">
        <h1>
        
            {header_collection}
        </h1>
      </div>

      <div className="row">
      {data!=undefined&&products.map((product) => (
          <Product data={product} key={product.productId} />
        ))}
      </div>
    </div>
  );
}
