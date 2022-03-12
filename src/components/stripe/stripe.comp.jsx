import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/images/crown.svg";
import CustomPrompt from "../custom-elements/custom-prompt/custom-prompt.comp";
import { clearCart } from "../../redux/cart/cart.action";

const StripeButton = ({ total, dispatch, ...props }) => {
  const [hide, setHide] = useState(true);
  const onToken = (token) => {
    console.log(token);
    dispatch(clearCart());
    setHide(false);
  };
  return (
    <Fragment>
      <StripeCheckout
        {...props}
        stripeKey="pk_test_51KcT3XSAQjlF6UAqKfwSJykUdfTSRipr0VTAu1yiejmvi3TkdBEGiX3Qw4aQXKfeTBvGhuDGcD0vSJSYCzYtkfio00aSqKqp1H"
        name="Crown Clothing"
        description="Clothes you need"
        image={Logo}
        ComponentClass="div"
        panelLabel="Order Now"
        amount={total * 100}
        currency="USD"
        locale={Navigator.locale}
        email=""
        shippingAddress
        billingAddress
        zipCode
        allowRememberMe
        bitcoin
        token={onToken}
      />
      {!hide ? (
        <CustomPrompt setHide={setHide}>
          Payment Successful! Your Product will be delivered soon.
        </CustomPrompt>
      ) : null}
    </Fragment>
  );
};

export default connect()(StripeButton);
