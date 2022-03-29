import React from "react";
import { AnswerComponent } from "./AnswerComponent";
import { useSelector, useDispatch } from "react-redux";
import { HOMEWORK_STORE_NAME } from "../Homework/HomeworkConstant";

export const AnswerContainer = () => {
  const dispatch = useDispatch();
  const { isHomeworkSend } = useSelector((store) => store[HOMEWORK_STORE_NAME]);

  return <AnswerComponent isHomeworkSend={isHomeworkSend} />;
};
