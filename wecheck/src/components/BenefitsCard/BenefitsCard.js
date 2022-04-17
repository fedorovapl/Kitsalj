import React, { useState } from "react";
import { GreenButton, ImgPopup } from "../../elements";
import {
  StyledCardContainer,
  StyledTitle,
  StyledText,
  StyledImgContainer,
  StyledPlayButtonGroup,
  StyledTitleVideo,
  StyledImgContainerMob,
  StyledPlay,
} from "./BenefitaCardStyle";
import { ReactComponent as Play } from "../../assets/svg/play2.svg";
import Ben2 from "../../assets/img/benefits2.png";

export const BenefitsCard = ({
  buttonText,
  title,
  text,
  img,
  mImg,
  video,
  popupImg,
}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <React.Fragment>
      <ImgPopup
        img={popupImg}
        closeModal={() => closeModal()}
        open={open}
        title={title}
      />
      <StyledCardContainer onClick={() => setOpen(true)} video={video}>
        {video ? (
          <React.Fragment>
            <StyledPlayButtonGroup>
              <StyledPlay>
                <Play />
              </StyledPlay>
              <p>2 минуты</p>
            </StyledPlayButtonGroup>
            <StyledTitleVideo video={video}>{title}</StyledTitleVideo>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <GreenButton>{buttonText}</GreenButton>
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
            {img && (
              <React.Fragment>
                <StyledImgContainer>
                  <img src={img} alt=""></img>
                </StyledImgContainer>
                <StyledImgContainerMob>
                  <img src={mImg} alt=""></img>
                </StyledImgContainerMob>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </StyledCardContainer>
    </React.Fragment>
  );
};
