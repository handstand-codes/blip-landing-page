import React from "react";
import { css, Global } from "@emotion/react";

export const COLORS = {
  "sick-lime": `#E2FF2E`,
  "darling-mauve": `#B8B4FF`,
  sunkiss: `#FFCC01`,
  "classic-black": `#141414`,
  //
  transparent: `transparent`,
  black: `#000000`,
  "black-100": `#000000`,
  "black-90": `#1E1E1E`,
  "black-70": `#323232`,
  "black-60": `#4F4F4F`,
  "black-40": `#919191`,
  "black-20": `#C7C7C7`,
  "black-10": `#F0F0F0`,
  "grey-30": `#BEBEBE`,
  white: `#FFFFFF`,
  "green-100": `#00B567`,
  "green-70": `#52D29B`,
  "green-50": `#95EEC8`,
  "green-20": `#D4FFED`,
  "blue-100": `#343FA4`,
  "blue-70": `#6370DD`,
  "blue-50": `#8F9BFF`,
  "blue-20": `#BEC5FF`,
  "purple-100": `#AB60E5`,
  "purple-70": `#CA95F2`,
  "purple-50": `#E2BDFE`,
  "purple-20": `#EAD5FB`,
  "orange-100": `#F28E46`,
  "orange-70": `#FFA666`,
  "orange-50": `#FFC093`,
  "orange-20": `#FFD8BC`
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
