import React, { useMemo, useRef } from "react";
import { ShaderPass } from "three-stdlib";
import { extend, useFrame } from "@react-three/fiber";

extend({ ShaderPass });

const vertexShader = `
  varying vec2 v_uv;

  void main() {
    v_uv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float u_time;
  uniform float u_progress;
  uniform vec2 u_resolution;
  uniform float u_scale;
  varying vec2 v_uv;

  float dist(vec2 p0, vec2 pf){
    return sqrt((pf.x - p0.x) * (pf.x - p0.x) + (pf.y - p0.y) * (pf.y - p0.y));
  }

  void main() {
    vec2 uv = v_uv;

    float d = dist(u_resolution.xy * 0.5, gl_FragCoord.xy) * (sin(u_time) + 1.5) * 0.0001;

    vec2 p = 2.0 * v_uv - 1.0; // -1 ~ 1

    uv.x = mix(v_uv.x, length(p), d);
    uv.y = mix(v_uv.y, length(p), d);

    vec4 color = texture2D(tDiffuse, uv);

	  gl_FragColor = color;
  }
`;

// const fragmentShader = `
//   uniform sampler2D tDiffuse;
//   uniform float u_time;
//   uniform float u_progress;
//   uniform float u_scale;
//   varying vec2 v_uv;

//   void main() {
//     vec2 uv = v_uv;

//     vec2 p = 2.0 * v_uv - 1.0; // -1 ~ 1

//     p += 0.1 * sin(u_scale * 3.7 * p.yx + 1.4 * u_time + vec2(2.2, 3.4));
//     p += 0.1 * sin(u_scale * 3.0 * p.yx + 1.0 * u_time + vec2(1.2, 3.4));
//     p += 0.3 * sin(u_scale * 5.0 * p.yx + 2.6 * u_time + vec2(4.2, 1.4));
//     p += 0.3 * sin(u_scale * 7.5 * p.yx + 3.6 * u_time + vec2(12.2, 3.4));

//     uv.x = mix(v_uv.x, length(p), u_progress);
//     uv.y = mix(v_uv.y, 0.5 * length(p) + 0.15, u_progress);

//     vec4 color = texture2D(tDiffuse, uv);

//     gl_FragColor = color;
//   }
// `;

const WavePass = ({ progress = 0.1, scale = 0.2, resolution }) => {
  const distortionRef = useRef(null);

  const shader = useMemo(
    () => ({
      uniforms: {
        tDiffuse: { value: null },
        u_time: { value: 0 },
        u_progress: { value: 0 },
        u_resolution: { value: { x: 0, y: 0 } },
        u_scale: { value: 1 }
      },
      vertexShader,
      fragmentShader
    }),
    []
  );

  useFrame(() => {
    if (!distortionRef?.current) {
      return;
    }

    if (!distortionRef?.current?.uniforms?.u_resolution) {
      const boundingRect = distortionRef.current.getBoundingClientRect();

      distortionRef.current.uniforms.u_resolution = {
        x: boundingRect.width,
        y: boundingRect.height
      };
    }

    distortionRef.current.uniforms.u_time.value += 0.01;
  });

  return (
    <shaderPass
      ref={distortionRef}
      attachArray="passes"
      args={[shader]}
      uniforms-u_progress-value={progress}
      uniforms-u_resolution-value={resolution}
      uniforms-u_scale-value={scale}
    />
  );
};

export default WavePass;
