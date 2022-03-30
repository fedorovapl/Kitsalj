import React, { useState } from "react";
import {
  StyledConstructorHeaderContainer,
  StyledBreadcrumb,
  StyledConstructorFolderContainer,
  StyledIconButton,
} from "./ConstructorStyle";
import { ReactComponent as AddFolder } from "../../../assets/svg/add-folder.svg";
import { ReactComponent as EditFolder } from "../../../assets/svg/edit-folder.svg";
import Meaning from "../../../assets/img/meaning.png";
import Abstract from "../../../assets/img/abstract.png";
import Smile from "../../../assets/img/smile.png";
import { AddFolderPopupContainer } from "../Popup/AddFolder/AddFolderPopupContainer";
import { EditFolderPopupComponent } from "../Popup/EditFolder/EditFolderPopupComponent";
import { Button } from "../../elements";
import { ReactComponent as EditAnswer } from "../../../assets/svg/edit-answer.svg";
import { ReactComponent as DeleteAnswer } from "../../../assets/svg/delete-answer.svg";

export const ConstructorComponent = ({
  folders,
  subFolders,
  phrases,
  handleFolderClick,
  handleSubFolderClick,
  handlePhraseClick,
  currentStage,
}) => {
  const [addFolderOpen, setAddFolderOpen] = useState(false);
  const [editFolderOpen, setEditFolderOpen] = useState(false);
  const [editAnswerOpen, setEditAnswerOpen] = useState(false);
  const [addAnswerOpen, setAddAnswerOpen] = useState(false);

  return (
    <div>
      <AddFolderPopupContainer
        open={addFolderOpen}
        closeModal={() => setAddFolderOpen(false)}
        currentStage={currentStage}
      />
      <EditFolderPopupComponent
        open={editFolderOpen}
        closeModal={() => setEditFolderOpen(false)}
        currentStage={currentStage}
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
            <StyledIconButton onClick={() => setAddFolderOpen(true)}>
              <AddFolder />
              Добавить папку
            </StyledIconButton>
            <StyledIconButton onClick={() => setEditFolderOpen(true)}>
              <EditFolder />
              Редактировать папку
            </StyledIconButton>
          </React.Fragment>
        )}
      </StyledConstructorHeaderContainer>
      <StyledBreadcrumb>Конструктор</StyledBreadcrumb>
      <StyledConstructorFolderContainer>
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
              <Button
                onClick={(e) => handlePhraseClick(e)}
                id={"p" + item.id}
                key={item.id}
                py={13}
                px={15}
                EditIcon={EditAnswer}
                DeleteIcon={DeleteAnswer}
              >
                {item.phrase}
              </Button>
            );
          })}
      </StyledConstructorFolderContainer>
    </div>
  );
};
