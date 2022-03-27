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
    border: 1px solid #d5dfe4;
  }
`;
