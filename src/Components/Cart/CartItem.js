import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalCartContext } from "../../context/CartContext";
import {  useToasts } from 'react-toast-notifications';

export default function CartItem(props) {
  const { addToast } = useToasts();
  let product_name = props.data.productname.replace(/ /g, "_");
  const { removeItemFromCart, saveItemforLater } = useContext(
    GlobalCartContext
  );

  function removeFromCart(id) {
    removeItemFromCart(id);
    addToast(props.data.productname+" successfully removed from your cart", { appearance: 'info', autoDismiss: true, })
   
  }

  function saveForLater(data) {

    const savedItem = {
    };
    saveItemforLater(savedItem);
    removeItemFromCart(data.cartItemId);
    addToast(props.data.productname+" has been saved for later shopping", { appearance: 'success', autoDismiss: true, })
   
  }
  return (
    <>
      <tr className="row-cart-item ">
        <td className="row-cart-item-image-container">
          <div className="row-cart-item-image">
            <Link
              to={`/catalog/item/${props.data.id}/${props.data.productname}`}
            >
              <img
                className="card-img-top"
                src={(props.data.product_image)}
                alt={props.data.product_image}
              />
            </Link>
          </div>
        </td>
        <td className="row-cart-item-description-container">
          <div className="row-cart-item-description">
            <Link
              className="cat-item-link-product-details"
              to={`/catalog/item/${props.data.id}/${props.data.productname}`}
            >
              <h2 className="product-name">{props.data.productname}</h2>
            </Link>
            <h3 className="product-color">Color: {props.data.color}</h3>
            <h3 className="product-color">QTY: {props.data.product_selected_qty}</h3>

          
            <button
              className="btn-cart-item-action-remove"
              onClick={() => removeFromCart(props.data.cartItemId)}
            >
              Remove
            </button>
            

           
          </div>
        </td>
        <td className="row-cart-item-price-container">
          <div className="row-cart-item-price">
            {/* <h3 className="product-prices"></h3> */}
            {props.data.discount > 0 ? (
              <h3>
                {" "}
                <span className="product-price-after-discount">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "INR",
                  }).format(
                    (props.data.price * props.data.product_selected_qty)-
                      ((props.data.price *props.data.product_selected_qty) *props.data.discount) / 100
                  )}
                </span>{" "}
                <span className="product-price-before-discount">
                  {" "}
                  {
                    /* R{props.data.price} */
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "INR",
                    }).format(props.data.price*props.data.product_selected_qty)
                  }
                </span>{" "}
                <span className="product-discount-rate">
                  -{props.data.discount}%{" "}
                </span>
              </h3>
            ) : (
              <h3>
                {" "}
                <span className="product-price-whit-no-discount">
                  {
                    // props.data.price
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "INR",
                    }).format(props.data.price)
                  }
                </span>
              </h3>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}
