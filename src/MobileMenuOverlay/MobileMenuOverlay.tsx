import React from 'react';
import {
  MenuOverlayContainer,
  CloseButton,
  ProfileContainer,
  StyledList
} from './MobileMenuOverlay.styles';
import { navSections } from '../Navbar/NavBar';
import * as variables from '../variables';

const baseClass = `menuOverlay`;

export interface MobileMenuOverlayProps {
  openedMobileMenuOverlay: boolean;
  closeOverlay: () => void;
}

export const MobileMenuOverlay: React.FC<MobileMenuOverlayProps> = ({
  openedMobileMenuOverlay,
  closeOverlay
}) => {
  return (
    <MenuOverlayContainer openedMobileMenuOverlay={openedMobileMenuOverlay}>
      <CloseButton type="button" onClick={() => closeOverlay()}>
        <svg
          fill={variables.colorWhite}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="24px"
          height="24px"
        >
          <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" />
        </svg>
      </CloseButton>

      <StyledList openedMobileMenuOverlay={openedMobileMenuOverlay}>
        <ProfileContainer>
          <img src="https://avatars.githubusercontent.com/u/44037760?v=4" alt="profile-photo" />
          <p>Libor Marko</p>
        </ProfileContainer>
        {navSections.map((navSection, index) => {
          return (
            <li>
              <a key={index} href={`#${navSection}`}>
                {navSection}
              </a>
            </li>
          );
        })}
      </StyledList>
    </MenuOverlayContainer>
  );
};

export default MobileMenuOverlay;
