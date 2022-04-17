import styled from "styled-components";

export const StyledSection = styled.section`
  background: #f4f5f6;
  padding-top: 195px;
  margin-top: -80px;
  @media (max-width: 870px) {
    margin-top: 0;
    padding-top: 40px;
  }
`;
export const StyledBlock1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 40px;
  width: 100%;
  div {
    width: 50%;
  }
  @media (max-width: 870px) {
    gap: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;
export const StyledBlock2 = styled.div`
  margin-bottom: 40px;
  @media (max-width: 870px) {
    margin-bottom: 20px;
  }
`;
export const StyledBlock3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 870px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;
export const StyledBlock4 = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  @media (max-width: 1300px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 870px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;
export const StyledBlock5 = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 254px;
  @media (max-width: 870px) {
    gap: 20px;
    padding-bottom: 60px;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export const StyledSubBloc1 = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  div {
    width: 50%;
  }
  @media (max-width: 870px) {
    gap: 20px;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export const StyledSubBlock2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 40%;
  div {
    width: 100%;
  }
  @media (max-width: 1300px) {
    flex-direction: row;
    width: 100%;
    div {
      width: 50%;
    }
  }
  @media (max-width: 870px) {
    gap: 20px;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export const StyledSubBlock3 = styled.div`
  div {
  }
`;

export const StyledSubBlock4 = styled.div`
  width: 60%;
  align-self: stretch;
  div {
    width: 100%;
  }
  @media (max-width: 1300px) {
    width: 100%;
    align-self: flex-start;
  }
`;
