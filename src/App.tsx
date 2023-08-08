import { GlobalStyle } from "./styles/globalStyles";
import { Wrapper } from "./styles/Wrapper";
import { StyledOptions } from "styled-components";
import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <SplashScreen />
    </Wrapper>
  );
}

export default App;
