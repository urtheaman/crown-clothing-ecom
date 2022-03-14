import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../redux/cart/cart.selector";
import CartItem from "../cart-item/cart-item.comp";
import CustomButton from "../../custom-elements/custom-button/custom-button.comp";
import "./cart-dropdown.styles.scss";
import { toggleHiddenState } from "../../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
    dispatch(toggleHiddenState());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <div className="empty-cart">Cart is empty</div>
        )}
      </div>
      <CustomButton onClick={checkoutHandler}>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
