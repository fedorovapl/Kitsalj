import React, { useState } from "react";
import {
  StyledAnswerContainer,
  StyledTextarea,
  StyledAnswerHeader,
  StyledAnswerInputContainer,
  StyledLastAnswerHeader,
  StyledLastAnswerIcon,
} from "./AnswerStyle";
import { LastAnswerPopupComponent } from "../Popup/LastAnswer/LastAnswerPopupComponent";
import { Button } from "../../elements";

export const AnswerComponent = ({ isHomeworkSend }) => {
  const [lastAnswerOpen, setLastAnswerOpen] = useState(false);
  const [answerText, setAnswertext] = useState("");
  console.log("answer: ", answerText);

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
        <StyledTextarea
          disabled={!isHomeworkSend}
          placeholder="Сначала вставьте ответ ученика в поле “Домашка ученика” справа 👉"
          value={answerText}
          onChange={(e) => setAnswertext(e.target.value)}
        ></StyledTextarea>
        <div style={{ opacity: "0", fontWeight: 500, fontSize: "14px" }}>
          Фикс
        </div>
      </StyledAnswerInputContainer>
      <Button
        disabled={!isHomeworkSend}
        color={isHomeworkSend ? "primary" : "disabled"}
        py={13}
        px={15}
        children
      >
        Закончить и скопировать
      </Button>
    </StyledAnswerContainer>
  );
};
