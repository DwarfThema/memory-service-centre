"use client";

import Table from "./src/table";
import Mac from "./src/mac";
import FixedCamera from "./src/fixedCamera";
import { Environment } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Glitch,
  Noise,
  Pixelation,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense, useEffect, useRef } from "react";
import { SpotLight, Vector2 } from "three";
import Monitor from "./src/monitor";
import { Canvas } from "@react-three/fiber";

export default function Init() {
  const glitchValue = new Vector2(3, 3);

  const spotligtRef = useRef<SpotLight>(null);

  useEffect(() => {
    if (spotligtRef.current) {
      spotligtRef.current.shadow.radius = 10;
    }
  }, []);

  return (
    <main className="w-screen h-screen bg-black">
      <Canvas
        camera={{
          fov: 40,
          position: [1.43, 1.75, 0.7],
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.01} />
          <spotLight
            ref={spotligtRef}
            position={[0, 2, 0]}
            shadow-mapSize-width={7680}
            shadow-mapSize-height={7680}
            shadow-bias={-0.0005}
            castShadow
            intensity={0.01}
          />
          <group position={[0.75, 0, 0.3]}>
            <Mac />
            <Monitor href="/web" />
            <Table />
          </group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            scale={[10, 10, 10]}
            receiveShadow
          >
            <planeGeometry attach="geometry" args={[5, 5]} />
            <meshStandardMaterial attach="material" color="#383838" />
          </mesh>
          <FixedCamera position={[1.43, 1.75, 0.7]} lookat={[0, 0.3, 0.1]} />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={1.5}
              intensity={0.7}
            />
            <Noise premultiply blendFunction={BlendFunction.ADD} opacity={2} />
            <Vignette eskil={false} offset={0.01} darkness={1} />
            <Glitch delay={glitchValue} />
            <Pixelation granularity={1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </main>
  );
}
