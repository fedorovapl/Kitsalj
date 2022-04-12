import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 30px auto 100px;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  img:first-child {
    margin-right: 17px;
  }
`;
export const StyledBurgerButton = styled.div`
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
`;
export const StyledMenuGroup = styled.div`
  @media (max-width: 1280px) {
    display: none;
  }
`;

export const StyledBurgerMenu = styled.div`
  h2 {
    margin-bottom: 20px;
  }
  button {
    margin: 0;
  }
  button:last-child {
    margin-top: 20px;
  }
`;
