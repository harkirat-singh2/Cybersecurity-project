import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-6 sm:py-8 md:py-12">
    <div className="container mx-auto px-3 sm:px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
        {/* Company Info */}
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 mb-3 sm:mb-4">
            <div className="relative flex-shrink-0">
              <img
                src="/22088259776.png"
                alt="Cyvoria Cybersecurity Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain filter drop-shadow-sm"
                style={{
                  imageRendering: "crisp-edges",
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-wide">
                CYVORIA
              </span>
              <span className="text-xs text-gray-300 tracking-widest -mt-0.5 sm:-mt-1">
                CYBER SECURITY
              </span>
            </div>
          </div>
          <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 max-w-md text-xs sm:text-sm md:text-base">
            Protecting your digital future with advanced cybersecurity
            solutions. Your trusted partner in the fight against cyber threats.
          </p>
          <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
            <a
              href="mailto:info@cyvoria.com"
              className="bg-cyan-600 hover:bg-cyan-700 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://twitter.com/cyvoria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://github.com/cyvoria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="tel:+1234567890"
              className="bg-cyan-600 hover:bg-cyan-700 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://maps.google.com/?q=123+Cyber+Ave,+Tech+City"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 p-1.5 sm:p-2 rounded-lg transition-colors duration-300"
              aria-label="Address"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">
            Quick Links
          </h4>
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm md:text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">
            Contact Info
          </h4>
          <div className="space-y-1 sm:space-y-2 md:space-y-3">
            <a
              href="mailto:info@cyvoria.com"
              className="flex items-center space-x-1 sm:space-x-2 group/contact hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0 group-hover/contact:text-cyan-600" />
              {/* Removed email text */}
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-1 sm:space-x-2 group/contact hover:text-cyan-400 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0 group-hover/contact:text-cyan-600" />
              {/* Removed phone number text */}
            </a>
            <a
              href="https://maps.google.com/?q=123+Cyber+Ave,+Tech+City"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-1 sm:space-x-2 group/contact hover:text-cyan-400 transition-colors"
              aria-label="Address"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover/contact:text-cyan-600" />
              {/* Removed address text */}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 sm:pt-6 md:pt-8 text-center">
        <p className="text-gray-400 text-xs sm:text-sm">
          © 2025 Cyvoria Cybersecurity. All rights reserved. | Privacy Policy |
          Terms of Service
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;