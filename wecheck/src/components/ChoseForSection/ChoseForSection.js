import React from "react";
import { AnalyticCardComponent } from "../AnalyticCard/AnalyticCardComponent";
import { ReactComponent as ChoseFor1 } from "../../assets/svg/chosefor1.svg";
import { ReactComponent as ChoseFor2 } from "../../assets/svg/chosefor2.svg";
import { ReactComponent as ChoseFor3 } from "../../assets/svg/chosefor3.svg";
import { Container } from "../../elements";
import {
  StyledContent,
  StyledTitle,
  StyledAlertContainer,
  StyledAlert,
  StyledAlertText,
  StyledAlertButton,
  StyledSection,
} from "./ChoseForSectionStyle";

export const ChoseForSection = () => {
  return (
    <StyledSection>
      <Container>
        <StyledTitle>WeCheck выбирают за</StyledTitle>
        <StyledContent>
          <AnalyticCardComponent
            Icon={ChoseFor1}
            title="Точные данные"
            subText="Наши алгоритмы гарантируют точные данные. Принимайте решение на основании проверенных цифр"
          />
          <AnalyticCardComponent
            Icon={ChoseFor2}
            title="Удобный интерфейс"
            subText="Мы создали самую удобную платформу для аналитики маркетплейсов в России. Попробуйте сами"
          />
          <AnalyticCardComponent
            Icon={ChoseFor3}
            title="Быструю поддержку"
            subText="Мы всегда на связи. Наши эксперты ответят на любые вопросы о платформе WeCheck"
          />
        </StyledContent>
        <StyledAlertContainer>
          <StyledAlert>Внимание</StyledAlert>
          <StyledAlertText>
            Воспользуйтесь демо-доступом.
            <span> Это бесплатно и дает понимание полезности сервиса.</span>
          </StyledAlertText>
          <StyledAlertButton>Получить демо-доступ {">"}</StyledAlertButton>
        </StyledAlertContainer>
      </Container>
    </StyledSection>
  );
};
