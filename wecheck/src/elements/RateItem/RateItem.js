import React from "react";
import { ReactComponent as Check } from "../../assets/svg/check.svg";
import { ReactComponent as Cross } from "../../assets/svg/cross.svg";
import { ReactComponent as Info } from "../../assets/svg/info.svg";
import {
  StyledRateContainer,
  StyledTitleContainer,
  StyledRecommend,
  StyledPriceContainer,
  StyledRateName,
  StyledRatePrice,
  StyledRulesText,
  StyledDataAvailibleContainer,
  StyledDetailsTitle,
  StyledDetailItem,
  StyledDetailItemName,
  StyledPopupContent,
  StyledButtonContainer,
  StyledSecondaryRateButton,
  StyledDevider,
  StyledPopupTooltip,
} from "./RateItemStyle";

import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import Fire from "../../assets/img/fire3.png";

export const RateItem = ({
  detailArray,
  recommend,
  title,
  price,
  period,
  noDevider,
}) => {
  return (
    <StyledRateContainer noDevider={noDevider} recommend={recommend}>
      <div>
        <StyledTitleContainer>
          {recommend && <StyledRecommend>Рекомендуемый</StyledRecommend>}
          <StyledPriceContainer>
            <StyledRateName>{title}</StyledRateName>
            <StyledRatePrice>{price}</StyledRatePrice>
          </StyledPriceContainer>
          <StyledRulesText>за 1 месяц за сайт</StyledRulesText>
        </StyledTitleContainer>
        <StyledDataAvailibleContainer>
          <p>{period}</p>
          <div style={{ width: "15px", height: "18px" }}>
            <StyledPopupTooltip
              trigger={(open) => <Info />}
              position="bottom center"
              closeOnDocumentClick
              on={["hover", "focus"]}
            >
              <StyledPopupContent>
                Какой то текст для подсказки будет идти тут, его должен кто то
                написать
              </StyledPopupContent>
            </StyledPopupTooltip>
          </div>
        </StyledDataAvailibleContainer>
        <div>
          <StyledDetailsTitle>Аналитика продаж</StyledDetailsTitle>
          {detailArray.map((item, index) => {
            return item.name === "devider" ? (
              <StyledDevider key={index} />
            ) : (
              <StyledDetailItem key={index}>
                <StyledDetailItemName offered={item.offered}>
                  <p>{item.name}</p>
                  {/* <div style={{ width: "15px", height: "18px" }}>
                    <StyledPopupTooltip
                      trigger={(open) => <Info />}
                      position="bottom center"
                      closeOnDocumentClick
                      on={["hover", "focus"]}
                    >
                      <StyledPopupContent>
                        Какой то текст для подсказки будет идти тут, его должен
                        кто то написать
                      </StyledPopupContent>
                    </StyledPopupTooltip>
                  </div> */}
                </StyledDetailItemName>
                {item.offered ? <Check /> : <Cross />}
              </StyledDetailItem>
            );
          })}
        </div>
        <StyledButtonContainer>
          {recommend ? (
            <PrimaryButton
              popupDisable={true}
              onClick={() => window.open("https://go.wecheck.ru/signup")}
              icon={Fire}
            >
              Начать прямо сейчас
            </PrimaryButton>
          ) : (
            <StyledSecondaryRateButton
              onClick={() => window.open("https://go.wecheck.ru/signup")}
            >
              Начать прямо сейчас
            </StyledSecondaryRateButton>
          )}
          <p>Если не понравится, вернем деньги</p>
        </StyledButtonContainer>
      </div>
    </StyledRateContainer>
  );
};
