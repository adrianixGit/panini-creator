import { styled, keyframes } from "styled-components";

type AnimationPropsType = {
  startValue?: string;
  endValue?: string;
};

type SyledCircleTypes = {
  animationprops?: AnimationPropsType;
  animate?: boolean;
};

type AnimatePropType = {
  animate: boolean;
};

const animateOpacitySplashScreen = () => keyframes`
    from {
        opacity:  1;
    }
    to {
        opacity: 0;
    }
`;

const generateAnimation = (animationProps) => keyframes`
    from {
        transform: ${animationProps.startValue};
    }
    to {
        transform: ${animationProps.endValue};
    }
`;

const animateMiddleCircle = () => keyframes`
    
    0% {
        width: 1091px;
        position: absolute;
    }
    100% {
        width: 200%;
        position: absolute;
    }

`;

const animateHeadlineBefore = () => keyframes`
    from {
        left: 0;
    }
    to {
        left: 100%;
    }
`;
const animateHeadlineAfter = () => keyframes`
    from {
        right: 0;
    }
    to {
        right: 100%;
       
    }
`;

export const StyledSplashScreen = styled.div<AnimatePropType>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: center;
  animation: ${({ animate }) => (animate ? animateOpacitySplashScreen : "none")}
    3s forwards;
`;

export const StyledCircle = styled.div<SyledCircleTypes>`
  width: 1091px;
  height: 1091px;
  border-radius: 100%;
  border: 1px solid black;
  position: absolute;
  animation: ${({ animationprops, animate }) =>
      animate ? generateAnimation(animationprops) : "none"}
    3s linear;
`;

export const StyledMiddleCircle = styled.div<AnimatePropType>`
  min-width: 1091px;
  height: 1091px;
  border-radius: 100%;
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${({ animate }) => (animate ? animateMiddleCircle : "none")} 3s
    linear;
`;

export const StyledSmallCircle = styled.div<SyledCircleTypes>`
  height: 632px;
  width: 632px;
  border-radius: 100%;
  border: 1px solid black;
  position: absolute;
  animation: ${({ animationprops, animate }) =>
      animate ? generateAnimation(animationprops) : "none"}
    3s linear;
`;

export const StyledHeadline = styled.div<AnimatePropType>`
  width: 98%;
  padding: 7vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  h1 {
    font-size: 46px;
  }
  ::before {
    content: "";
    width: 100%;
    max-width: 1091px;
    height: 1px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${({ animate }) => (animate ? animateHeadlineBefore : "none")} 3s
      linear;
  }
  ::after {
    content: "";
    width: 100%;
    max-width: 1091px;
    height: 1px;
    background-color: black;
    position: absolute;
    right: 0;
    bottom: 0;
    animation: ${({ animate }) => (animate ? animateHeadlineAfter : "none")} 3s
      linear;
  }
`;

export const StyledBeginButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 1vh;
  border: 1px solid transparent;
  transition: border 0.3s;
  cursor: pointer;
  &:hover {
    outline: none;
    border: 1px solid black;
  }
`;
