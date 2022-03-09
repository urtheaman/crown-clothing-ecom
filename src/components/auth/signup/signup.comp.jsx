import React from "react";
import CustomButton from "../../custom-button/custom-button.comp";
import FormInput from "../../form-input/form-input.comp";
import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      conformPassword: "",
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signUpHandler = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.conformPassword)
      alert("Passwords don't match");
    else {
      console.log(this.state);
      this.setState({
        name: "",
        email: "",
        password: "",
        conformPassword: "",
      });
    }
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account.</h2>
        <span className="info">Create Account with email and password</span>
        <form method="POST">
          <FormInput
            type="text"
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <FormInput
            type="password"
            name="conformPassword"
            label="Conform Password"
            value={this.state.conformPassword}
            onChange={this.changeHandler}
          />
          <CustomButton type="submit" onClick={this.signUpHandler}>
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
