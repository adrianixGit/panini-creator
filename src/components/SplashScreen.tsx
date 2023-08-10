import { useState } from "react";
import {
  StyledSplashScreen,
  StyledCircle,
  StyledMiddleCircle,
  StyledHeadline,
  StyledSmallCircle,
  StyledBeginButton,
} from "../styles/SplashScreen.styled";

type SplashScreenTypes = {
  onSetShowSplashScreen: (isShowingSplashScreen: boolean) => void;
};

export const SplashScreen = ({ onSetShowSplashScreen }: SplashScreenTypes) => {
  const [animate, setAnimate] = useState(false);

  const handleAnimate = () => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
      onSetShowSplashScreen(false);
    }, 3000);
  };

  return (
    <StyledSplashScreen animate={animate}>
      <StyledMiddleCircle animate={animate}>
        <StyledCircle
          style={{ right: "75%" }}
          animationprops={{
            startValue: "translateX(0)",
            endValue: "translateX(-50%)",
          }}
          animate={animate}
        ></StyledCircle>
        <StyledCircle
          style={{ right: "30%" }}
          animationprops={{
            startValue: "translateX(0)",
            endValue: "translateX(-80%)",
          }}
          animate={animate}
        ></StyledCircle>
        <StyledSmallCircle
          style={{ bottom: "58%" }}
          animationprops={{
            startValue: "translateY(0)",
            endValue: "translateY(-80%)",
          }}
          animate={animate}
        />
        <StyledHeadline animate={animate}>
          <h1>Panini Creator</h1>
          <StyledBeginButton onClick={() => handleAnimate()}>
            BEGIN
          </StyledBeginButton>
        </StyledHeadline>
        <StyledSmallCircle
          style={{ top: "58%" }}
          animationprops={{
            startValue: "translateY(0)",
            endValue: "translateY(80%)",
          }}
          animate={animate}
        />
        <StyledCircle
          style={{ left: "30%" }}
          animationprops={{
            startValue: "translateX(0)",
            endValue: "translateX(80%)",
          }}
          animate={animate}
        ></StyledCircle>
        <StyledCircle
          style={{ left: "75%" }}
          animationprops={{
            startValue: "translateX(0)",
            endValue: "translateX(80%)",
          }}
          animate={animate}
        ></StyledCircle>
      </StyledMiddleCircle>
    </StyledSplashScreen>
  );
};
