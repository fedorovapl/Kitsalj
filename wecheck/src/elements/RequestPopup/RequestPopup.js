import React, { useState } from "react";
import {
  StyledPopup,
  StyledModalHeader,
  StyledModalContent,
  StyledSucces,
  StyledError,
  StyledPending,
} from "./RequestPopupStyle";
import CloseModal from "../../assets/img/close-modal.png";
import axios from "axios";

export const RequestPopup = ({ title, closeModal, open, type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    setStatus(1);
    axios
      .get(
        `https://check.wecheck.ru/api/saveform?name=${name}&email=${email}&phone_number=${number}&type=${
          type ? type : "demo_access"
        }`
      )
      .then((res) => {
        setStatus(res.data.status);
        setIsPending(false);
      });
  };
  return (
    <StyledPopup
      lockScroll={true}
      open={open}
      closeOnDocumentClick
      onClose={closeModal}
      modal
    >
      <StyledModalHeader>
        <p>{title}</p>
        <img onClick={() => closeModal()} src={CloseModal} alt=""></img>
      </StyledModalHeader>
      <StyledModalContent>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Представьтесь"
            type="text"
          ></input>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            placeholder="Телефон"
            type="number"
          ></input>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            type="email"
          ></input>
          <label>
            <input required type="checkbox"></input>
            Принимаю<a>политику конфиденциальности</a>
          </label>
          <input disabled={isPending} type="submit"></input>
          {isPending && <StyledPending>Идет отправка запроса</StyledPending>}
          {status === true && (
            <StyledSucces>Данные успешно отправленны</StyledSucces>
          )}
          {status === false && (
            <StyledError>Не удалось отправить данные</StyledError>
          )}
        </form>
      </StyledModalContent>
    </StyledPopup>
  );
};
