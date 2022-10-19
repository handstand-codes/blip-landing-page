import React from "react";
import { css, Global } from "@emotion/react";

import ArchivoSemiBoldWOFF from "~assets/fonts/Archivo-SemiBold.woff";
import ArchivoSemiBoldWOFF2 from "~assets/fonts/Archivo-SemiBold.woff2";
import ArchivoSemiBoldItalicWOFF from "~assets/fonts/Archivo-SemiBoldItalic.woff";
import ArchivoSemiBoldItalicWOFF2 from "~assets/fonts/Archivo-SemiBoldItalic.woff2";

import * as bp from "~styles/breakpoints.module.scss";

const SANS_FALLBACKS = `"Helvetica Neue", "Helvetica", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const ARCHIVO_ID = `Archivo`;
const ARCHIVO_TEXT_GROUP = `"${ARCHIVO_ID}", ${SANS_FALLBACKS}`;

/** ============================================================================
 * @component
 * Typography files and settings.
 */
const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "${ARCHIVO_ID}";
        src: url(${ArchivoSemiBoldWOFF}) format("woff2"),
          url(${ArchivoSemiBoldWOFF2}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "${ARCHIVO_ID}";
        src: url(${ArchivoSemiBoldItalicWOFF}) format("woff2"),
          url(${ArchivoSemiBoldItalicWOFF2}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
        font-style: italic;
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
        font-family: ${ARCHIVO_TEXT_GROUP};
        font-weight: normal;
      }

      // display //
      .d1 {
        font-weight: 700;
        font-size: 42px;
        line-height: 110%;
        letter-spacing: -0.02em;
      }

      // headings //
      .h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 110%;
        letter-spacing: -0.01em;
      }

      .h2 {
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        letter-spacing: -0.01em;
      }

      .h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        letter-spacing: -0.01em;
      }

      // body //
      .b1 {
        font-weight: 400;
        font-size: 18px;
        line-height: 120%;
      }

      .b2 {
        font-weight: 400;
        font-size: 12px;
        line-height: 120%;
      }

      // other //
      .caption {
        font-weight: 700;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: 0.02em;
      }

      .button-text {
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: 0.01em;
      }

      .button-text-underline {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.01em;
      }

      @media only screen and (min-width: ${bp.smallTablet}) {
        // display //
        .d1 {
          font-size: 56px;
        }

        // headings //
        .h1 {
          font-size: 36px;
        }

        .h2 {
          font-size: 26px;
        }

        .h3 {
          font-size: 22px;
        }

        // body //
        .b1 {
          font-size: 22px;
        }

        .b2 {
          font-size: 14px;
        }

        // other //
        .caption {
          font-size: 16px;
        }
      }

      @media only screen and (min-width: ${bp.smallDesktop}) {
        // display //
        .d1 {
          font-size: 64px;
        }

        // headings //
        .h1 {
          font-size: 42px;
        }

        .h2 {
          font-size: 32px;
        }

        .h3 {
          font-size: 24px;
        }

        // body //
        .b1 {
          font-size: 24px;
        }

        .b2 {
          font-size: 16px;
        }
      }
    `}
  />
);
export default Fonts;
