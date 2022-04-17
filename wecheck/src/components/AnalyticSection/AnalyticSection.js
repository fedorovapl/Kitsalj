import React from "react";
import { AnalyticCardComponent } from "../AnalyticCard/AnalyticCardComponent";
import { Container, PrimaryButton } from "../../elements";
import {
  StyledAnalyticContainer,
  StyledHeader2Text,
  StyledAnalytic,
  StyledAnalyticSection,
  StyledPrimaryBittonSmall,
  StyledMobile,
} from "./AnalyticSectionStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { ReactComponent as Analytic1 } from "../../assets/svg/analytic1.svg";
import { ReactComponent as Analytic2 } from "../../assets/svg/analytic2.svg";
import { ReactComponent as Analytic3 } from "../../assets/svg/analytic3.svg";
import { ReactComponent as Analytic4 } from "../../assets/svg/analytic4.svg";
import { ReactComponent as Analytic5 } from "../../assets/svg/analytic5.svg";
import { ReactComponent as Analytic6 } from "../../assets/svg/analytic6.svg";

import Fire from "../../assets/img/fire3.png";

import Product from "../../assets/img/popup-img/product.png";
import Brand from "../../assets/img/popup-img/brand.png";
import Category from "../../assets/img/popup-img/category.png";
import Seller from "../../assets/img/popup-img/seller.png";
import Store from "../../assets/img/popup-img/store.png";
import SizeColor from "../../assets/img/popup-img/size-color.png";

export const AnalyticSection = () => {
  return (
    <StyledAnalyticSection>
      <Container>
        <StyledHeader2Text>Аналитика продаж</StyledHeader2Text>
        <StyledMobile>
          <Carousel
            // dynamicHeight={true}
            emulateTouch={true}
            showStatus={false}
            showArrows={false}
          >
            <AnalyticCardComponent
              imgPopup={Product}
              Icon={Analytic1}
              title="По товарам"
              text="Находите лучшие товары для продажи"
              subText="Более 30 параметром для анализа по каждому товару. Находите бестселлеры, анализируйте факторы успеха и зарабатывайте больше"
            />
            <AnalyticCardComponent
              imgPopup={Seller}
              Icon={Analytic4}
              title="По продавцам"
              text="Отслеживайте стратегии продавцов"
              subText="Покажем на каких товарах зарабатывают конкуренты и как работают с ассортиментом
                Находите лучших продавцов в каждой категории, изучайте их стратегии
                и опережайте"
            />
            <AnalyticCardComponent
              imgPopup={Category}
              Icon={Analytic2}
              title="По категориям"
              text="Находите ниши для продаж, определять обьем продаж
                по категориям"
              subText="WeCheck покажет объемы продаж
                по категориям. Изучите потенциал, конкурентность и перспективы в каждой категории маркетплейса"
            />
            <AnalyticCardComponent
              imgPopup={Store}
              Icon={Analytic6}
              title="По складам и регионам"
              text="Планируйте стратегию продаж по регионам"
              subText="WeCheck покажет по каким складам
              и регионам продавцы распределяют товары. Копируйте успешные стратегии поставок и рискуйте меньше"
            />
            <AnalyticCardComponent
              imgPopup={Brand}
              Icon={Analytic3}
              title="По брендам"
              text="Находите трендовые бренды"
              subText="WeCheck покажет аналитику
                по брендам. Анализируйте с какими брендами работают селлеры"
            />
            <AnalyticCardComponent
              imgPopup={SizeColor}
              Icon={Analytic5}
              title="По размерам и цветам"
              text="Анализируйте продажи цветов
                и размеров"
              subText="WeCheck покажет какие цвета
                и размеры продаются, а какие лежат на складе. Экономьте на закупках
                с аналитикой WeCheck по цветам
                и размерам"
              button="Демо-доступ бесплатно"
            />
          </Carousel>
          <PrimaryButton icon={Fire}>Демо-доступ бесплатно</PrimaryButton>
        </StyledMobile>
        <StyledAnalytic>
          <StyledAnalyticContainer>
            <AnalyticCardComponent
              imgPopup={Product}
              Icon={Analytic1}
              title="По товарам"
              text="Находите лучшие товары для продажи"
              subText="Более 30 параметром для анализа по каждому товару. Находите бестселлеры, анализируйте факторы успеха и зарабатывайте больше"
            />
            <AnalyticCardComponent
              imgPopup={Seller}
              Icon={Analytic4}
              title="По продавцам"
              text="Отслеживайте стратегии продавцов"
              subText="Покажем на каких товарах зарабатывают конкуренты и как работают с ассортиментом
                Находите лучших продавцов в каждой категории, изучайте их стратегии
                и опережайте"
            />
          </StyledAnalyticContainer>
          <StyledAnalyticContainer>
            <AnalyticCardComponent
              imgPopup={Category}
              Icon={Analytic2}
              title="По категориям"
              text="Находите ниши для продаж, определять обьем продаж
                по категориям"
              subText="WeCheck покажет объемы продаж
                по категориям. Изучите потенциал, конкурентность и перспективы в каждой категории маркетплейса"
            />
            <AnalyticCardComponent
              imgPopup={Store}
              Icon={Analytic6}
              title="По складам и регионам"
              text="Планируйте стратегию продаж по регионам"
              subText="WeCheck покажет по каким складам
              и регионам продавцы распределяют товары. Копируйте успешные стратегии поставок и рискуйте меньше"
            />
          </StyledAnalyticContainer>
          <StyledAnalyticContainer>
            <AnalyticCardComponent
              imgPopup={Brand}
              Icon={Analytic3}
              title="По брендам"
              text="Находите трендовые бренды"
              subText="WeCheck покажет аналитику
                по брендам. Анализируйте с какими брендами работают селлеры"
            />
            <AnalyticCardComponent
              imgPopup={SizeColor}
              Icon={Analytic5}
              title="По размерам и цветам"
              text="Анализируйте продажи цветов
                и размеров"
              subText="WeCheck покажет какие цвета
                и размеры продаются, а какие лежат на складе. Экономьте на закупках
                с аналитикой WeCheck по цветам
                и размерам"
              button="Демо-доступ бесплатно"
            />
          </StyledAnalyticContainer>
          <StyledPrimaryBittonSmall>
            <PrimaryButton icon={Fire}>Демо-доступ бесплатно</PrimaryButton>
          </StyledPrimaryBittonSmall>
        </StyledAnalytic>
      </Container>
    </StyledAnalyticSection>
  );
};
