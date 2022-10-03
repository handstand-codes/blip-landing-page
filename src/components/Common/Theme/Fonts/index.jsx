import React from "react";
import { css, Global } from "@emotion/react";
import ppNeueMontrealBoldWOFF from "~assets/fonts/pp-neue-montreal-bold.woff";
import ppNeueMontrealBoldWOFF2 from "~assets/fonts/pp-neue-montreal-bold.woff2";
import ppNeueMontrealMediumWOFF from "~assets/fonts/pp-neue-montreal-medium.woff";
import ppNeueMontrealMediumWOFF2 from "~assets/fonts/pp-neue-montreal-medium.woff2";
import { breakpoint } from "~utils/css.js";

const SANS_FALLBACKS = `"Helvetica Neue", "Helvetica", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const PP_NEUE_MONTREAL_ID = `PP Neue Montreal`;
const PP_NEUE_MONTREAL_TEXT_GROUP = `"${PP_NEUE_MONTREAL_ID}", ${SANS_FALLBACKS}`;

/** ============================================================================
 * @component
 * Typography files and settings.
 */
const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "${PP_NEUE_MONTREAL_ID}";
        src: url(${ppNeueMontrealMediumWOFF2}) format("woff2"),
          url(${ppNeueMontrealMediumWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "${PP_NEUE_MONTREAL_ID}";
        src: url(${ppNeueMontrealBoldWOFF2}) format("woff2"),
          url(${ppNeueMontrealBoldWOFF}) format("woff");
        font-display: block;
        font-weight: 900;
        font-style: normal;
      }

      // common //
      .d1,
      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6,
      .b1,
      .b2,
      .button-text,
      .caption {
        font-family: ${PP_NEUE_MONTREAL_TEXT_GROUP};
        font-weight: normal;
      }

      // display //
      .d1 {
        font-weight: 700;
        font-size: 80px;
        line-height: 90%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      .d2 {
        font-weight: 700;
        font-size: 62px;
        line-height: 90%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      // headings //
      .h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      .h2 {
        font-weight: 700;
        font-size: 35px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      .h3 {
        font-weight: 700;
        font-size: 24px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      .h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      // body //
      .b1 {
        font-weight: 500;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: 0.01em;
      }

      .b2 {
        font-weight: 500;
        font-size: 16px;
        line-height: 110%;
        letter-spacing: 0.01em;
      }

      // other //
      .caption {
        font-weight: 500;
        font-size: 12px;
        line-height: 120%;
        letter-spacing: 0.02em;
        /* font-feature-settings: "zero" on; */
      }

      .button-text {
        font-weight: 700;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.01em;
        text-transform: uppercase;
      }

      // breakpoints (ASC) //
      ${breakpoint(`large-desktop`, `max`)} {
        .d1 {
          font-size: 100px;
        }
      }

      ${breakpoint(`small-tablet`, `max`)} {
        .d1 {
          font-size: 36px;
        }
      }

      ${breakpoint(`large-mobile`, `max`)} {
        .h1 {
          font-size: 24px;
        }
        .h2 {
          font-size: 20px;
        }
        .h3 {
          font-size: 16px;
        }
      }
    `}
  />
);
export default Fonts;
