import React from "react";
import {
  StyledMainContainer,
  StyledMainContent,
  StyledRecommendation,
  StyledRecommendationContainer,
  StyledTimer,
  StyledTimerContainer,
  StyledFirstBlock,
  StyledSecondBlock,
  StyledThirdBlock,
} from "./MainContentStyle";
import {
  ModuleSelectContainer,
  LessonSelectContainer,
  AnswerContainer,
  HomeworkContainer,
  ConstructorContainer,
} from "../components";

export const MainContentComponent = () => {
  return (
    <StyledMainContainer>
      <StyledMainContent>
        <StyledFirstBlock>
          <div>
            <ModuleSelectContainer />
          </div>
          <div>
            <LessonSelectContainer />
          </div>
          <StyledRecommendationContainer>
            <StyledRecommendation>Рекомендации к проверке</StyledRecommendation>
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
    </StyledMainContainer>
  );
};
