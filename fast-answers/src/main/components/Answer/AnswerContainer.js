import React, { useState } from "react";
import { AnswerComponent } from "./AnswerComponent";
import { useSelector, useDispatch } from "react-redux";
import { HOMEWORK_STORE_NAME } from "../Homework/HomeworkConstant";
import { ANSWER_STORE_NAME, ANSWER_ACTION_TYPE } from "./AnswerConstant";
import { LESSON_STORE_NAME } from "../LessonSelect";
import { getLasAnswer, postAnswer, changePriority } from "./AnswerAction";

export const AnswerContainer = ({
  minutes,
  seconds,
  restartTimer,
  stopTimer,
}) => {
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
    navigator.clipboard.writeText(currentAnswerValue);
    stopTimer();
    dispatch(
      postAnswer(
        currentHomeworkText,
        value,
        origin,
        currentAnswerValue,
        response_time
      )
    ).then(() =>
      setTimeout(() => {
        window.location.reload();
      }, 1500)
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

  const handleChangePriority = (e) => {
    let id = e.target.id.split("");
    id.shift();
    id = Number(id.join(""));

    let newAnsweArray = lastAnswer;
    newAnsweArray[
      lastAnswer.indexOf(lastAnswer.filter((item) => item.id === id)[0])
    ].priority = Number(e.target.value);

    dispatch({
      type: ANSWER_ACTION_TYPE.CHANGE_PRIORIRY,
      payload: newAnsweArray,
    });
  };
  const handleSendNewPriority = (e) => {
    const priorValue = e.target.value;
    let id = e.target.id.split("");
    id.shift();
    id = Number(id.join(""));
    dispatch(changePriority(id, priorValue)).then(() =>
      setTimeout(() => {
        dispatch(getLasAnswer(value));
      }, 2000)
    );
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
      handleChangePriority={handleChangePriority}
      handleSendNewPriority={handleSendNewPriority}
      currentLessonId={value}
    />
  );
};
