import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <section
      id="contact"
      className="glass-bg py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 relative"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Distinct, slightly darker SVG: soft radial, animated waves, and floating dots */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.28 }}
        >
          <defs>
            <radialGradient
              id="contact-bg-grad"
              cx="50%"
              cy="50%"
              r="80%"
              fx="50%"
              fy="50%"
              gradientTransform="rotate(60)"
            >
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="contact-waves"
              x1="0"
              y1="0"
              x2="1440"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0ea5e9" stopOpacity="0.18" />
              <stop offset="1" stopColor="#0369a1" stopOpacity="0.13" />
            </linearGradient>
            <pattern
              id="contact-dots"
              x="0"
              y="0"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.4" fill="#0ea5e9" opacity="0.15" />
            </pattern>
          </defs>
          {/* Soft radial background */}
          <ellipse
            cx="700"
            cy="300"
            rx="700"
            ry="220"
            fill="url(#contact-bg-grad)"
          />
          {/* Dots overlay */}
          <rect
            x="0"
            y="0"
            width="1440"
            height="600"
            fill="url(#contact-dots)"
          />
          {/* Animated wave lines */}
          <g opacity="0.19">
            <path
              d="M0 150 Q720 350 1440 150"
              stroke="url(#contact-waves)"
              strokeWidth="2.5"
              fill="none"
            >
              <animate
                attributeName="d"
                values="M0 150 Q720 350 1440 150;M0 170 Q720 330 1440 170;M0 150 Q720 350 1440 150"
                dur="9s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0 450 Q720 250 1440 450"
              stroke="url(#contact-waves)"
              strokeWidth="2.5"
              fill="none"
            >
              <animate
                attributeName="d"
                values="M0 450 Q720 250 1440 450;M0 430 Q720 270 1440 430;M0 450 Q720 250 1440 450"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </g>
          {/* Floating dots */}
          <g opacity="0.15">
            <circle cx="300" cy="350" r="24" fill="#0ea5e9" />
            <circle cx="1140" cy="250" r="16" fill="#0369a1" />
            <rect
              x="900"
              y="180"
              width="28"
              height="28"
              rx="8"
              fill="#0ea5e9"
            />
            <rect
              x="500"
              y="380"
              width="20"
              height="20"
              rx="6"
              fill="#0369a1"
            />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto px-2 sm:px-4">
            Ready to secure your digital future? Contact us today for a free
            consultation and security assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
              Get In Touch
            </h3>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                <a
                  href="mailto:info@cyvoria.com"
                  className="bg-cyan-500 p-1.5 sm:p-2 md:p-3 rounded-lg flex-shrink-0 hover:bg-cyan-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </a>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    Email
                  </h4>
                  <a
                    href="mailto:info@cyvoria.com"
                    className="text-cyan-600 hover:underline text-xs sm:text-sm md:text-base"
                  >
                    info@cyvoria.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                <a
                  href="tel:+1234567890"
                  className="bg-cyan-500 p-1.5 sm:p-2 md:p-3 rounded-lg flex-shrink-0 hover:bg-cyan-600 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </a>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    Phone
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="text-cyan-600 hover:underline text-xs sm:text-sm md:text-base"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                <a
                  href="https://maps.google.com/?q=123+Cyber+Ave,+Tech+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 p-1.5 sm:p-2 md:p-3 rounded-lg flex-shrink-0 hover:bg-cyan-600 transition-colors"
                  aria-label="Address"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </a>
                <div>
                  <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base">
                    Address
                  </h4>
                  <a
                    href="https://maps.google.com/?q=123+Cyber+Ave,+Tech+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline text-xs sm:text-sm md:text-base"
                  >
                    123 Cyber Ave, Tech City
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm md:text-base"
                  required
                />
              </div>
              {status && (
                <div className="text-center text-sm text-cyan-600 font-semibold">{status}</div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
