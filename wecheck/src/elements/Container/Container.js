import React from "react";
import { StyledContainer } from "./ContainerStyle";

export const Container = ({ children, head }) => {
  return <StyledContainer head={head}>{children}</StyledContainer>;
};
