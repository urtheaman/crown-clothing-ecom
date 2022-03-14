import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundDiv>
      <span>Page Not Found</span>
    </NotFoundDiv>
  );
};

export default NotFound;

const NotFoundDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 5rem;
  font-family: "Open Sans";
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;
