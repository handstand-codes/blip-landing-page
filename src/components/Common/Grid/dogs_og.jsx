import React from "react";
import { css } from "@emotion/react";
import { breakpoint } from "~utils/css.js";
import { remToPx } from "~utils/helpers";

export const GRID_MAX_WIDTH_PX = 1920;
export const GRID_COLUMNS = 12;
export const GRID_COLUMNS_SM = 8;
export const GRID_COLUMNS_XS = 8;
//
export const GRID_GAP_REM = 1.5;
export const GRID_GAP_REM_SM = 1;
export const GRID_GAP_REM_XS = 0.5;
//
export const GRID_GAP_PX = remToPx(GRID_GAP_REM);
export const GRID_GAP_PX_SM = remToPx(GRID_GAP_REM_SM);
export const GRID_GAP_PX_XS = remToPx(GRID_GAP_REM_XS);
//
export const GRID_PADDING_REM = 3.5;
export const GRID_PADDING_REM_SM = 2;
export const GRID_PADDING_REM_XS = 1.5;
//
export const GRID_PADDING_PX = remToPx(GRID_GAP_REM);
export const GRID_PADDING_PX_SM = remToPx(GRID_GAP_REM_SM);
export const GRID_PADDING_PX_XS = remToPx(GRID_GAP_REM_XS);

/**
 * -----------------------------------------------------------------------------
 * [Headless] Receive a CSS grid wrapper to style guide spec.
 * @param  {node}    children   Inner JSX
 * @param  {string}  className  Emotion/identifier className
 * @param  {string}  node       Wrapper JSX node type (defaults to <div>)
 * @return {node}               The resulting Grid node
 */
const Grid = ({ children, className = ``, node = `div` }) => {
  const G = `${node}`;

  return (
    <G
      className={className}
      css={css`
        max-width: ${GRID_MAX_WIDTH_PX}px;
        grid-template-columns: repeat(${GRID_COLUMNS_XS}, minmax(0, 1fr));
        width: 100%;
        position: relative;
        display: grid;
        margin-right: auto;
        margin-left: auto;
        grid-gap: 0 ${GRID_GAP_REM_XS}rem;
        padding-left: ${GRID_PADDING_REM_XS}rem;
        padding-right: ${GRID_PADDING_REM_XS}rem;

        ${breakpoint(`small-tablet`)} {
          grid-template-columns: repeat(${GRID_COLUMNS_SM}, minmax(0, 1fr));
          grid-gap: 0 ${GRID_GAP_REM_SM}rem;
          padding-left: ${GRID_PADDING_REM_SM}rem;
          padding-right: ${GRID_PADDING_REM_SM}rem;
        }

        ${breakpoint(`large-tablet`)} {
          grid-template-columns: repeat(${GRID_COLUMNS}, minmax(0, 1fr));
          grid-gap: 0 ${GRID_GAP_REM}rem;
          padding-left: ${GRID_PADDING_REM}rem;
          padding-right: ${GRID_PADDING_REM}rem;
        }
      `}
    >
      {children}
    </G>
  );
};

export default Grid;
