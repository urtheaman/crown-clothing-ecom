import React from "react";
import CustomButton from "../../../components/custom-elements/custom-button/custom-button.comp";
import CustomPrompt from "../../../components/custom-elements/custom-prompt/custom-prompt.comp";
import FormInput from "../../../components/custom-elements/form-input/form-input.comp";
import { singnUpUsingPassword } from "../../../firebase/auth.firebase";
import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      conformPassword: "",
      prompt: null,
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  signUpHandler = (e) => {
    e.preventDefault();
    if (Object.values(this.state).includes("")) {
      this.setState({
        prompt: (
          <CustomPrompt
            setPrompt={(val) => this.setState({ prompt: val })}
          >
            Fill the complete form
          </CustomPrompt>
        ),
      });
    } else if (this.state.password !== this.state.conformPassword) {
      this.setState({
        prompt: (
          <CustomPrompt
            setPrompt={(val) => this.setState({ prompt: val })}
          >
            Passwords don't match
          </CustomPrompt>
        ),
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        prompt: (
          <CustomPrompt
            setPrompt={(val) => this.setState({ prompt: val })}
          >
            Weak Password!
          </CustomPrompt>
        ),
      });
    } else {
      singnUpUsingPassword(this.state.name, this.state.email, this.state.password);
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
        {this.state.prompt}
        <h2>I don't have an account.</h2>
        <span className="info">Create Account with email and password</span>
        <form>
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
