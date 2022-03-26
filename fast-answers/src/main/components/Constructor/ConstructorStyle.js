import styled from "styled-components";

export const StyledConstructorHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    color: #192229;
    margin-right: 32px;
  }
`;

export const StyledIconButton = styled.a`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #6a7b83;
  cursor: pointer;
  &:hover {
    color: #4e4e4e;
    svg {
      path {
        fill: #4e4e4e;
        opacity: 0.5;
      }
    }
  }
  svg {
    margin-right: 6px;
  }
  &:last-child {
    margin-left: 21px;
  }
`;

export const StyledBreadcrumb = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b4bdc1;
  margin-bottom: 15px;
`;

export const StyledConstructorFolderContainer = styled.div`
  display: flex;
  gap: 15px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px 15px;
    min-width: 165px;
    border: 1px solid #d5dfe4;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #f1f1f1;
    }
    &:active {
      background: #d7d7d7;
    }
    img {
      margin-left: 5px;
    }
  }
`;
