import { Gltf, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Mesh } from "three";

export default function Table() {
  const candle = useGLTF("models/candle.gltf");
  const chair = useGLTF("models/chair.gltf");
  const desk = useGLTF("models/desk.gltf");
  const keyboard = useGLTF("models/keyboard.gltf");
  const pill = useGLTF("models/pill.gltf");

  const deskSet = [candle, chair, desk, keyboard, pill];

  return (
    <>
      <Gltf src="models/candle.gltf" receiveShadow castShadow />
      <Gltf src="models/chair.gltf" receiveShadow castShadow />
      <Gltf src="models/desk.gltf" receiveShadow castShadow />
      <Gltf src="models/keyboard.gltf" receiveShadow castShadow />
      <Gltf src="models/pill.gltf" receiveShadow castShadow />
    </>
  );
}
