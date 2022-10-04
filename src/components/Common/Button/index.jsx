import React from "react";
import { css } from "@emotion/react";
import { Link } from "~components";
import { COLORS } from "~components/Common/Theme/Colors/index.jsx";
import * as styles from "./Button.module.scss";

/** ============================================================================
 * variables
 */
export const BUTTON_STYLES = {};

Object.keys(COLORS).forEach((colorKey) => {
  BUTTON_STYLES[colorKey] = css`
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
    background: transparent;
    border: 1px solid var(--color-${colorKey});
    color: var(--color-${colorKey});
  `;
});

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
  const innerJSX = (
    <div className={styles.button__innerContent}>{children}</div>
  );

  if (to) {
    return (
      <Link
        className={[className, styles.button, `button-text`].join(` `)}
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
        className={[className, styles.button, `button-text`].join(` `)}
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
