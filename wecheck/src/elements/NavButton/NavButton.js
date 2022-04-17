import React from "react";
import { StyledButton } from "./NavButtonStyle";

export const NavButton = ({ children, link }) => {
  return (
    <StyledButton
      onClick={() => {
        window.open(link);
      }}
    >
      {children}
    </StyledButton>
  );
};
