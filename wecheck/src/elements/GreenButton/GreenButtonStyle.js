import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: #f0fcf5;
  padding: 12px 24px;
  border-radius: 100px;
  color: #279653;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  cursor: pointer;
  &:hover {
    background: #f0fcf5;
    color: #279653;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;
