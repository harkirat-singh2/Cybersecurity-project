import { Users, Clock, Shield, Award, Wifi, Lock, Server } from "lucide-react";
import "./About3D.css";

const About = () => {
  const stats = [
    { icon: Users, value: "20+", label: "Clients Protected" },
    { icon: Clock, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Shield, value: "24/7", label: "Support Available" },
    { icon: Award, value: "50+", label: "Security Experts" },
  ];

  const floatingIcons = [
    {
      icon: Wifi,
      size: "w-16 h-16",
      top: "10%",
      left: "15%",
      animationDelay: "0s",
    },
    {
      icon: Lock,
      size: "w-20 h-20",
      top: "20%",
      left: "80%",
      animationDelay: "2s",
    },
    {
      icon: Server,
      size: "w-12 h-12",
      top: "70%",
      left: "10%",
      animationDelay: "4s",
    },
    {
      icon: Shield,
      size: "w-24 h-24",
      top: "50%",
      left: "50%",
      animationDelay: "1s",
    },
    {
      icon: Users,
      size: "w-14 h-14",
      top: "85%",
      left: "60%",
      animationDelay: "3s",
    },
    {
      icon: Award,
      size: "w-16 h-16",
      top: "30%",
      left: "30%",
      animationDelay: "5s",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
        {floatingIcons.map((item, index) => (
          <item.icon
            key={index}
            className={`floating-icon ${item.size}`}
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.animationDelay,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-black/90" />
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              About Cyvoria Cybersecurity
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-center px-2 sm:px-4">
              Cyvoria Cybersecurity is a leading company dedicated to protecting
              businesses from evolving digital threats. With years of experience
              and cutting-edge technology, we provide comprehensive security
              solutions tailored to your needs.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-12 leading-relaxed text-center px-2 sm:px-4">
              Our team of certified security experts works around the clock to
              ensure your digital assets remain protected against the latest
              cyber threats, providing you with peace of mind and allowing you
              to focus on growing your business.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
