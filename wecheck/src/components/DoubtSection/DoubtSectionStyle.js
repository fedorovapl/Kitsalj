import styled from "styled-components";
import Doubt from "../../assets/img/doubt.png";

export const StyledSection = styled.section`
  background: right/30% url(${Doubt}),
    linear-gradient(108.75deg, #18b65c 0%, #279d5a 101.48%);
  border-radius: 80px;
  background-repeat: no-repeat;
  margin-top: -80px;
  @media (max-width: 1200px) {
    background: linear-gradient(108.75deg, #18b65c 0%, #279d5a 101.48%);
  }
  @media (max-width: 870px) {
    border-radius: 0;
  }
`;

export const StyledImageBg = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;
export const StyledImageContainer = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const StyledContent = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;
export const StyledContentContainer = styled.div`
  padding: 120px 0;
  max-width: 780px;
  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 60px 0;
  }
`;
export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 74px;
  letter-spacing: -0.3px;
  color: #ffffff;
  margin-bottom: 60px;
  @media (max-width: 1200px) {
    margin-bottom: 32px;
  }
  @media (max-width: 870px) {
    text-align: center;
    font-size: 40px;
    line-height: 50px;
  }
  @media (max-width: 560px) {
    text-align: center;
    font-size: 32px;
    line-height: 50px;
  }
`;

export const StyledSubTitle = styled.p`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 40px;
`;
export const StyledItemCard = styled.div`
  display: block;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
