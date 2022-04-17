import React from "react";
import { StyledButton } from "./GreenButtonStyle";

export const GreenButton = ({ children, link }) => {
  return (
    <StyledButton
      onClick={() => {
        console.log(link);
        link && window.open(link);
      }}
    >
      {children}
    </StyledButton>
  );
};
