import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/images/crown.svg";
import CustomPrompt from "../custom-elements/custom-prompt/custom-prompt.comp";
import { clearCart } from "../../redux/cart/cart.action";
import axios from "axios";

const StripeButton = ({ total, dispatch, ...props }) => {
  // if (process.env.NODE_ENV !== "production") {
  //   require("dotenv").config({
  //     path: "../../../.env",
  //   });
  // }
  const [prompt, setPrompt] = useState(null);
  const price = total * 100; // in cents

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        token: token,
        amount: price,
      },
    });
    dispatch(clearCart());
    setPrompt(() => (
      <CustomPrompt setPrompt={setPrompt}>
        Payment Successful! Your Product will be delivered soon.
      </CustomPrompt>
    ));
  };
  return (
    <Fragment>
      {prompt}
      <StripeCheckout
        {...props}
        stripeKey="pk_test_51KcT3XSAQjlF6UAqKfwSJykUdfTSRipr0VTAu1yiejmvi3TkdBEGiX3Qw4aQXKfeTBvGhuDGcD0vSJSYCzYtkfio00aSqKqp1H"
        name="Crown Clothing"
        description="Clothes that you need"
        image={Logo}
        ComponentClass="div"
        panelLabel="Order Now"
        amount={price}
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
    </Fragment>
  );
};

export default connect()(StripeButton);
