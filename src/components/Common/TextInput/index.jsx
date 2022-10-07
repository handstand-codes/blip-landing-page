import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ReactComponent as Arrow } from "~assets/svg/arrow-down.svg";
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
  className
}) => {
  const [inputValue, setInputValue] = useState(value || ``);

  useEffect(() => {
    if (onChange) onChange(inputValue);
  }, [inputValue]);

  /** ============================================================================
   * @component
   * Text input form field
   * Can be standalone (pass in onClick) or part of larger form
   *
   * @param  {string}    	className  			For additional styling config
   * @param  {string}    	placeholder  		Placeholder text
   * @param  {string}    	id           		Used to connect with label for a11y
   * @param  {string}  		initialValue 		Set the initial input value
   * @param  {string}   	label        		Text which displays in top left corner
   * @param  {string}    	hint      			Text which displays in top right corner
   * @param  {string} 		warningMessage  Shows in bottom left next to warning icon
   * @param  {boolean} 		hasSearchIcon  	Whether to display the search icon
   * @param  {boolean} 		required  			Whether to render the '*' next to label
   * @param  {boolean} 		hasError  			Toggles the error state
   * @param  {boolean} 		disabled  			Toggles the disabled state
   * @param  {boolean} 		isDarkTheme  		Toggles inverted color scheme
   * @param  {function} 	onClick  				Renders the inline submit button
   * @param  {function} 	onChange  			Callback which gets passed inputValue when updated
   * @return {node}
   */

  const warningIconColor = isDarkTheme
    ? `var(--color-black-20)`
    : `var(--color-black-40)`;

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
        <input
          tabIndex={disabled ? -1 : 0}
          id={id}
          className={[
            styles.input,
            `b2`,
            hasSearchIcon ? styles.hasSearch : null,
            onClick ? styles.hasArrow : null
          ].join(` `)}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
