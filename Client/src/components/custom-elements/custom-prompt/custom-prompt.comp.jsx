import "./custom-prompt.styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomPrompt = ({ children, setPrompt, type, redirect='' }) => {
  const navigate = useNavigate();
  const okHandler = (e) => {
    if (
      e.target.className.includes("btn")
    )
      setPrompt(null);
    navigate(redirect);
  };

  return (
    <div className="custom-prompt-container" onClick={okHandler}>
      <div className={`${type} custom-prompt`}>
        <div className="content">{children}</div>
        <button className="btn" onClick={okHandler}>
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomPrompt;
