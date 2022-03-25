import React from "react";
import { Navigation } from "./components";
import { Finance } from "./pages/Finance/Finance";
import styled from "styled-components";
import BgLeft from "./assets/imgs/bg-left.png";
import BgRight from "./assets/imgs/bg-right.png";
import BgTop from "./assets/imgs/bg-top.png";
import { Footer } from "./components/Footer/Footer";

const StyledAppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #150633;
  position: relative;
  z-index: 1;
  @media (max-width: 1110px) {
    height: 100%;
  }
`;

const StyledAppContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 32px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledFooterContainer = styled.div`
  max-width: 1920px;
  padding: 25px;
  margin: 0 auto;
`;

const StyledBgDecL = styled.div`
  background: url(${BgLeft});
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: -60px;
  width: 779px;
  height: 1020px;
  z-index: -1;
  @media (max-width: 875px) {
    width: 610px;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const StyledBgDecR = styled.div`
  background: url(${BgRight});
  position: absolute;
  content: "";
  right: 0;
  top: 90px;
  width: 570px;
  height: 869px;
  z-index: -1;
  @media (max-width: 875px) {
    width: 300px;
  }
`;
const StyledBgDecT = styled.div`
  background: url(${BgTop});
  background-repeat: no-repeat;
  position: absolute;
  right: 100px;
  width: 982px;
  height: 388px;
  z-index: -1;
`;

function App() {
  return (
    <StyledAppWrapper>
      <StyledBgDecR></StyledBgDecR>
      <StyledBgDecL></StyledBgDecL>
      <StyledBgDecT></StyledBgDecT>
      <StyledAppContainer>
        <Navigation />
        <Finance />
      </StyledAppContainer>
      <div>
        <hr style={{ opacity: "0.1", marginTop: "100px" }} />
        <StyledFooterContainer>
          <Footer />
        </StyledFooterContainer>
      </div>
    </StyledAppWrapper>
  );
}

export default App;
