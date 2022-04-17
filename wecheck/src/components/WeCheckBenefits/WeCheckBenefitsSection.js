import React from "react";
import { Container } from "../../elements";
import {
  StyledSection,
  StyledTitle,
  StyledContent,
  StyledText,
  StyledButtonContainer,
  StyledImgContainer,
  StyledContainer,
} from "./WeCheckBenefitsSectionStyle";
import { PrimaryButton } from "../../elements";
import FireIcon from "../../assets/img/fire3.png";
import Laptop2 from "../../assets/img/laptop2.png";

export const WeCheckBenefitsSection = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledContent>
          <div>
            <StyledTitle>Как получить больше пользы от WeCheck?</StyledTitle>
            <StyledText>
              Закажите персональную демонстрацию! Наши эксперты продемонстрируют
              как использовать платформу для увеличения продаж
            </StyledText>
            <StyledButtonContainer>
              <PrimaryButton type="demonstration" icon={FireIcon}>
                Заказать консультацию
              </PrimaryButton>
              <p>Это бесплатно!</p>
            </StyledButtonContainer>
          </div>
        </StyledContent>
        <StyledImgContainer>
          <img src={Laptop2} alt=""></img>
        </StyledImgContainer>
      </StyledContainer>
    </StyledSection>
  );
};
