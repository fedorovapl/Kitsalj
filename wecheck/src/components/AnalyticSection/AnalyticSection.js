import React from "react";
import { AnalyticCardComponent } from "../AnalyticCard/AnalyticCardComponent";
import { Container, PrimaryButton } from "../../elements";
import {
  StyledAnalyticContainer,
  StyledHeader2Text,
  StyledAnalytic,
  StyledAnalyticSection,
  StyledPrimaryBittonSmall,
} from "./AnalyticSectionStyle";
import { ReactComponent as Analytic1 } from "../../assets/svg/analytic1.svg";
import { ReactComponent as Analytic2 } from "../../assets/svg/analytic2.svg";
import { ReactComponent as Analytic3 } from "../../assets/svg/analytic3.svg";
import { ReactComponent as Analytic4 } from "../../assets/svg/analytic4.svg";
import { ReactComponent as Analytic5 } from "../../assets/svg/analytic5.svg";
import { ReactComponent as Analytic6 } from "../../assets/svg/analytic6.svg";
import Fire from "../../assets/img/fire.png";

export const AnalyticSection = () => {
  return (
    <StyledAnalyticSection>
      <Container>
        <StyledHeader2Text>Аналитика продаж</StyledHeader2Text>
        <StyledAnalytic>
          <StyledAnalyticContainer>
            <AnalyticCardComponent
              Icon={Analytic1}
              title="По товарам"
              text="Находите лучшие товары для продажи"
              subText="Более 30 параметром для анализа по каждому товару. Находите бестселлеры, анализируйте факторы успеха и зарабатывайте больше"
            />
            <AnalyticCardComponent
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
              Icon={Analytic2}
              title="По категориям"
              text="Находите ниши для продаж, определять обьем продаж
                по категориям"
              subText="WeCheck покажет объемы продаж
                по категориям. Изучите потенциал, конкурентность и перспективы в каждой категории маркетплейса"
            />
            <AnalyticCardComponent
              Icon={Analytic6}
              title="По складам и регионам"
              text="Планируйте стратегию продаж по регионам"
              subText="WeCheck покажет по каким складам
              и регионам продавцы распределяют товары. Копируйте успешные стратегии поставок и рискуйте меньше"
            />
          </StyledAnalyticContainer>
          <StyledAnalyticContainer>
            <AnalyticCardComponent
              Icon={Analytic3}
              title="По брендам"
              text="Находите трендовые бренды"
              subText="WeCheck покажет аналитику
                по брендам. Анализируйте с какими брендами работают селлеры"
            />
            <AnalyticCardComponent
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
