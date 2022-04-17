import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopupTooltip = styled(Popup)`
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
  &-content {
    display: flex;
    background-color: #fff;
    max-width: 80%;
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
  &-overlay {
    background: #0000008c;
  }
`;
export const StyledRateContainer = styled.div`
  padding: 55px 0;
  ${(props) =>
    props.recommend &&
    "background-color: #fff; box-shadow: 0px 4px 80px rgba(39, 150, 83, 0.12); padding: 32px 40px 32px 40px; margin: 0 40px;"}
  border-radius: 32px;
  @media (max-width: 1140px) {
    ${(props) =>
      props.recommend && "padding: 32px 40px 32px 40px; margin: 0 20px;"}
  }
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  }
  @media (max-width: 450px) {
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    margin: 0 0 30px 0;
    padding: 0 10px;
    padding-bottom: 30px;
  }
  @media (max-width: 450px) {
    ${(props) => (props.noDevider ? "" : "border-bottom: 1px solid #e7ebeb;")}
  }
`;
export const StyledTitleContainer = styled.div``;
export const StyledRecommend = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 180%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ff0000;
`;
export const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRateName = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 147.07%;
  color: #333d37;
  width: 100% !important;
  &::after {
    content: "";
    flex-grow: 1;
    width: 100% !important;
    display: inline-block;
    margin: 0 5px 11px 5px;
    border-bottom: 1px dashed #c0d5d5;
  }
`;
export const StyledRatePrice = styled.p`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #219653;
  white-space: nowrap;
`;

export const StyledRulesText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 180%;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6e6e6e;
  text-align: right;
`;

export const StyledDataAvailibleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px;
  margin: 26px 0;
  p {
    margin-right: 10px;
  }
  svg {
    margin-top: 2px;
    cursor: pointer;
    width: 15px;
    &:hover {
      path {
        stroke: black;
      }
    }
  }
`;

export const StyledDetailsTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333d37;
  margin-bottom: 8px;
`;

export const StyledDetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledDetailItemName = styled.div`
  &::after {
    content: "";
    width: 100%;
    margin: 11px 15px 0px 15px;
    border-bottom: 1px dashed #c0d5d5;
  }
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  width: 100% !important;
  svg {
    cursor: pointer;
    width: 15px;
    &:hover {
      path {
        stroke: black;
      }
    }
  }

  p {
    margin-right: 10px;
    white-space: nowrap;
  }
  ${(props) =>
    props.offered ? "color: #333d37;" : "color: rgba(51, 61, 55, 0.5);"}
`;

export const StyledPopupContent = styled.div`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 173.81%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #000000;
  opacity: 0.9;
  border-radius: 3px;
  max-width: 300px;
`;

export const StyledButtonContainer = styled.div`
  button {
    margin-bottom: 16px;
  }
  p {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(51, 61, 55, 0.5);
  }
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 560px) {
    p {
      color: #219653;
    }
  }
`;

export const StyledSecondaryRateButton = styled.button`
  font-family: "Gerbera";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #219653;
  border: 1px solid #219653;
  box-sizing: border-box;
  border-radius: 333px;
  padding: 18px;
  color: #219653;
  background: transparent;
  cursor: pointer;
  &:hover {
    background: #219653;
    color: #ffffff;
  }
`;

export const StyledDevider = styled.div`
  height: 18px;
`;
