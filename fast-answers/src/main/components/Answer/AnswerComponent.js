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

export const AnswerComponent = ({
  isHomeworkSend,
  currentValue,
  handleAnswerSend,
  setCurrentValue,
  handleGetLastAnswer,
  setLastAnswerOpen,
  lastAnswerOpen,
  lastAnswer,
  handleChangePriority,
  handleSendNewPriority,
  currentLessonId,
}) => {
  return (
    <StyledAnswerContainer>
      <LastAnswerPopupComponent
        lastAnswer={lastAnswer}
        open={lastAnswerOpen}
        closeModal={() => setLastAnswerOpen(false)}
        handleChangePriority={handleChangePriority}
        handleSendNewPriority={handleSendNewPriority}
      />
      <StyledAnswerHeader>
        <p>Мой ответ</p>
        <StyledLastAnswerHeader
          disabled={currentLessonId === "no-value"}
          onClick={handleGetLastAnswer}
        >
          <StyledLastAnswerIcon />
          Мои прошлые ответы
        </StyledLastAnswerHeader>
      </StyledAnswerHeader>
      <StyledAnswerInputContainer>
        <StyledTextarea
          disabled={!isHomeworkSend}
          placeholder="Сначала вставьте ответ ученика в поле “Домашка ученика” справа 👉"
          value={currentValue}
          onChange={(e) => setCurrentValue(e)}
        ></StyledTextarea>
        <div style={{ opacity: "0", fontWeight: 500, fontSize: "14px" }}>
          Фикс
        </div>
      </StyledAnswerInputContainer>
      <Button
        disabled={!isHomeworkSend}
        onClick={handleAnswerSend}
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
