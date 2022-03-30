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

export const LastAnswerPopupComponent = ({ open, closeModal, lastAnswer }) => {
  const [fullAnswer, setFullAnswer] = useState([
    { id: "1", open: false },
    { id: "2", open: false },
    { id: "3", open: false },
    { id: "4", open: false },
  ]);

  const handleFullAnswer = (e) => {
    const id = e.target.id;
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
              {lastAnswer?.map((item) => {
                return (
                  <AnswerItemComponent
                    answerText={item.text}
                    handleFullAnswer={handleFullAnswer}
                    id={item.id}
                    answerData="10.02.2022 в 10:37"
                    open={fullAnswer[1].open}
                    priority={item.priority}
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
