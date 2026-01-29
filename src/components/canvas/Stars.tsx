import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs"; // specific import sometimes fixes types, or keep yours
import * as THREE from "three";

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null!);

  // Optimization: Use useMemo instead of useState for static geometry data
  // This ensures the arrays are created only once and not held in React state unnecessarily
  const [positions, colors] = useMemo(() => {
    // 1. Generate Positions
    const positions = new Float32Array(6000);
    random.inSphere(positions, { radius: 1.2 });

    // 2. Generate Colors
    const colors = new Float32Array(6000);
    const neonColors = [
      new THREE.Color('#d2ff00'), // Acid yellow
      new THREE.Color('#ff0055'), // Neon pink
      new THREE.Color('#00f3ff'), // Cyan
      new THREE.Color('#ff00ff'), // Magenta
      new THREE.Color('#00ff9d'), // Mint
    ];

    for (let i = 0; i < 2000; i++) {
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* FIX: Use native <points> instead of drei <Points>.
        This allows direct access to <bufferGeometry> children.
      */}
      <points ref={ref} stride={3} frustumCulled {...props}>
        <bufferGeometry>
          {/* Attach positions */}
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          {/* Attach colors - This caused the crash before */}
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        
        <PointMaterial
          transparent
          vertexColors
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;