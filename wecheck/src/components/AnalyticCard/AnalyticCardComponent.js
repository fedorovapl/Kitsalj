import React from "react";
import { PrimaryButton } from "../../elements";
import {
  StyledCardContainer,
  StyledIconContainer,
  StyledTitleContainer,
  StyledTextContainer,
  StyledSubTextContainer,
  StyledButtonContainer,
} from "./AnalyticCardStyled";
import FireIcon from "../../assets/img/fire.png";
export const AnalyticCardComponent = ({
  Icon,
  title,
  text,
  subText,
  button,
}) => {
  return (
    <StyledCardContainer>
      <StyledIconContainer>{Icon && <Icon />}</StyledIconContainer>
      <StyledTitleContainer>
        <p>{title}</p>
      </StyledTitleContainer>
      {text && (
        <StyledTextContainer>
          <p>{text}</p>
        </StyledTextContainer>
      )}
      {subText && (
        <StyledSubTextContainer>
          <p>{subText}</p>
        </StyledSubTextContainer>
      )}
      {button && (
        <StyledButtonContainer>
          <PrimaryButton icon={FireIcon}>{button}</PrimaryButton>
        </StyledButtonContainer>
      )}
    </StyledCardContainer>
  );
};
