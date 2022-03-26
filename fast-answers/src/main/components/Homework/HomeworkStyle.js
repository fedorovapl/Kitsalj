import styled from "styled-components";

export const StyledHomeworkContainer = styled.div``;
export const StyledHomeworkHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 210px;
  padding: 13px 10px;
  box-sizing: border-box;
  border: 1px solid #d5dfe4;
  border-radius: 5px;
  background: #f8f8f8;
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  &:focus-visible {
    outline: none !important;
    border: 1px solid #3897f0;
    box-shadow: 0px 2px 4px rgba(56, 151, 240, 0.25);
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 135%;
    color: #b4bdc1;
  }
`;
export const StyledHomeworkInputContainer = styled.div``;
export const StyledHomeworkButton = styled.p`
  margin-top: 22px;
  text-align: center;
  background: #fadb67;
  border-radius: 5px;
  padding: 13px 15px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #ddc056;
  }
  &:active {
    background: #c9ae4d;
  }
`;
