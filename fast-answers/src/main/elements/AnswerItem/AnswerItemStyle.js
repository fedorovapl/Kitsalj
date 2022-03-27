import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledAnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  p {
    display: flex;
    align-items: center;
    input {
      background: #ffffff;
      border: 1px solid #d5dfe4;
      box-sizing: border-box;
      border-radius: 5px;
      max-width: 34px;
      padding: 3px 5px;
      margin: 0 7px 0 4px;
    }
  }
`;

export const StyledAnswerContent = styled.div`
  background: #f8f8f8;
  border: 1px solid #d5dfe4;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 12px;
`;

export const StyledAnswerContentButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid #d5dfe4;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 6px 10px;
    background: #ffffff;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      background: #f1f1f1;
    }
    &:active {
      background: #d9d9d9;
    }
  }
`;

export const StyledAnswerContainer = styled.div`
  margin-top: 24px;
`;

export const StyledAnswerText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) =>
    !props.fullText &&
    "display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"}
`;

export const StyledPopupTooltip = styled.div`
  padding: 10px;
  font-weight: 400;
  font-size: 13px;
  line-height: 135%;
  color: #192229;
`;

export const StyledCopyTooltip = styled(Popup)`
  &-content {
    border: 1px solid #2ad200;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 135%;
    display: flex;
    align-items: center;
    color: #192229;
    width: 300px !important;
  }
`;
