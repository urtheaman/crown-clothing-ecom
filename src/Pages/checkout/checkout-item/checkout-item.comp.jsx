import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, dispatch }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</span>
        <span className="qt-number">{quantity}</span>
        <span className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</span>
      </div>
      <div className="price">{price}</div>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem, true))}
      >
        &#10006;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
