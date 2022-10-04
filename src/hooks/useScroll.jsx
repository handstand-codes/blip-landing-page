import { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(null);

  const lastScrollYRef = useRef(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  });

  useEffect(() => {
    setIsScrollingDown(scrollY > lastScrollYRef);
    lastScrollYRef.current = scrollY;
  }, [scrollY]);

  return { scrollY, isScrollingDown };
};

export default useScroll;
