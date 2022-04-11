import styled from "styled-components";
import Doubt from "../../assets/img/doubt.png";

export const StyledSection = styled.section`
  background: right/30% url(${Doubt}),
    linear-gradient(108.75deg, #18b65c 0%, #279d5a 101.48%);
  border-radius: 80px;
  background-repeat: no-repeat;
  margin-top: -80px;
`;

export const StyledContent = styled.div`
  display: flex;
  gap: 40px;
`;
export const StyledContentContainer = styled.div`
  padding: 120px 0;
  max-width: 780px;
`;
export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 74px;
  letter-spacing: -0.3px;
  color: #ffffff;
  margin-bottom: 60px;
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
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 40px;
`;
