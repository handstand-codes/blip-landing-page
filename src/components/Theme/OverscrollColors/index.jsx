import React from "react";
import { css, Global } from "@emotion/react";
import { useScroll } from "~hooks";

const OverscrollColors = () => {
  const { scrollY } = useScroll();

  const TOP_COLOR = `var(--color-classic-black)`;
  const BOTTOM_COLOR = `var(--color-sick-lime)`;
  const THRESHOLD = 100;

  const backgroundColor = scrollY < THRESHOLD ? TOP_COLOR : BOTTOM_COLOR;

  return (
    <Global
      styles={[
        css`
          :root {
            background-color: ${backgroundColor};
          }
        `
      ]}
    />
  );
};

export default OverscrollColors;
