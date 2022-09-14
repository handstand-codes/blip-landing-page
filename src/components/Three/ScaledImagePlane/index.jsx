import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { Image } from "@react-three/drei";

/** ============================================================================
 * @component
 */
const ScaledImagePlane = ({ imageUrl, scale = [1, 1, 1] }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const imageRef = useRef();

  // useFrame(() => {
  //   imageRef.current.material.grayscale = 0;
  // });

  // ---------------------------------------------------------------------------
  // render

  return <Image ref={imageRef} scale={scale} url={imageUrl} />;
};

export default ScaledImagePlane;
