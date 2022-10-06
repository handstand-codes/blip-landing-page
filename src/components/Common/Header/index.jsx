/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useApp, useScroll, useWindowDimensions } from "~hooks";
import { Link, WidthContainer } from "~components";
import { ReactComponent as Cart } from "~assets/svg/cart.svg";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";
import * as style from "./Header.module.scss";
import * as bp from "~styles/breakpoints.module.scss";

/** ============================================================================
 * @component
 * Global nav.
 */
const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [hasLoadedPathname, setHasLoadedPathname] = useState(false);
  const [menuContentColor, setMenuContentColor] =
    useState(`var(--color-white)`);

  const { pathname, isMenuActive, setIsMenuActive, primaryColor } = useApp();
  const { scrollY } = useScroll();
  const {
    windowSize: { width: windowWidth }
  } = useWindowDimensions();

  const isTransparencyEnabled = pathname === `/`;
  const breakpoint = parseInt(bp.largeTablet.replace(`px`, ``));
  const isDesktopWidth = windowWidth >= breakpoint;

  const checkIfTransparent = () => {
    if (!isTransparencyEnabled) return;
    const TRANSPARENCY_SCROLL_MARGIN = 80;
    const hasPassedScrollMargin = scrollY < TRANSPARENCY_SCROLL_MARGIN;
    setIsTransparent(hasPassedScrollMargin && isDesktopWidth);
  };

  useEffect(() => {
    checkIfTransparent();
  }, [scrollY]);

  useEffect(() => {
    setMenuContentColor(isTransparent ? primaryColor : `var(--color-white)`);
  }, [isTransparent]);

  useEffect(() => {
    if (!pathname || hasLoadedPathname) {
      return;
    }
    checkIfTransparent();
    setHasLoadedPathname(true);
  }, [pathname]);

  useEffect(() => {
    checkIfTransparent();
    if (isDesktopWidth) {
      setIsMenuActive(false);
    }
  }, [windowWidth]);

  useEffect(() => {}, [isMenuActive]);

  return (
    <div
      className={[
        style.container,
        hasLoadedPathname ? style.container__visible : null,
        isTransparencyEnabled ? style.removeTopMargin : null
      ].join(` `)}
    >
      <div className={style.fixedContainer}>
        <header
          css={css`
            color: ${menuContentColor};
          `}
          className={[
            style.header__bar,
            isTransparent && !isMenuActive
              ? style.header__bar___transparent
              : null
          ].join(` `)}
        >
          <WidthContainer paddingOnly>
            <div className={style.header__content}>
              <Link to="/" onClick={() => setIsMenuActive(false)}>
                <Wordmark
                  css={css`
                    height: 16px;
                    display: block;
                  `}
                  fill={menuContentColor}
                />
              </Link>

              <nav className={style.header__desktopNav}>
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
              </nav>

              <div className={style.header__mobileIcons}>
                <button type="button">
                  <div className={style.header__mobileIcons__icon}>
                    <Cart
                      css={css`
                        height: 24px;
                      `}
                      fill="white"
                    />
                  </div>
                  <span
                    className={[
                      style.header__desktopMenuItem,
                      `button-text`
                    ].join(` `)}
                  >
                    Cart
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsMenuActive((prev) => !prev)}
                  className={style.header__mobileIcons__icon}
                >
                  <div className={style.header__hamburger}>
                    <div
                      className={[
                        style.header__hamburger__line,
                        isMenuActive
                          ? style.header__hamburger__line__active1
                          : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        style.header__hamburger__line,
                        isMenuActive
                          ? style.header__hamburger__line__active2
                          : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        style.header__hamburger__line,
                        isMenuActive
                          ? style.header__hamburger__line__active3
                          : null
                      ].join(` `)}
                    />
                  </div>
                </button>
              </div>
            </div>
          </WidthContainer>
        </header>

        <nav
          className={[
            style.mobileMenu,
            isMenuActive ? style.mobileMenu__active : ``
          ].join(` `)}
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
        </nav>
      </div>
    </div>
  );
};

export default Header;
