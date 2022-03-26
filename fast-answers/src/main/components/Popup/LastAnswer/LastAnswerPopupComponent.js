import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  StyledModalContent,
  StyledScrollableContent,
  StyledClosePopup,
  StyledAnswerHeader,
  StyledAnswerContent,
  StyledAnswerContentButtonGroup,
  StyledAnswerContainer,
  StyledAnswerText,
} from "./LastAnswerPopupStyle";
import { ReactComponent as HelpTooltip } from "../../../../assets/svg/help-tooltip.svg";
import { ReactComponent as ShowMore } from "../../../../assets/svg/show-more.svg";
import { ReactComponent as CopyAnswer } from "../../../../assets/svg/copy-answer.svg";

const contentStyle = {
  padding: "20px 20px 30px",
  width: "580px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const LastAnswerPopupComponent = ({ open, closeModal }) => {
  const [fullAnswer, setFullAnswer] = useState([
    { id: "qq11", open: false },
    { id: "ww22", open: false },
    { id: "ee33", open: false },
    { id: "rr44", open: false },
  ]);

  const handleFullAnswer = (e) => {
    const id = e.target.id;
    let selectedId = "";
    fullAnswer.filter((item) => {
      id == item.id && (selectedId = item.id);
    });
    setFullAnswer(
      fullAnswer.map((obj) => {
        if (obj.id == selectedId) {
          return { ...obj, open: !obj.open };
        } else {
          return obj;
        }
      })
    );
  };
  console.log(fullAnswer);
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
              <StyledAnswerContainer>
                <StyledAnswerHeader>
                  <p>
                    Приоритет =<input type="number"></input>
                    <HelpTooltip />
                  </p>
                  <p>10.02.2022 в 10:37</p>
                </StyledAnswerHeader>
                <StyledAnswerContent>
                  <StyledAnswerText fullText={fullAnswer[0].open}>
                    Елена, добрый день! Вы-метеор домашних заданий))) Разберем
                    ваши ответы! Домашка ОК: Принимаю все три шапки, вы
                    применили все рекомендации из урока. Шапки что надо 🔥
                    Елена, добрый день! Вы-метеор домашних заданий))) Разберем
                    ваши ответы! Домашка ОК: Принимаю все три шапки, вы
                    применили все рекомендации из урока. Шапки что надо 🔥
                    Елена, добрый день! Вы-метеор домашних заданий))) Разберем
                    ваши ответы! Домашка ОК: Принимаю все три шапки, вы
                    применили все рекомендации из урока. Шапки что надо 🔥
                  </StyledAnswerText>
                  <StyledAnswerContentButtonGroup>
                    <p id="qq11" onClick={(e) => handleFullAnswer(e)}>
                      Показать ответ полностью <ShowMore />
                    </p>
                    <p>
                      Скопировать в «Мой ответ» <CopyAnswer />
                    </p>
                  </StyledAnswerContentButtonGroup>
                </StyledAnswerContent>
              </StyledAnswerContainer>
              <StyledAnswerContainer>
                <StyledAnswerHeader>
                  <p>
                    Приоритет =<input type="number"></input>
                    <HelpTooltip />
                  </p>
                  <p>10.02.2022 в 10:37</p>
                </StyledAnswerHeader>
                <StyledAnswerContent>
                  <StyledAnswerText fullText={fullAnswer[1].open}>
                    Елена, добрый день! Вы-метеор домашних заданий))) Разберем
                    ваши ответы! Домашка ОК: Принимаю все три шапки, вы
                    применили все рекомендации из урока. Шапки что надо 🔥
                  </StyledAnswerText>
                  <StyledAnswerContentButtonGroup>
                    <p id="ww22" onClick={(e) => handleFullAnswer(e)}>
                      Показать ответ полностью <ShowMore />
                    </p>
                    <p>
                      Скопировать в «Мой ответ» <CopyAnswer />
                    </p>
                  </StyledAnswerContentButtonGroup>
                </StyledAnswerContent>
              </StyledAnswerContainer>
              <StyledAnswerContainer>
                <StyledAnswerHeader>
                  <p>
                    Приоритет =<input type="number"></input>
                    <HelpTooltip />
                  </p>
                  <p>10.02.2022 в 10:37</p>
                </StyledAnswerHeader>
                <StyledAnswerContent>
                  <StyledAnswerText fullText={fullAnswer[2].open}>
                    Елена, добрый день! Вы-метеор домашних заданий))) Разберем
                    ваши ответы! Домашка ОК: Принимаю все три шапки, вы
                    применили все рекомендации из урока. Шапки что надо 🔥
                  </StyledAnswerText>
                  <StyledAnswerContentButtonGroup>
                    <p id="ee33" onClick={(e) => handleFullAnswer(e)}>
                      Показать ответ полностью <ShowMore />
                    </p>
                    <p>
                      Скопировать в «Мой ответ» <CopyAnswer />
                    </p>
                  </StyledAnswerContentButtonGroup>
                </StyledAnswerContent>
              </StyledAnswerContainer>
              <StyledAnswerContainer>
                <StyledAnswerHeader>
                  <p>
                    Приоритет =<input type="number"></input>
                    <HelpTooltip />
                  </p>
                  <p>10.02.2022 в 10:37</p>
                </StyledAnswerHeader>
                <StyledAnswerContent>
                  <StyledAnswerText fullText={fullAnswer[3].open}>
                    Елена, добрый день! Вы-метеор домашних заданий))) Разберем
                    ваши ответы! Домашка ОК: Принимаю все три шапки, вы
                    применили все рекомендации из урока. Шапки что надо 🔥
                  </StyledAnswerText>
                  <StyledAnswerContentButtonGroup>
                    <p id="rr44" onClick={(e) => handleFullAnswer(e)}>
                      Показать ответ полностью <ShowMore />
                    </p>
                    <p>
                      Скопировать в «Мой ответ» <CopyAnswer />
                    </p>
                  </StyledAnswerContentButtonGroup>
                </StyledAnswerContent>
              </StyledAnswerContainer>
            </StyledScrollableContent>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
