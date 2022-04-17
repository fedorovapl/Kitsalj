import React, { useState } from "react";
import {
  StyledSection,
  StyledContent,
  StyledText,
  StyledEmailInput,
  StyledInputContainer,
  StyledCheckInput,
  StyleButtonFix,
  StyledContainer,
  StyledInputSubmit,
} from "./ContactSectionStyle";
import axios from "axios";
import { EmailPopup } from "../../elements";

export const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  const handleEmailSend = (e) => {
    e.preventDefault();
    setIsPending(true);
    setStatus(1);
    axios
      .get(
        `https://check.wecheck.ru/api/saveform?email=${email}&type=subscribe`
      )
      .then((res) => {
        setStatus(res.data.status);
        setIsPending(false);
      })
      .then(() => setOpen(true))
      .then(() =>
        setTimeout(() => {
          setOpen(false);
        }, 2000)
      );
  };

  return (
    <StyledSection>
      <StyledContainer>
        <StyledContent>
          <StyledText>
            <p>Советы по аналитике.</p>
            <p>Тренды. Новости о маркетплейсах.</p>
            <p>Раз в неделю, без спама.</p>
          </StyledText>
          <StyledInputContainer
            onSubmit={(e) => handleEmailSend(e)}
            id="email-form"
          >
            <StyledEmailInput
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Введите ваш email ..."
            ></StyledEmailInput>
            <StyledCheckInput>
              <input required type="checkbox"></input>
              <label>
                Принимаю <a href="">Политику конфиденциальности</a>
              </label>
            </StyledCheckInput>
          </StyledInputContainer>
          <EmailPopup
            title={"Данные отправлены, мы свяжемся с вами в ближайшее время"}
            closeModal={closeModal}
            open={open}
          />
          <StyleButtonFix>
            <StyledInputSubmit
              value="Подписаться"
              type="submit"
              form="email-form"
              emailContact={true}
            ></StyledInputSubmit>
          </StyleButtonFix>
        </StyledContent>
      </StyledContainer>
    </StyledSection>
  );
};
