import React, { useEffect } from "react";
import SignIn from "./signin/signin.comp";
import SignUp from "./signup/signup.comp";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ currentUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) return navigate("/");
  }, [currentUser, navigate]);

  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.user,
});

export default connect(mapStateToProps)(Auth);
