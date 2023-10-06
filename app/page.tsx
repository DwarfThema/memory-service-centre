"use client";

import Table from "./src/table";
import Mac from "./src/mac";
import FixedCamera from "./src/fixedCamera";
import {
  BakeShadows,
  Environment,
  Loader,
  SoftShadows,
} from "@react-three/drei";
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
import { useControls } from "leva";

export default function Init() {
  const glitchValue = new Vector2(3, 3);

  const spotligtRef = useRef<SpotLight>(null);

  useEffect(() => {
    if (spotligtRef.current) {
      spotligtRef.current.shadow.radius = 10;
    }
  }, []);

  return (
    <main className="w-screen h-screen absolute bg-black">
      <Loader />
      <Canvas shadows className="w-screen h-screen absolute">
        <Suspense fallback={null}>
          <BakeShadows />
          <SoftShadows size={10} focus={0} samples={20} />
          <Environment preset="night" />
          <spotLight
            ref={spotligtRef}
            position={[0, 2, 0]}
            castShadow
            receiveShadow
            intensity={5}
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
          <FixedCamera position={[3.3, 3, 1.2]} lookat={[-0.8, -0.8, -0.37]} />
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
