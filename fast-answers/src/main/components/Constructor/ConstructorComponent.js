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
import { AddFolderPopupComponent } from "../Popup/AddFolder/AddFolderPopupComponent";
import { EditFolderPopupComponent } from "../Popup/EditFolder/EditFolderPopupComponent";
import { Button } from "../../elements";

export const ConstructorComponent = ({ folders, subFolders, phrases }) => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div>
      <AddFolderPopupComponent
        open={addOpen}
        closeModal={() => setAddOpen(false)}
      />
      <EditFolderPopupComponent
        open={editOpen}
        closeModal={() => setEditOpen(false)}
      />
      <StyledConstructorHeaderContainer>
        <p>Конструктор готовых ответов</p>
        <StyledIconButton onClick={() => setAddOpen(true)}>
          <AddFolder />
          Добавить папку
        </StyledIconButton>
        <StyledIconButton onClick={() => setEditOpen(true)}>
          <EditFolder />
          Редактировать папку
        </StyledIconButton>
      </StyledConstructorHeaderContainer>
      <StyledBreadcrumb>Конструктор</StyledBreadcrumb>
      <StyledConstructorFolderContainer>
        {folders?.data?.map((item) => {
          return (
            <Button key={item.id} py={13} px={15}>
              {item.name}
            </Button>
          );
        })}
        {/* 
        <Button iconPng={Abstract} py={13} px={15}>
          Тезисы
        </Button>
        <Button iconPng={Smile} py={13} px={15}>
          Смайлы
        </Button> */}
      </StyledConstructorFolderContainer>
    </div>
  );
};
