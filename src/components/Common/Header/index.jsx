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

  const { pathname, menuActive, setMenuActive, primaryColor } = useApp();
  const { scrollY } = useScroll();
  const {
    windowSize: { width: windowWidth }
  } = useWindowDimensions();

  const isTransparencyEnabled = pathname === `/`;
  const breakpoint = parseInt(bp.largeTablet.replace(`px`, ``));
  const isDesktopWidth = windowWidth >= breakpoint;
  const menuContentColor = isTransparent ? primaryColor : `var(--color-white)`;

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
    if (!pathname || hasLoadedPathname) {
      return;
    }
    checkIfTransparent();
    setHasLoadedPathname(true);
  }, [pathname]);

  useEffect(() => {
    checkIfTransparent();
    if (isDesktopWidth) {
      setMenuActive(false);
    }
  }, [windowWidth]);

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
          style={{ color: menuContentColor }}
          className={[
            style.header__bar,
            isTransparent && !menuActive
              ? style.header__bar___transparent
              : null
          ].join(` `)}
        >
          <WidthContainer paddingOnly>
            <div className={style.header__content}>
              <Link to="/" onClick={() => setMenuActive(false)}>
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
                  onClick={() => setMenuActive((prev) => !prev)}
                  className={style.header__mobileIcons__icon}
                >
                  <div className={style.header__hamburger}>
                    <div
                      className={[
                        style.header__hamburger__line,
                        menuActive
                          ? style.header__hamburger__line__active1
                          : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        style.header__hamburger__line,
                        menuActive
                          ? style.header__hamburger__line__active2
                          : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        style.header__hamburger__line,
                        menuActive
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
            menuActive ? style.mobileMenu__active : ``
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
