import React from "react";
import { StyledButton } from "./PrimaryButtonStyle";

export const PrimaryButton = ({ children, icon }) => {
  return (
    <StyledButton>
      {icon && <img src={icon} alt=""></img>}
      {children}
    </StyledButton>
  );
};
