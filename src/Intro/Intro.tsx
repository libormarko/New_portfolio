import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { IntroWrapper, TextWrapper, ChewronDown, Headline, Subheadline } from './Intro.styles';

/* export interface IntroProps {
} */

export const Intro: React.FC<any> = ({}) => {
  return (
    <IntroWrapper>
      <TextWrapper>
        <Headline>Hey, I am Libor Marko</Headline>
        <Subheadline>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
        </Subheadline>
      </TextWrapper>
      <ChewronDown href="#About">
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </ChewronDown>
    </IntroWrapper>
  );
};

export default Intro;
