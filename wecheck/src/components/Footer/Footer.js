import React from "react";
import { Container } from "../../elements";
import {
  StyledFooter,
  StyledContent,
  StyledLeftBlock,
  StyledCentrBlock,
  StyledRightBlock,
  StyledCopyright,
  StyledBorder,
} from "./FooterStyle";
import Mail from "../../assets/img/mail.png";
import TgIcon from "../../assets/img/tg-icon.png";
import FbIcon from "../../assets/img/fb-icon.png";
import VkIcon from "../../assets/img/vk-icon.png";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledContent>
          <div style={{ display: "flex" }}>
            <div>
              <img src={Mail} alt="" />
            </div>
            <StyledLeftBlock>
              <p>Свяжитесь с нами</p>
              <p>
                Если у вас остались вопросы или хотите обсудить сотруденичество,
                пишите:
              </p>
              <p style={{ textDecoration: "underline" }}>hello@wecheck.ru</p>
              <p style={{ textDecoration: "underline" }}>wecheck.ru</p>
            </StyledLeftBlock>
          </div>
          <StyledCentrBlock>
            <a href="">Маркетплейсы</a>
            <a href="">Парсинг</a>
            <a href="">Конкуренты</a>
            <a href="">Главная</a>
          </StyledCentrBlock>
          <StyledRightBlock>
            <div>
              <a href="">
                <img src={TgIcon} alt="" />
              </a>
              <a href="">
                <img src={FbIcon} alt="" />
              </a>
              <a href="">
                <img src={VkIcon} alt="" />
              </a>
            </div>
            <p>Следите за нами в соц сетях</p>
          </StyledRightBlock>
        </StyledContent>
      </Container>
      <StyledBorder></StyledBorder>
      <Container>
        <StyledCopyright>
          <p>© 2019-2020 We check. Все права защищены</p>
          <p>Лицензионное соглашение</p>
          <p>Политика конфиденциальности</p>
        </StyledCopyright>
      </Container>
    </StyledFooter>
  );
};
