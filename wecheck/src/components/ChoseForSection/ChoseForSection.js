import React, { useState } from "react";
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
import { RequestPopup } from "../../elements";

export const ChoseForSection = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <StyledSection>
      <Container>
        <StyledTitle>WeCheck выбирают за</StyledTitle>
        <StyledContent>
          <AnalyticCardComponent
            height={"auto"}
            Icon={ChoseFor1}
            title="Точные данные"
            subText="Наши алгоритмы гарантируют точные данные. Принимайте решение на основании проверенных цифр"
          />
          <AnalyticCardComponent
            height={"auto"}
            Icon={ChoseFor2}
            title="Удобный интерфейс"
            subText="Мы создали самую удобную платформу для аналитики маркетплейсов в России. Попробуйте сами"
          />
          <AnalyticCardComponent
            height={"auto"}
            Icon={ChoseFor3}
            title="Быструю поддержку"
            subText="Мы всегда на связи. Наши эксперты ответят на любые вопросы о платформе WeCheck"
          />
        </StyledContent>
        <RequestPopup
          type="demo_access"
          title={"Запрос доступа на 24 часа"}
          closeModal={closeModal}
          open={open}
        />
        <StyledAlertContainer onClick={() => setOpen(true)}>
          <StyledAlert>Внимание</StyledAlert>
          <StyledAlertText>
            Воспользуйтесь демо-доступом.
            <span> Это бесплатно и дает понимание полезности сервиса.</span>
          </StyledAlertText>
          <StyledAlertButton>Получить демо-доступ ›</StyledAlertButton>
        </StyledAlertContainer>
      </Container>
    </StyledSection>
  );
};
