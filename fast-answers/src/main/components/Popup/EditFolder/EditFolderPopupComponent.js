import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  StyledClosePopup,
  StyledModalContent,
  StyledFolderNameContainer,
  StyledFolderNameInput,
  StyledSelect,
  StyledButtonGroup,
  StyledButtonCancel,
  StyledButtonAdd,
} from "./EditFolderPopupStyle";

const options = [
  { value: "folder-1", label: "Смыслы" },
  { value: "folder-2", label: "Тезисы" },
  { value: "folder-3", label: "Смайлы" },
];

const contentStyle = {
  padding: "20px",
  width: "430px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const EditFolderPopupComponent = ({ open, closeModal }) => {
  const [selectedEditFolder, setSelectedEditFolder] = useState(options[0]);
  const [selectedFolder, setSelectedFolder] = useState(options[1]);

  const customStyles = {
    valueContainer: (provided) => ({
      ...provided,
      padding: "9px 11px",
    }),
    control: (provided) => ({
      ...provided,
      border: "1px solid #d5dfe4",
    }),
  };

  return (
    <div>
      <Popup
        {...{ contentStyle }}
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
      >
        <div className="modal">
          <StyledModalContent>
            <StyledClosePopup className="close" onClick={closeModal} />
            <div>
              <p>Выберите папку для редактирования</p>
              <StyledSelect
                value={selectedEditFolder}
                onChange={(selectedOption) =>
                  setSelectedEditFolder(selectedOption)
                }
                options={options}
                styles={customStyles}
              />
            </div>
            <StyledFolderNameContainer>
              <p>Новое имя папки</p>
              <StyledFolderNameInput placeholder="Например, смыслы"></StyledFolderNameInput>
            </StyledFolderNameContainer>
            <div>
              <p>Переместить папку после папки</p>
              <StyledSelect
                value={selectedFolder}
                onChange={(selectedOption) => setSelectedFolder(selectedOption)}
                options={options}
                styles={customStyles}
              />
            </div>
            <StyledButtonGroup>
              <StyledButtonCancel>Отмена</StyledButtonCancel>
              <StyledButtonAdd>Добавить</StyledButtonAdd>
            </StyledButtonGroup>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
