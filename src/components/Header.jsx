import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-cyan-50 to-white text-gray-800 sticky top-0 z-50 shadow-lg border-b border-cyan-100 backdrop-blur-sm">
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
            <div className="relative flex-shrink-0">
              <img
                src="/22088259776.png"
                alt="Cyvoria Cybersecurity Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain filter drop-shadow-sm"
                style={{
                  imageRendering: "pixelated",
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 bg-clip-text tracking-wider leading-tight">
                CYVORIA
              </span>
              <span className="text-xs sm:text-sm text-gray-600 tracking-[0.1em] sm:tracking-[0.2em] font-medium -mt-0.5 sm:-mt-1 uppercase">
                CYBER SECURITY
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-cyan-600 transition duration-300 font-medium text-gray-700 text-sm xl:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-600 transition duration-300 font-medium text-gray-700 text-sm xl:text-base"
              >
                About Us
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="#services"
                className="hover:text-cyan-600 flex items-center transition duration-300 font-medium text-gray-700 text-sm xl:text-base focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 xl:w-4 xl:h-4 ml-1 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </a>
              <div
                className={`absolute top-full left-0 mt-2 w-64 xl:w-72 bg-white text-gray-800 shadow-2xl rounded-lg overflow-hidden transition-all duration-300 border border-gray-100 z-50 ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {[
                  {
                    name: "Threat Detection & Response",
                    href: "#threat-detection",
                  },
                  { name: "Data Protection", href: "#data-protection" },
                  { name: "Network Security", href: "#network-security" },
                  { name: "Mobile Security", href: "#mobile-security" },
                  { name: "Security Audits", href: "#security-audits" },
                  { name: "Security Training", href: "#security-training" },
                  {
                    name: "AI-Powered Penetration Testing",
                    href: "#ai-penetration-testing",
                  },
                  {
                    name: "Cloud Security Engineering",
                    href: "#cloud-security",
                  },
                  {
                    name: "APT Incident Handling",
                    href: "#apt-incident-handling",
                  },
                  { name: "OT security", href: "#ot-security" },
                  {
                    name: "Cyber-Crime Investigations",
                    href: "#cyber-crime-investigations",
                  },
                  { name: "Threat Modeling", href: "#threat-modeling" },
                ].map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="block px-3 xl:px-4 py-2 xl:py-3 hover:bg-cyan-50 hover:text-cyan-600 transition duration-200 border-b border-gray-50 last:border-b-0 text-xs xl:text-sm"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-600 transition duration-300 font-medium text-gray-700 text-sm xl:text-base"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-cyan-600 transition duration-300 font-medium text-gray-700 text-sm xl:text-base"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-1 sm:p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 mt-3 sm:mt-4"
              : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="space-y-1 sm:space-y-2 pb-3 sm:pb-4">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-cyan-600 transition duration-300 text-gray-700 text-sm sm:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-cyan-600 transition duration-300 text-gray-700 text-sm sm:text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 hover:text-cyan-600 transition duration-300 text-gray-700 text-sm sm:text-base"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 hover:text-cyan-600 transition duration-300 text-gray-700 text-sm sm:text-base"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 hover:text-cyan-600 transition duration-300 text-gray-700 text-sm sm:text-base"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
