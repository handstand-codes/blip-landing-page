import React, { Suspense, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFBX, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { BrowGel } from "~components";
import { useSize } from "~hooks";
// import { breakpoint } from "~utils/css.js";

/** ============================================================================
 * @css
 */
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  overflow: hidden;
`;

/** ============================================================================
 * @component
 * todo: document, change to accept IDs for various objects
 */
const ObjectInspector = ({ id = `object-inspector`, background }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const [containerRef, containerBoundingRect] = useSize();

  const [aspect, setAspect] = useState(null);

  // ---------------------------------------------------------------------------
  // variables

  let dpr = 1;

  if (typeof window !== `undefined`) {
    dpr = window.devicePixelRatio;
  }

  // ---------------------------------------------------------------------------
  // methods

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
  }, [containerRef, containerBoundingRect]);

  // ---------------------------------------------------------------------------
  // render

  return (
    <Container
      ref={containerRef}
      canvasId={id}
      background={background || `#000000`}
    >
      {aspect !== null && (
        <Canvas
          id={id}
          camera={{
            position: [0, 0, 100],
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
          <color attach="background" args={[`#ffffff`]} />

          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Suspense fallback={null}>
            {/* todo: should accept IDs and display different models etc. */}
            <BrowGel />
          </Suspense>
        </Canvas>
      )}
    </Container>
  );
};

export default ObjectInspector;
