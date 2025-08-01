import { motion } from 'framer-motion';
import ServiceCard3D from "./ServiceCard3D.jsx";

const Services = () => {
  const services = [
    {
      title: "Threat Detection & Response",
      description:
        "Advanced threat detection systems with real-time monitoring and rapid response capabilities.",
      details:
        "Our advanced systems leverage machine learning algorithms and behavioral analysis to identify potential threats before they escalate. Our 24/7 response team ensures minimal disruption to your operations.",
      icon: "shield",
      id: "threat-detection",
    },
    {
      title: "Data Protection",
      description:
        "Comprehensive data encryption and protection strategies to safeguard sensitive information.",
      details:
        "End-to-end encryption, secure data storage, and compliance-focused solutions meeting GDPR and HIPAA standards. Tailored protection plans to safeguard against unauthorized access and breaches.",
      icon: "lock",
    },
    {
      title: "Network Security",
      description:
        "Robust network security solutions including firewalls, VPNs, and intrusion prevention systems.",
      details:
        "State-of-the-art firewalls, secure VPNs, and advanced intrusion prevention systems. Regular assessments ensure your network remains secure against evolving cyber threats.",
      icon: "globe",
    },
    {
      title: "Mobile Security",
      description:
        "Mobile device management and security solutions to protect workforce devices and corporate data.",
      details:
        "Comprehensive MDM solutions with endpoint protection, secure app distribution, and remote wipe capabilities. Support for BYOD environments while maintaining strict security standards.",
      icon: "smartphone",
    },
    {
      title: "Security Audits",
      description:
        "Comprehensive security assessments and penetration testing to identify vulnerabilities.",
      details:
        "Expert-led assessments simulating real-world cyber attacks to evaluate your defenses. Detailed reports with actionable recommendations to strengthen your security posture.",
      icon: "search",
    },
    {
      title: "Security Training",
      description:
        "Employee cybersecurity awareness training programs to build a security-conscious culture.",
      details:
        "Customized training sessions covering phishing prevention, password management, and safe internet practices. Engaging workshops that empower your team to recognize and respond to threats.",
      icon: "graduation",
    },
    {
      title: "AI-Powered Penetration Testing",
      description:
        "Cutting-edge AI-driven penetration testing to identify vulnerabilities with unprecedented accuracy.",
      details:
        "Leverage artificial intelligence and machine learning to conduct comprehensive penetration tests. Our AI systems can identify complex attack vectors and provide detailed vulnerability assessments faster than traditional methods.",
      icon: "brain",
    },
    {
      title: "Cloud Security Engineering",
      description:
        "Comprehensive cloud security architecture and implementation for modern businesses.",
      details:
        "Design and implement robust cloud security frameworks across AWS, Azure, and Google Cloud. Our engineers ensure your cloud infrastructure meets the highest security standards while maintaining optimal performance.",
      icon: "cloud",
    },
    {
      title: "OT Security",
      description:
        "Protecting critical infrastructure and industrial control systems from cyber threats.",
      details:
        "We provide comprehensive security for Operational Technology (OT) environments, including SCADA systems, PLCs, and other industrial control systems. Our services include vulnerability assessments, network segmentation, and incident response for OT systems.",
      icon: "wifi",
    },
    {
      title: "Threat Modeling",
      description:
        "Systematic threat modeling to identify and mitigate potential security risks.",
      details:
        "Comprehensive threat modeling services to identify potential attack vectors and security vulnerabilities. Our experts create detailed threat models to help you understand and mitigate risks before they become incidents.",
      icon: "target",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-900 text-white py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Unique, slightly darker SVG: glassy polygons, mesh, and animated lines */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.34 }}
        >
          <defs>
            <radialGradient
              id="services-bg-grad"
              cx="50%"
              cy="50%"
              r="80%"
              fx="50%"
              fy="50%"
              gradientTransform="rotate(30)"
            >
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0e7490" stopOpacity="0.18" />
            </radialGradient>
            <linearGradient
              id="services-lines"
              x1="0"
              y1="0"
              x2="1440"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0ea5e9" stopOpacity="0.22" />
              <stop offset="1" stopColor="#0891b2" stopOpacity="0.13" />
            </linearGradient>
            <pattern
              id="services-mesh"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="2"
                height="48"
                fill="#0ea5e9"
                opacity="0.13"
              />
              <rect
                x="0"
                y="0"
                width="48"
                height="2"
                fill="#0ea5e9"
                opacity="0.13"
              />
            </pattern>
          </defs>
          {/* Glassy polygon shapes */}
          <polygon
            points="0,600 200,400 400,500 600,350 800,500 1000,400 1200,600 1440,500 1440,600"
            fill="#0ea5e9"
            opacity="0.11"
          />
          <polygon
            points="0,0 300,100 600,0 900,120 1200,0 1440,80 1440,0"
            fill="#0369a1"
            opacity="0.09"
          />
          {/* Mesh overlay */}
          <rect
            x="0"
            y="0"
            width="1440"
            height="600"
            fill="url(#services-mesh)"
          />
          {/* Soft radial background */}
          <ellipse
            cx="720"
            cy="300"
            rx="700"
            ry="220"
            fill="url(#services-bg-grad)"
          />
          {/* Animated lines */}
          <g opacity="0.22">
            <path
              d="M0 150 Q720 350 1440 150"
              stroke="url(#services-lines)"
              strokeWidth="2.5"
              fill="none"
            >
              <animate
                attributeName="d"
                values="M0 150 Q720 350 1440 150;M0 170 Q720 330 1440 170;M0 150 Q720 350 1440 150"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0 450 Q720 250 1440 450"
              stroke="url(#services-lines)"
              strokeWidth="2.5"
              fill="none"
            >
              <animate
                attributeName="d"
                values="M0 450 Q720 250 1440 450;M0 430 Q720 270 1440 430;M0 450 Q720 250 1440 450"
                dur="7s"
                repeatCount="indefinite"
              />
            </path>
          </g>
          {/* Subtle geometric shapes */}
          <g opacity="0.13">
            <circle cx="200" cy="500" r="22" fill="#0ea5e9" />
            <rect
              x="1240"
              y="80"
              width="32"
              height="32"
              rx="10"
              fill="#0369a1"
            />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Cybersecurity
            </span>{" "}
            Services
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive security solutions designed to protect your digital assets
            and ensure business continuity in an ever-evolving threat landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const anchorId = `services-${service.id ? service.id : service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
            return (
              <div
                key={service.id || index}
                id={anchorId}
                className={isLast ? "lg:col-start-2" : ""}
              >
                <ServiceCard3D service={service} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
