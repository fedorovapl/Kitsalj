import styled from "styled-components";
import { ReactComponent as Close } from "../../assets/svg/close-icon.svg";

export const StyledCloseButton = styled(Close)`
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    stroke: #ccc;
  }
`;

export const StyledHeader = styled.header`
  @media (max-width: 1180px) {
    box-shadow: -15px 0px 20px rgba(173, 173, 173, 0.07),
      15px 0px 20px rgba(173, 173, 173, 0.07),
      0px -10px 20px rgba(173, 173, 173, 0.07),
      0px 20px 20px rgba(173, 173, 173, 0.1);
  }
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 70px;
  padding: 0 50px;
  box-sizing: border-box;
  padding: 28px 50px 0;
  ${(props) => props.head && "padding-bottom: 210px;"}
  @media (max-width: 1180px) {
    padding: 24px 50px;
  }
  @media (max-width: 720px) {
    margin: 0 auto 40px;
    padding: 24px 25px;
    ${(props) => props.head && "padding-bottom: 150px;"}
  }
  @media (max-width: 480px) {
    padding: 12px 16px;
    ${(props) => props.head && "padding-bottom: 110px;"}
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  img:first-child {
    margin-right: 17px;
  }
  @media (max-width: 560px) {
    width: 120px;
    height: 34px;
  }
`;
export const StyledBurgerButton = styled.div`
  display: none;
  @media (max-width: 1180px) {
    display: block;
  }
`;
export const StyledMenuGroup = styled.div`
  @media (max-width: 1180px) {
    display: none;
  }
`;
export const StyledLogButton = styled.div`
  @media (max-width: 1180px) {
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
