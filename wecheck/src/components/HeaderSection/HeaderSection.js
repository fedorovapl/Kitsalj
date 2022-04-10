import React from "react";
import { HeadSectionComponent } from "../HeadSection/HeadSectionComponent";
import { Container } from "../../elements";
import { StyledHeadSection } from "./HeaderSectionStyle";

export const HeaderSection = () => {
  return (
    <StyledHeadSection>
      <Container head={true}>
        <HeadSectionComponent />
      </Container>
    </StyledHeadSection>
  );
};
