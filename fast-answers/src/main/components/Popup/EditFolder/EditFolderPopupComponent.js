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
  StyledDeleteFolderContainer,
  StyledButtonDelete,
} from "./EditFolderPopupStyle";
import {
  editFolder,
  editSubFolder,
  getFolders,
  getSubFolders,
  deleteFolder,
  deleteSubFolder,
} from "../../Constructor/ConstructorAction";
import { useDispatch } from "react-redux";

const contentStyle = {
  padding: "20px",
  width: "430px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const EditFolderPopupComponent = ({
  open,
  closeModal,
  currentStage,
  subFolders,
  folders,
  currentLesson,
  username,
}) => {
  const dispatch = useDispatch();
  const [selectedEditFolder, setSelectedEditFolder] = useState({
    value: "no-value",
    label: "---------",
  });
  const [selectedFolder, setSelectedFolder] = useState({
    value: "no-value",
    label: "---------",
  });
  const [newFolderName, setNewFolderName] = useState("");
  const [acceptOpen, setAcceptOpen] = useState(false);

  const convertFolder = (array) => {
    let temp = array.filter((item) => item.creator.username === username);
    let options = [];

    if (temp) {
      temp.forEach((element) => {
        options.push({
          value: element.id,
          label: element.name,
        });
      });
    } else {
      options = [];
    }
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

  const handleDestinationFolder = (value) => {
    setSelectedEditFolder(value);
  };
  const handleEditFolder = (value) => {
    setSelectedFolder(value);
  };

  const handleDeleteFolder = () => {
    if (currentStage === "folder") {
      dispatch(deleteFolder(selectedEditFolder.value))
        .then(() => setAcceptOpen(false))
        .then(() => dispatch(getFolders(currentLesson.value)));
    } else {
      dispatch(deleteSubFolder(selectedEditFolder.value))
        .then(() => setAcceptOpen(false))
        .then(() => dispatch(getSubFolders(Number(subFolders.currentFolder))));
    }
  };

  const handlePostEditFolder = () => {
    if (currentStage === "folder") {
      dispatch(
        editFolder(selectedEditFolder.value, newFolderName, currentLesson.value)
      )
        .then(() => closeModal())
        .then(() => dispatch(getFolders(currentLesson.value)));
      setSelectedEditFolder({
        value: "no-value",
        label: "---------",
      });
    } else {
      dispatch(
        editSubFolder(
          selectedEditFolder.value,
          newFolderName,
          selectedFolder.value
        )
      )
        .then(() => closeModal())
        .then(() => dispatch(getSubFolders(Number(subFolders.currentFolder))));
      setSelectedFolder({
        value: "no-value",
        label: "---------",
      });
    }
  };

  return (
    <div>
      <Popup
        {...{ contentStyle }}
        open={acceptOpen}
        closeOnDocumentClick
        onClose={() => setAcceptOpen(false)}
      >
        <div className="modal">
          <StyledModalContent>
            <StyledClosePopup
              className="close"
              onClick={() => setAcceptOpen(false)}
            />
            <p>
              Вы действительно хотите удалить папку {selectedEditFolder.label} ?
            </p>
            <StyledButtonGroup>
              <StyledButtonCancel onClick={() => setAcceptOpen(false)}>
                Не удалять
              </StyledButtonCancel>
              <StyledButtonDelete onClick={handleDeleteFolder}>
                Удалить
              </StyledButtonDelete>
            </StyledButtonGroup>
          </StyledModalContent>
        </div>
      </Popup>
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
                  handleDestinationFolder(selectedOption)
                }
                options={
                  currentStage === "subfolder"
                    ? [
                        {
                          value: "no-value",
                          label: "---------",
                        },
                        ...convertFolder(subFolders.data),
                      ]
                    : [
                        {
                          value: "no-value",
                          label: "---------",
                        },
                        ...convertFolder(folders.data),
                      ]
                }
                styles={customStyles}
              />
            </div>
            <StyledFolderNameContainer>
              <p>Новое имя папки</p>
              <StyledFolderNameInput
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Например, смыслы"
              ></StyledFolderNameInput>
            </StyledFolderNameContainer>
            <div>
              <p>Переместить папку после папки</p>
              <StyledSelect
                isDisabled={currentStage === "folder"}
                value={selectedFolder}
                onChange={(selectedOption) => handleEditFolder(selectedOption)}
                options={[
                  {
                    value: "no-value",
                    label: "---------",
                  },
                  ...convertFolder(folders.data),
                ]}
                styles={customStyles}
              />
            </div>
            <StyledButtonGroup>
              <StyledButtonCancel onClick={closeModal}>
                Отмена
              </StyledButtonCancel>
              <StyledButtonAdd
                disabled={
                  currentStage === "subfolder" &&
                  (selectedFolder.value === "no-value" ||
                    selectedEditFolder.value === "no-value")
                }
                onClick={handlePostEditFolder}
              >
                Сохранить изменения
              </StyledButtonAdd>
            </StyledButtonGroup>
            <StyledDeleteFolderContainer
              disabled={selectedEditFolder.value === "no-value"}
            >
              <div onClick={() => setAcceptOpen(true)}>Удалить папку</div>
            </StyledDeleteFolderContainer>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
