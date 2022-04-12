import React from "react";
import { Container } from "../../elements";
import {
  StyledSection,
  StyledTitle,
  StyledAccordionContainer,
  StyledTelegramContainer,
} from "./AnswersSectionStyle";
import { AccordionItem } from "../../elements";
import { data } from "./AnswerAccordionData";
import TgIcon from "../../assets/img/tg-icon.png";

export const AnswerSection = () => {
  return (
    <StyledSection>
      <Container>
        <StyledTitle>Часто задаваемые вопросы</StyledTitle>
        <StyledAccordionContainer>
          {data.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </StyledAccordionContainer>
        <StyledTelegramContainer>
          <img src={TgIcon} alt=""></img>
          <p>
            Остались вопросы? Задайте в Telegram <span>чате ›</span>
          </p>
        </StyledTelegramContainer>
      </Container>
    </StyledSection>
  );
};
