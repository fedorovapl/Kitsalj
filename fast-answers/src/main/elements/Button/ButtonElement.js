import React from "react";
import styled from "styled-components";

const StyledButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
  background: ${(props) =>
    props.bgColor === "primary"
      ? "#fadb67;"
      : props.bgColor === "secondary"
      ? "#B4BDC1;"
      : props.bgColor === "danger"
      ? "#FA6767;"
      : "#FFFFFF;"};
  color: ${(props) =>
    props.color === "primary"
      ? "#192229;"
      : props.color === "secondary"
      ? "#FFFFFF;"
      : props.color === "danger"
      ? "#FFFFFF;"
      : "#192229;"};
  border-radius: 5px;
  padding: ${(props) => props.py + "px"} ${(props) => props.px + "px;"};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${(props) =>
      props.bgColor === "primary"
        ? "#dfc255;"
        : props.bgColor === "secondary"
        ? "#a0aaaf;"
        : props.bgColor === "danger"
        ? "#FA6767;"
        : "#f1f1f1;"};
  }
  &:active {
    background: ${(props) =>
      props.bgColor === "primary"
        ? "#cfb246;"
        : props.bgColor === "secondary"
        ? "#909ba1;"
        : props.bgColor === "danger"
        ? "#FA6767;"
        : "#d7d7d7;"};
  }
`;

export const Button = ({
  bgColor,
  color,
  py,
  px,
  children,
  iconSvg,
  iconPng,
  handleClick,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      px={px}
      py={py}
      color={color}
      bgColor={bgColor}
    >
      {children}
      {iconPng && <img src={iconPng} alt=""></img>}
      {iconSvg && iconSvg}
    </StyledButton>
  );
};
