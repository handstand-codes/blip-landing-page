import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "@emotion/styled";
import { ImagePlane, RippleEffect } from "~components";
import { useSize } from "~hooks";

/** ============================================================================
 * @css
 */
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ${({ canvasId }) => `#${canvasId}`} {
    animation: 2s var(--cubic-easing) appear forwards;
    animation-delay: 0.25s;
    opacity: 0;
  }
`;

/** ============================================================================
 * @component
 */
const RippleImage = ({
  id = `ripple-image`,
  className = ``,
  background,
  imageUrl,
  pos = {
    x: 0,
    y: 0
  }
}) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const [containerRef, containerBoundingRect] = useSize();

  const [aspect, setAspect] = useState(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  // ---------------------------------------------------------------------------
  // variables

  let dpr = 1;

  if (typeof window !== `undefined`) {
    dpr = window.devicePixelRatio;
  }

  // ---------------------------------------------------------------------------
  // lifecycle

  useEffect(() => {
    if (
      typeof window === `undefined` ||
      !containerRef?.current ||
      !containerBoundingRect
    ) {
      return;
    }

    const { width, height } = containerBoundingRect;

    setAspect(width / height);
    setDimensions({
      width,
      height
    });
  }, [containerRef, containerBoundingRect]);

  // ---------------------------------------------------------------------------
  // render

  return (
    <Container
      ref={containerRef}
      className={className}
      canvasId={id}
      background={background || `#000000`}
    >
      {imageUrl && aspect !== null && (
        <Canvas
          id={id}
          camera={{
            position: [0, 0, 2],
            fov: 50,
            aspect,
            near: 0.1,
            far: 2000
          }}
          dpr={dpr}
          gl={{
            powerPreference: `high-performance`,
            alpha: false,
            antialias: false,
            stencil: false,
            depth: false
          }}
        >
          <color attach="background" args={[`#000000`]} />
          <fog color="#161616" attach="fog" near={8} far={30} />

          <Suspense fallback={null}>
            <ImagePlane args={[aspect, 1]} imageUrl={imageUrl} />
          </Suspense>

          <RippleEffect dimensions={dimensions} pos={pos} />
        </Canvas>
      )}
    </Container>
  );
};

export default RippleImage;
