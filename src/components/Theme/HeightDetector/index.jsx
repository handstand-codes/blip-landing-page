import React, { useEffect, useRef } from "react";
import { useAppContext } from "~hooks";
import * as styles from "./HeightDetector.module.scss";

/** ============================================================================
 * @component Resize height detector for iOS.
 */
const HeightDetector = () => {
  const { pathname } = useAppContext();

  const ref = useRef();

  useEffect(() => {
    if (!ref?.current || typeof window === `undefined`) {
      return () => {};
    }

    const detectHeight = () => {
      const viewportHeight = ref.current.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const navBarHeight = viewportHeight - windowHeight;

      const doc = document.documentElement;

      doc.style.setProperty(
        `--browser-height`,
        `calc(100vh - ${navBarHeight}px)`
      );
    };

    window.addEventListener(`resize`, detectHeight, false);

    detectHeight();

    return () => {
      window.removeEventListener(`resize`, detectHeight, false);
    };
  }, [ref, pathname]);

  return <div className={styles.viewport} ref={ref} />;
};

export default HeightDetector;
