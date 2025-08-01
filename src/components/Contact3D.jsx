import { useState } from "react";
import { Mail, Phone, MapPin, Send, Shield, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import { useRef } from 'react';

// 3D Floating Elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
        
        <FloatingElementsContent />
      </Canvas>
    </div>
  );
};

// 3D Floating Elements Content (inside Canvas)
const FloatingElementsContent = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, index) => (
        <Sphere
          key={index}
          args={[0.1 + Math.random() * 0.2, 16, 16]}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            -5 + Math.random() * 5
          ]}
        >
          <meshStandardMaterial
            color={['#00ff88', '#ff6b6b', '#4ecdc4', '#ffe66d'][index % 4]}
            transparent
            opacity={0.6}
            emissive={['#00ff88', '#ff6b6b', '#4ecdc4', '#ffe66d'][index % 4]}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
    </group>
  );
};

const Contact3D = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await response.json();
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Server error. Please try again later.");
    }
    setIsSubmitting(false);
  };

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@cyvoria.com",
      href: "mailto:info@cyvoria.com",
      color: "#00ff88"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
      color: "#ff6b6b"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Cyber Ave, Tech City",
      href: "https://maps.google.com/?q=123+Cyber+Ave,+Tech+City",
      color: "#4ecdc4"
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* 3D Background */}
      <FloatingElements />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 animate-pulse" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
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
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to secure your digital future? Contact us today for a free
            consultation and security assessment.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8 sm:space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8"
              whileHover={{ color: "#00ffff" }}
              transition={{ duration: 0.3 }}
            >
              Get In Touch
            </motion.h3>

            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 sm:space-x-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.a
                    href={info.href}
                    target={info.href.startsWith('http') ? "_blank" : undefined}
                    rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="bg-gradient-to-r from-cyan-600 to-teal-600 p-3 sm:p-4 rounded-xl flex-shrink-0 hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 group"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${info.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label={info.title}
                  >
                    <info.icon 
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-200" 
                    />
                  </motion.a>
                  <div>
                    <h4 className="font-semibold text-white text-lg sm:text-xl mb-2">
                      {info.title}
                    </h4>
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? "_blank" : undefined}
                      rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-base sm:text-lg"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Features */}
            <motion.div
              className="mt-12 sm:mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Why Choose Cyvoria?
              </h4>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Advanced Threat Protection", color: "#00ff88" },
                  { icon: Lock, text: "End-to-End Encryption", color: "#ff6b6b" },
                  { icon: Zap, text: "24/7 Real-time Monitoring", color: "#4ecdc4" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.02,
                      borderColor: feature.color,
                      boxShadow: `0 0 15px ${feature.color}40`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 sm:p-10 border border-cyan-500/20 backdrop-blur-sm space-y-6"
              whileHover={{ borderColor: "rgba(0, 255, 255, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-8"
                whileHover={{ color: "#00ffff" }}
                transition={{ duration: 0.3 }}
              >
                Send Us a Message
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-400 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-400 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-400 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-cyan-400 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </motion.div>

                {status && (
                  <div className="text-center text-sm text-cyan-400 font-semibold mb-2">{status}</div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
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

export default Contact3D; 