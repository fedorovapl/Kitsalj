import React from "react";
import { Container } from "../../elements";
import { BenefitsCard } from "../BenefitsCard/BenefitsCard";
import {
  StyledSection,
  StyledBlock1,
  StyledBlock2,
  StyledBlock3,
  StyledBlock4,
  StyledBlock5,
  StyledSubBloc1,
  StyledSubBlock2,
  StyledSubBlock3,
  StyledSubBlock4,
} from "./BenefitsCardSectionStyle";
import Benefits1 from "../../assets/img/benefits1.png";
import Benefits2 from "../../assets/img/benefits2.png";
import Benefits3 from "../../assets/img/benefits3.png";

export const BenefitsCardSection = () => {
  return (
    <StyledSection>
      <Container>
        <StyledBlock1>
          <BenefitsCard
            buttonText="Динамика и тренды"
            ttitle="Подбирайте нишу
            и следите за трендами"
            text="WeCheck покажет какие категории, продавцы и бренды набирают обороты, как меняется конкурентность и средний чек. Находите ниши, где продажи растут быстрее новых продавцов и становитесь лидерами в категориях"
          />
          <BenefitsCard
            buttonText="Листинг в категориях"
            ttitle="Отслеживать позиции
            товаров в категориях"
            text="Трекер позиций: WeCheck покажет на какой позиции размещаются карточки товаров в каждой категории. Отслеживайте динамику своих товаров и товаров конкурентов"
          />
        </StyledBlock1>
        <StyledBlock2>
          <BenefitsCard
            buttonText="Ценовая сегментация"
            ttitle="Изучайте спрос по цене"
            text="Выбирать только нишу недостаточно. В каждой нише есть ценовые сегменты с большей и меньшей конкуренцией. WeCheck покажет какой ценовой сегмент имеет лучший потенциал. Подбирайте товары в правильном ценовом сегменте"
            img={Benefits1}
          />
        </StyledBlock2>
        <StyledBlock3>
          <StyledSubBloc1>
            <BenefitsCard
              buttonText="Отслеживание новинок"
              ttitle="Следите
              за новинками"
              text="Изучайте с какими новинками выходят продавцы в каждой категории. Анализируйте продажи новинок и продавайте трендовые товары на пике спроса"
            />
            <BenefitsCard
              buttonText="Изменение цен у товаров"
              ttitle="Эффективно работайте с ценой и не теряйте маржу"
              text="WeCheck покажет когда продавцы меняет цену. Отслеживайте как изменение цены повлияло на продажи и лучше управляйте маржой"
            />
          </StyledSubBloc1>
          <StyledSubBlock3>
            <BenefitsCard
              buttonText="Аналитика поисковых запросов"
              ttitle="Анализируйте поисковые запросы"
              text="Отслеживайте по каким поисковым запросам находят ваши товары и товары конкурентов. Отслеживайте позиции и оценивайте результаты SEO оптимизации"
              img={Benefits2}
            />
          </StyledSubBlock3>
        </StyledBlock3>
        <StyledBlock4>
          <StyledSubBlock4>
            <BenefitsCard
              buttonText="Расширение для браузера"
              ttitle="Смотрите аналитику на сайте маркетплейсов"
              text="Удобно смотреть аналитику продаж прямо на сайте маркетплейса. Просто установите расширение в Chrome и анализируйте продажи на сайтах Wildberries и Ozon"
              img={Benefits3}
            />
          </StyledSubBlock4>
          <StyledSubBlock2>
            <BenefitsCard
              buttonText="Динамика и тренды"
              ttitle="Подбирайте нишу
          и следите за трендами"
              text="WeCheck покажет какие категории, продавцы и бренды набирают обороты, как меняется конкурентность и средний чек. Находите ниши, где продажи растут быстрее новых продавцов и становитесь лидерами в категориях"
            />
            <BenefitsCard
              buttonText="Анализ рекламы"
              ttitle="Анализируйте
              эффективность рекламы"
              text="WeCheck покажет по каким товарам закупали рекламу и какие продажи это принесло. Оценивайте прибыль от рекламы в каждой категории"
            />
          </StyledSubBlock2>
        </StyledBlock4>
        <StyledBlock5>
          <BenefitsCard
            buttonText="Рейтинги и отзывы"
            ttitle="Следите за отзывами
            и рейтингами у товаров"
            text="WeCheck покажет как рейтинги и отзывы влияют
            на продажи у каждого товара"
          />
          <BenefitsCard
            buttonText="Оценка качества контента"
            ttitle="Заполненность характеристик и описания"
            text="Покажем когда продавец изменил фотографии, описание или заполнил характеристики товара"
          />
        </StyledBlock5>
      </Container>
    </StyledSection>
  );
};
