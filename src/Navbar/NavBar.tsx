import React, { useEffect, useState } from 'react';
import MobileMenuOverlay from '../MobileMenuOverlay/MobileMenuOverlay';
import {
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

  const closeOverlay = () => {
    setOpenedMobileMenuOverlay(false);
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
    <>
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
          onClick={() => setOpenedMobileMenuOverlay(true)}
        >
          <span></span>
          <span></span>
        </HamburgerButton>
      </NavBarMobileContainer>
      <MobileMenuOverlay
        openedMobileMenuOverlay={openedMobileMenuOverlay}
        closeOverlay={closeOverlay}
      />
    </>
  );
};

export default NavBar;
