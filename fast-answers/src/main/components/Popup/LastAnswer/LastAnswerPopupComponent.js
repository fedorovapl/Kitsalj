import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { AnswerItemComponent } from "../../../elements";
import {
  StyledModalContent,
  StyledScrollableContent,
  StyledClosePopup,
} from "./LastAnswerPopupStyle";

const contentStyle = {
  padding: "20px 20px 30px",
  width: "580px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const LastAnswerPopupComponent = ({
  open,
  closeModal,
  lastAnswer,
  handleChangePriority,
  handleSendNewPriority,
}) => {
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
            <p>Мои прошлые ответы</p>
            <StyledScrollableContent>
              {lastAnswer
                ?.sort((a, b) => a.priority > b.priority)
                .map((item) => {
                  return (
                    <AnswerItemComponent
                      key={item.id}
                      created={item.created}
                      answerText={item.text}
                      id={item.id}
                      open={item.open}
                      priority={item.priority}
                      handleChangePriority={handleChangePriority}
                      handleSendNewPriority={handleSendNewPriority}
                    />
                  );
                })}
            </StyledScrollableContent>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
