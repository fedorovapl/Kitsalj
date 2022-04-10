import React from "react";
import { Container } from "../../elements";
import {
  StyledHeader,
  StyledSection,
  StyledTitle,
  StyledButtonGroup,
} from "./RateSectionStyle";
import { RateButton } from "../../elements";
export const RateSection = () => {
  return (
    <StyledSection>
      <Container>
        <StyledHeader>
          <StyledTitle>Наши тарифы</StyledTitle>
          <StyledButtonGroup>
            <RateButton active={true}>Месяц</RateButton>
            <RateButton sale="-20%" active={false}>
              3 месяца
            </RateButton>
            <RateButton sale="-30%" active={false}>
              6 месяцев
            </RateButton>
          </StyledButtonGroup>
        </StyledHeader>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </StyledSection>
  );
};
