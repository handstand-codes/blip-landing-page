import React from "react";
import { css, Global } from "@emotion/react";
import fkDisplayRegularWOFF from "~assets/fonts/fk-display-regular.woff";
import fkGroteskMonospacedWOFF from "~assets/fonts/fk-grotesk-monospaced.woff";
import fkGroteskRegularWOFF from "~assets/fonts/fk-grotesk-regular.woff";
import { breakpoint } from "~utils/css.js";

const SANS_FALLBACKS = `"Helvetica Neue", "Helvetica", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;

const FK_DISPLAY_REGULAR_TEXT_GROUP = `"Fk Display Regular", ${SANS_FALLBACKS}`;
const FK_GROTESK_REGULAR_TEXT_GROUP = `"Fk Grotesk Regular", ${SANS_FALLBACKS}`;

/** ============================================================================
 * @component
 * Typography files and settings.
 */
const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Fk Grotesk Regular";
        src: url(${fkGroteskRegularWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Fk Grotesk Monospaced";
        src: url(${fkGroteskMonospacedWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Fk Display Regular";
        src: url(${fkDisplayRegularWOFF}) format("woff");
        font-display: block;
        font-weight: normal;
        font-style: normal;
      }

      // common //
      .h1,
      .h2,
      .h3,
      .b1,
      .b2,
      .button-text,
      .caption {
        font-family: ${FK_GROTESK_REGULAR_TEXT_GROUP};
        font-weight: normal;
      }

      // display //
      .d1 {
        font-size: 200px;
        line-height: 100%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      .d2 {
        font-size: 100px;
        line-height: 100%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
      }

      // headings //

      .h1 {
        font-size: 28px;
        line-height: 115%;
        letter-spacing: -0.01em;
      }
      .h2 {
        font-size: 24px;
        line-height: 120%;
        letter-spacing: -0.005em;
      }
      .h3 {
        font-size: 20px;
        line-height: 120%;
      }

      // body //

      .b1 {
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.004em;
      }

      .b2 {
        font-size: 14px;
        line-height: 120%;
        letter-spacing: 0.01em;
      }

      // other //

      .button-text {
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.004em;
      }

      .caption {
        font-size: 9px;
        line-height: 100%;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        font-feature-settings: "zero" on;
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
