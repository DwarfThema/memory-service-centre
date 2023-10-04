import { useFBO, useGLTF } from "@react-three/drei";
import { useFrame, useGraph, useLoader } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Material, Mesh, MeshStandardMaterial } from "three";

export default function Monitor({ href }: { href: string }) {
  const [emissiveVal, setEmissiveVal] = useState(true);

  const router = useRouter();

  const { scene } = useGLTF("/models/monitor.gltf");

  const Meshs: Mesh[] = [];
  scene.traverse((obj) => {
    if (obj instanceof Mesh) {
      Meshs.push(obj);
    }
  });
  const { nodes } = useGraph(scene);
  const monitorMesh = nodes.Monitor as Mesh;
  const monitorMtl = monitorMesh.material as MeshStandardMaterial;

  useFrame(() => {
    if (monitorMtl.envMapIntensity <= -5) {
      setEmissiveVal(true);
    } else if (monitorMtl.envMapIntensity >= 5) {
      setEmissiveVal(false);
    }

    if (emissiveVal) {
      monitorMtl.envMapIntensity += 1;
    } else {
      monitorMtl.envMapIntensity -= 1;
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
