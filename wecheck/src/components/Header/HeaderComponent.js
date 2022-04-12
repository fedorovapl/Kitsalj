import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import Wecheck from "../../assets/img/wecheck.png";
import Menu from "../../assets/img/menu.png";
import {
  StyledNav,
  StyledLogoContainer,
  StyledMenuGroup,
  StyledBurgerMenu,
  StyledBurgerButton,
} from "./HeaderStyle";
import { NavButton, GreenButton, Container } from "../../elements";
import { ReactDimmer } from "react-dimmer";

export const HeaderComponent = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header>
      <Container>
        <StyledNav>
          <StyledLogoContainer>
            <img src={Logo} alt=""></img>
            <img src={Wecheck} alt=""></img>
          </StyledLogoContainer>
          <StyledMenuGroup>
            <NavButton>Отчеты и аналитика</NavButton>
            <NavButton>Контент и продвижение</NavButton>
            <NavButton>Поставки, склады и доставка</NavButton>
            <NavButton>Конкуренты</NavButton>
            <GreenButton>Войти</GreenButton>
          </StyledMenuGroup>
          <StyledBurgerButton onClick={handleMenu}>
            <img src={Menu} alt=""></img>
          </StyledBurgerButton>
          <ReactDimmer
            isOpen={isMenuOpen}
            exitDimmer={setMenu}
            zIndex={100}
            blur={1.5}
          />
        </StyledNav>
      </Container>
      <StyledBurgerMenu className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <h2 style={{ textAlign: "center" }}>Меню</h2>
        <NavButton>Отчеты и аналитика</NavButton>
        <NavButton>Контент и продвижение</NavButton>
        <NavButton>Поставки, склады и доставка</NavButton>
        <NavButton>Конкуренты</NavButton>
        <GreenButton>Войти</GreenButton>
      </StyledBurgerMenu>
    </header>
  );
};
