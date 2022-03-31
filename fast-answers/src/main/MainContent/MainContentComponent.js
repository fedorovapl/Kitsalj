import React from "react";
import {
  StyledMainContainer,
  StyledMainContent,
  StyledRecommendationContainer,
  StyledFirstBlock,
  StyledSecondBlock,
  StyledThirdBlock,
  StyledNotLoginContent,
} from "./MainContentStyle";
import {
  ModuleSelectContainer,
  LessonSelectContainer,
  AnswerContainer,
  HomeworkContainer,
  ConstructorContainer,
  RecomendationPopupComponent,
} from "../components";
import { Button } from "../elements";
import { TimerComponent } from "../elements/Timer/TimerComponent";

export const MainContentComponent = ({
  setRecOpen,
  recOpen,
  user,
  text,
  recDisabled,
  minutes,
  seconds,
  currentLesson,
  restartTimer,
  stopTimer,
}) => {
  return (
    <StyledMainContainer>
      <RecomendationPopupComponent
        text={text}
        open={recOpen}
        closeModal={() => setRecOpen(false)}
      />
      {user?.username ? (
        <StyledMainContent>
          <StyledFirstBlock>
            <div>
              <ModuleSelectContainer />
            </div>
            <div>
              <LessonSelectContainer />
            </div>
            <StyledRecommendationContainer>
              <Button
                disabled={currentLesson.value === "no-value" ? true : false}
                py={13}
                px={15}
                onClick={() => setRecOpen(true)}
              >
                Рекомендации к проверке
              </Button>
            </StyledRecommendationContainer>
            <TimerComponent minutes={minutes} seconds={seconds} />
          </StyledFirstBlock>
          <StyledSecondBlock>
            <AnswerContainer
              minutes={minutes}
              seconds={seconds}
              restartTimer={restartTimer}
              stopTimer={stopTimer}
            />
            <HomeworkContainer />
          </StyledSecondBlock>
          <StyledThirdBlock>
            <ConstructorContainer />
          </StyledThirdBlock>
        </StyledMainContent>
      ) : (
        <StyledNotLoginContent>
          Для продолжения войдите в систему
        </StyledNotLoginContent>
      )}
    </StyledMainContainer>
  );
};
