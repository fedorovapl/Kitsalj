import React from "react";
import styled from "styled-components";

const StyledButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.color === "primary"
      ? "background: #FADB67; color: #192229;"
      : props.color === "secondary"
      ? "background: #FFFFFF; color: #192229; border: 1px solid #D5DFE4;"
      : props.color === "danger"
      ? "background: #fa6767; color: #ffffff;"
      : props.color === "disabled"
      ? "background: #B4BDC1; color: #ffffff;"
      : ""}
  border-radius: 5px;
  padding: ${(props) => props.py + "px"} ${(props) => props.px + "px;"};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? "#dfc255;"
        : props.color === "secondary"
        ? "#a0aaaf;"
        : props.color === "danger"
        ? "#FA6767;"
        : props.color === "disabled"
        ? "#B4BDC1;"
        : "#f1f1f1;"};
  }
  &:active {
    background: ${(props) =>
      props.color === "primary"
        ? "#cfb246;"
        : props.color === "secondary"
        ? "#909ba1;"
        : props.color === "danger"
        ? "#FA6767;"
        : props.color === "disabled"
        ? "#B4BDC1;"
        : "#d7d7d7;"};
  }
  ${(props) => (props.disabled ? "pointer-events: none; cursor: default;" : "")}
`;

export const Button = ({
  bgColor,
  color,
  py,
  px,
  children,
  iconSvg,
  iconPng,
  EditIcon,
  DeleteIcon,
  ...props
}) => {
  return (
    <StyledButton px={px} py={py} color={color} {...props}>
      {children}
      {iconPng && <img src={iconPng} alt=""></img>}
      {iconSvg && iconSvg}
      {EditIcon && (
        <EditIcon
          style={{
            border: "1px solid #D5DFE4",
            marginLeft: "10px",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      )}
      {DeleteIcon && (
        <DeleteIcon
          style={{
            border: "1px solid #D5DFE4",
            marginLeft: "10px",
            borderRadius: "5px",
            padding: "10px",
          }}
        />
      )}
    </StyledButton>
  );
};
