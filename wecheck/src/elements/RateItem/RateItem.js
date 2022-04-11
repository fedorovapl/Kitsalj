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
} from "./RateItemStyle";
import Popup from "reactjs-popup";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import Fire from "../../assets/img/fire.png";

export const RateItem = ({ detailArray, recommend, title, price, period }) => {
  return (
    <StyledRateContainer recommend={recommend}>
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
          <div>
            <Popup
              trigger={(open) => <Info />}
              position="bottom center"
              closeOnDocumentClick
              on={["hover", "focus"]}
            >
              <StyledPopupContent>
                Какой то текст для подсказки будет идти тут, его должен кто то
                написать
              </StyledPopupContent>
            </Popup>
          </div>
        </StyledDataAvailibleContainer>
        <div>
          <StyledDetailsTitle>Аналитика продаж</StyledDetailsTitle>
          {detailArray.map((item, index) => {
            return (
              <StyledDetailItem key={index}>
                <StyledDetailItemName offered={item.offered}>
                  <p>{item.name}</p>
                  <div>
                    <Popup
                      trigger={(open) => <Info />}
                      position="bottom center"
                      closeOnDocumentClick
                      on={["hover", "focus"]}
                    >
                      <StyledPopupContent>
                        Какой то текст для подсказки будет идти тут, его должен
                        кто то написать
                      </StyledPopupContent>
                    </Popup>
                  </div>
                </StyledDetailItemName>
                {item.offered ? <Check /> : <Cross />}
              </StyledDetailItem>
            );
          })}
        </div>
        <StyledButtonContainer>
          {recommend ? (
            <PrimaryButton icon={Fire}>Начать прямо сейчас</PrimaryButton>
          ) : (
            <StyledSecondaryRateButton>
              Начать прямо сейчас
            </StyledSecondaryRateButton>
          )}
          <p>Если не понравится, вернем деньги</p>
        </StyledButtonContainer>
      </div>
    </StyledRateContainer>
  );
};
