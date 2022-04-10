import styled from "styled-components";

export const StyledContent = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  letter-spacing: -0.3px;
  color: #213a2b;
  margin: 100px 0 80px;
`;

export const StyledAlertContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e7ebeb;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px 50px;
  margin-bottom: 100px;
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
`;
export const StyledAlertText = styled.p`
  margin: 0px 15px 0 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 173.81%;
  color: #6e6e6e;
`;
export const StyledAlertButton = styled.p`
  justify-self: flex-end;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 173.81%;
  color: #299f5b;
  white-space: nowrap;
`;
