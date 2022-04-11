import React from "react";
import { Container, PrimaryButton } from "../../elements";
import {
  StyledSection,
  StyledContent,
  StyledText,
  StyledEmailInput,
  StyledInputContainer,
  StyledCheckInput,
} from "./ContactSectionStyle";

export const ContactSection = () => {
  return (
    <StyledSection>
      <Container>
        <StyledContent>
          <StyledText>
            <p>Советы по аналитике.</p>
            <p>Тренды. Новости о маркетплейсах.</p>
            <p>Раз в неделю, без спама.</p>
          </StyledText>
          <StyledInputContainer>
            <StyledEmailInput
              type="email"
              placeholder="Введите ваш емэйл ..."
            ></StyledEmailInput>
            <StyledCheckInput>
              <input type="checkbox"></input>
              <label>
                Принимаю <a href="">Политику конфиденциальности</a>
              </label>
            </StyledCheckInput>
          </StyledInputContainer>
          <PrimaryButton>Подписаться</PrimaryButton>
        </StyledContent>
      </Container>
    </StyledSection>
  );
};
