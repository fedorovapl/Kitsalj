import React from "react";
import Logo from "../../assets/img/logo.png";
import Wecheck from "../../assets/img/wecheck.png";
import { StyledNav, StyledLogoContainer } from "./HeaderStyle";
import { NavButton, GreenButton, Container } from "../../elements";

export const HeaderComponent = () => {
  return (
    <header>
      <Container>
        <StyledNav>
          <StyledLogoContainer>
            <img src={Logo} alt=""></img>
            <img src={Wecheck} alt=""></img>
          </StyledLogoContainer>
          <div>
            <NavButton>Отчеты и аналитика</NavButton>
            <NavButton>Контент и продвижение</NavButton>
            <NavButton>Поставки, склады и доставка</NavButton>
            <NavButton>Конкуренты</NavButton>
            <GreenButton>Войти</GreenButton>
          </div>
        </StyledNav>
      </Container>
    </header>
  );
};
