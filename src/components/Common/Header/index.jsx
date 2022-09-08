/* eslint-disable react/prop-types */

import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useApp, useScroll } from "~hooks";
import { Grid } from "~components";

import { ReactComponent as Account } from "~assets/svg/account.svg";
import { ReactComponent as Cart } from "~assets/svg/cart.svg";
import { ReactComponent as Wordmark } from "~assets/svg/logos/wordmark.svg";

/** ============================================================================
 * @css
 */
const Container = styled.header`
  width: 100%;
  height: 53px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 40;
  background: var(--color-classic-black);
  color: var(--color-white);
`;

/** ============================================================================
 * @component
 * Global nav.
 */
const Header = () => {
  const { menuActive, setMenuActive } = useApp();

  const { scrollingDown } = useScroll();

  //

  return (
    <Container scrollingDown={scrollingDown}>
      <Grid
        css={css`
          height: 100%;
          align-items: center;
        `}
      >
        <div
          css={css`
            grid-column: span 3 / span 3;
          `}
        >
          <Wordmark
            css={css`
              height: 16px;
            `}
            fill="white"
          />
        </div>

        <div
          css={css`
            grid-column: span 6 / span 6;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            font-weight: bold;
          `}
        >
          <p className="b1">SHOP</p>
          <p className="b1">ABOUT</p>
          <p className="b1">CONTACT</p>
        </div>

        <div
          css={css`
            grid-column: span 3 / span 3;
            display: flex;
            align-items: center;
            justify-content: end;
          `}
        >
          <Account
            css={css`
              height: 20px;
              margin-right: 1rem;
            `}
            fill="white"
          />

          <Cart
            css={css`
              height: 20px;
            `}
            fill="white"
          />
        </div>
      </Grid>
    </Container>
  );
};

export default Header;
