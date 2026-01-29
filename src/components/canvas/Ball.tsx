import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef<THREE.Mesh>(null!);
  const lightRef1 = useRef<THREE.PointLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);

  // Interaction State
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    // 1. LIGHT ANIMATION (Your pulse effect)
    if (lightRef1.current && lightRef2.current) {
      lightRef1.current.intensity = 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.5;
      lightRef2.current.intensity = 0.8 + Math.cos(state.clock.elapsedTime * 2) * 0.3;
    }

    // 2. SMART MAGNETIC ROTATION (FIXED)
    if (meshRef.current) {
      // Calculate target rotation based on mouse position
      const targetX = state.pointer.y * 0.5;
      const targetY = state.pointer.x * 0.5;

      // Use standard Linear Interpolation (Lerp) to smooth the rotation
      // This creates the "Magnetic" spring feel without crashing
      const smoothing = 4 * delta; 
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, smoothing);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, -targetY, smoothing);
    }
  });

  return (
    // rotationIntensity={0} ensures the ball doesn't spin randomly and hide the logo
    <Float 
      speed={4} 
      rotationIntensity={0} 
      floatIntensity={3} 
      floatingRange={[-0.15, 0.15]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.8} />
      
      {/* Acid Lime Rim Light */}
      <pointLight 
        ref={lightRef1}
        position={[-3, -3, 2]} 
        color="#d2ff00" 
        intensity={1.5}
        distance={10}
      />
      
      {/* Neon Pink Fill Light */}
      <pointLight 
        ref={lightRef2}
        position={[3, 3, 2]} 
        color="#ff0055" 
        intensity={0.8}
        distance={10}
      />

      {/* Cyan Accent Light */}
      <pointLight 
        position={[0, -2, 3]} 
        color="#00f3ff" 
        intensity={0.6}
        distance={8}
      />

      <mesh 
        ref={meshRef}
        castShadow 
        receiveShadow 
        scale={2.75}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.3}
          metalness={0.4}
          emissive="#d2ff00"
          emissiveIntensity={hovered ? 0.25 : 0.1} // Reacts to hover
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          map={decal}
          // @ts-ignore
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          enableRotate={false} // Disable manual rotate so Magnetic effect works best
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;