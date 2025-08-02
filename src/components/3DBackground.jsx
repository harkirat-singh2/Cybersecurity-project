import React, { useRef, memo, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

// Optimized floating icons with reduced geometry
const FloatingIcon = memo(({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[0.2, 8, 8]}
      position={position}
    >
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.4}
      />
    </Sphere>
  );
});

// Optimized particle system with fewer particles
const Particles = memo(({ count = 20 }) => {
  const particles = useMemo(() => 
    [...Array(count)].map((_, index) => ({
      id: index,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8
      ]
    })), [count]
  );

  return (
    <>
      {particles.map((particle) => (
        <Sphere
          key={particle.id}
          args={[0.03, 4, 4]}
          position={particle.position}
        >
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.3}
          />
        </Sphere>
      ))}
    </>
  );
});

// Reduced security elements for better performance
const SecurityElements = memo(() => {
  const elements = useMemo(() => [
    { color: '#00ff88', position: [-3, 1, -2] },
    { color: '#4ecdc4', position: [3, -1, -3] },
    { color: '#ffe66d', position: [0, 2, -4] },
    { color: '#a8e6cf', position: [-2, -2, -2] },
  ], []);

  return (
    <>
      {elements.map((item, index) => (
        <FloatingIcon
          key={index}
          position={item.position}
          color={item.color}
          speed={0.8}
        />
      ))}
    </>
  );
});

// Optimized scene with reduced lighting
const Scene = memo(() => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#00ffff" />
      
      <SceneContent />
      
      {/* Simplified central sphere */}
      <Sphere args={[0.8, 16, 16]} position={[0, 0, -3]}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.2}
          wireframe
        />
      </Sphere>
    </>
  );
});

// Optimized scene content
const SceneContent = memo(() => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Particles count={15} />
      <SecurityElements />
    </group>
  );
});

const Background3D = memo(() => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
});

export default Background3D; 