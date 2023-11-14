import styled, { css, keyframes } from 'styled-components';
import * as variables from '../variables';

const squashIconDown = keyframes`
    0% {
      top: 0;
    }
    50% {
      top: 0.25rem;
    }
    to {
      top: 0;
    }
    `;

const squashIconUp = keyframes`
    0% {
      top: 0.625rem;
    }
    50% {
      top: 0.375rem;
    }
    to {
      top: 0.625rem;
    }
    `;

export const NavBarDesktopContainer = styled.div<{ navBarItemIsHovered: string | null }>`
  background-color: ${(props) =>
    props.navBarItemIsHovered ? variables.colorBlack : variables.colorGrey30};
  display: none;
  align-items: center;
  transition: background-color 0.5s cubic-bezier(0.3, 0, 0, 1);
  height: 44px;
  grid-template-columns: 1fr min-content;
  padding: 0 ${variables.spacingXXXXL};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    display: grid;
  }
`;

export const ProfileContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    border-radius: 50%;
  }

  p {
    color: ${variables.colorGrey00};
    margin-left: ${variables.spacingM};
    cursor: default;
  }
`;

export const NavSectionsContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  a:first-child {
    padding-left: 0;
  }

  a:last-child {
    padding-right: 0;
  }
`;

export const Section = styled.a<{ navBarItemIsHovered: boolean }>`
  color: ${(props) => (props.navBarItemIsHovered ? variables.colorBlue : variables.colorGrey00)};
  text-decoration: none;
  padding-left: ${variables.spacingL};
  padding-right: ${variables.spacingL};
  transition: color 0.5s cubic-bezier(0.3, 0, 0, 1);
  background-color: unset;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavBarMobileContainer = styled.div<{ openedMobileMenu: boolean }>`
  background-color: ${(props) =>
    props.openedMobileMenu ? variables.colorBlack : variables.colorGrey30};
  display: grid;
  align-items: center;
  transition: background-color 0.5s cubic-bezier(0.3, 0, 0, 1);
  height: 48px;
  display: flex;
  justify-content: flex-end;
  padding: 0 ${variables.spacingL};

  @media only screen and (min-width: ${variables.breakpointM}px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button<{ openedMobileMenu: boolean }>`
  height: 0.9375rem;
  opacity: 1;
  position: relative;
  background-color: unset;
  width: 24px;
  border-width: 0;

  > span {
    background: #f5f5f7;
    border-radius: 0.25rem;
    display: block;
    height: 0.125rem;
    left: 0;
    position: absolute;
    transition: all 0.3s cubic-bezier(0.3, 0, 0, 1);
    width: 1.5rem;
  }

  > span:first-child {
    top: 0;
    animation: ${(props) =>
      props.openedMobileMenu
        ? css`
            ${squashIconDown} 0.5s cubic-bezier(0.3, 0, 0, 1) forwards
          `
        : 'unset'};
  }
  > span:last-child {
    top: 0.625rem;
    animation: ${(props) =>
      props.openedMobileMenu
        ? css`
            ${squashIconUp} 0.5s cubic-bezier(0.3, 0, 0, 1) forwards
          `
        : 'unset'};
  }
`;
