import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ReactComponent as HeaderDevider } from "../../assets/svg/metoshi-underline.svg";
import { StakeItem } from "../../components/StakeItem/Stake-item";

const StyledHeader = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 96px;
  line-height: 115px;
  letter-spacing: 0.02em;
  color: #fff;
  text-align: center;
`;

const StyledMitoshi = styled.span`
  color: #b114ff;
`;

const StyledArrowBack = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 87.5px;
`;

const SryledStakeItemContainer = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 32px;
`;

const StyledHeaderDevider = styled(HeaderDevider)`
  @media (max-width: 875px) {
    display: none;
  }
`;

export const Finance = () => {
  const { t } = useTranslation();

  return (
    <div>
      <StyledHeaderContainer>
        <StyledHeader>
          <StyledMitoshi>Metoshi</StyledMitoshi> Finance{" "}
        </StyledHeader>
        <StyledHeaderDevider />
      </StyledHeaderContainer>
      <SryledStakeItemContainer>
        <StakeItem
          stake="1,500.00"
          earnedNum="150.00"
          earnedText="METO"
          apr="30.50%"
          activeButton={false}
        />
        <StakeItem
          stake="0.00"
          earnedNum="0.00"
          earnedText="METO"
          apr="30.50%"
          activeButton={true}
        />
        <StakeItem
          stake="1,500.00"
          earnedNum="10.00"
          earnedText="Comic NFT"
          apr="30.50%"
          activeButton={false}
        />
        <StakeItem
          stake="0.00"
          earnedNum="0.00"
          earnedText="Comic NFT"
          apr="30.50%"
          activeButton={true}
        />
        <StakeItem
          stake="1,500.00"
          earnedNum="15.00"
          earnedText="GovNFT"
          apr="30.50%"
          activeButton={false}
        />
        <StakeItem
          stake="0.00"
          earnedNum="0.00"
          earnedText="GovNFT"
          apr="30.50%"
          activeButton={true}
        />
      </SryledStakeItemContainer>
    </div>
  );
};
