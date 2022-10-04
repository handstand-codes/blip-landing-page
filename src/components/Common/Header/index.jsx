/* eslint-disable react/prop-types */

import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useApp, useScroll } from "~hooks";
import { Link } from "~components";
import { breakpoint } from "~utils/css.js";

import { ReactComponent as Cart } from "~assets/svg/cart.svg";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";

/** ============================================================================
 * @css
 */
const HEADER_BAR_HEIGHT = `52px`;

const S = {};

S.Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 40;
`;

S.HeaderBar = styled.header`
  height: ${HEADER_BAR_HEIGHT};
  background: var(--color-classic-black);
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  user-select: none;
`;

S.DesktopNav = styled.nav`
  display: none;
  ${breakpoint(`large-tablet`, `min`)} {
    display: block;
  }

  ul {
    display: flex;
  }

  li {
    text-transform: uppercase;
    margin-right: 24px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

S.DesktopMenuItem = styled.span`
  text-transform: uppercase;
  display: none;
  ${breakpoint(`large-tablet`, `min`)} {
    display: inline;
  }
`;

S.MobileIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

S.MobileIcon = styled.div`
  ${breakpoint(`large-tablet`, `min`)} {
    display: none;
  }
`;

S.Hamburger = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4px 2px;
`;

const HamburgerLineCSS = `
  transition: 0.3s var(--cubic-easing) transform;

  width: 100%;
  height: 2px;
  display: block;
  background: white;
  border-radius: 2px;
`;
S.HamburgerLine1 = styled.div`
  ${HamburgerLineCSS}
  transform: rotate(${({ active }) => `${active ? `45deg` : `0deg`}`})
    translate3d(${({ active }) => `${active ? `5px, 5px, 0` : `0, 0, 0`}`});
`;
S.HamburgerLine2 = styled.div`
  ${HamburgerLineCSS}
  transform: scaleX(${({ active }) => `${active ? `0` : `1`}`});
`;
S.HamburgerLine3 = styled.div`
  ${HamburgerLineCSS}
  transform: rotate(${({ active }) => `${active ? `-45deg` : `0deg`}`}) 
    translate3d(${({ active }) => `${active ? `5px, -5px, 0` : `0, 0, 0`}`});
`;

S.MobileMenu = styled.nav`
  transition: 0.3s var(--cubic-easing) transform;
  background: var(--color-darling-mauve);
  height: calc(100vh - ${HEADER_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

/** ============================================================================
 * @component
 * Global nav.
 */
const Header = () => {
  const { menuActive, setMenuActive } = useApp();

  const { scrollingDown } = useScroll();

  return (
    <S.Container>
      <S.HeaderBar scrollingDown={scrollingDown}>
        <Link to="/" onClick={() => setMenuActive(false)}>
          <Wordmark
            css={css`
              height: 16px;
              display: block;
            `}
            fill="white"
          />
        </Link>

        <S.DesktopNav>
          <ul>
            <li className="button-text">
              <Link to="/">Shop</Link>
            </li>
            <li className="button-text">
              <Link to="/">About</Link>
            </li>
            <li className="button-text">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </S.DesktopNav>

        <S.MobileIcons>
          <button type="button">
            <S.MobileIcon>
              <Cart
                css={css`
                  height: 24px;
                `}
                fill="white"
              />
            </S.MobileIcon>
            <S.DesktopMenuItem className="button-text">Cart</S.DesktopMenuItem>
          </button>

          <button type="button" onClick={() => setMenuActive((prev) => !prev)}>
            <S.MobileIcon>
              <S.Hamburger>
                <S.HamburgerLine1 active={menuActive} />
                <S.HamburgerLine2 active={menuActive} />
                <S.HamburgerLine3 active={menuActive} />
              </S.Hamburger>
            </S.MobileIcon>

            <S.DesktopMenuItem className="button-text">Menu</S.DesktopMenuItem>
          </button>
        </S.MobileIcons>
      </S.HeaderBar>

      <S.MobileMenu
        css={css`
          transform: translateX(${menuActive ? `0` : `100%`});
        `}
        active={menuActive}
      >
        <ul>
          <li className="d1">
            <Link to="/">Shop</Link>
          </li>
          <li className="d1">
            <Link to="/">About Us</Link>
          </li>
          <li className="d1">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </S.MobileMenu>
    </S.Container>
  );
};

export default Header;
