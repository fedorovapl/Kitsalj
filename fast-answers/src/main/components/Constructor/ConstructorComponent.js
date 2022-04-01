import React, { useState } from "react";
import {
  StyledConstructorHeaderContainer,
  StyledBreadcrumb,
  StyledConstructorFolderContainer,
  StyledIconButton,
  StyledBreadItem,
  StyledBreadItemFirst,
} from "./ConstructorStyle";
import { ReactComponent as AddFolder } from "../../../assets/svg/add-folder.svg";
import { ReactComponent as EditFolder } from "../../../assets/svg/edit-folder.svg";

import {
  EditAnswerPopupComponent,
  EditFolderPopupComponent,
  AddFolderPopupContainer,
  AddAnswerPopupComponent,
} from "../";

import { Button, FolderButton } from "../../elements";

export const ConstructorComponent = ({
  folders,
  subFolders,
  phrases,
  handleFolderClick,
  handleSubFolderClick,
  handlePhraseClick,
  currentStage,
  currentLesson,
  setEditAnswerOpen,
  editAnswerOpen,
  selectedAnswerText,
  handleAnswerChange,
  handleEditAnswer,
  handleNewAnswerText,
  newAnswerText,
  handleAddAnswer,
  addAnswerOpen,
  setAddAnswerOpen,
  folderId,
  subFolderId,
  handleReturnFolder,
  handleReturnSubFolder,
  handleReturnPhrases,
  username,
  selectedPhraseId,
}) => {
  const [addFolderOpen, setAddFolderOpen] = useState(false);
  const [editFolderOpen, setEditFolderOpen] = useState(false);

  return (
    <div>
      <AddAnswerPopupComponent
        handleNewAnswerText={handleNewAnswerText}
        newAnswerText={newAnswerText}
        handleAddAnswer={handleAddAnswer}
        open={addAnswerOpen}
        closeModal={() => setAddAnswerOpen(false)}
      />
      <EditAnswerPopupComponent
        handleAnswerChange={handleAnswerChange}
        selectedAnswerText={selectedAnswerText}
        handleEditAnswer={handleEditAnswer}
        open={editAnswerOpen}
        selectedPhraseId={selectedPhraseId}
        subFolderId={subFolderId}
        closeModal={() => setEditAnswerOpen(false)}
      />
      <AddFolderPopupContainer
        open={addFolderOpen}
        closeModal={() => setAddFolderOpen(false)}
        currentStage={currentStage}
      />
      <EditFolderPopupComponent
        open={editFolderOpen}
        closeModal={() => setEditFolderOpen(false)}
        currentStage={currentStage}
        subFolders={subFolders}
        folders={folders}
        currentLesson={currentLesson}
        username={username}
      />
      <StyledConstructorHeaderContainer>
        <p>Конструктор готовых ответов</p>
        {currentStage === "phrase" ? (
          <StyledIconButton onClick={() => setAddAnswerOpen(true)}>
            <AddFolder />
            Добавить новый ответ
          </StyledIconButton>
        ) : (
          <React.Fragment>
            <StyledIconButton
              disabled={currentLesson.value === "no-value"}
              onClick={() => setAddFolderOpen(true)}
            >
              <AddFolder />
              Добавить папку
            </StyledIconButton>
            <StyledIconButton
              disabled={currentLesson.value === "no-value"}
              onClick={() => setEditFolderOpen(true)}
            >
              <EditFolder />
              Редактировать папку
            </StyledIconButton>
          </React.Fragment>
        )}
      </StyledConstructorHeaderContainer>
      <StyledBreadcrumb>
        {currentStage === "folder" ? (
          <StyledBreadItemFirst onClick={handleReturnFolder}>
            Конструктор
          </StyledBreadItemFirst>
        ) : currentStage === "subfolder" ? (
          <React.Fragment>
            <StyledBreadItemFirst onClick={handleReturnFolder}>
              Конструктор
            </StyledBreadItemFirst>
            <StyledBreadItem onClick={handleReturnSubFolder}>
              {folders.data.find((item) => item.id === folderId).name}
            </StyledBreadItem>
          </React.Fragment>
        ) : currentStage === "phrase" ? (
          <React.Fragment>
            <StyledBreadItemFirst onClick={handleReturnFolder}>
              Конструктор
            </StyledBreadItemFirst>
            <StyledBreadItem onClick={handleReturnSubFolder}>
              {folders.data.find((item) => item.id === folderId).name}
            </StyledBreadItem>
            <StyledBreadItem onClick={handleReturnPhrases}>
              {subFolders.data.find((item) => item.id === subFolderId).name}
            </StyledBreadItem>
          </React.Fragment>
        ) : (
          ""
        )}
      </StyledBreadcrumb>
      <StyledConstructorFolderContainer
        currentStage={currentStage === "phrase"}
      >
        {currentStage === "folder" &&
          folders?.data?.map((item) => {
            return (
              <Button
                onClick={(e) => handleFolderClick(e)}
                id={"f" + item.id}
                key={item.id}
                py={13}
                px={15}
              >
                {item.name}
              </Button>
            );
          })}
        {currentStage === "subfolder" &&
          subFolders?.data?.map((item) => {
            return (
              <Button
                onClick={(e) => handleSubFolderClick(e)}
                id={"s" + item.id}
                key={item.id}
                py={13}
                px={15}
              >
                {item.name}
              </Button>
            );
          })}
        {currentStage === "phrase" &&
          phrases?.data?.map((item) => {
            return (
              <FolderButton
                onClick={(e) => handlePhraseClick(e)}
                id={item.id}
                key={item.id}
                creator={item?.creator?.username}
                username={username}
              >
                {item.phrase}
              </FolderButton>
            );
          })}
        {currentStage !== "phrase" &&
        currentStage !== "subfolder" &&
        currentStage !== "folder" ? (
          <div>Выберите урок для отображения папок</div>
        ) : (
          ""
        )}
      </StyledConstructorFolderContainer>
    </div>
  );
};
