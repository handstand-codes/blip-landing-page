import React, { useMemo } from "react";
import { useFBX, useTexture } from "@react-three/drei";

const BrowGel = () => {
  const fbx = useFBX(`/webgl/brow-gel/BrowGelClear.fbx`);
  const model = useMemo(() => fbx.clone(true), []);
  const texture = useTexture(`/webgl/brow-gel/tex/LGF_UVCOL.png`);

  model.traverse((child) => {
    if (!child.isMesh) {
      return;
    }

    child.material.map = texture;
    child.material.needsupdate = true;

    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    <group>
      <mesh rotation={[0, 10, 0]}>
        <primitive object={model} />
      </mesh>
    </group>
  );
};

export default BrowGel;
