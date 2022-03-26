import React from "react";
import {
  StyledAnswerContainer,
  StyledTextarea,
  StyledAnswerHeader,
  StyledAnswerButton,
  StyledAnswerInputContainer,
  StyledLastAnswerHeader,
  StyledLastAnswerIcon,
} from "./AnswerStyle";

export const AnswerComponent = () => {
  return (
    <StyledAnswerContainer>
      <StyledAnswerHeader>
        <p>Мой ответ</p>
        <StyledLastAnswerHeader>
          <StyledLastAnswerIcon />
          Мои прошлые ответы
        </StyledLastAnswerHeader>
      </StyledAnswerHeader>
      <StyledAnswerInputContainer>
        <StyledTextarea placeholder="Сначала вставьте ответ ученика в поле “Домашка ученика” справа 👉"></StyledTextarea>
      </StyledAnswerInputContainer>
      <StyledAnswerButton>Закончить и скопировать</StyledAnswerButton>
    </StyledAnswerContainer>
  );
};
