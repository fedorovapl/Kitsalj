import React from "react";
import {
  HeaderComponent,
  AnalyticSection,
  HeaderSection,
  WeCheckBenefitsSection,
  BenefitsCardSection,
  DoubtSection,
  ChoseForSection,
  RateSection,
} from "./components";
import { Container } from "./elements";

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <main>
        <HeaderSection />
        <AnalyticSection />
        <WeCheckBenefitsSection />
        <BenefitsCardSection />
        <DoubtSection />
        <ChoseForSection />
        <RateSection />
        <section>
          <Container></Container>
        </section>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}

export default App;
