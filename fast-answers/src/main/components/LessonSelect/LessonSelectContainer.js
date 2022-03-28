import React from "react";
import { LessonSelectComponent } from "./LessonSelectComponent";
import { useSelector, useDispatch } from "react-redux";
import { LESSON_STORE_NAME, LESSON_ACTION_TYPE } from "./LessonSelectConstant";

export const LessonSelectContainer = () => {
  const dispatch = useDispatch();
  const { lessons, currentLesson } = useSelector(
    (store) => store[LESSON_STORE_NAME]
  );

  const setCurrentLesson = (currentLesson) => {
    dispatch({
      type: LESSON_ACTION_TYPE.SET_CURRENT_LESSON,
      payload: currentLesson,
    });
  };

  return (
    <LessonSelectComponent
      lessons={lessons}
      currentLesson={currentLesson}
      setCurrentLesson={setCurrentLesson}
    />
  );
};
