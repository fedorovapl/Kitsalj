import styled from "styled-components";

export const StyledAnalyticContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 40px;
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
`;

export const StyledAnalytic = styled.div`
  display: flex;
  margin: 80px 0 74px;
  div:last-child {
    margin-right: 0;
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
