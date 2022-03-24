import React from "react";
import styled from "styled-components";
import HelpIcon from "../../assets/imgs/help-icon.png";
import HarvestIcon from "../../assets/imgs/harvest.png";
import WithdrawIcon from "../../assets/imgs/withdraw.png";
import { useTranslation } from "react-i18next";

const StyledStakeItemContainer = styled.div`
  z-index: 10;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 32px;
  padding: 32px;
  min-width: 507px;
  color: #fff;
  box-sizing: border-box;
  @media (max-width: 600px) {
    min-width: 430px;
  }
`;

const StyledStakeItemHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.02em;
  color: #ffffff;
  p {
    margin-right: 10px;
  }
  img {
    cursor: pointer;
  }
`;

const StyledStakeItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
  span {
    color: #c2abcb;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }
`;

const StyledStakeItemRowWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const StyledStakeItemButton = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 21px 25px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 50.1%,
    rgba(255, 255, 255, 0.2) 100%
  );
  background-size: 200%;
  border-radius: 12px;
  min-width: 200px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #ffffff;
  transition-duration: 0.2s;
  ${(props) =>
    props.activeButton &&
    "background: linear-gradient(83.53deg, #B114FF 0, #B114FF 24.77%, #FF1493 100.89%);"}
  ${(props) =>
    props.activeButton &&
    "&:hover { background-position: left center; background-size: 200%;}"}
    
  img {
    margin-left: 12px;
  }
  &:hover {
    background-position: right center;
  }
`;

const StyledStakeItemTextWithButton = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #c2abcb;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.02em;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;
const StyledAPR = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 6px;
  }
`;

export const StakeItem = ({
  stake,
  earnedNum,
  earnedText,
  apr,
  activeButton,
}) => {
  const { t } = useTranslation();
  return (
    <StyledStakeItemContainer>
      <StyledStakeItemHeader>
        <p>
          {t("STAKE.STAKE_TITLE")}
          {earnedText}{" "}
        </p>
        <img src={HelpIcon} alt="" />
      </StyledStakeItemHeader>
      <StyledStakeItemRow>
        <StyledAPR>
          <span> {t("STAKE.APR")}</span>
          <img src={HelpIcon} alt="" />
        </StyledAPR>
        <p>{apr}</p>
      </StyledStakeItemRow>
      <StyledStakeItemRow>
        <span> {t("STAKE.EARNED")}</span>
        <p>
          {earnedText} + {t("STAKE.FEES")}
        </p>
      </StyledStakeItemRow>
      <StyledStakeItemRowWithButton>
        <StyledStakeItemTextWithButton>
          <span>
            {earnedText} {t("STAKE.EARNED")}
          </span>
          <p>{earnedNum}</p>
        </StyledStakeItemTextWithButton>

        <StyledStakeItemButton>
          {t("STAKE.HARVEST")} <img src={HarvestIcon} alt="" />
        </StyledStakeItemButton>
      </StyledStakeItemRowWithButton>
      <StyledStakeItemRowWithButton>
        <StyledStakeItemTextWithButton>
          <span>METO {t("STAKE.INSTAKE")}</span>
          <p>{stake}</p>
        </StyledStakeItemTextWithButton>

        <StyledStakeItemButton activeButton={activeButton}>
          {(activeButton && `${t("STAKE.STAKE")} METO`) ||
            `${t("STAKE.WITHDRAW")}`}{" "}
          <img src={WithdrawIcon} alt="" />
        </StyledStakeItemButton>
      </StyledStakeItemRowWithButton>
    </StyledStakeItemContainer>
  );
};
