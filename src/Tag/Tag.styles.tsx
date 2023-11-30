import styled, { css, keyframes } from 'styled-components';
import * as variables from '../variables';

export const TagWrapper = styled.span`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${variables.colorBlue};
  width: fit-content;
  color: ${variables.colorWhite};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-grid;
`;
