import { styled } from "styled-components";

export const StyledSplashScreen = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCircle = styled.div`
  width: 1091px;
  height: 1091px;
  border-radius: 100%;
  border: 1px solid black;
  position: absolute;
`;

export const StyledMiddleCircle = styled.div`
  min-width: 1091px;
  height: 1091px;
  border-radius: 100%;
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSmallCircle = styled.div`
  height: 632px;
  width: 632px;
  border-radius: 100%;
  border: 1px solid black;
  position: absolute;
`;

export const StyledHeadline = styled.div`
  width: 98%;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
