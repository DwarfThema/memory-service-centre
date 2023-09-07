import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { Mesh } from "three";

export default function Monitor({ href }: { href: string }) {
  const router = useRouter();

  const gltf = useGLTF("/models/monitor.gltf");

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
          onClick={() => {
            router.push(href);
          }}
        />
      ))}
    </>
  );
}
