import styled from "styled-components";

export const StyledAnalyticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 40px;
  width: 30%;
  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: row;
    margin-right: 0;
    justify-content: space-around;
  }
`;

export const StyledHeader2Text = styled.h2`
  font-family: "Sofia Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  letter-spacing: -0.3px;
  color: #213a2b;
  padding-top: 100px;
  @media (max-width: 740px) {
    font-size: 32px;
    line-height: 37px;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 37px;
    text-align: center;
  }
`;
export const StyledPrimaryBittonSmall = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledAnalytic = styled.div`
  display: flex;
  margin: 80px 0 74px;
  width: 100%;
  div:last-child {
    margin-right: 0;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const StyledHeadSection = styled.section`
  background: radial-gradient(
      ellipse at bottom left,
      #be20a54a 0%,
      transparent 30%
    ),
    radial-gradient(ellipse at bottom center, #be20a56b -50%, transparent 50%),
    radial-gradient(ellipse at bottom right, #0069ff5e 0%, white 30%);
`;

export const StyledAnalyticSection = styled.section`
  border-radius: 50px 50px 0 0;
  margin-top: -50px;
  background: #fff;
`;
