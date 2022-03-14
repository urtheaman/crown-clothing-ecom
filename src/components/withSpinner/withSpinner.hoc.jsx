import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const withSpinner = (WrappedComp) => {
  const _TEMP = ({ isLoading, ...others }) => {
    return isLoading ? <LoadingSpinner /> : <WrappedComp {...others} />;
  };

  return _TEMP;
};

export default withSpinner;
