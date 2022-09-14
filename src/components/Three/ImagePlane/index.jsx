import React from "react";
import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

/** ============================================================================
 * shaders
 */
const vertexShader = `
  varying vec2 v_uv;

  void main() {
    v_uv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D u_texture;
  varying vec2 v_uv;

  void main() {
    vec4 color = texture2D(u_texture, v_uv);
    gl_FragColor = color;
  }
`;

/** ============================================================================
 * @component
 */
const ImagePlane = ({ args = [1, 1], imageUrl }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const textureMaterial = useLoader(THREE.TextureLoader, imageUrl);

  // ---------------------------------------------------------------------------
  // variables

  const material = (texture) =>
    new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: texture }
      },
      vertexShader,
      fragmentShader
    });

  // ---------------------------------------------------------------------------
  // render

  return (
    <Plane
      args={args}
      color="#ff0000"
      material={material(textureMaterial)}
      scale={1}
      position={[0, 0, 0]}
    />
  );
};

export default ImagePlane;
