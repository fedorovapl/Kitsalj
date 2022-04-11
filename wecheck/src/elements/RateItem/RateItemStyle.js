import styled from "styled-components";

export const StyledRateContainer = styled.div`
  padding: 55px 0;
  ${(props) =>
    props.recommend
      ? "background-color: #fff; box-shadow: 0px 4px 80px rgba(39, 150, 83, 0.12); padding: 32px 40px 32px 40px; margin: 0 10px;"
      : ""}
  border-radius: 32px;
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
  max-width: 320px;
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
  width: 100%;
  &::after {
    content: "";
    flex-grow: 1;
    width: 100%;
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
`;

export const StyledDetailsTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333d37;
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

  width: 100%;
  svg {
    width: 25px;
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
