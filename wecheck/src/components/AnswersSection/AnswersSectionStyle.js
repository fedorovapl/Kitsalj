import styled from "styled-components";

export const StyledSection = styled.section`
  background: linear-gradient(110.21deg, #18b65c 0%, #279d5a 99.34%);
  border-radius: 0px 0px 80px 80px;
  padding: 80px 0 112px;
  margin-top: -80px;
  z-index: 2;
`;

export const StyledTitle = styled.h4`
  padding: 100px 0 82px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #ffffff;
`;

export const StyledAccordionContainer = styled.div`
  margin-bottom: 82px;
`;

export const StyledTelegramContainer = styled.div`
  padding: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 80px rgba(39, 150, 83, 0.12);
  border-radius: 32px;
  cursor: pointer;
  &:hover {
    p {
      color: #23a45b;
    }
  }
  p {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.3px;
    color: #333d37;
    margin-left: 20px;
  }
`;
