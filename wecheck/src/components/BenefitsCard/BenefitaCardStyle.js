import styled from "styled-components";
import Play from "../../assets/img/cursor.png";

export const StyledCardContainer = styled.div`
  padding: 40px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 32px;
  ${(props) =>
    props.video ? `cursor: url(${Play}) 44 44, auto;` : "cursor: pointer;"}
  ${(props) =>
    props.video &&
    "background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(128.23deg, rgba(19, 214, 103, 0.9) 0%, rgba(37, 161, 91, 0.9) 98.07%);"}

  @media (max-width: 480px) {
    padding: 30px;
  }
  @media (max-width: 480px) {
    padding: 26px;
  }
`;
export const StyledPlayButtonGroup = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  img {
    width: 66px;
  }
  p {
    color: #fff;
    padding: 10px 0 10px 20px;
    margin-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
  ${StyledCardContainer}:hover & {
    opacity: 0;
  }
  @media (max-width: 560px) {
    p {
      padding: 6px 0 6px 20px;
    }
  }
`;
export const StyledTitleVideo = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.3px;
  color: #fff;
  margin-top: 165px;

  @media (max-width: 870px) {
    font-size: 26px;
    line-height: 31px;
  }
  @media (max-width: 560px) {
    margin-top: 120px;
    font-size: 20px;
  }
`;

export const StyledTitle = styled.p`
  padding-bottom: 20px;
  margin: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.3px;
  color: #213a2b;
  &::after {
    content: "›";
    opacity: 0;
    color: #279d5a;
    margin-left: 5px;
  }
  ${StyledCardContainer}:hover & {
    transition: 0.3s;
    color: #279d5a;
    &::after {
      content: "›";
      opacity: 1;
      margin-left: 5px;
    }
  }
  @media (max-width: 870px) {
    font-size: 26px;
    line-height: 31px;
  }
  @media (max-width: 560px) {
    font-size: 20px;
    padding-bottom: 12px;
    margin: 12px 0;
    &::after {
      content: "›";
      opacity: 1;
      color: #1f202a;
      margin-left: 5px;
    }
  }
`;

export const StyledPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px !important;
  height: 66px;
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(14, 136, 67, 0.41);
  border-radius: 100px;
  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #396149;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1fdf6;
  border-radius: 32px;
  margin-top: 49px;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

export const StyledImgContainerMob = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background: #f1fdf6;
  border-radius: 32px;
  margin-top: 16px;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 560px) {
    display: flex;
  }
`;
