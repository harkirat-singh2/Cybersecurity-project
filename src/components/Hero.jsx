import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="bg-gradient-to-br from-white via-cyan-50 to-white text-gray-800 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center"
  >
    {/* Futuristic Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Layered SVG: Soft mesh, animated lines, and subtle dots for a lighter, softer look */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18 }}
      >
        <defs>
          <radialGradient
            id="hero-bg-grad"
            cx="50%"
            cy="50%"
            r="80%"
            fx="50%"
            fy="50%"
            gradientTransform="rotate(45)"
          >
            <stop offset="0%" stopColor="#e0f7fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#b2ebf2" stopOpacity="0.15" />
          </radialGradient>
          <linearGradient
            id="hero-lines"
            x1="0"
            y1="0"
            x2="1440"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#bae6fd" stopOpacity="0.18" />
            <stop offset="1" stopColor="#a7f3d0" stopOpacity="0.10" />
          </linearGradient>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.7" fill="#a7f3d0" opacity="0.12" />
          </pattern>
        </defs>
        {/* Soft mesh background */}
        <ellipse
          cx="720"
          cy="300"
          rx="700"
          ry="250"
          fill="url(#hero-bg-grad)"
        />
        {/* Subtle mesh overlay */}
        <rect x="0" y="0" width="1440" height="600" fill="url(#hero-dots)" />
        {/* Futuristic lines */}
        <g opacity="0.18">
          <path
            d="M0 100 Q720 300 1440 100"
            stroke="url(#hero-lines)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M0 500 Q720 300 1440 500"
            stroke="url(#hero-lines)"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M0 300 Q720 100 1440 300"
            stroke="url(#hero-lines)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 300 Q720 500 1440 300"
            stroke="url(#hero-lines)"
            strokeWidth="1.5"
            fill="none"
          />
        </g>
        {/* Animated pulse ellipse */}
        <ellipse
          cx="400"
          cy="100"
          rx="200"
          ry="80"
          fill="#e0f2fe"
          fillOpacity="0.13"
        >
          <animate
            attributeName="rx"
            values="200;220;200"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse
          cx="1200"
          cy="500"
          rx="180"
          ry="60"
          fill="#b2f5ea"
          fillOpacity="0.10"
        >
          <animate
            attributeName="ry"
            values="60;80;60"
            dur="7s"
            repeatCount="indefinite"
          />
        </ellipse>
        {/* Subtle geometric shapes */}
        <g opacity="0.10">
          <circle cx="200" cy="200" r="30" fill="#a7f3d0" />
          <circle cx="1240" cy="400" r="22" fill="#bae6fd" />
          <rect x="700" y="80" width="40" height="40" rx="12" fill="#e0f2fe" />
          <rect x="900" y="480" width="30" height="30" rx="8" fill="#b2f5ea" />
        </g>
      </svg>
    </div>

    <div className="container mx-auto px-3 sm:px-4 md:px-6 text-center relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full mb-3 sm:mb-4 md:mb-6">
          <img
            src="/22088259776.png"
            alt="Cyvoria Cybersecurity Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-gray-800">
          <span className="block mb-1 sm:mb-2">Protecting Your</span>
          <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent block animate-pulse">
            Digital Future
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 text-gray-600 leading-relaxed max-w-5xl mx-auto px-2 sm:px-4">
          Cyvoria Cybersecurity delivers advanced, reliable protection for your
          business. Secure your digital assets with our innovative solutions and
          expert team.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center px-2 sm:px-4">
          <a
            href="#contact"
            className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center text-xs sm:text-sm md:text-base"
          >
            Get Started Today
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center text-xs sm:text-sm md:text-base"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
