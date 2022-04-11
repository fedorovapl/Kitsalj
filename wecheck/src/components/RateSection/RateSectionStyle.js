import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 100px 0 60px 0;
  justify-content: space-between;
`;

export const StyledSection = styled.section`
  background: #f4f5f6;
  padding-top: 100px;
  border-radius: 80px;
  z-index: 3;
`;

export const StyledTitle = styled.h4`
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #213a2b;
`;

export const StyledButtonGroup = styled.div`
  button {
    margin-left: 28px;
  }
`;

export const StyledRateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 193px;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;
