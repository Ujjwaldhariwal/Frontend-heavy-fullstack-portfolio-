import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const fans = useRef<THREE.Object3D[]>([]);
  const lightRef = useRef<THREE.PointLight>(null);

  // 1. Video Texture Setup
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "https://ik.imagekit.io/UjjwalDhariwal/Portfolio/profile.mp4"; 
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    return vid;
  });

  useEffect(() => {
    const playVideo = async () => {
      try { await video.play(); } catch (e) { /* ignore autoplay blocks */ }
    };
    playVideo();

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.generateMipmaps = false; 
    
    // Fix orientation
    videoTexture.center.set(0.5, 0.5);
    videoTexture.rotation = Math.PI;
    videoTexture.flipY = false;

    fans.current = [];

    // Traverse logic
    computer.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        // PERFORMANCE: Turn OFF real shadows
        mesh.castShadow = false; 
        mesh.receiveShadow = false;

        if (/fan/i.test(mesh.name)) fans.current.push(mesh);
        if (/screen|monitor|display|glass/i.test(mesh.name)) {
          mesh.material = new THREE.MeshBasicMaterial({
            map: videoTexture,
            toneMapped: false,
          });
        }
      }
    });

    return () => {
      video.pause();
      video.src = "";
    };
  }, [computer.scene, video]);

  useFrame((state, delta) => {
    fans.current.forEach((fan) => (fan.rotation.z -= delta * 15));
    if (lightRef.current) {
      lightRef.current.intensity = 3 + Math.sin(state.clock.elapsedTime * 3) * 2;
    }
  });

  return (
    <mesh>
      {/* Simple ambient light is cheap */}
      <hemisphereLight intensity={2} groundColor="black" />
      
      {/* PERFORMANCE: Removed heavy SpotLight Shadow. 
          Use ContactShadows below instead. */}
      
      {/* 1. PC Glow */}
      <pointLight ref={lightRef} position={[-0.5, -0.5, -0.5]} color="#d2ff00" distance={10} decay={2} />
      {/* 2. RGB Accents */}
      <pointLight position={[1, 0.5, 0]} intensity={5} color="#ff00ff" distance={5} />
      <pointLight position={[0, -2, 0]} intensity={3} color="#00f3ff" distance={5} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      
      {/* THE PRO FIX: Fake shadows. Looks realistic, costs 0 GPU. */}
      <ContactShadows 
        position={[0, -3.5, 0]} // Adjust Y to sit under the computer
        opacity={0.4} 
        scale={10} 
        blur={2.5} 
        far={4.5} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      // PERFORMANCE: Turn off real shadows entirely
      shadows={false}
      // PERFORMANCE: Hard cap DPR at 1.5. 
      // Going higher than 1.5 is invisible to the eye but melts the GPU.
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;