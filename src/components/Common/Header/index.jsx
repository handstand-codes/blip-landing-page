/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useApp, useScroll } from "~hooks";
import { Link } from "~components";
import { ReactComponent as Cart } from "~assets/svg/cart.svg";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";
import * as styles from "./Header.module.scss";

/** ============================================================================
 * @component
 * Global nav.
 */
const Header = ({ isTransparentAtPageTop }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  const { menuActive, setMenuActive } = useApp();
  const { scrollY } = useScroll();

  const checkIfTransparent = () => {
    if (!isTransparentAtPageTop) return;
    const TRANSPARENCY_SCROLL_MARGIN = 80;
    setIsTransparent(scrollY < TRANSPARENCY_SCROLL_MARGIN);
  };

  useEffect(() => {
    checkIfTransparent();
  }, [scrollY]);

  return (
    <div className={styles.container}>
      <div className={styles.fixedContainer}>
        <header
          className={[
            styles.header__bar,
            isTransparent ? styles.header__bar___transparent : null
          ].join(` `)}
        >
          <Link to="/" onClick={() => setMenuActive(false)}>
            <Wordmark
              css={css`
                height: 16px;
                display: block;
              `}
              fill="white"
            />
          </Link>

          <nav className={styles.header__desktopNav}>
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
                className={[styles.header__desktopMenuItem, `button-text`].join(
                  ` `
                )}
              >
                Cart
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <div className={styles.header__mobileIcons__icon}>
                <div className={styles.header__hamburger}>
                  <div
                    className={[
                      styles.header__hamburger__line,
                      menuActive
                        ? styles.header__hamburger__line__active1
                        : null
                    ].join(` `)}
                  />
                  <div
                    className={[
                      styles.header__hamburger__line,
                      menuActive
                        ? styles.header__hamburger__line__active2
                        : null
                    ].join(` `)}
                  />
                  <div
                    className={[
                      styles.header__hamburger__line,
                      menuActive
                        ? styles.header__hamburger__line__active3
                        : null
                    ].join(` `)}
                  />
                </div>
              </div>

              <span
                className={[styles.header__desktopMenuItem, `button-text`].join(
                  ` `
                )}
              >
                Menu
              </span>
            </button>
          </div>
        </header>

        <nav
          className={[
            styles.mobileMenu,
            menuActive ? styles.mobileMenu__active : ``
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
