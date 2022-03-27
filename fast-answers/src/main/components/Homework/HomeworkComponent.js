import React from "react";
import {
  StyledHomeworkContainer,
  StyledHomeworkHeader,
  StyledHomeworkInputContainer,
  StyledTextarea,
} from "./HomeworkStyle";
import { Button } from "../../elements";

export const HomeworkComponent = () => {
  return (
    <StyledHomeworkContainer>
      <StyledHomeworkHeader>
        <p>Домашка ученика</p>
      </StyledHomeworkHeader>
      <StyledHomeworkInputContainer>
        <StyledTextarea placeholder="Нажмите кнопку «Вставить», чтобы добавить домашку ученика и начать на нее отвечать."></StyledTextarea>
      </StyledHomeworkInputContainer>
      <Button bgColor="primary" color="primary" py={13} px={15} children>
        Вставить
      </Button>
    </StyledHomeworkContainer>
  );
};
