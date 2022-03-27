import React, { useState } from "react";
import {
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledLogoContainer,
  StyledLoginContainer,
} from "./HeaderStyle";
import Logo from "../../assets/img/logo.png";
import Logout from "../../assets/img/logout.png";
import AuthService from "../services/auth.service";
import { LoginPopupComponent } from "../components";

export const HeaderComponent = () => {
  const [logOpen, setLogOpen] = useState(false);
  const handleLogin = (username, password) => {
    AuthService.login(username, password).then(
      (res) => {
        console.log(res);
      },
      (e) => {
        const resMessage =
          (e.response && e.response.data && e.response.data.message) ||
          e.message ||
          e.toString();
        console.log(resMessage);
      }
    );
  };

  return (
    <StyledHeaderWrapper>
      <LoginPopupComponent
        open={logOpen}
        closeModal={() => setLogOpen(false)}
        handleClick={handleLogin}
      />
      <StyledHeaderContainer>
        <StyledLogoContainer>
          <img src={Logo} alt=""></img>
          <p>
            Система быстрых <span>ответов</span>
          </p>
        </StyledLogoContainer>
        <StyledLoginContainer>
          <p>Kurator</p>
          <a onClick={() => setLogOpen(true)}>
            Войти <img src={Logout} alt=""></img>
          </a>
        </StyledLoginContainer>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};
