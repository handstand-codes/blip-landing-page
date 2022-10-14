import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useAppContext } from "~hooks";

/** ============================================================================
 * @css
 */
const Viewport = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

/** ============================================================================
 * @component Resize height detector for iOS.
 */
const HeightDetector = () => {
  // --------------------------------------------------------------------------
  // context / ref / state

  const { pathname } = useAppContext();

  const ref = useRef();

  // --------------------------------------------------------------------------
  // lifecycle

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

  // --------------------------------------------------------------------------
  // render

  return <Viewport ref={ref} />;
};

export default HeightDetector;
