import styled from "styled-components";

export const StyledContainer = styled.div`
  ${(props) => props.head && "padding-bottom: 180px;"}
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
