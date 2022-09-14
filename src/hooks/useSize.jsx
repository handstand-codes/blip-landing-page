import { useState, useLayoutEffect, useRef } from "react";
import useResizeObserver from "@react-hook/resize-observer";

const useSize = () => {
  const ref = useRef();
  const [size, setSize] = useState();
  const [boundingRect, setBoundingRect] = useState();

  useLayoutEffect(() => {
    if (ref?.current) return;

    setSize(ref.current.getBoundingClientRect());
    setBoundingRect(ref.current.getBoundingClientRect());
  }, [ref]);

  // Where the magic happens
  useResizeObserver(ref, (entry) => {
    setSize(entry.contentRect);
    setBoundingRect(ref.current.getBoundingClientRect());
  });
  return [ref, size, boundingRect];
};

export default useSize;
