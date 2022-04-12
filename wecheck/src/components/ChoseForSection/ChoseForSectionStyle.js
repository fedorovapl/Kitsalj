import styled from "styled-components";

export const StyledSection = styled.section`
  padding-bottom: 2px;
  border-radius: 80px;
  z-index: 2;
  background: #fff;
`;

export const StyledContent = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
    .div {
      width: 100%;
    }
  }
  @media (max-width: 560px) {
    gap: 0;
  }
`;

export const StyledTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  letter-spacing: -0.3px;
  color: #213a2b;
  margin: 100px 0 80px;
  @media (max-width: 870px) {
    font-size: 36px;
    line-height: 37px;
    text-align: center;
    margin: 60px 0 32px;
  }
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

export const StyledAlertContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e7ebeb;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px 50px;
  margin-bottom: 100px;
  @media (max-width: 910px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
export const StyledAlert = styled.div`
  border: 1px solid #ff0000;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 2px 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 173.81%;
  color: #ff0000;
  @media (max-width: 910px) {
    margin-bottom: 15px;
  }
`;
export const StyledAlertText = styled.p`
  margin: 0px 15px 0 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 173.81%;
  color: #6e6e6e;
  @media (max-width: 910px) {
    margin: 0 0 20px 0;
  }
`;
export const StyledAlertButton = styled.p`
  justify-self: flex-end;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 173.81%;
  color: #299f5b;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: #333d37;
  }
`;
