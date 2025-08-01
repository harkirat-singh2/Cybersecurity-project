import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const Header3D = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="relative bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 text-white sticky top-0 z-50 shadow-2xl border-b border-cyan-500/30 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/60 via-gray-900/80 to-teal-900/60 animate-gradient-x" style={{ backgroundSize: '200% 100%' }} />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }} />
        {/* Glowing border at bottom */}
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 blur-md opacity-60" />
      </div>
      {/* Soft drop shadow for depth */}
      <div className="absolute inset-0 pointer-events-none -z-10 shadow-2xl shadow-cyan-500/10" />
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-1 sm:space-x-2 md:space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <HashLink smooth to="/#home" className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 focus:outline-none">
              <div className="relative flex-shrink-0">
                <motion.img
                  src="/22088259776.png"
                  alt="Cyvoria Cybersecurity Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain filter drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                  style={{ imageRendering: "pixelated" }}
                  animate={{ 
                    filter: "drop-shadow(0 0 10px rgba(0,255,255,0.5)) drop-shadow(0 0 20px rgba(0,255,255,0.3))"
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text tracking-wider leading-tight"
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  CYVORIA
                </motion.span>
                <span className="text-xs sm:text-sm text-cyan-300 tracking-[0.1em] sm:tracking-[0.2em] font-medium -mt-0.5 sm:-mt-1 uppercase">
                  CYBER SECURITY
                </span>
              </div>
            </HashLink>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {[
              { name: "Home", href: "/", isLink: true },
              { name: "About Us", href: "#about", isLink: false },
              { name: "Services", href: "#services", isLink: false, hasDropdown: true },
              { name: "Contact Us", href: "#contact", isLink: false },
              { name: "Blog", href: "/blog", isLink: true }
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.isLink ? (
                  <Link
                    to={item.href}
                    className="hover:text-cyan-400 transition duration-300 font-medium text-gray-300 text-sm xl:text-base relative group"
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition duration-300 font-medium text-gray-300 text-sm xl:text-base relative group flex items-center"
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                    aria-expanded={item.hasDropdown ? isServicesOpen : undefined}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </a>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 xl:w-72 bg-gray-900/95 text-white shadow-2xl rounded-lg overflow-hidden border border-cyan-500/30 backdrop-blur-md"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {[
                          { title: "Threat Detection & Response", id: "threat-detection" },
                          { title: "Data Protection", id: "data-protection" },
                          { title: "Network Security", id: "network-security" },
                          { title: "Mobile Security", id: "mobile-security" },
                          { title: "Security Audits", id: "security-audits" },
                          { title: "Security Training", id: "security-training" },
                          { title: "AI-Powered Penetration Testing", id: "ai-powered-penetration-testing" },
                          { title: "Cloud Security Engineering", id: "cloud-security-engineering" },
                          { title: "OT Security", id: "ot-security" },
                          { title: "Threat Modeling", id: "threat-modeling" },
                        ].map((service, serviceIndex) => (
                            <motion.div
                              key={serviceIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: serviceIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <HashLink
                                smooth
                                to={`/#services-${service.id}`}
                                className="block px-3 xl:px-4 py-2 xl:py-3 hover:bg-cyan-500/20 hover:text-cyan-300 transition duration-200 border-b border-gray-700/50 last:border-b-0 text-xs xl:text-sm"
                              >
                                {service.title}
                              </HashLink>
                            </motion.div>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-1 sm:p-2 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="space-y-1 sm:space-y-2 pb-3 sm:pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {[
                  { name: "Home", href: "/", isLink: true },
                  { name: "About Us", href: "#about", isLink: false },
                  { name: "Services", href: "#services", isLink: false },
                  { name: "Contact Us", href: "#contact", isLink: false },
                  { name: "Blog", href: "/blog", isLink: true }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.isLink ? (
                      <Link
                        to={item.href}
                        className="block py-2 hover:text-cyan-400 transition duration-300 text-gray-300 text-sm sm:text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2 hover:text-cyan-400 transition duration-300 text-gray-300 text-sm sm:text-base"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header3D; 