import React from "react";
import Logo from "../../assets/img/logo.png";
import Wecheck from "../../assets/img/wecheck.png";
import { StyledNav, StyledLogoContainer } from "./HeaderStyle";
import { NavButton, GreenButton } from "../../elements";

export const HeaderComponent = () => {
  return (
    <header>
      <StyledNav>
        <StyledLogoContainer>
          <img src={Logo} alt=""></img>
          <img src={Wecheck} alt=""></img>
        </StyledLogoContainer>
        <div>
          <NavButton>Функционал</NavButton>
          <NavButton>Маркетплейсы</NavButton>
          <NavButton>Парсинг</NavButton>
          <NavButton>Конкуренты</NavButton>
          <GreenButton>Войти</GreenButton>
        </div>
      </StyledNav>
    </header>
  );
};
