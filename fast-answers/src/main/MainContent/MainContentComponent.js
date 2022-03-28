import React from "react";
import {
  StyledMainContainer,
  StyledMainContent,
  StyledRecommendationContainer,
  StyledTimer,
  StyledTimerContainer,
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

export const MainContentComponent = ({ setRecOpen, recOpen, user, text }) => {
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
              <Button py={13} px={15} handleClick={() => setRecOpen(true)}>
                Рекомендации к проверке
              </Button>
            </StyledRecommendationContainer>
            <StyledTimerContainer>
              <StyledTimer>Время ответа: 18:89</StyledTimer>
            </StyledTimerContainer>
          </StyledFirstBlock>
          <StyledSecondBlock>
            <AnswerContainer />
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
