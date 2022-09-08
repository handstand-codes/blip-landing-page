/* eslint-disable react/prop-types */

import React from "react";
import styled from "@emotion/styled";
import { useApp, useScroll } from "~hooks";
import { Link } from "~components";
import { breakpoint } from "~utils/css";

import { ReactComponent as Wordmark } from "~assets/svg/logos/wordmark.svg";

/** ============================================================================
 * @css
 */
const Container = styled.header`
  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  transition: background 0.3s var(--cubic-easing),
    color 0.3s var(--cubic-easing), opacity 0.3s var(--cubic-easing),
    transform 0.5s var(--cubic-easing);

  opacity: ${({ scrollingDown }) => (scrollingDown ? 0 : 1)};
  pointer-events: ${({ scrollingDown }) => (scrollingDown ? `none` : `auto`)};
  transform: ${({ scrollingDown }) =>
    scrollingDown ? `translate3d(0, -1rem, 0)` : `translate3d(0, 0, 0)`};

  z-index: ${({ clipped }) => (clipped ? 50 : 40)};
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  ${breakpoint(`large-tablet`)} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ marginTop }) => marginTop || `0`};

  & > a {
    & > svg {
      height: ${({ height }) => height || `1.5rem`};
    }
  }
`;

const ButtonContainer = styled.button`
  display: block;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: block;
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
  margin-right: -1rem;
`;

const HamburgerTop = styled.div`
  transition: transform 0.3s var(--cubic-easing);
  transform: ${({ menuActive }) =>
    `translate3d(0, ${menuActive ? `5px` : 0}, 0) rotate(${
      menuActive ? `-45deg` : `0`
    })`};
  display: block;
  width: 21px;
  height: 1px;
  margin: 2px 0;
  background: var(--color-white);
`;

const HamburgerMiddle = styled.div`
  transition: transform 0.3s var(--cubic-easing);
  transform: ${({ menuActive }) => `scaleX(${menuActive ? 0 : 1})`};
  display: block;
  width: 21px;
  height: 1px;
  margin: 2px 0;
  background: var(--color-white);
`;

const HamburgerBottom = styled.div`
  transition: transform 0.3s var(--cubic-easing);
  transform: ${({ menuActive }) =>
    `translate3d(0, ${menuActive ? `-5px` : 0}, 0) rotate(${
      menuActive ? `45deg` : `0`
    })`};
  display: block;
  width: 21px;
  height: 1px;
  margin: 2px 0;
  background: var(--color-white);
`;

/** ============================================================================
 * @component
 * Global nav.
 */
const Header = ({ clipped = false, color = `white` }) => {
  const { menuActive, setMenuActive } = useApp();

  const { scrollingDown } = useScroll();

  //

  return (
    <Container clipped={clipped} scrollingDown={scrollingDown}>
      <LogoContainer>
        <Link to="/">
          <Wordmark fill="white" />
        </Link>
      </LogoContainer>

      <ButtonContainer type="button" onClick={() => setMenuActive(!menuActive)}>
        <ButtonWrapper>
          <HamburgerTop menuActive={menuActive} />
          <HamburgerMiddle menuActive={menuActive} />
          <HamburgerBottom menuActive={menuActive} />
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
