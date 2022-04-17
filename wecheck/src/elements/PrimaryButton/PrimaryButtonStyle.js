import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #ffffff;
  box-shadow: 0px 8px 60px rgba(235, 55, 0, 0.3);
  border-radius: 100px;
  color: #213a2b;
  padding: 16px 32px;
  font-family: "Sofia Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #1daf5c;
  }
  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
    font-weight: 700;
  }
  @media (max-width: 800px) {
    padding: 16px 24px;
  }
`;
