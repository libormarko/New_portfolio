import styled, { css, keyframes } from 'styled-components';
import * as variables from '../variables';

export const AboutWrapper = styled.div`
  display: grid;
  width: 100vw;
  min-height: 100vh;
  align-content: center;
  padding-top: 44px;

  @media only screen and (min-width: ${variables.breakpointM}px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    padding-top: 0px;
  }
`;

export const GetToKnowMe = styled.div``;

export const Text = styled.div`
  font-size: 20px;
`;

export const SkillsAndExperience = styled.div``;

export const Headline = styled.h2``;

export const Skills = styled.div``;

export const SkillTagsWrapper = styled.div``;

export const IndustryExperience = styled.div``;

export const IndustryExperienceTagsWrapper = styled.div``;
