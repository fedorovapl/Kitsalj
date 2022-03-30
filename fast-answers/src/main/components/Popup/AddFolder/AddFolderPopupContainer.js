import React from "react";
import { AddFolderPopupComponent } from "./AddFolderPopupComponent";
import { useSelector, useDispatch } from "react-redux";
import { CONSTRUCTOR_STORE_NAME } from "../../Constructor/ConstructorConstant";
import {
  addSubFolder,
  addFolder,
  getFolders,
  getSubFolders,
} from "../../Constructor/ConstructorAction";
import { LESSON_STORE_NAME } from "../../LessonSelect";

export const AddFolderPopupContainer = ({ open, closeModal }) => {
  const dispatch = useDispatch();
  const { folders, subFolders, phrases, currentStage } = useSelector(
    (store) => store[CONSTRUCTOR_STORE_NAME]
  );
  const {
    currentLesson: { value },
  } = useSelector((store) => store[LESSON_STORE_NAME]);

  const handleAddFolder = (name, folderId) => {
    if (currentStage === "folder") {
      dispatch(addFolder(name, value));
      setTimeout(() => {
        dispatch(getFolders(value));
      }, 500);
    } else if (currentStage === "subfolder") {
      dispatch(addSubFolder(name, folderId));
      setTimeout(() => {
        dispatch(getSubFolders(folderId));
      }, 500);
    } else {
    }
    closeModal();
  };

  return (
    <AddFolderPopupComponent
      currentStage={currentStage}
      open={open}
      closeModal={closeModal}
      folders={folders}
      handleAddFolder={handleAddFolder}
    />
  );
};
