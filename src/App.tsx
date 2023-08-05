import { GlobalStyle } from "./styles/globalStyles";
import { Wrapper } from "./styles/Wrapper";
import { StyledOptions } from "styled-components";
import {
  StyledSplashScreen,
  StyledCircle,
  StyledMiddleCircle,
  StyledHeadline,
  StyledSmallCircle,
} from "./styles/SplashScreen.styled";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledSplashScreen>
        <StyledMiddleCircle>
          <StyledCircle style={{ right: "75%" }}></StyledCircle>
          <StyledCircle style={{ right: "30%" }}></StyledCircle>
          <StyledSmallCircle style={{ bottom: "58%" }} />
          <StyledHeadline>
            <h1>Panini Creator</h1>
          </StyledHeadline>
          <StyledSmallCircle style={{ top: "58%" }} />
          <StyledCircle style={{ left: "30%" }}></StyledCircle>
          <StyledCircle style={{ left: "75%" }}></StyledCircle>
        </StyledMiddleCircle>
      </StyledSplashScreen>
    </Wrapper>
  );
}

export default App;
