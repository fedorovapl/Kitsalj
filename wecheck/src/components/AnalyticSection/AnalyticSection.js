import React from "react";
import { AnalyticCardComponent } from "../AnalyticCard/AnalyticCardComponent";
import { Container } from "../../elements";
import {
  StyledAnalyticContainer,
  StyledHeader2Text,
  StyledAnalytic,
  StyledAnalyticSection,
} from "./AnalyticSectionStyle";
import { ReactComponent as Analytic1 } from "../../assets/svg/analytic1.svg";
import { ReactComponent as Analytic2 } from "../../assets/svg/analytic2.svg";
import { ReactComponent as Analytic3 } from "../../assets/svg/analytic3.svg";
import { ReactComponent as Analytic4 } from "../../assets/svg/analytic4.svg";
import { ReactComponent as Analytic5 } from "../../assets/svg/analytic5.svg";

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
        </StyledAnalytic>
      </Container>
    </StyledAnalyticSection>
  );
};
