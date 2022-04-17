import React, { useState } from "react";
import { StyledButton } from "./SecondaryButtonStyle";
import { RequestPopup } from "../RequestPopup/RequestPopup";

export const SecondaryButton = ({ children, type, title }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <React.Fragment>
      <RequestPopup
        type={type}
        title={title ? title : "Запрос доступа на 24 часа"}
        closeModal={closeModal}
        open={open}
      />
      <StyledButton>{children}</StyledButton>
    </React.Fragment>
  );
};
