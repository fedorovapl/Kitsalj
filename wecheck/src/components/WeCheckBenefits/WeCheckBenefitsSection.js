import React from "react";
import { Container } from "../../elements";
import {
  StyledSection,
  StyledTitle,
  StyledContent,
  StyledText,
  StyledButtonContainer,
} from "./WeCheckBenefitsSectionStyle";
import { PrimaryButton } from "../../elements";
import FireIcon from "../../assets/img/fire.png";

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
        {/* <div>
          <img src={Laptop} alt=""></img>
        </div> */}
      </Container>
    </StyledSection>
  );
};
