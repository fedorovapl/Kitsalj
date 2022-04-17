import React, { useState } from "react";
import { PrimaryButton } from "../../elements";
import {
  StyledCardContainer,
  StyledIconContainer,
  StyledTitleContainer,
  StyledTextContainer,
  StyledSubTextContainer,
  StyledButtonContainer,
  StyledModal,
  StyledModalHeader,
  StyledPopup,
  StyledModalImgContainer,
} from "./AnalyticCardStyled";
import FireIcon from "../../assets/img/fire3.png";
import Ben1 from "../../assets/img/benefits1.png";
import CloseModal from "../../assets/img/close-modal.png";
import { ImgPopup } from "../../elements";

export const AnalyticCardComponent = ({
  Icon,
  title,
  text,
  subText,
  button,
  height,
  imgPopup,
}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleClick = (e) => {
    const nodeName = e.target.nodeName;
    if (nodeName === "BUTTON" || nodeName === "IMG") {
    } else {
      setOpen(true);
    }
  };
  return (
    <React.Fragment>
      <ImgPopup
        img={imgPopup ? imgPopup : ""}
        closeModal={() => closeModal()}
        open={open}
        title={title}
      />

      <StyledCardContainer height={height} onClick={(e) => handleClick(e)}>
        <StyledIconContainer>{Icon && <Icon />}</StyledIconContainer>
        <StyledTitleContainer>
          <p>{title}</p>
        </StyledTitleContainer>
        {text && (
          <StyledTextContainer>
            <p>{text}</p>
          </StyledTextContainer>
        )}
        {subText && (
          <StyledSubTextContainer>
            <p>{subText}</p>
          </StyledSubTextContainer>
        )}
        {button && (
          <StyledButtonContainer>
            <PrimaryButton icon={FireIcon}>{button}</PrimaryButton>
          </StyledButtonContainer>
        )}
      </StyledCardContainer>
    </React.Fragment>
  );
};
