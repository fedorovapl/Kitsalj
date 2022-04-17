import React from "react";
import CloseModal from "../../assets/img/close-modal.png";
import { StyledPopup, StyledModal, StyledModalHeader } from "./EmailPopupStyle";

export const EmailPopup = ({ closeModal, open, title }) => {
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
          <img onClick={() => closeModal()} src={CloseModal} alt=""></img>
          <p>{title}</p>
        </StyledModalHeader>
      </StyledModal>
    </StyledPopup>
  );
};
