import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [screen, setScreen] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  //

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener(`resize`, handleResize);

    handleResize();

    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  //

  useEffect(() => {
    if (!windowSize?.width || !windowSize?.height) {
      return;
    }

    let detectedScreen = `xs`;

    if (windowSize?.width > 768) {
      detectedScreen = `sm`;
    }

    if (windowSize?.width > 1024) {
      detectedScreen = `md`;
    }

    if (windowSize?.width > 1280) {
      detectedScreen = `lg`;
    }

    if (windowSize?.width > 1440) {
      detectedScreen = `xl`;
    }

    if (windowSize?.width > 1920) {
      detectedScreen = `xxl`;
    }

    setScreen(detectedScreen);
  }, [windowSize]);

  useEffect(() => {
    switch (screen) {
      case `sm`:
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
        break;

      case `md`:
      case `lg`:
      case `xl`:
      case `xxl`:
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        break;

      default:
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
    }
  }, [screen]);

  //

  return {
    screen,
    windowSize,
    isMobile,
    isTablet,
    isDesktop
  };
};

export default useWindowDimensions;
