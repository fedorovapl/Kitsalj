import React from "react";
import { StyledButton, StyledSale } from "./RateButtonStyle";

export const RateButton = ({ children, sale, active }) => {
  return (
    <StyledButton sale={sale} active={active}>
      {children}
      {sale && <StyledSale>{sale}</StyledSale>}
    </StyledButton>
  );
};
