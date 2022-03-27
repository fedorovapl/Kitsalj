import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { AnswerItemComponent } from "../../../elements";
import {
  StyledModalContent,
  StyledScrollableContent,
  StyledClosePopup,
} from "./LastAnswerPopupStyle";

const contentStyle = {
  padding: "20px 20px 30px",
  width: "580px",
  boxShadow: "0px 3px 10px rgba(0, 73, 129, 0.1)",
  borderRadius: "10px",
};

export const LastAnswerPopupComponent = ({ open, closeModal }) => {
  const [fullAnswer, setFullAnswer] = useState([
    { id: "1", open: false },
    { id: "2", open: false },
    { id: "3", open: false },
    { id: "4", open: false },
  ]);

  const handleFullAnswer = (e) => {
    const id = e.target.id;
    let selectedId = "";
    fullAnswer.filter((item) => {
      id === item.id && (selectedId = item.id);
    });
    setFullAnswer(
      fullAnswer.map((obj) => {
        if (obj.id === selectedId) {
          return { ...obj, open: !obj.open };
        } else {
          return obj;
        }
      })
    );
  };

  return (
    <div>
      <Popup
        {...{ contentStyle }}
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
      >
        <div className="modal">
          <StyledModalContent>
            <StyledClosePopup className="close" onClick={closeModal} />
            <p>Мои прошлые ответы</p>
            <StyledScrollableContent>
              <AnswerItemComponent
                answerText="Елена, добрый день!

                Вы-метеор домашних заданий)))
                Разберем ваши ответы!
                
                Домашка ОК:
                Принимаю все три шапки, вы применили все рекомендации из урока.
                Шапки что надо 🔥Вы довели навык написания шапок профиля до совершенства. Интересные тезисы, призыв к действия и 4U сделали свое дело.
                5 баллов
                
                Домашка Плюс:
                1. Подводка: 18 секунд - очень много, блогер не успеет всё сказать, или выкинет часть текста, или сделает ускорение видео и это будет выглядеть неестественно.
                Также отмечу, что уже в подводке вы сказали про курс и Марину.
                как исправить?
                упрощаем стиль текста:
                Девчата, я месяц назад решила скинуть лишние два килограмма, которые никак не хотели уходить и испробовала новый метод, про который давно слышала, но не решалась попробовать, это не диета, не люблю их, это целая система по очищению всего организма, интересно узнать?
                
                Делаете опрос и следующая сторис уже рекомендация.
                
                Рекомендация 1 и 2:
                первая 18 секунд - много
                вторая: Марина научит, как правильно пить соки, как очистить организм. Вы похудеете до пяти килограмм за четыре дня, просто выпивая пять соков в день. Я следовала всем советам и уже через три дня пропали высыпания, кожа засияла, ушли лишние два килограмма. Кстати, Марина новым подписчикам дарит чек-лист «как укрепить иммунитет» и скидку минус пятнадцать процентов на первый курс - вот в таком виде вы должны писать рекомендации, прописывая все символы и сокращения, цифры словами - иначе вы не сможете правильно посчитать время.
                У вас есть всего 15 секунд на одну сторис, во 2-ой рекомендации у вас 21 секунда.
                Сокращайте и давайте суть!
                
                Тезисы: сами тезисы выделены верно, но если их добавить сухими фактами, это будет странно выглядеть, делайте тезисы блоками в связке со словами, просто не расписывайте прям всё, кратко, но не сухо.
                
                Макет: нужно яркое и интересное фото, может со стройной девушкой (в будущем можно делать видео-макет), есть польза на макете и призыв, но нужно доработать визуал макета! Посмотрите на ADlover какие макеты делают конкуренты, чтобы понимать что может зацепить.
                
                2. Отношения:
                идея хорошая, страдает снова тайминг -18,5 и 20 секунд! Краткость-сестра таланта!!!
                
                Тезисы хорошие, но делаем их на сторис не сухими!
                
                Макет - фото нормальное, но в таких темах можно взять что-то с парой.
                Тезисы нужно красиво распределить по макету, снова рекомендую обратиться к ADlover, нужно вырабатывать насмотренность!
                
                За домашку Плюс 3 балла
                
                Елена, у вас отличные идеи и видно, как вы стараетесь их реализовать, это похвально, примите к сведению мои комментарии, я уверена, что у вас всё будет отлично!!!"
                handleFullAnswer={handleFullAnswer}
                id="1"
                answerData="10.02.2022 в 10:37"
                open={fullAnswer[0].open}
              />
              <AnswerItemComponent
                answerText="Офигительные смыслы подобрали! Все супер! Здорово!"
                handleFullAnswer={handleFullAnswer}
                id="2"
                answerData="10.02.2022 в 10:37"
                open={fullAnswer[1].open}
              />
              <AnswerItemComponent
                answerText="Офигительные смыслы подобрали! Все супер! Здорово!"
                handleFullAnswer={handleFullAnswer}
                id="3"
                answerData="10.02.2022 в 10:37"
                open={fullAnswer[2].open}
              />
              <AnswerItemComponent
                answerText="Офигительные смыслы подобрали! Все супер! Здорово!"
                handleFullAnswer={handleFullAnswer}
                id="4"
                answerData="10.02.2022 в 10:37"
                open={fullAnswer[3].open}
              />
            </StyledScrollableContent>
          </StyledModalContent>
        </div>
      </Popup>
    </div>
  );
};
