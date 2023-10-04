import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function Mac({ ...props }) {
  const gltf = useGLTF("/models/mac.gltf");

  const Meshs: Mesh[] = [];
  gltf.scene.traverse((obj) => {
    if (obj instanceof Mesh) {
      Meshs.push(obj);
    }
  });

  return (
    <>
      {Meshs.map((mesh, index) => (
        <mesh
          key={index}
          geometry={mesh.geometry}
          material={mesh.material}
          receiveShadow
          castShadow
          {...props}
        />
      ))}
    </>
  );
}
