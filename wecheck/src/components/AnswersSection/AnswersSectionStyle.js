import styled from "styled-components";

export const StyledSection = styled.section`
  background: linear-gradient(110.21deg, #18b65c 0%, #279d5a 99.34%);
  border-radius: 0px 0px 80px 80px;
  padding: 80px 0 112px;
  margin-top: -80px;
  z-index: 2;
  @media (max-width: 870px) {
    border-radius: 0;
    padding: 80px 0 26px;
    background: #289f5b;
  }
`;
export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
  ${(props) => props.head && "padding-bottom: 210px;"}
  @media(max-width: 720px) {
    padding: 0 32px;
    ${(props) => props.head && "padding-bottom: 150px;"}
  }
  @media (max-width: 480px) {
    padding: 0 26px;
    ${(props) => props.head && "padding-bottom: 40px;"}
  }
`;

export const StyledTitle = styled.h4`
  padding: 100px 0 82px;
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #ffffff;
  @media (max-width: 870px) {
    padding: 48px 0 26px;
    line-height: 160%;
    font-weight: 900;
    font-size: 36px;
  }
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

export const StyledAccordionContainer = styled.div`
  margin-bottom: 82px;
  @media (max-width: 560px) {
    margin-bottom: 26px;
  }
`;

export const StyledTelegramContainer = styled.div`
  margin-top: 100px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 80px rgba(39, 150, 83, 0.12);
  border-radius: 32px;
  cursor: pointer;
  img {
    width: 56px;
  }
  &:hover {
    p {
      color: #23a45b;
    }
  }
  p {
    transition: 0.3s;
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.3px;
    color: #333d37;
    margin-left: 20px;
    span {
      white-space: nowrap;
    }
  }
  @media (max-width: 870px) {
    padding: 24px;
    border-radius: 16px;
    p {
      font-weight: 700;
      font-size: 26px;
      line-height: 30px;
    }
  }
  @media (max-width: 560px) {
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      margin: 20px 0 0 0;
    }
  }
`;
