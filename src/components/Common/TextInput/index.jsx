import React, { useState } from "react";
import { css } from "@emotion/react";
import { ReactComponent as Arrow } from "~assets/svg/arrow-down.svg";
import * as styles from "./TextInput.module.scss";

const TextInput = ({
  placeholder,
  id,
  bgColor = `var(--color-black-10)`,
  textColor = `var(--color-black)`,
  placeholderColor = `var(--color-black-40)`,
  borderColor,
  onClick
}) => {
  const [inputValue, setInputValue] = useState(``);
  return (
    <div className={styles.container}>
      <input
        id={id}
        css={css`
          border-color: ${borderColor};
          color: ${textColor};
          background-color: ${bgColor};
          ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${placeholderColor};
            opacity: 1; /* Firefox */
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: ${placeholderColor};
          }

          ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: ${placeholderColor};
          }
        `}
        className={[
          styles.input,
          `b2`,
          borderColor ? null : styles.input__noBorder
        ].join(` `)}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {onClick && (
        <div className={styles.button__container}>
          <button
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
              fill={textColor}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default TextInput;
