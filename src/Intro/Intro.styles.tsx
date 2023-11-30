import styled, { css, keyframes } from 'styled-components';
import * as variables from '../variables';

const scrollDown = keyframes`
  0% {
    opacity: 0;
    top: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 40px;
  }
}
`;

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-rows: 90% 1fr;
  width: 100vw;
  height: 100vh;
  justify-items: center;
`;

export const TextWrapper = styled.div`
  margin-top: 48px;
  align-self: center;
`;

export const Headline = styled.h1`
  font-size: 60px;
  font-weight: normal;
  text-align: center;
  align-self: center;
`;

export const Subheadline = styled.h2`
  font-weight: normal;
  font-size: 20px;
  text-align: center;
`;

export const ChewronDown = styled.a`
  height: 50px;
  cursor: pointer;
  color: ${variables.colorBlack};

  svg {
    position: relative;
    animation: ${css`
      ${scrollDown} 2s cubic-bezier(0.3, 0, 0, 1) infinite
    `};
  }
`;
