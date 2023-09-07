import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FixedCamera({
  position,
  lookat,
}: {
  position: [number, number, number];
  lookat: [number, number, number];
}) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(lookat[0], lookat[1], lookat[2]);
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      position={[position[0], position[1], position[2]]}
      ref={cameraRef}
    />
  );
}
