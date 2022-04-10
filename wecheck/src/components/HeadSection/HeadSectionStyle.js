import styled from "styled-components";

export const StyledHead1Text = styled.h1`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 100px;
  color: #313d53;
`;

export const StyledHead4Text = styled.h4`
  margin-top: 50px;
  font-family: "Sofia Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  letter-spacing: -0.3px;
  color: #696987;
  span:first-child {
    color: #be20a5;
  }
  span:last-child {
    color: #0069ff;
  }
`;

export const StyledButtonAdditionText = styled.div`
  margin-left: 48px;
  p {
    font-family: "Sofia Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #535a69;
  }
  p:first-child {
    margin-bottom: 10px;
  }
`;

export const StyledButtonGroup = styled.div`
  width: 100%;
  max-width: 646px;
  display: flex;
  align-items: center;
  margin-top: 60px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 100px;
  border: 2px solid #ffffff;
`;
