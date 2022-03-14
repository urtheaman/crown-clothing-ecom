import React from "react";

import "./signin.styles.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase/init.firebase";
import CustomButton from "../../../components/custom-elements/custom-button/custom-button.comp";
import FormInput from "../../../components/custom-elements/form-input/form-input.comp";
import { signInUsingPassword } from "../../../firebase/auth.firebase";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signInHandler = (e) => {
    e.preventDefault()
    signInUsingPassword(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: "",
    });
  };

  googleSignInHandler = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const user = {
          token: credential.accessToken,
          user: res.user,
        };
        console.log(user);
      })
      .catch((err) =>
        console.error(
          `Error code: ${err.code}\nError Message: ${err.message}\nEmail: ${err.email}`
        )
      );
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span className="info">Sign in with email and password</span>
        <form>
          <FormInput
            type="email"
            label="email"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />

          <div className="sign-in-btns">
            <CustomButton type="submit" onClick={this.signInHandler}>
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={this.googleSignInHandler}
              className="google"
            >
              Google sign in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
