import React, { useState } from "react";
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
  RecomendationPopupComponent,
} from "../components";

export const MainContentComponent = () => {
  const [recOpen, setRecOpen] = useState(false);

  return (
    <StyledMainContainer>
      <RecomendationPopupComponent
        open={recOpen}
        closeModal={() => setRecOpen(false)}
      />
      <StyledMainContent>
        <StyledFirstBlock>
          <div>
            <ModuleSelectContainer />
          </div>
          <div>
            <LessonSelectContainer />
          </div>
          <StyledRecommendationContainer>
            <StyledRecommendation onClick={() => setRecOpen(true)}>
              Рекомендации к проверке
            </StyledRecommendation>
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
