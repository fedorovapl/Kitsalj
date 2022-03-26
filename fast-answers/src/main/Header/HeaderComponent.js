import React from "react";
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledLogoContainer,
  StyledLoginContainer,
} from "./HeaderStyle";
import Logo from "../../assets/img/logo.png";
import Logout from "../../assets/img/logout.png";

export const HeaderComponent = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <StyledLogoContainer>
          <img src={Logo} alt=""></img>
          <p>
            Система быстрых <span>ответов</span>
          </p>
        </StyledLogoContainer>
        <StyledLoginContainer>
          <p>Kurator</p>
          <a>
            Выйти <img src={Logout} alt=""></img>
          </a>
        </StyledLoginContainer>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};
