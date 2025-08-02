import React, { useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, OrbitControls } from '@react-three/drei';
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react';

// 3D Floating Shield
const FloatingShield = memo(({ position, isHovered }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002;
      if (isHovered) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[2, 2.5, 0.3]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.8}
          emissive={isHovered ? '#00ffff' : '#000000'}
          emissiveIntensity={isHovered ? 0.5 : 0}
        />
      </Box>
      <Sphere
        args={[0.5, 16, 16]}
        position={[0, 0.5, 0.2]}
      >
        <meshStandardMaterial
          color="#00ff88"
          transparent
          opacity={0.9}
          emissive={isHovered ? '#00ff88' : '#000000'}
          emissiveIntensity={isHovered ? 0.3 : 0}
        />
      </Sphere>
    </group>
  );
});

// 3D Network Grid
const NetworkGrid = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const gridSize = 5;
  const spacing = 2;

  return (
    <group ref={groupRef}>
      {[...Array(gridSize)].map((_, i) =>
        [...Array(gridSize)].map((_, j) => (
          <Box
            key={`${i}-${j}`}
            args={[0.1, 0.1, 0.1]}
            position={[
              (i - gridSize / 2) * spacing,
              (j - gridSize / 2) * spacing,
              -5
            ]}
          >
            <meshStandardMaterial
              color="#00ffff"
              transparent
              opacity={0.3}
            />
          </Box>
        ))
      )}
    </group>
  );
};

// 3D Scene
const HeroScene = ({ isHovered }) => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
        
        <HeroSceneContent isHovered={isHovered} />
        
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
};

// Hero Scene Content (inside Canvas)
const HeroSceneContent = ({ isHovered }) => {
  return (
    <>
      <NetworkGrid />
      <FloatingShield position={[-3, 0, 0]} isHovered={isHovered} />
      <FloatingShield position={[3, 0, 0]} isHovered={isHovered} />
    </>
  );
};

// Loader Spinner
const Spinner = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
    <svg className="animate-spin" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="#06b6d4" strokeWidth="4" opacity="0.2" />
      <path d="M44 24c0-11.046-8.954-20-20-20" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </div>
);

const Hero3D = memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Background */}
      <React.Suspense fallback={<Spinner />}>
        <HeroScene isHovered={isHovered} />
      </React.Suspense>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 animate-pulse" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full mb-8 mt-12 backdrop-blur-sm border border-cyan-500/30"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/Cybersecurity-project/22088259776.png"
              alt="Cyvoria Cybersecurity Logo"
              width="64"
              height="64"
              className="w-16 h-16 object-contain filter drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
              loading="lazy"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white mb-2 drop-shadow-lg">Protecting Your</span>
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg"
              animate={{ 
                backgroundPosition: isHovered ? '200% 0' : '0% 0',
                filter: isHovered ? 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))' : 'none'
              }}
              transition={{ duration: 0.5 }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Digital Future
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white font-medium">Advanced cybersecurity solutions with cutting-edge AI technology.</span>
            <br />
            <span className="text-cyan-300 font-semibold">Secure your digital assets with confidence.</span>
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: Shield, text: "Advanced Protection", color: "#00ff88" },
              { icon: Lock, text: "Data Encryption", color: "#ff6b6b" },
              { icon: Zap, text: "Real-time Monitoring", color: "#4ecdc4" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 rounded-full border border-cyan-500/20 backdrop-blur-sm drop-shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: feature.color,
                  boxShadow: `0 0 20px ${feature.color}40`
                }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                <span className="text-white font-medium drop-shadow-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ 
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
                y: -2
              }}
              transition={{ duration: 0.3 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="#services"
              className="inline-flex items-center border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "99.9%", label: "Uptime", color: "#00ff88" },
              { number: "24/7", label: "Monitoring", color: "#ff6b6b" },
              { number: "20+", label: "Clients", color: "#4ecdc4" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium drop-shadow-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0
            }}
            animate={{ 
              y: '-100%',
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </div>
    </section>
  );
});

export default Hero3D; 