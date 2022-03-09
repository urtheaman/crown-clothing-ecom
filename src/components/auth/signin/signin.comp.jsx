import React from "react";
import CustomButton from "../../custom-button/custom-button.comp";
import FormInput from "../../form-input/form-input.comp";
import "./signin.styles.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase/init.firebase";
import { connect } from "react-redux";
import setUser from "../../../redux/user/user-action";

class SignIn extends React.Component {
  constructor({ setCurrentUser }) {
    super(setCurrentUser);
    this.setCurrentUser = setCurrentUser;

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signInHandler = () => {
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
        this.setCurrentUser(user);
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
        <form method="POST">
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
            <CustomButton type='button' onClick={this.googleSignInHandler} className="google">
              Google sign in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  setCurrentUser: (user) => dispatchEvent(setUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
