import styled from "styled-components";

export const StyledHeadSection = styled.section`
  background: radial-gradient(
      at left bottom,
      rgb(197 30 170 / 42%) 0%,
      transparent 45%
    ),
    radial-gradient(
      at center bottom,
      rgb(190 32 165 / 32%) -70%,
      transparent 45%
    ),
    radial-gradient(at right bottom, rgb(0 105 255 / 45%) 0%, transparent 40%);
  @media (max-width: 870px) {
    background: radial-gradient(
        at left bottom,
        rgb(197 30 170 / 42%) -30%,
        transparent 35%
      ),
      radial-gradient(
        at center bottom,
        rgb(190 32 165 / 32%) -70%,
        transparent 35%
      ),
      radial-gradient(
        at right bottom,
        rgb(0 105 255 / 45%) -30%,
        transparent 35%
      );
  }
`;
