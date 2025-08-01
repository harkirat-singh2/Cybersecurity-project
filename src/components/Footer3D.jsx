import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Shield, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const Footer3D = () => (
  <motion.footer 
    className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8 sm:py-12 md:py-16 relative overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12">
        {/* Company Info */}
        <motion.div 
          className="col-span-1 sm:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <HashLink smooth to="/#home" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 focus:outline-none">
              <div className="relative flex-shrink-0">
                <motion.img
                  src="/22088259776.png"
                  alt="Cyvoria Cybersecurity Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                  style={{ imageRendering: "crisp-edges" }}
                  animate={{ 
                    filter: "drop-shadow(0 0 10px rgba(0,255,255,0.5)) drop-shadow(0 0 20px rgba(0,255,255,0.3))"
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text tracking-wide"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  CYVORIA
                </motion.span>
                <span className="text-xs sm:text-sm text-cyan-300 tracking-widest -mt-1">
                  CYBER SECURITY
                </span>
              </div>
            </HashLink>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 mb-6 sm:mb-8 max-w-md text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Protecting your digital future with advanced cybersecurity
            solutions. Your trusted partner in the fight against cyber threats.
          </motion.p>

          {/* Security Features */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, text: "Advanced Protection", color: "#00ff88" },
              { icon: Lock, text: "Data Encryption", color: "#ff6b6b" },
              { icon: Zap, text: "Real-time Monitoring", color: "#4ecdc4" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 rounded-full border border-cyan-500/20 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: feature.color,
                  boxShadow: `0 0 15px ${feature.color}40`
                }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-4 h-4" style={{ color: feature.color }} />
                <span className="text-white text-xs font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex space-x-3 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Linkedin, href: "mailto:info@cyvoria.com", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/cyvoria", label: "Twitter" },
              { icon: Github, href: "https://github.com/cyvoria", label: "GitHub" },
              { icon: Phone, href: "tel:+1234567890", label: "Phone" },
              { icon: MapPin, href: "https://maps.google.com/?q=123+Cyber+Ave,+Tech+City", label: "Address" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 p-2 sm:p-3 rounded-lg transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-cyan-400"
            whileHover={{ color: "#00ffff" }}
            transition={{ duration: 0.3 }}
          >
            Quick Links
          </motion.h4>
          <ul className="space-y-2 sm:space-y-3">
            {[
              { name: "Home", href: "#home" },
              { name: "About Us", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 text-cyan-400"
            whileHover={{ color: "#00ffff" }}
            transition={{ duration: 0.3 }}
          >
            Contact Info
          </motion.h4>
          <div className="space-y-3 sm:space-y-4">
            {[
              { icon: Mail, href: "mailto:info@cyvoria.com", label: "Email" },
              { icon: Phone, href: "tel:+1234567890", label: "Phone" },
              { icon: MapPin, href: "https://maps.google.com/?q=123+Cyber+Ave,+Tech+City", label: "Address" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : undefined}
                rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-3 group/contact hover:text-cyan-400 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                aria-label={contact.label}
              >
                <motion.div
                  className="bg-cyan-500/20 p-2 rounded-lg group-hover/contact:bg-cyan-500/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <contact.icon className="w-4 h-4 text-cyan-400" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div 
        className="border-t border-gray-700/50 pt-6 sm:pt-8 text-center relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-gray-400 text-sm sm:text-base"
          whileHover={{ color: "#00ffff" }}
          transition={{ duration: 0.3 }}
        >
          © 2025 Cyvoria Cybersecurity. All rights reserved. |{" "}
          <motion.a 
            href="#" 
            className="hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ textDecoration: "underline" }}
          >
            Privacy Policy
          </motion.a>{" "}
          |{" "}
          <motion.a 
            href="#" 
            className="hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ textDecoration: "underline" }}
          >
            Terms of Service
          </motion.a>
        </motion.p>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
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
      </motion.div>
    </div>
  </motion.footer>
);

export default Footer3D; 