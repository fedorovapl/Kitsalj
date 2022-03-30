import React, { useEffect } from "react";
import { ConstructorComponent } from "./ConstructorComponent";
import {
  CONSTRUCTOR_ACTION_TYPE,
  CONSTRUCTOR_STORE_NAME,
} from "./ConstructorConstant";
import { LESSON_STORE_NAME } from "../LessonSelect/LessonSelectConstant";
import { useSelector, useDispatch } from "react-redux";
import { getFolders, getSubFolders, getPhrases } from "./ConstructorAction";
import { ANSWER_ACTION_TYPE } from "../Answer/AnswerConstant";

export const ConstructorContainer = () => {
  const dispatch = useDispatch();
  const { folders, subFolders, phrases, currentStage } = useSelector(
    (store) => store[CONSTRUCTOR_STORE_NAME]
  );
  const { currentLesson } = useSelector((store) => store[LESSON_STORE_NAME]);

  const handleFolderClick = (e) => {
    const id = e.target.id.split("");
    id.shift();
    dispatch(getSubFolders(id.join("")));
  };
  const handleSubFolderClick = (e) => {
    const id = e.target.id.split("");
    id.shift();
    dispatch(getPhrases(id.join("")));
  };
  const handlePhraseClick = (e) => {
    const text = e.target.innerText;
    dispatch({ type: ANSWER_ACTION_TYPE.SET_ANSWER_VALUE, payload: text });
  };

  useEffect(() => {
    if (currentLesson.value != "no-value") {
      dispatch(getFolders(currentLesson.value));
    }
  }, [currentLesson]);

  return (
    <ConstructorComponent
      folders={folders}
      subFolders={subFolders}
      phrases={phrases}
      handleFolderClick={handleFolderClick}
      handleSubFolderClick={handleSubFolderClick}
      handlePhraseClick={handlePhraseClick}
      currentStage={currentStage}
    />
  );
};
