import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { ShaderPass } from "three-stdlib";
import { useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { RippleRenderer } from "./ripple.ts";

extend({ ShaderPass });

// --------------------------------------------------------
const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const fragmentShader = `
uniform sampler2D tDiffuse;
uniform sampler2D u_displacement;
varying vec2 v_uv;

float PI = 3.141592653589;

void main() {
  vec2 uv = v_uv;

  vec4 disp = texture2D(u_displacement, uv);
  float theta = disp.r * 2.0 * PI;
  vec2 dir = vec2(sin(theta), cos(theta));
  uv += dir * disp.r * 0.1;

  vec4 color = texture2D(tDiffuse, uv);

  gl_FragColor = color;
  // gl_FragColor = texture2D(u_displacement, v_uv);
}
`;

const Ripple = ({ dimensions, pos }) => {
  // ---------------------------------------------------------------------------
  // imports

  const rippleTexture = useTexture(`/images/brush.png`);
  const effect = useMemo(
    () => new RippleRenderer(rippleTexture, dimensions),
    [rippleTexture]
  );

  // ---------------------------------------------------------------------------
  // context / ref / state

  const shader = useMemo(
    () => ({
      uniforms: {
        tDiffuse: { value: null },
        u_displacement: { value: null }
      },
      vertexShader,
      fragmentShader
    }),
    []
  );

  const shaderRef = useRef(null);

  // ---------------------------------------------------------------------------
  // lifecycle

  useEffect(() => () => effect.dispose(), [effect]);

  useFrame(({ gl }) => {
    effect.update(gl, shaderRef.current.uniforms.u_displacement);
  });

  useEffect(() => {
    if (!effect) {
      return;
    }

    effect.setMouse(pos);
  }, [effect, pos]);

  useEffect(() => {
    if (!effect) {
      return;
    }

    effect.setDimensions(dimensions);
  }, [dimensions, effect]);

  // ---------------------------------------------------------------------------
  // render

  return (
    <shaderPass ref={shaderRef} attachArray="passes" args={[shader]} enabled />
  );
};

const RipplePass = ({ dimensions, pos }) => (
  <Suspense fallback={null}>
    <Ripple dimensions={dimensions} pos={pos} />
  </Suspense>
);

export default RipplePass;
