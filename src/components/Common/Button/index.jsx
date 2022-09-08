import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "~components";
import { COLORS } from "~components/Common/Theme/Colors/index.jsx";

/** ============================================================================
 * variables
 */
export const BUTTON_HEIGHT = `38px`;

export const buttonCSS = `
  height: ${BUTTON_HEIGHT};
  position: relative;
  display: block;
  padding: 0 2rem;
  background: var(--color-mono-100);
  border-radius: 500px;
  border: 1px solid var(--color-mono-100);
  color: var(--color-white);
  cursor: pointer;
`;

export const BUTTON_STYLES = {};

Object.keys(COLORS).forEach((colorKey) => {
  BUTTON_STYLES[colorKey] = css`
    ${buttonCSS};

    background: var(--color-${colorKey});
    border: 1px solid
      var(
        --color-${colorKey === `sick-lime` || colorKey === `white` || colorKey === `antiflash` ? `black` : `white`}
      );
    color: var(
      --color-${colorKey === `sick-lime` || colorKey === `white` || colorKey === `antiflash` ? `black` : `white`}
    );
  `;
});

export const ALPHA_BUTTON_STYLES = {};

Object.keys(COLORS).forEach((colorKey) => {
  ALPHA_BUTTON_STYLES[colorKey] = css`
    ${buttonCSS};

    background: transparent;
    border: 1px solid var(--color-${colorKey});
    color: var(--color-${colorKey});
  `;
});

/** ============================================================================
 * @css
 */

const InnerContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    vertical-align: middle;
  }
`;

/** ============================================================================
 * @component
 * Core Button component.
 * @param  {string}    buttonType   Usually one of "button" or "submit"
 * @param  {node}      children     Button text, icons if required
 * @param  {string}    className    Can be an identifier, Emotion CSS, or both
 * @param  {string}    color        Key to grab CSS from BUTTON_STYLES above
 * @param  {function}  onClick      Click listener function
 * @param  {boolean}   transparent  Fill state of the button
 * @param  {boolean}   disabled     Disable button
 * @return {node}                   Compiled Button JSX
 */
const Button = ({
  to,
  title,
  children,
  className,
  onClick,
  color = `white`,
  transparent = false,
  disabled = false
}) => {
  const innerJSX = <InnerContent>{children}</InnerContent>;

  if (to) {
    return (
      <Link
        className={className}
        css={
          transparent ? ALPHA_BUTTON_STYLES?.[color] : BUTTON_STYLES?.[color]
        }
        to={to}
        title={title || ``}
      >
        {innerJSX}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        className={className}
        disabled={disabled}
        css={
          transparent ? ALPHA_BUTTON_STYLES?.[color] : BUTTON_STYLES?.[color]
        }
        onClick={onClick}
      >
        {innerJSX}
      </button>
    );
  }

  return null;
};

export default Button;
