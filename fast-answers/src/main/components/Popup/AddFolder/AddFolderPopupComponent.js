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
} from "./AddFolderPopupStyle";

const contentStyle = {
  padding: "20px",
  width: "430px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const AddFolderPopupComponent = ({
  open,
  closeModal,
  folders,
  handleAddFolder,
  currentStage,
}) => {
  const [selectedFolder, setSelectedFolder] = useState({
    value: "no-value",
    label: "Выберите папку",
  });
  const [folderName, setFolderName] = useState("");

  const covertFoldersData = () => {
    let options = [];

    folders?.data.forEach((element) => {
      options.push({
        value: element.id,
        label: element.name,
      });
    });
    return options;
  };

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
            <StyledFolderNameContainer>
              <p>Название папки</p>
              <StyledFolderNameInput
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
                placeholder="Например, смыслы"
              ></StyledFolderNameInput>
            </StyledFolderNameContainer>
            <div>
              <p>
                {currentStage === "folder"
                  ? "Папка будет добавлена в текущий урок"
                  : "Добавить новую папку после папки"}
              </p>
              {currentStage === "folder" ? (
                ""
              ) : (
                <StyledSelect
                  value={selectedFolder}
                  onChange={(selectedOption) =>
                    setSelectedFolder(selectedOption)
                  }
                  options={covertFoldersData()}
                  styles={customStyles}
                />
              )}
            </div>
            <StyledButtonGroup>
              <StyledButtonCancel onClick={closeModal}>
                Отмена
              </StyledButtonCancel>
              <StyledButtonAdd
                onClick={() =>
                  handleAddFolder(folderName, selectedFolder.value)
                }
              >
                Добавить
              </StyledButtonAdd>
            </StyledButtonGroup>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
