import { Users, Clock, Shield, Award, Wifi, Lock, Server, Zap, Brain, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import { useRef } from 'react';

// 3D Floating Icon
const FloatingIcon3D = ({ position, icon: Icon, color, size = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002;
    }
  });

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[size, size, 0.1]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Box>
    </group>
  );
};

// 3D Scene for About section
const AboutScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
        
        <AboutSceneContent />
      </Canvas>
    </div>
  );
};

// 3D Scene Content (inside Canvas)
const AboutSceneContent = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const icons = [
    { icon: Shield, position: [-4, 2, -2], color: '#00ff88', size: 1.5 },
    { icon: Lock, position: [4, -1, -3], color: '#ff6b6b', size: 1.2 },
    { icon: Server, position: [-3, -2, -1], color: '#4ecdc4', size: 1 },
    { icon: Wifi, position: [3, 3, -4], color: '#ffe66d', size: 1.3 },
    { icon: Brain, position: [-2, 4, -5], color: '#a8e6cf', size: 1.1 },
    { icon: Globe, position: [2, -3, -2], color: '#ff8b94', size: 1.4 },
  ];

  return (
    <group ref={groupRef}>
      {icons.map((item, index) => (
        <FloatingIcon3D
          key={index}
          position={item.position}
          icon={item.icon}
          color={item.color}
          size={item.size}
        />
      ))}
    </group>
  );
};

const About3D = () => {
  const stats = [
    { icon: Users, value: "20+", label: "Clients Protected", color: "#00ff88" },
    { icon: Clock, value: "99.9%", label: "Uptime Guarantee", color: "#ff6b6b" },
    { icon: Shield, value: "24/7", label: "Support Available", color: "#4ecdc4" },
    { icon: Award, value: "50+", label: "Security Experts", color: "#ffe66d" },
  ];

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* 3D Background */}
      <AboutScene />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 animate-pulse" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Cyvoria
              </span>{" "}
              Cybersecurity
            </motion.h2>
            <motion.div 
              className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mb-8 sm:mb-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Left Column - Text Content */}
              <div className="space-y-6 sm:space-y-8">
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Cyvoria Cybersecurity is a leading company dedicated to protecting
                  businesses from evolving digital threats. With years of experience
                  and cutting-edge technology, we provide comprehensive security
                  solutions tailored to your needs.
                </motion.p>

                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  Our team of certified security experts works around the clock to
                  ensure your digital assets remain protected against the latest
                  cyber threats, providing you with peace of mind and allowing you
                  to focus on growing your business.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  {[
                    { text: "AI-Powered Security", color: "#00ff88" },
                    { text: "Real-time Monitoring", color: "#ff6b6b" },
                    { text: "24/7 Support", color: "#4ecdc4" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-cyan-500/20 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: feature.color,
                        boxShadow: `0 0 15px ${feature.color}40`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: feature.color }}
                      />
                      <span className="text-white text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - 3D Stats */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 border border-cyan-500/30 backdrop-blur-sm group-hover:border-cyan-500/60 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: `0 0 30px ${stat.color}40`
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <stat.icon 
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                          style={{ color: stat.color }}
                        />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </motion.h3>
                      <p className="text-gray-400 font-medium text-sm sm:text-base">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 sm:p-12 border border-cyan-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
                whileHover={{ color: "#00ffff" }}
                transition={{ duration: 0.3 }}
              >
                Our Mission
              </motion.h3>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
              >
                To provide cutting-edge cybersecurity solutions that empower businesses 
                to operate securely in an increasingly digital world, ensuring their 
                success and protecting their most valuable assets.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
              duration: 2.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About3D; 