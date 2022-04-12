import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
  ${(props) => props.head && "padding-bottom: 180px;"}
  @media(max-width: 720px) {
    padding: 0 25px;
    ${(props) => props.head && "padding-bottom: 120px;"}
  }
  @media (max-width: 480px) {
    padding: 0 16px;
    ${(props) => props.head && "padding-bottom: 80px;"}
  }
`;
