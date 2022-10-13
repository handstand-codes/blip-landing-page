/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useApp, useScroll, useWindowDimensions } from "~hooks";
import { WidthContainer, ListLinks } from "~components";
import { Link } from "gatsby";
import { ReactComponent as Cart } from "~assets/svg/cart.svg";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";
import * as styles from "./Header.module.scss";
import * as bp from "~styles/breakpoints.module.scss";

/** ============================================================================
 * @component
 * Global nav.
 */
const Header = ({ menu }) => {
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
    setIsMenuActive(false);
  }, [pathname]);

  useEffect(() => {
    checkIfTransparent();
    if (isDesktopWidth) {
      setIsMenuActive(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add(styles.disableScroll);
    } else {
      document.body.classList.remove(styles.disableScroll);
    }
  }, [isMenuActive]);

  return (
    <div
      className={[
        styles.container,
        hasLoadedPathname ? styles.container__visible : null,
        isTransparencyEnabled ? styles.removeTopMargin : null
      ].join(` `)}
    >
      <div className={styles.fixedContainer}>
        <header
          css={css`
            color: ${menuContentColor};
          `}
          className={[
            styles.header__bar,
            isTransparent && !isMenuActive
              ? styles.header__bar___transparent
              : null
          ].join(` `)}
        >
          <WidthContainer paddingOnly>
            <div className={styles.header__content}>
              <Link to="/" onClick={() => setIsMenuActive(false)}>
                <Wordmark
                  css={css`
                    height: 16px;
                    display: block;
                  `}
                  fill={menuContentColor}
                />
              </Link>

              <nav className={styles.header__desktopNav}>
                <ul className="button-text">
                  <ListLinks links={menu?.links} />
                </ul>
              </nav>

              <div className={styles.header__mobileIcons}>
                <button type="button">
                  <div className={styles.header__mobileIcons__icon}>
                    <Cart
                      css={css`
                        height: 24px;
                      `}
                      fill="white"
                    />
                  </div>
                  <span
                    className={[
                      styles.header__desktopMenuItem,
                      `button-text`
                    ].join(` `)}
                  >
                    Cart
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsMenuActive((prev) => !prev)}
                  className={styles.header__mobileIcons__icon}
                >
                  <div className={styles.header__hamburger}>
                    <div
                      className={[
                        styles.header__hamburger__line,
                        isMenuActive
                          ? styles.header__hamburger__line__active1
                          : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        styles.header__hamburger__line,
                        isMenuActive
                          ? styles.header__hamburger__line__active2
                          : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        styles.header__hamburger__line,
                        isMenuActive
                          ? styles.header__hamburger__line__active3
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
            styles.mobileMenu,
            isMenuActive ? styles.mobileMenu__active : ``
          ].join(` `)}
        >
          <ul className="d1">
            <ListLinks links={menu?.links} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
