import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useAppContext, useScroll, useWindowDimensions } from "~hooks";
import { WidthContainer, ListLinks } from "~components";
import { Link } from "gatsby";
import { ReactComponent as Cart } from "~assets/svg/cart.svg";
import { ReactComponent as Wordmark } from "~assets/svg/logos/wordmark.svg";
import * as styles from "./Header.module.scss";
import * as bp from "~styles/breakpoints.module.scss";

const Header = ({ menu }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [menuContentColor, setMenuContentColor] =
    useState(`var(--color-white)`);

  const { pathname, primaryColor } = useAppContext();
  const { scrollY } = useScroll();
  const {
    windowSize: { width: windowWidth }
  } = useWindowDimensions();

  const isTransparencyEnabled = pathname === `/`;
  const breakpoint = parseInt(bp.largeTablet.replace(`px`, ``));
  const isDesktopWidth = windowWidth >= breakpoint;

  const checkIfTransparent = () => {
    if (!isTransparencyEnabled) {
      setIsTransparent(false);
      return;
    }
    const TRANSPARENCY_SCROLL_MARGIN = 80;
    const hasPassedScrollMargin = scrollY < TRANSPARENCY_SCROLL_MARGIN;
    setIsTransparent(hasPassedScrollMargin && isDesktopWidth);
  };

  useEffect(() => {
    checkIfTransparent();
  }, [scrollY, pathname]);

  useEffect(() => {
    setMenuContentColor(isTransparent ? primaryColor : `var(--color-white)`);
  }, [isTransparent]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    checkIfTransparent();
    if (isDesktopWidth) {
      setIsMobileMenuOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add(styles.disableScroll);
    } else {
      document.body.classList.remove(styles.disableScroll);
    }
  }, [isMobileMenuOpen]);

  return (
    <div
      className={[
        styles.container,
        isTransparencyEnabled ? styles.removeTopMargin : null
      ].join(` `)}
    >
      <div className={styles.fixedContainer}>
        <header
          css={css`
            color: ${menuContentColor};
          `}
          className={[
            styles.headerBar,
            isTransparent && !isMobileMenuOpen ? styles.transparent : null
          ].join(` `)}
        >
          <WidthContainer paddingOnly>
            <div className={styles.content}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Wordmark
                  css={css`
                    height: 16px;
                    display: block;
                  `}
                  fill={menuContentColor}
                />
              </Link>

              <nav className={styles.desktopNav}>
                <ul className="button-text">
                  <ListLinks links={menu?.links} />
                </ul>
              </nav>

              <div className={styles.mobileIcons}>
                <button type="button">
                  <div className={styles.icon}>
                    <Cart
                      css={css`
                        height: 24px;
                      `}
                      fill="white"
                    />
                  </div>
                  <span
                    className={[styles.desktopMenuItem, `button-text`].join(
                      ` `
                    )}
                  >
                    Cart
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className={styles.icon}
                >
                  <div className={styles.hamburger}>
                    <div
                      className={[
                        styles.line,
                        isMobileMenuOpen ? styles.active1 : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        styles.line,
                        isMobileMenuOpen ? styles.active2 : null
                      ].join(` `)}
                    />
                    <div
                      className={[
                        styles.line,
                        isMobileMenuOpen ? styles.active3 : null
                      ].join(` `)}
                    />
                  </div>
                </button>
              </div>
            </div>
          </WidthContainer>
        </header>

        {/* Mobile menu */}
        <nav
          className={[
            styles.mobileMenu,
            isMobileMenuOpen ? styles.active : null
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
