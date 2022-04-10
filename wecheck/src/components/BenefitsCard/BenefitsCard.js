import React from "react";
import { GreenButton } from "../../elements";
import {
  StyledCardContainer,
  StyledTitle,
  StyledText,
  StyledImgContainer,
} from "./BenefitaCardStyle";

export const BenefitsCard = ({ buttonText, ttitle, text, img }) => {
  return (
    <StyledCardContainer>
      <GreenButton>{buttonText}</GreenButton>
      <StyledTitle>{ttitle}</StyledTitle>
      <StyledText>{text}</StyledText>
      {img && (
        <StyledImgContainer>
          <img src={img} alt=""></img>
        </StyledImgContainer>
      )}
    </StyledCardContainer>
  );
};
