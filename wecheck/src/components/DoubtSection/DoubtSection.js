import React from "react";
import { Container, PrimaryButton, SecondaryButton } from "../../elements";
import {
  StyledSection,
  StyledContent,
  StyledTitle,
  StyledSubTitle,
  StyledText,
  StyledContentContainer,
  StyledImageBg,
  StyledImageContainer,
  StyledItemCard,
  StyledBorderButtonFix,
  StyledContainer,
} from "./DoubtSectionStyle";
import Fire from "../../assets/img/fire3.png";
import Doubt2 from "../../assets/img/doubt2.png";

export const DoubtSection = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledContentContainer>
          <StyledTitle>Сомневаетесь?</StyledTitle>
          <StyledImageContainer>
            <StyledImageBg src={Doubt2} alt=""></StyledImageBg>
          </StyledImageContainer>
          <StyledContent>
            <StyledItemCard>
              <StyledSubTitle>
                Закажите бесплатную демонстрацию платформы
              </StyledSubTitle>
              <StyledText>
                Покажем как работает, ответим на любые вопросы. Это занимает не
                более 20 минут. После демонстрации вы получите полный доступ к
                платформе на 24 часа
              </StyledText>
              <StyledBorderButtonFix>
                <PrimaryButton
                  title="Запрос демонстрации"
                  type="demonstration"
                  icon={Fire}
                >
                  Заказать демонстрацию
                </PrimaryButton>
              </StyledBorderButtonFix>
            </StyledItemCard>
            <StyledItemCard>
              <StyledSubTitle>
                Даем полный доступ к платформе на 24 часа
              </StyledSubTitle>
              <StyledText>
                Опробуете платформу и решите насколько она вам подходит, поэтому
                мы даем вам полный доступ к нашему сервису на 24 часа
              </StyledText>
              <SecondaryButton
                type="demo_access"
                title="Запрос на доступ 24 часа"
              >
                Попробовать
              </SecondaryButton>
            </StyledItemCard>
          </StyledContent>
        </StyledContentContainer>
      </StyledContainer>
    </StyledSection>
  );
};
