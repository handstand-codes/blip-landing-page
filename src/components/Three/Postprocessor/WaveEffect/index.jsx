/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useRef } from "react";
import { EffectComposer, RenderPass, ShaderPass } from "three-stdlib";
// todo: @react-three/postprocessing
import { extend, useFrame, useThree } from "@react-three/fiber";
import { WavePass } from "~components";

extend({ EffectComposer, RenderPass, ShaderPass });

const WaveEffect = ({ distortion, resolution }) => {
  const composerRef = useRef(null);
  const { gl, scene, camera, size } = useThree();

  useEffect(() => {
    if (!composerRef?.current) {
      return;
    }

    composerRef.current.setSize(size.width, size.height);
  }, [composerRef.current, size]);

  useFrame(() => {
    if (!composerRef?.current) {
      return;
    }

    composerRef.current.render();
  }, 1);

  return (
    <effectComposer ref={composerRef} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />

      <WavePass
        progress={distortion.progress}
        resolution={resolution}
        scale={distortion.scale}
      />
    </effectComposer>
  );
};

export default WaveEffect;
