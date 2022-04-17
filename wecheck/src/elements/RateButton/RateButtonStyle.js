import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  border: none;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  letter-spacing: -0.3px;
  color: #219653;
  padding: 8px 24px;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
  ${(props) => props.sale && "padding-right: 48px;"}
  &:hover {
    color: #333d37;
    ${(props) => props.active && "color: #fff;"}
  }
  ${(props) =>
    props.active &&
    "color: #FFFFFF; background: #219653; border-radius: 120px;"}
`;

export const StyledSale = styled.span`
  position: absolute;
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: #eb173e;
  ${(props) => props.active && "color: #fff;"}
`;
