import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import React, { useRef, useState, memo } from 'react';
import { Shield, Lock, Globe, Smartphone, Search, GraduationCap, Brain, Cloud, Wifi, Target } from 'lucide-react';

// 3D Icon component
const Icon3D = memo(({ icon: Icon, color, isHovered }) => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      if (isHovered) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
    }
  });
  return (
    <group>
      <Box ref={meshRef} args={[1, 1, 0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color={color} transparent opacity={0.9} emissive={isHovered ? color : '#000000'} emissiveIntensity={isHovered ? 0.3 : 0} />
      </Box>
      <Sphere args={[0.3, 16, 16]} position={[0, 0, 0.6]}>
        <meshStandardMaterial color={color} transparent opacity={0.7} emissive={isHovered ? color : '#000000'} emissiveIntensity={isHovered ? 0.5 : 0} />
      </Sphere>
    </group>
  );
});

const IconCanvas = ({ icon: Icon, color, isHovered }) => {
  return (
    <div className="w-16 h-16 relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Icon3D icon={Icon} color={color} isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

const ServiceCard3D = memo(({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconMap = {
    shield: Shield,
    lock: Lock,
    globe: Globe,
    smartphone: Smartphone,
    search: Search,
    graduation: GraduationCap,
    brain: Brain,
    cloud: Cloud,
    wifi: Wifi,
    target: Target,
  };
  const IconComponent = iconMap[service.icon] || Shield;
  const colors = ['#00ff88', '#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#00ffff', '#ff9ff3', '#54a0ff', '#5f27cd'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          y: -10,
          boxShadow: "0 25px 50px rgba(0, 255, 255, 0.3)"
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated background grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            opacity: isHovered ? 0.2 : 0.1
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent"
            animate={{
              background: isHovered 
                ? "linear-gradient(90deg, rgba(0, 255, 255, 0.3) 0%, transparent 50%, rgba(0, 255, 255, 0.3) 100%)"
                : "linear-gradient(90deg, rgba(0, 255, 255, 0.2) 0%, transparent 50%, rgba(0, 255, 255, 0.2) 100%)"
            }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </motion.div>
        {/* Glowing border effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: isHovered 
              ? "linear-gradient(45deg, rgba(0, 255, 255, 0.3) 0%, transparent 25%, rgba(0, 255, 255, 0.1) 50%, transparent 75%, rgba(0, 255, 255, 0.3) 100%)"
              : "transparent"
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative z-10">
          {/* Icon and Title */}
          <motion.div 
            className="flex items-center gap-4 mb-4"
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <IconCanvas 
                icon={IconComponent} 
                color={color} 
                isHovered={isHovered} 
              />
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
            <motion.h3 
              className="text-xl font-bold text-white"
              animate={{ 
                color: isHovered ? color : '#ffffff',
                x: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
          </motion.div>
          {/* Description */}
          <motion.p 
            className="text-gray-300 mb-4 leading-relaxed"
            animate={{ 
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? -2 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>
          {/* Details (if present) */}
          {service.details && (
            <motion.div
              className="pt-4 border-t border-cyan-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.details}
              </p>
            </motion.div>
          )}
        </div>
        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ 
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  y: '-100%',
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
            ))}
          </div>
        )}
        {/* Hover glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
});

export default ServiceCard3D; 