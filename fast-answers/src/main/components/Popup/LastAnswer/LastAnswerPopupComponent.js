import React, { useState } from "react";
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
  const [fullAnswer, setFullAnswer] = useState(
    lastAnswer.map((item) => ({ ...item, open: false }))
  );

  const handleFullAnswer = (e) => {
    const id = Number(e.target.id);
    let selectedId = "";
    fullAnswer.filter((item) => {
      id === item.id && (selectedId = item.id);
    });
    setFullAnswer(
      fullAnswer.map((obj) => {
        if (obj.id === selectedId) {
          return { ...obj, open: !obj.open };
        } else {
          return obj;
        }
      })
    );
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
            <p>Мои прошлые ответы</p>
            <StyledScrollableContent>
              {fullAnswer
                ?.sort((a, b) => a.priority > b.priority)
                .map((item) => {
                  return (
                    <AnswerItemComponent
                      answerText={item.text}
                      handleFullAnswer={handleFullAnswer}
                      id={item.id}
                      answerData="10.02.2022 в 10:37"
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
