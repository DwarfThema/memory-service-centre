import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { MathUtils, Vector3 } from "three";

export default function FixedCamera({
  position,
  lookat,
}: {
  position: [number, number, number];
  lookat: [number, number, number];
}) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    state.camera.lookAt(lookat[0], lookat[1], lookat[2]);
    //카메라 쉐이크 관련 코드
    state.camera.position.x = MathUtils.lerp(
      state.camera.position.x,
      2.1 + state.mouse.x / 10,
      0.03
    );
    state.camera.position.y = MathUtils.lerp(
      state.camera.position.y,
      2.5 + state.mouse.y / 10,
      0.03
    );
  });

  return (
    <PerspectiveCamera
      makeDefault
      fov={isMobile ? 42 : 30}
      position={[position[0], position[1], position[2]]}
      ref={cameraRef}
    />
  );
}
