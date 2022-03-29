import React, { useEffect, useState } from "react";
import {
  StyledHomeworkContainer,
  StyledHomeworkHeader,
  StyledHomeworkInputContainer,
  StyledTextarea,
  StyledOriginText,
} from "./HomeworkStyle";
import { Button } from "../../elements";

export const HomeworkComponent = ({
  currentText,
  origin,
  isHomeworkPending,
  handlePostHomework,
  isHomeworkSend,
  currentLesson,
}) => {
  return (
    <StyledHomeworkContainer>
      <StyledHomeworkHeader>
        <p>Домашка ученика</p>
      </StyledHomeworkHeader>
      <StyledHomeworkInputContainer>
        <StyledTextarea
          readOnly
          value={currentText}
          disabled={false}
          placeholder={
            currentLesson.value === "no-value"
              ? "Выберите урок"
              : "Нажмите кнопку «Вставить», чтобы добавить домашку ученика из буфера обмена и начать на нее отвечать."
          }
        ></StyledTextarea>
        <StyledOriginText isVisible={!!origin}>
          Уникальность: {origin}%. Снижение баллов не требуется.
        </StyledOriginText>
      </StyledHomeworkInputContainer>
      <Button
        disabled={isHomeworkSend}
        onClick={handlePostHomework}
        color={isHomeworkSend ? "secondary" : "primary"}
        py={13}
        px={15}
        children
      >
        Вставить
      </Button>
    </StyledHomeworkContainer>
  );
};
