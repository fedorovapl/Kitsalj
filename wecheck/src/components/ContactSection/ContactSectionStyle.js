import styled from "styled-components";

export const StyledSection = styled.section`
  background: #f4f5f6;
  padding: 160px 0 84px;
  margin-top: -80px;
  z-index: 1;
  @media (max-width: 950px) {
    background: #ffffff;
    margin-top: 0;
    padding: 40px 0;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 32px;
  padding: 32px 48px;
  gap: 40px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const StyledText = styled.div`
  p {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #333d37;
  }
  p:last-child {
    color: #219653;
  }
`;
export const StyledInputContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledEmailInput = styled.input`
  border: none;
  padding: 18px 0;
  border-bottom: 1px solid #c2c5c3;
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: rgba(51, 61, 55, 0.3);
  }
`;
export const StyledCheckInput = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  label {
    margin-left: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.65);
    a {
      text-decoration: none;
      color: #219653;
    }
  }
`;
