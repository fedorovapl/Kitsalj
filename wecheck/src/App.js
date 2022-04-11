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
  AnswerSection,
  ContactSection,
  Footer,
} from "./components";

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
        <AnswerSection />
        <ContactSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
