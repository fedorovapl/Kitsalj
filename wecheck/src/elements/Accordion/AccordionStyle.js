import styled from "styled-components";

export const StyledAccordionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    div {
      p {
        font-weight: 700;
      }
    }
  }
`;

export const StyledAccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    ${(props) => props.isActive && "font-weight: 700;"}
  }
`;

export const StyledAccordionContent = styled.div`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 173.81%;
  color: #ffffff;
  margin-top: 12px;
`;
