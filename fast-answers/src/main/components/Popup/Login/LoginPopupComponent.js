import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  StyledClosePopup,
  StyledModalContent,
  StyledUserNameContainer,
  StyledFolderNameInput,
  StyledButtonGroup,
  StyledButtonCancel,
  StyledButtonAdd,
  StyledPasswordContainer,
} from "./LoginPopupStyle";

const contentStyle = {
  padding: "20px",
  width: "430px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const LoginPopupComponent = ({ open, closeModal, handleClick }) => {
  const [nick, setNick] = useState("");
  const [pass, setPass] = useState("");
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
            <StyledUserNameContainer>
              <p>Имя пользователя</p>
              <StyledFolderNameInput
                value={nick}
                onChange={(e) => setNick(e.target.value)}
                placeholder="Имя пользователя"
              ></StyledFolderNameInput>
            </StyledUserNameContainer>
            <StyledPasswordContainer>
              <p>Пароль</p>
              <StyledFolderNameInput
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
              ></StyledFolderNameInput>
            </StyledPasswordContainer>
            <StyledButtonGroup>
              <StyledButtonCancel>Отмена</StyledButtonCancel>
              <StyledButtonAdd onClick={() => handleClick(nick, pass)}>
                Войти
              </StyledButtonAdd>
            </StyledButtonGroup>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
