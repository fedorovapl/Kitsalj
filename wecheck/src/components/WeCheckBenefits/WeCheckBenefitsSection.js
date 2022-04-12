import React from "react";
import { Container } from "../../elements";
import {
  StyledSection,
  StyledTitle,
  StyledContent,
  StyledText,
  StyledButtonContainer,
  StyledImgContainer,
} from "./WeCheckBenefitsSectionStyle";
import { PrimaryButton } from "../../elements";
import FireIcon from "../../assets/img/fire.png";
import Laptop2 from "../../assets/img/laptop2.png";

export const WeCheckBenefitsSection = () => {
  return (
    <StyledSection>
      <Container>
        <StyledContent>
          <div>
            <StyledTitle>Как получить больше пользы от WeCheck?</StyledTitle>
            <StyledText>
              Закажите персональную демонстрацию! Наши эксперты продемонстрируют
              как использовать платформу для увеличения продаж
            </StyledText>
            <StyledButtonContainer>
              <PrimaryButton icon={FireIcon}>
                Заказать консультацию
              </PrimaryButton>
              <p>Это бесплатно!</p>
            </StyledButtonContainer>
          </div>
        </StyledContent>
        <StyledImgContainer>
          <img src={Laptop2} alt=""></img>
        </StyledImgContainer>
      </Container>
    </StyledSection>
  );
};
