import React from "react";
import CloseModal from "../../assets/img/close-modal.png";
import {
  StyledPopup,
  StyledModal,
  StyledModalHeader,
  StyledModalImgContainer,
} from "./ImgPopupStyle";

export const ImgPopup = ({ img, closeModal, open, title }) => {
  return (
    <StyledPopup
      lockScroll={true}
      open={open}
      closeOnDocumentClick
      onClose={closeModal}
      modal
    >
      <StyledModal>
        <StyledModalHeader>
          <p>{title}</p>
          <img onClick={() => closeModal()} src={CloseModal} alt=""></img>
        </StyledModalHeader>
        <StyledModalImgContainer>
          <img src={img} alt=""></img>
        </StyledModalImgContainer>
      </StyledModal>
    </StyledPopup>
  );
};
