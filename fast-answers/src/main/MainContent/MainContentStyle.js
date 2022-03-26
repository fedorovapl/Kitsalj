import styled from "styled-components";

export const StyledFirstBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25% [col-start]);
  margin-bottom: 62px;
`;
export const StyledMainContainer = styled.div`
  width: 100%;
  min-width: 1142px;
`;
export const StyledMainContent = styled.div`
  width: 100%;
  height: auto;
  max-width: 1110px;
  min-width: 1110px;
  display: flex;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px rgba(0, 73, 129, 0.1);
  border-radius: 10px;
  flex-direction: column;
`;
export const StyledRecommendationContainer = styled.div`
  align-self: end;
`;
export const StyledRecommendation = styled.p`
  display: block;
  border: 1px solid #d5dfe4;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 15px;
  align-self: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  &:active {
    background: #d7d7d7;
  }
`;
export const StyledTimerContainer = styled.div`
  justify-self: flex-end;
`;
export const StyledTimer = styled.p`
  background: #f8f8f8;
  border: 1px solid #d5dfe4;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 10px;
`;

export const StyledSecondBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48%);
  justify-content: space-between;
  gap: 30px;
`;

export const StyledThirdBlock = styled.div``;
