import React from "react";
import {
  StyledHomeworkContainer,
  StyledHomeworkHeader,
  StyledHomeworkInputContainer,
  StyledTextarea,
  StyledHomeworkButton,
} from "./HomeworkStyle";

export const HomeworkComponent = () => {
  return (
    <StyledHomeworkContainer>
      <StyledHomeworkHeader>
        <p>Домашка ученика</p>
      </StyledHomeworkHeader>
      <StyledHomeworkInputContainer>
        <StyledTextarea placeholder="Нажмите кнопку «Вставить», чтобы добавить домашку ученика и начать на нее отвечать."></StyledTextarea>
      </StyledHomeworkInputContainer>
      <StyledHomeworkButton>Вставить</StyledHomeworkButton>
    </StyledHomeworkContainer>
  );
};
