import styled from "styled-components";
import Laptop from "../../assets/img/laptop.png";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  background: right/40% url(${Laptop}),
    linear-gradient(109.76deg, #18b65c 0%, #279d5a 100%);
  border-radius: 80px;
  padding: 0;
  background-repeat: no-repeat;
  padding: 120px;
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
`;

export const StyledContent = styled.div`
  display: flex;
  max-width: 480px;
`;

export const StyledText = styled.p`
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
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
`;
