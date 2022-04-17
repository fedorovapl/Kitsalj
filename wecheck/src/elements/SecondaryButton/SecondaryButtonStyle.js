import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  background-color: rgba(41, 159, 92, 0.4);
  padding: 14px 37px;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #21a95c;
    background: #fff;
  }
  @media (max-width: 580px) {
    font-size: 16px;
  }
`;
