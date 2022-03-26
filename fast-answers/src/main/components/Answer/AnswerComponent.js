import React, { useState } from "react";
import {
  StyledAnswerContainer,
  StyledTextarea,
  StyledAnswerHeader,
  StyledAnswerButton,
  StyledAnswerInputContainer,
  StyledLastAnswerHeader,
  StyledLastAnswerIcon,
} from "./AnswerStyle";
import { LastAnswerPopupComponent } from "../Popup/LastAnswer/LastAnswerPopupComponent";

export const AnswerComponent = () => {
  const [lastAnswerOpen, setLastAnswerOpen] = useState(false);

  return (
    <StyledAnswerContainer>
      <LastAnswerPopupComponent
        open={lastAnswerOpen}
        closeModal={() => setLastAnswerOpen(false)}
      />
      <StyledAnswerHeader>
        <p>Мой ответ</p>
        <StyledLastAnswerHeader onClick={() => setLastAnswerOpen(true)}>
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
