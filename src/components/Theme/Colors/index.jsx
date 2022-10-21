import React from "react";
import { css, Global } from "@emotion/react";

export const COLORS = {
  // Mono
  black: `#000000`,
  "black-90": `#1E1E1E`,
  "black-70": `#323232`,
  "black-60": `#4F4F4F`,
  "black-40": `#919191`,
  "black-20": `#dddee2`,
  "black-10": `#F0F0F0`,
  white: `#FFFFFF`,

  // UX
  error: `#f75757`,
  success: `#07cb9c`,

  // Client
  lime: `#CEFF43`,
  pink: `#FF4395`,
  lavendar: `#CDA5FF`,
  orange: `#FF5E0D`,
  "military-green": `#43462C`,
  "off-white": `#F2F2F2`,
  "warm-black": `#201D1D`
};

const Colors = () => (
  <Global
    styles={[
      css`
        :root {
          ${Object.keys(COLORS).map(
            (colorKey) => `
              --color-${colorKey}: ${COLORS[colorKey]};
            `
          )}
        }
      `
    ]}
  />
);

export default Colors;
