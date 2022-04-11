import React, { useState } from "react";
import {
  StyledAccordionItem,
  StyledAccordionTitle,
  StyledAccordionContent,
} from "./AccordionStyle";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";

export const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordionItem onClick={() => setIsActive(!isActive)}>
      <StyledAccordionTitle isActive={isActive}>
        <p>{title}</p>
        <div>{isActive ? <ArrowUp /> : <ArrowDown />}</div>
      </StyledAccordionTitle>
      {isActive && <StyledAccordionContent>{content}</StyledAccordionContent>}
    </StyledAccordionItem>
  );
};
