import React, { useState } from "react";
import { AnswerComponent } from "./AnswerComponent";
import { useSelector, useDispatch } from "react-redux";
import { HOMEWORK_STORE_NAME } from "../Homework/HomeworkConstant";
import { ANSWER_STORE_NAME, ANSWER_ACTION_TYPE } from "./AnswerConstant";
import { LESSON_STORE_NAME } from "../LessonSelect";
import { getLasAnswer, postAnswer } from "./AnswerAction";

export const AnswerContainer = ({ minutes, seconds, restartTimer }) => {
  const dispatch = useDispatch();
  const [lastAnswerOpen, setLastAnswerOpen] = useState(false);
  const { isHomeworkSend, origin, currentHomeworkText } = useSelector(
    (store) => store[HOMEWORK_STORE_NAME]
  );

  const {
    currentLesson: { value },
  } = useSelector((store) => store[LESSON_STORE_NAME]);

  const { currentAnswerValue, lastAnswer } = useSelector(
    (store) => store[ANSWER_STORE_NAME]
  );

  const handleAnswerSend = () => {
    const response_time = 1200 - (minutes * 60 + seconds);
    restartTimer();
    dispatch(
      postAnswer(
        currentHomeworkText,
        value,
        origin,
        currentAnswerValue,
        response_time
      )
    );
  };

  const setCurrentValue = (e) => {
    const value = e.target.value;
    dispatch({ type: ANSWER_ACTION_TYPE.SET_ANSWER_VALUE, payload: value });
  };

  const handleGetLastAnswer = () => {
    setLastAnswerOpen(true);
    dispatch(getLasAnswer(value));
  };

  return (
    <AnswerComponent
      isHomeworkSend={isHomeworkSend}
      currentValue={currentAnswerValue}
      handleAnswerSend={handleAnswerSend}
      setCurrentValue={setCurrentValue}
      lastAnswerOpen={lastAnswerOpen}
      setLastAnswerOpen={setLastAnswerOpen}
      handleGetLastAnswer={handleGetLastAnswer}
      lastAnswer={lastAnswer}
    />
  );
};
