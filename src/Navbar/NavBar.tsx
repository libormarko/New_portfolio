import React, { useEffect, useState } from 'react';
import MobileMenuOverlay from '../MobileMenuOverlay/MobileMenuOverlay';
import {
  NavBarContainer,
  NavBarDesktopContainer,
  ProfileContainer,
  NavSectionsContainer,
  Section,
  NavBarMobileContainer,
  HamburgerButton
} from './NavBar.styles';

export const navSections = ['About', 'Blog', 'Projects', 'Contact'];

// export interface NavBarProps {}

export const NavBar: React.FC<any> = () => {
  const [openedMobileMenuOverlay, setOpenedMobileMenuOverlay] = useState<boolean>(false);

  const [navBarItemIsHovered, setNavBarItemIsHovered] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.matchMedia(`(min-width: 768px)`).matches
  );

  const openOverlay = () => {
    setOpenedMobileMenuOverlay(true);
    document.querySelector('html')!.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setOpenedMobileMenuOverlay(false);
    document.querySelector('html')!.style.overflow = 'unset';
  };

  const setDeviceType = () =>
    window.matchMedia(`(min-width: 768px)`).matches ? setIsDesktop(true) : setIsDesktop(false);

  useEffect(() => {
    window.addEventListener('resize', setDeviceType);
    return () => {
      window.removeEventListener('resize', setDeviceType);
    };
  }, []);

  return (
    <NavBarContainer>
      <NavBarDesktopContainer navBarItemIsHovered={navBarItemIsHovered}>
        <ProfileContainer>
          <img src="https://avatars.githubusercontent.com/u/44037760?v=4" alt="profile-photo" />
          <p>Libor Marko</p>
        </ProfileContainer>
        <NavSectionsContainer>
          {navSections.map((navSection, index) => {
            return (
              <Section
                key={index}
                navBarItemIsHovered={navBarItemIsHovered === navSection}
                href={`#${navSection}`}
                onMouseEnter={() => setNavBarItemIsHovered(navSection)}
                onMouseLeave={() => setNavBarItemIsHovered(null)}
              >
                {navSection}
              </Section>
            );
          })}
        </NavSectionsContainer>
      </NavBarDesktopContainer>

      <NavBarMobileContainer openedMobileMenu={openedMobileMenuOverlay}>
        <HamburgerButton
          openedMobileMenu={openedMobileMenuOverlay}
          type="button"
          onClick={() => openOverlay()}
        >
          <span></span>
          <span></span>
        </HamburgerButton>
      </NavBarMobileContainer>
      <MobileMenuOverlay
        openedMobileMenuOverlay={openedMobileMenuOverlay}
        closeOverlay={closeOverlay}
      />
    </NavBarContainer>
  );
};

export default NavBar;
