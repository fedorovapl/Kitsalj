import React, { useState } from "react";
import { Container } from "../../elements";
import {
  StyledHeader,
  StyledSection,
  StyledTitle,
  StyledButtonGroup,
  StyledRateBlock,
} from "./RateSectionStyle";
import { RateButton, RateItem } from "../../elements";
import {
  detailArrayBasic,
  detailArrayExpert,
  detailArrayEnterprise,
} from "./RateSectionConstant";

export const RateSection = () => {
  const [isActive, setIsActive] = useState({
    month: true,
    threeMonth: false,
    sixMonth: false,
  });
  return (
    <StyledSection>
      <Container>
        <StyledHeader>
          <StyledTitle>Наши тарифы</StyledTitle>
          <StyledButtonGroup>
            <RateButton
              handleClick={() =>
                setIsActive({ month: true, threeMonth: false, sixMonth: false })
              }
              active={isActive.month}
            >
              Месяц
            </RateButton>
            <RateButton
              handleClick={() =>
                setIsActive({ month: false, threeMonth: true, sixMonth: false })
              }
              sale="-20%"
              active={isActive.threeMonth}
            >
              3 месяца
            </RateButton>
            <RateButton
              handleClick={() =>
                setIsActive({ month: false, threeMonth: false, sixMonth: true })
              }
              sale="-30%"
              active={isActive.sixMonth}
            >
              6 месяцев
            </RateButton>
          </StyledButtonGroup>
        </StyledHeader>
        <StyledRateBlock>
          <RateItem
            recommend={false}
            title="Basic"
            price="3900 р."
            period="Данные доступны за 15 дней"
            detailArray={detailArrayBasic}
          />
          <RateItem
            recommend={true}
            title="Expert"
            price="7900 р."
            period="Данные доступны за 30 дней"
            detailArray={detailArrayExpert}
          />
          <RateItem
            recommend={false}
            title="Enterprise"
            price="13900 р."
            period="Данные доступны за 12 месяцев"
            detailArray={detailArrayEnterprise}
          />
        </StyledRateBlock>
      </Container>
    </StyledSection>
  );
};
