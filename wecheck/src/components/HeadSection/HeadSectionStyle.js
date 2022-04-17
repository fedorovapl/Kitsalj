import styled from "styled-components";

export const StyledHead1Text = styled.h1`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 100px;
  color: #313d53;
  @media (max-width: 810px) {
    line-height: 147.07%;
    letter-spacing: -0.3px;
    font-size: 64px;
  }
  @media (max-width: 560px) {
    line-height: 147.07%;
    letter-spacing: -0.3px;
    font-size: 54px;
  }
  @media (max-width: 480px) {
    font-weight: 900;
    font-size: 32px;
  }
`;

export const StyledHead4Text = styled.h4`
  margin-top: 50px;
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
  @media (max-width: 560px) {
    margin-top: 30px;
    font-size: 32px;
    line-height: 37px;
  }
  @media (max-width: 480px) {
    margin-top: 12px;
    font-size: 24px;
    line-height: 37px;
  }
`;

export const StyledButtonAdditionText = styled.div`
  margin-left: 24px;
  padding-left: 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  p {
    font-family: "Sofia Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #213a2b;
  }
  p:first-child {
    margin-bottom: 10px;
  }
  @media (max-width: 740px) {
    margin-left: 0;
    padding-left: 0;
    margin-top: 24px;
    border: none;
  }
`;

export const StyledButtonGroup = styled.div`
  max-width: 670px;
  display: flex;
  align-items: center;
  margin-top: 60px;
  padding: 24px;
  padding-right: 48px;
  box-sizing: border-box;
  border-radius: 100px;
  border: 2px solid #ffffff;
  @media (max-width: 740px) {
    text-align: center;
    border: none;
    flex-direction: column;
    padding: 0;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    padding-top: 24px;
    margin-top: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
`;
