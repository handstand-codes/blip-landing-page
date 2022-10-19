import React, { useRef, useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ReactComponent as Arrow } from "~assets/svg/arrow-down.svg";
import * as styles from "./Dropdown.module.scss";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(60);
  const contentRef = useRef();

  const calculateContentHeight = () => {
    const height = contentRef.current.offsetHeight;
    setContentHeight(height);
  };

  useEffect(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={[styles.buttonText, `b1`].join(` `)}>{title}</span>
        <div
          className={[styles.arrowIcon, isOpen ? styles.rotate : null].join(
            ` `
          )}
        >
          <Arrow
            css={css`
              height: 14px;
              width: 14px;
            `}
            fill="black"
          />
        </div>
      </button>
      <div
        className={styles.contentContainer}
        style={{ height: `${isOpen ? contentHeight : 8}px` }}
      >
        <p
          ref={contentRef}
          className={[
            `b2`,
            styles.contentText,
            isOpen ? styles.visible : null
          ].join(` `)}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default Dropdown;
