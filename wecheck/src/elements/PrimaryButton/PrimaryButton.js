import React, { useState } from "react";
import { StyledButton } from "./PrimaryButtonStyle";
import { RequestPopup } from "../RequestPopup/RequestPopup";

export const PrimaryButton = ({
  children,
  icon,
  emailContact,
  type,
  title,
  popupDisable,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleClick = () => {
    if (emailContact) {
      console.log("send email");
    } else {
      setOpen(true);
    }
  };
  return (
    <React.Fragment>
      <RequestPopup
        type={type}
        title={title ? title : "Запрос доступа на 24 часа"}
        closeModal={closeModal}
        open={open}
      />

      <StyledButton onClick={onClick ? onClick : handleClick}>
        {icon && <img src={icon} alt=""></img>}
        {children}
      </StyledButton>
    </React.Fragment>
  );
};
