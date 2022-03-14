import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./LoadingSpinner.styles";

const LoadingSpinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
