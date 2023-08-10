import { GlobalStyle } from "./styles/globalStyles";
import { Wrapper } from "./styles/Wrapper";
import { StyledOptions } from "styled-components";
import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <Wrapper>
      <GlobalStyle />
      {showSplashScreen ? (
        <SplashScreen onSetShowSplashScreen={setShowSplashScreen} />
      ) : null}
      <div>TEST</div>
    </Wrapper>
  );
}

export default App;
