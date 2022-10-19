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
  "classic-black": `#141414`,
  "sick-lime": `#E2FF2E`,
  "darling-mauve": `#B8B4FF`,
  "bright-pink": `#FF40B4`,
  blush: `#F58C90`,
  sunkiss: `#FFCC01`
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
