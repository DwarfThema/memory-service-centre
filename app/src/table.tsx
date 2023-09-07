import { useGLTF } from "@react-three/drei";
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
      {deskSet.map((src, index) => {
        src.scene.traverse((obj) => {
          if (obj instanceof Mesh) {
            obj.receiveShadow = true;
            obj.castShadow = true;
          }
        });

        return <primitive key={index} object={src.scene} />;
      })}
    </>
  );
}
