import React from "react";
import { css, Global } from "@emotion/react";

const OverscrollColors = () => (
  <Global
    styles={[
      css`
        :root {
          background-color: var(--color-warm-black);
        }
      `
    ]}
  />
);

export default OverscrollColors;
