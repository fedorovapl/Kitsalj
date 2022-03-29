import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MainContentComponent } from "./MainContentComponent";
import { HEADER_STORE_NAME } from "../Header";
import { LESSON_STORE_NAME } from "../components/LessonSelect";
export const MainContentContainer = () => {
  const dispatch = useDispatch();
  const [recOpen, setRecOpen] = useState(false);
  const [recomendation, setRecomendation] = useState("");
  const [recDisabled, setRecDisabled] = useState(false);
  const { user, isLoggedIn } = useSelector((store) => store[HEADER_STORE_NAME]);

  const { lessons, currentLesson } = useSelector(
    (store) => store[LESSON_STORE_NAME]
  );

  const convertRecomendation = () => {
    lessons.filter(
      (item) =>
        item.id == currentLesson.value && setRecomendation(item.recommendation)
    );
  };

  useEffect(() => {
    if (recomendation) {
      setRecDisabled(false);
    } else {
      setRecDisabled(true);
    }
  }, [recomendation]);
  useEffect(() => {
    convertRecomendation();
  }, [currentLesson]);

  return (
    <MainContentComponent
      setRecOpen={setRecOpen}
      recOpen={recOpen}
      user={user}
      isLoggedIn={isLoggedIn}
      text={recomendation}
      recDisabled={recDisabled}
    />
  );
};
