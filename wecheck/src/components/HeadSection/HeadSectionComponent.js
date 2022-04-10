import React from "react";
import {
  StyledHead1Text,
  StyledHead4Text,
  StyledButtonGroup,
  StyledButtonAdditionText,
} from "./HeadSectionStyle";
import { PrimaryButton } from "../../elements";
import FireIcon from "../../assets/img/fire.png";

export const HeadSectionComponent = () => {
  return (
    <React.Fragment>
      <StyledHead1Text>
        Помогаем зарабатывать больше, а рисковать меньше!
      </StyledHead1Text>
      <StyledHead4Text>
        WeCheck — мощный сервис аналитики <span>Wildberries</span> и{" "}
        <span>Ozon</span>. Покажем какие товары принесут прибыль, а какие
        продаются плохо
      </StyledHead4Text>
      <StyledButtonGroup>
        <PrimaryButton icon={FireIcon}>Попробовать бесплатно</PrimaryButton>
        <StyledButtonAdditionText>
          <p>Весь функционал на 24 часа</p>
          <p>Без привязки карты</p>
        </StyledButtonAdditionText>
      </StyledButtonGroup>
    </React.Fragment>
  );
};
