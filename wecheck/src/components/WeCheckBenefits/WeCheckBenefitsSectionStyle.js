import styled from "styled-components";
import Laptop from "../../assets/img/laptop.png";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;

  background: right/34% url(${Laptop}),
    linear-gradient(102deg, #18b65c 0%, #279d5a 76%, #1d9450 0%);

  border-radius: 80px;
  background-repeat: no-repeat;
  z-index: 1;
  @media (max-width: 870px) {
    background: #289e5b;
    border-radius: 0;
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
    padding: 0 25px;
    ${(props) => props.head && "padding-bottom: 150px;"}
  }
  @media (max-width: 480px) {
    padding: 0 32px;
    ${(props) => props.head && "padding-bottom: 40px;"}
  }
`;

export const StyledImgContainer = styled.div`
  display: none;
  @media (max-width: 870px) {
    display: flex;
    justify-content: center;
  }
`;
export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 57px;
  letter-spacing: -0.3px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 870px) {
    font-size: 32px;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 560px) {
    font-size: 24px;
    line-height: 37px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  max-width: 580px;
  padding: 120px 0;
  @media (max-width: 870px) {
    padding: 60px 0;
    max-width: 100%;
  }
  @media (max-width: 560px) {
    padding: 32px 0;
    max-width: 100%;
  }
`;

export const StyledText = styled.p`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  @media (max-width: 740px) {
    font-size: 16px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
  align-items: center;
  p {
    margin-top: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: rgba(255, 255, 255, 0.6);
  }
  button {
    box-shadow: 0px 4px 20px rgba(4, 25, 98, 0.12) !important;
  }
  @media (max-width: 870px) {
    max-width: 100%;
  }
  @media (max-width: 460px) {
    button {
      width: 100%;
    }
  }
`;
