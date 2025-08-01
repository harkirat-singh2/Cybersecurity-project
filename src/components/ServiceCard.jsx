import { useState } from "react";
import {
  Shield,
  Lock,
  Globe,
  Smartphone,
  Search,
  GraduationCap,
  Brain,
  Cloud,
  AlertTriangle,
  Wifi,
  Eye,
  Target,
} from "lucide-react";

// Add keyframes for a gentle floating animation
const iconFloatStyle = {
  animation: "icon-float 2.5s ease-in-out infinite",
  display: "inline-block",
};

const ServiceCard = ({ title, description, details, icon, index, id }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getIcon = (iconName) => {
    const iconProps = {
      className:
        "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-400 mb-2 sm:mb-3 md:mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12",
      style: iconFloatStyle,
    };
    switch (iconName) {
      case "shield":
        return <Shield {...iconProps} />;
      case "lock":
        return <Lock {...iconProps} />;
      case "globe":
        return <Globe {...iconProps} />;
      case "smartphone":
        return <Smartphone {...iconProps} />;
      case "search":
        return <Search {...iconProps} />;
      case "graduation":
        return <GraduationCap {...iconProps} />;
      case "brain":
        return <Brain {...iconProps} />;
      case "cloud":
        return <Cloud {...iconProps} />;
      case "alert":
        return <AlertTriangle {...iconProps} />;
      case "wifi":
        return <Wifi {...iconProps} />;
      case "eye":
        return <Eye {...iconProps} />;
      case "target":
        return <Target {...iconProps} />;
      default:
        return <Shield {...iconProps} />;
    }
  };

  return (
    <>
      {/* Add the keyframes for the icon animation globally */}
      <style>{`
        @keyframes icon-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <div
        id={
          id ||
          title
            .toLowerCase()
            .replace(/\s|&|\//g, "-")
            .replace(/-+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
        }
        className="group perspective-1000 h-56 sm:h-64 md:h-72 lg:h-80 animate-fade-in-up cursor-pointer"
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: "both",
          perspective: "1000px",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-all duration-700 hover:scale-105 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s",
            ...(isFlipped ? { transform: "rotateY(180deg)" } : {}),
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center border border-gray-800 group-hover:border-cyan-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
          >
            <div className="transform transition-all duration-500 group-hover:scale-110">
              {getIcon(icon)}
            </div>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight px-1 sm:px-2 transition-colors duration-300 group-hover:text-cyan-400">
              {title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base px-1 sm:px-2 transition-colors duration-300 group-hover:text-gray-300">
              {description}
            </p>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-4 sm:w-6 md:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full transition-all duration-500 group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 group-hover:shadow-lg"></div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-float-1"></div>
              <div className="absolute top-8 right-6 w-1 h-1 bg-teal-400 rounded-full animate-float-2"></div>
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-cyan-500 rounded-full animate-float-3"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-teal-500 rounded-full animate-float-1"></div>
            </div>
          </div>
          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-500 via-cyan-600 to-teal-600 rounded-xl shadow-lg p-3 sm:p-4 md:p-6 flex flex-col justify-center items-center text-center text-white overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-spin-slow"></div>
            </div>

            <div className="text-cyan-100 mb-2 sm:mb-3 md:mb-4 relative z-10 transform transition-all duration-500 hover:scale-110">
              {getIcon(icon)}
            </div>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight px-1 sm:px-2 relative z-10 animate-slide-in-up">
              {title}
            </h3>
            <p
              className="text-cyan-50 leading-relaxed text-xs sm:text-sm md:text-base px-1 sm:px-2 flex-grow flex items-center relative z-10 animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              {details}
            </p>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-white/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
