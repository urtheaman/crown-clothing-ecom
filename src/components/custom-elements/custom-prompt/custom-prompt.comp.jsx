import "./custom-prompt.styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomPrompt = ({ children, setHide }) => {
  const navigate = useNavigate();
  const okHandler = (e) => {
    if (e.target.className === "custom-prompt-container" || "btn")
      setHide(true);
    navigate("/shop");
  };
  return (
    <div className="custom-prompt-container" onClick={okHandler}>
      <div className="custom-prompt">
        <div className="content">{children}</div>
        <button className="btn" onClick={okHandler}>
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomPrompt;
