import React, { useRef, useState, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// Floating cybersecurity icons
const FloatingIcon = memo(({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[0.3, 16, 16]}
      position={position}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
});

// Simple particle system for network connections
const Particles = ({ count = 50 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <Sphere
          key={index}
          args={[0.02, 8, 8]}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15
          ]}
        >
          <meshStandardMaterial
            color="#00ffff"
            transparent
            opacity={0.4}
            emissive="#00ffff"
            emissiveIntensity={0.1}
          />
        </Sphere>
      ))}
    </>
  );
};

// Cybersecurity-themed floating elements
const SecurityElements = () => {
  const elements = [
    { color: '#00ff88', position: [-5, 2, -3], size: 0.3 },
    { color: '#ff6b6b', position: [5, -2, -4], size: 0.25 },
    { color: '#4ecdc4', position: [-3, -3, -2], size: 0.35 },
    { color: '#ffe66d', position: [4, 3, -5], size: 0.2 },
    { color: '#a8e6cf', position: [-4, 4, -6], size: 0.3 },
    { color: '#ff8b94', position: [6, -1, -3], size: 0.25 },
  ];

  return (
    <>
      {elements.map((item, index) => (
        <FloatingIcon
          key={index}
          position={item.position}
          color={item.color}
          speed={0.5 + Math.random() * 0.5}
        />
      ))}
    </>
  );
};

// Main 3D background component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      
      <SceneContent />
      
      {/* Central sphere representing the core */}
      <Sphere args={[1, 32, 32]} position={[0, 0, -2]}>
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>
    </>
  );
};

// Scene Content (inside Canvas)
const SceneContent = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Particles count={30} />
      <SecurityElements />
    </group>
  );
};

const Background3D = memo(() => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
});

export default Background3D; 