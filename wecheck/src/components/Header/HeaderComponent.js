import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Wecheck } from "../../assets/svg/wecheck.svg";

import Menu from "../../assets/img/menu.png";
import {
  StyledNav,
  StyledLogoContainer,
  StyledMenuGroup,
  StyledBurgerMenu,
  StyledBurgerButton,
  StyledLogButton,
  StyledHeaderContainer,
  StyledHeader,
  StyledCloseButton,
} from "./HeaderStyle";
import { NavButton, GreenButton } from "../../elements";
import { ReactDimmer } from "react-dimmer";

export const HeaderComponent = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledNav>
          <StyledLogoContainer>
            <Logo style={{ marginRight: "17px" }} />
            <Wecheck />
          </StyledLogoContainer>
          <StyledMenuGroup>
            <NavButton link="https://www.wecheck.ru/">Маркетплейсы</NavButton>
            <NavButton link="https://www.web.wecheck.ru/parsing">
              Парсинг
            </NavButton>
            <NavButton link="https://www.web.wecheck.ru/competitors">
              Конкуренты
            </NavButton>
            {/* <NavButton>
              <p>Документы</p> и законодательство
            </NavButton> */}
          </StyledMenuGroup>
          <StyledLogButton>
            <GreenButton link="https://go.wecheck.ru/">Войти</GreenButton>
          </StyledLogButton>

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
      </StyledHeaderContainer>
      <StyledBurgerMenu className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <StyledCloseButton onClick={() => setMenu(false)}></StyledCloseButton>
        <h2 style={{ textAlign: "center" }}>Меню</h2>
        <NavButton link="https://www.wecheck.ru/">Маркетплейсы</NavButton>
        <NavButton link="https://www.web.wecheck.ru/parsing">Парсинг</NavButton>
        <NavButton link="https://www.web.wecheck.ru/competitors">
          Конкуренты
        </NavButton>
        <GreenButton link="https://go.wecheck.ru/">Войти</GreenButton>
      </StyledBurgerMenu>
    </StyledHeader>
  );
};
