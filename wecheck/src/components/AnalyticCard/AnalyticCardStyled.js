import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-radius: 32px;
  padding: 40px;
  max-width: 373px;
  box-sizing: border-box;
  margin-bottom: 40px;
  cursor: pointer;
`;
export const StyledIconContainer = styled.div`
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  background: linear-gradient(147.69deg, #219653 0%, #2fa662 98.35%);
  box-shadow: 0px 5px 25px rgba(14, 136, 67, 0.41);
  border-radius: 100px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
export const StyledTitleContainer = styled.div`
  font-family: "Sofia Pro", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  color: #1f202a;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  ${StyledCardContainer}:hover & {
    color: #289e5b;
  }
`;
export const StyledTextContainer = styled.div`
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #213a2b;
`;
export const StyledSubTextContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #395243;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: center;
  button {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #213a2b;
  }
`;
