import React from "react";
import { connect } from "react-redux";
import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "./checkout-item/checkout-item.comp";
import Logo from "../../assets/images/shopping-bag.svg";
import StripeButton from "../../components/stripe/stripe.comp";

const Checkout = ({ cartItems, totalAmount }) => {

    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">Product</div>
          <div className="header-block">Description</div>
          <div className="header-block">Quantity</div>
          <div className="header-block">Price</div>
          <div className="header-block">Remove</div>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })
        ) : (
          <div className="empty-cart-message">
            <span>Cart is empty</span>
            <img src={Logo} alt="empty-cart" />
          </div>
        )}
        {cartItems.length ? (
          <div className="total">TOTAL : ${totalAmount}</div>
        ) : null}
          <StripeButton className='btn' total={totalAmount} />
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectTotalAmount,
});

export default connect(mapStateToProps)(Checkout);
