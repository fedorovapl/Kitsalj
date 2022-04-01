import React, { useEffect, useState } from "react";
import { ConstructorComponent } from "./ConstructorComponent";
import { CONSTRUCTOR_STORE_NAME } from "./ConstructorConstant";
import { LESSON_STORE_NAME } from "../LessonSelect/LessonSelectConstant";
import { useSelector, useDispatch } from "react-redux";
import {
  getFolders,
  getSubFolders,
  getPhrases,
  editPhrases,
  deletePhrases,
  addPhrase,
} from "./ConstructorAction";
import {
  ANSWER_ACTION_TYPE,
  ANSWER_STORE_NAME,
} from "../Answer/AnswerConstant";
import { HEADER_STORE_NAME } from "../../Header";

export const ConstructorContainer = () => {
  const [editAnswerOpen, setEditAnswerOpen] = useState(false);

  const [selectedPhrase, setSelectedPhrase] = useState("");
  const [selectedPhraseId, setSelectedPhraseId] = useState();

  const [subFolderId, setSubFolderId] = useState();
  const [folderId, setFolderId] = useState();

  const [addAnswerOpen, setAddAnswerOpen] = useState(false);
  const [newAnswerText, setNewAnswerText] = useState("");

  const dispatch = useDispatch();
  const { folders, subFolders, phrases, currentStage } = useSelector(
    (store) => store[CONSTRUCTOR_STORE_NAME]
  );
  const { currentLesson } = useSelector((store) => store[LESSON_STORE_NAME]);
  const { currentAnswerValue } = useSelector(
    (store) => store[ANSWER_STORE_NAME]
  );
  const {
    user: { username },
  } = useSelector((store) => store[HEADER_STORE_NAME]);

  const handleFolderClick = (e) => {
    const id = e.target.id.split("");
    id.shift();
    setFolderId(Number(id.join("")));
    dispatch(getSubFolders(id.join("")));
  };
  const handleSubFolderClick = (e) => {
    const id = e.target.id.split("");
    id.shift();
    setSubFolderId(Number(id.join("")));
    dispatch(getPhrases(id.join("")));
  };
  const handleAnswerChange = (e) => {
    setSelectedPhrase(e.target.value);
  };
  const handleEditAnswer = () => {
    dispatch(editPhrases(selectedPhraseId, selectedPhrase, subFolderId));
    setEditAnswerOpen(false);
  };
  const handlePhraseClick = (e) => {
    let id = e.target.id.split("");
    const prefix = id[0];
    id.shift();
    id = Number(id.join(""));
    const text = e.target.innerText;

    if (prefix === "p") {
      dispatch({
        type: ANSWER_ACTION_TYPE.SET_ANSWER_VALUE,
        payload: currentAnswerValue + text,
      });
    } else if (prefix === "e") {
      setSelectedPhraseId(id);
      setSelectedPhrase(phrases.data.find((item) => item.id === id).phrase);
      setEditAnswerOpen(true);
    } else if (prefix === "d") {
      setSelectedPhraseId(id);
      dispatch(deletePhrases(selectedPhraseId, subFolderId));
    }
  };
  const handleNewAnswerText = (e) => {
    setNewAnswerText(e.target.value);
  };
  const handleAddAnswer = () => {
    dispatch(addPhrase(subFolderId, newAnswerText));
    setAddAnswerOpen(false);
  };
  const handleReturnFolder = () => {
    dispatch(getFolders(currentLesson.value));
  };
  const handleReturnSubFolder = () => {
    dispatch(getSubFolders(folderId));
  };
  const handleReturnPhrases = () => {
    dispatch(getPhrases(subFolderId));
  };

  useEffect(() => {
    if (currentLesson.value !== "no-value") {
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
      currentLesson={currentLesson}
      editAnswerOpen={editAnswerOpen}
      setEditAnswerOpen={setEditAnswerOpen}
      selectedAnswerText={selectedPhrase}
      handleAnswerChange={handleAnswerChange}
      handleEditAnswer={handleEditAnswer}
      handleNewAnswerText={handleNewAnswerText}
      newAnswerText={newAnswerText}
      handleAddAnswer={handleAddAnswer}
      addAnswerOpen={addAnswerOpen}
      setAddAnswerOpen={setAddAnswerOpen}
      folderId={folderId}
      subFolderId={subFolderId}
      handleReturnFolder={handleReturnFolder}
      handleReturnSubFolder={handleReturnSubFolder}
      handleReturnPhrases={handleReturnPhrases}
      username={username}
      selectedPhraseId={selectedPhraseId}
    />
  );
};
