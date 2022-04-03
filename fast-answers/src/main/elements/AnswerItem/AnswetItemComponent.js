import React, { useEffect, useState } from "react";

import Popup from "reactjs-popup";
import {
  StyledAnswerContainer,
  StyledAnswerHeader,
  StyledAnswerContent,
  StyledAnswerText,
  StyledAnswerContentButtonGroup,
  StyledPopupTooltip,
  StyledCopyTooltip,
} from "./AnswerItemStyle";
import { ReactComponent as ShowMore } from "../../../assets/svg/show-more.svg";
import { ReactComponent as CopyAnswer } from "../../../assets/svg/copy-answer.svg";
import { ReactComponent as HelpTooltip } from "../../../assets/svg/help-tooltip.svg";
import {
  ANSWER_ACTION_TYPE,
  ANSWER_STORE_NAME,
} from "../../components/Answer/AnswerConstant";
import { useDispatch, useSelector } from "react-redux";

export const AnswerItemComponent = ({
  answerText,
  id,
  open,
  priority,
  handleChangePriority,
  handleSendNewPriority,
  created,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [fullText, setFulltext] = useState(false);
  const dispatch = useDispatch();
  const { currentAnswerValue } = useSelector(
    (store) => store[ANSWER_STORE_NAME]
  );

  const copyAnswer = () => {
    setTooltipOpen(true);
    dispatch({
      type: ANSWER_ACTION_TYPE.SET_ANSWER_VALUE,
      payload: currentAnswerValue + answerText,
    });
    setTimeout(() => {
      setTooltipOpen(false);
    }, 1000);
  };

  const handleFullAnswer = (e) => {
    const id = Number(e.target.id);
    setFulltext(!fullText);
  };

  useEffect(() => {
    return () => {
      setTooltipOpen(false);
    };
  }, []);

  return (
    <StyledAnswerContainer>
      <StyledAnswerHeader>
        <p>
          Приоритет =
          <input
            id={"p" + id}
            onBlur={handleSendNewPriority}
            onChange={handleChangePriority}
            value={priority}
            type="number"
          ></input>
          <Popup
            trigger={() => <HelpTooltip />}
            position="right center"
            on={["hover", "focus"]}
            closeOnDocumentClick
          >
            <StyledPopupTooltip>
              Чтобы изменить расположение ответов, поставьте число по порядку в
              поле слева
            </StyledPopupTooltip>
          </Popup>
        </p>
        <p>{new Date(created).toLocaleString()}</p>
      </StyledAnswerHeader>
      <StyledAnswerContent>
        <StyledAnswerText fullText={fullText}>
          {answerText.split("\n").map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </StyledAnswerText>
        <StyledAnswerContentButtonGroup>
          <p id={id} onClick={(e) => handleFullAnswer(e)}>
            Показать ответ полностью <ShowMore />
          </p>
          <StyledCopyTooltip
            open={tooltipOpen}
            onOpen={copyAnswer}
            trigger={() => (
              <p>
                Скопировать в «Мой ответ» <CopyAnswer />
              </p>
            )}
            position="top center"
            closeOnDocumentClick
          >
            <p>Ответ скопирован в поле «Мой ответ»</p>
          </StyledCopyTooltip>
        </StyledAnswerContentButtonGroup>
      </StyledAnswerContent>
    </StyledAnswerContainer>
  );
};
