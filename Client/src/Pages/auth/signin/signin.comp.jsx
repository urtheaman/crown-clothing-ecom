import React, { useState } from "react";

import "./signin.styles.scss";
import CustomButton from "../../../components/custom-elements/custom-button/custom-button.comp";
import FormInput from "../../../components/custom-elements/form-input/form-input.comp";
import {
  emailSigninStart,
  googleSigninStart,
} from "../../../redux/user/user-action";
import { connect } from "react-redux";

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(() => value) : setPassword(() => value);
  };

  const signInHandler = (e) => {
    e.preventDefault();
    emailSigninStart({ email: email, password: password });
    setEmail(() => "");
    setPassword(() => "");
  };

  const googleSigninHandler = () => {
    googleSigninStart();
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span className="info">Sign in with email and password</span>
      <form>
        <FormInput
          type="email"
          label="email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={changeHandler}
        />

        <div className="sign-in-btns">
          <CustomButton type="submit" onClick={signInHandler}>
            Sign In
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSigninHandler}
            className="google"
          >
            Google sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSigninStart: (authObject) => dispatch(emailSigninStart(authObject)),
  googleSigninStart: () => dispatch(googleSigninStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
