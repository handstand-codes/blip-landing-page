import React from "react";
import { css } from "@emotion/react";
import { ReactComponent as Arrow } from "~assets/svg/arrow.svg";
import { ReactComponent as WarningTriangle } from "~assets/svg/warning-triangle.svg";
import { ReactComponent as SearchIcon } from "~assets/svg/looking-glass.svg";
import * as styles from "./TextInput.module.scss";

const TextInput = ({
  placeholder,
  id,
  value,
  label,
  hint,
  isDarkTheme,
  warningMessage,
  hasSearchIcon,
  hasError,
  required,
  disabled,
  onClick,
  onChange,
  className,
  textarea,
  onEnter
}) => {
  /** ============================================================================
   * @component
   * Text input form field
   * Can be standalone (pass in onClick) or part of larger form
   *
   * @param  {string}    	className  			For additional styling config
   * @param  {string}    	placeholder  		Placeholder text
   * @param  {string}    	id           		Used to connect with label for a11y
   * @param  {string}  		value 					Control value from parent
   * @param  {string}   	label        		Text which displays in top left corner
   * @param  {string}    	hint      			Text which displays in top right corner
   * @param  {string} 		warningMessage  Shows in bottom left next to warning icon
   * @param  {boolean} 		hasSearchIcon  	Whether to display the search icon
   * @param  {boolean} 		required  			Whether to render the '*' next to label
   * @param  {boolean} 		hasError  			Toggles the error state
   * @param  {boolean} 		disabled  			Toggles the disabled state
   * @param  {boolean} 		isDarkTheme  		Toggles inverted color scheme
   * @param  {boolean} 		textarea  			Renders multiline textarea
   * @param  {function} 	onClick  				Renders the inline submit button
   * @param  {function} 	onChange  			Callback which gets passed e.target.value when updated
   * @param  {function} 	onEnter  				Called when user presses Enter key, used for standalone inputs
   * @return {node}
   */

  const MAX_LENGTH = 300;

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!onEnter) return;
    if (e.key === `Enter`) onEnter();
  };

  const warningIconColor = isDarkTheme
    ? `var(--color-black-20)`
    : `var(--color-black-40)`;

  const InputElement = textarea ? `textarea` : `input`;

  return (
    <div
      className={[
        styles.container,
        hasError ? styles.error : null,
        disabled ? styles.disabled : null,
        isDarkTheme ? styles.darkTheme : null,
        hasSearchIcon ? styles.hasSearch : null,
        onClick ? styles.hasArrow : null,
        className
      ].join(` `)}
    >
      {(label || hint || required) && (
        <div className={styles.topText}>
          <div>
            {(label || required) && (
              <label
                className={[styles.label, `caption`].join(` `)}
                htmlFor={id}
              >
                {required && `* `}
                {label}
              </label>
            )}
          </div>
          <div>
            {hint && (
              <span className={[styles.hint, `caption`].join(` `)}>{hint}</span>
            )}
          </div>
        </div>
      )}
      <div className={[styles.inputContainer].join(` `)}>
        {hasSearchIcon && (
          <div className={styles.searchIcon}>
            <SearchIcon
              css={css`
                height: 16px;
                width: 16px;
              `}
              fill={isDarkTheme ? `var(--color-white)` : `var(--color-black)`}
            />
          </div>
        )}
        <InputElement
          maxLength={MAX_LENGTH}
          tabIndex={disabled ? -1 : 0}
          id={id}
          className={[
            styles.input,
            `b2`,
            textarea ? styles.textarea : null,
            hasSearchIcon ? styles.hasSearch : null,
            onClick ? styles.hasArrow : null
          ].join(` `)}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
        {onClick && (
          <div className={styles.button__container}>
            <button
              tabIndex={disabled ? -1 : 0}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
              className={styles.button__button}
            >
              <Arrow
                css={css`
                  height: 16px;
                  width: 16px;
                `}
                fill={isDarkTheme ? `var(--color-white)` : `var(--color-black)`}
              />
            </button>
          </div>
        )}
      </div>
      {warningMessage && (
        <span className={[`caption`, styles.warning].join(` `)}>
          <WarningTriangle
            css={css`
              height: 15px;
              width: 15px;
              margin-right: 4px;
            `}
            fill={hasError ? `var(--color-error)` : warningIconColor}
          />
          {warningMessage}
        </span>
      )}
    </div>
  );
};

export default TextInput;
