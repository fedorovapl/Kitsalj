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

export const ConstructorComponent = () => {
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
        <p>
          Смыслы <img src={Meaning} alt=""></img>
        </p>
        <p>
          Тезисы <img src={Abstract} alt=""></img>
        </p>
        <p>
          Смайлы <img src={Smile} alt=""></img>
        </p>
      </StyledConstructorFolderContainer>
    </div>
  );
};
