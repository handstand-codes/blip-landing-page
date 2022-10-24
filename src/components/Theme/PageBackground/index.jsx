import React from "react";
import { css, Global } from "@emotion/react";

const OverscrollColors = () => (
  <Global
    styles={[
      css`
        :root {
          background-color: var(--color-military-green);
        }
      `
    ]}
  />
);

export default OverscrollColors;
