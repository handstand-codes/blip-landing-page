import { useState, useEffect } from "react";

import { BREAKPOINTS } from "~utils/css";

const useDevice = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [screen, setScreen] = useState(null);

  const breakpoints = Object.keys(BREAKPOINTS).reduce((acc, key) => {
    acc[key] = parseInt(BREAKPOINTS[key].replace(`px`, ``));
    return acc;
  }, {});

  const deviceBelow = (device) =>
    !screen ? false : breakpoints[screen] < breakpoints[device];

  const deviceAbove = (device) =>
    !screen ? false : breakpoints[screen] > breakpoints[device];

  //

  useEffect(() => {
    if (typeof window === `undefined`) {
      return () => {};
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();

    window.addEventListener(`resize`, handleResize, false);

    return () => window.removeEventListener(`resize`, handleResize, false);
  }, []);

  //

  useEffect(() => {
    if (!windowSize?.width || !windowSize?.height) {
      return;
    }

    const breakpointKeys = Object.keys(BREAKPOINTS);
    const breakpointValues = Object.values(BREAKPOINTS);

    setScreen(
      breakpointKeys[
        breakpointValues.indexOf(
          breakpointValues.find(
            (breakpoint) =>
              windowSize.width > parseInt(breakpoint.replace(`px`, ``))
          )
        )
      ]
    );
  }, [windowSize]);

  //

  return { deviceAbove, deviceBelow, screen };
};

export default useDevice;
