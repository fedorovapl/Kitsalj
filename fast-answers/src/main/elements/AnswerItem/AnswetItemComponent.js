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

export const AnswerItemComponent = ({
  answerText,
  handleFullAnswer,
  id,
  answerData,
  open,
  priority,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const copyAnswer = () => {
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 2000);
    navigator.clipboard.writeText(answerText);
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
          Приоритет =<input value={priority} type="number"></input>
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
        <p>{answerData}</p>
      </StyledAnswerHeader>
      <StyledAnswerContent>
        <StyledAnswerText fullText={open}>{answerText}</StyledAnswerText>
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
