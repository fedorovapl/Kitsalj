import React, { useEffect } from "react";
import { ConstructorComponent } from "./ConstructorComponent";
import {
  CONSTRUCTOR_ACTION_TYPE,
  CONSTRUCTOR_STORE_NAME,
} from "./ConstructorConstant";
import { LESSON_STORE_NAME } from "../LessonSelect/LessonSelectConstant";
import { useSelector, useDispatch } from "react-redux";
import { getFolders, getSubFolders, getPhrases } from "./ConstructorAction";

export const ConstructorContainer = () => {
  const dispatch = useDispatch();
  const { folders, subFolders, phrases } = useSelector(
    (store) => store[CONSTRUCTOR_STORE_NAME]
  );
  const { currentLesson } = useSelector((store) => store[LESSON_STORE_NAME]);

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
    />
  );
};
