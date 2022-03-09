import React from "react";
import CustomButton from "../custom-button/custom-button.comp";
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
