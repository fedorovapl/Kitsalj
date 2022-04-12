import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 0 60px 0;
  justify-content: space-between;
  @media (max-width: 870px) {
    border-bottom: 1px solid #e7ebeb;
    padding: 32px 0 30px 0;
    justify-content: center;
    margin-bottom: 52px;
  }
`;

export const StyledSection = styled.section`
  background: #f4f5f6;
  padding-top: 100px;
  border-radius: 80px;
  z-index: 3;
  @media (max-width: 870px) {
    border-radius: 0;
    padding-top: 0;
  }
`;

export const StyledTitle = styled.h4`
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #213a2b;
  @media (max-width: 870px) {
    font-size: 32px;
    line-height: 37px;
    text-align: center;
  }
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

export const StyledButtonGroup = styled.div`
  button {
    margin-left: 28px;
  }
  @media (max-width: 870px) {
    display: none;
  }
`;

export const StyledRateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 193px;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
`;
