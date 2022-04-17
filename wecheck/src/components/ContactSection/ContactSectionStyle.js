import styled from "styled-components";
import { StyledButton } from "../../elements/PrimaryButton/PrimaryButtonStyle";

export const StyledInputSubmit = styled.input`
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

export const StyledSection = styled.section`
  background: #f4f5f6;
  padding: 160px 0 84px;
  margin-top: -80px;
  z-index: 1;
  @media (max-width: 950px) {
    background: #ffffff;
    margin-top: 0;
    padding: 40px 0;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 32px;
  padding: 32px 48px;
  gap: 40px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const StyledText = styled.div`
  p {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #333d37;
  }
  p:last-child {
    color: #219653;
  }
`;
export const StyledInputContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledEmailInput = styled.input`
  border: none;
  padding: 18px 0;
  border-bottom: 1px solid #c2c5c3;
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: rgba(51, 61, 55, 0.3);
  }
`;
export const StyledCheckInput = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  input {
    accent-color: #219653;
  }
  label {
    margin-left: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
    a {
      text-decoration: none;
      color: #219653;
    }
  }
`;

export const StyleButtonFix = styled.div`
  button {
    padding: 17px 28px;
    font-weight: 400;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
  ${(props) => props.head && "padding-bottom: 210px;"}
  @media(max-width: 720px) {
    padding: 0 32px;
    ${(props) => props.head && "padding-bottom: 150px;"}
  }
  @media (max-width: 480px) {
    padding: 0 26px;
    ${(props) => props.head && "padding-bottom: 40px;"}
  }
`;
