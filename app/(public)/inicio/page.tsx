"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 1.5, 2], fov: 45 }}
          shadows
        >
          <ambientLight intensity={0.6} />

          <directionalLight position={[5, 5, 5]} intensity={15} castShadow />

          <pointLight position={[-4, 2, -2]} intensity={2} />

          <OrbitControls enableZoom={true} />

      
        </Canvas>
      </div>
    </main>
  );
}

