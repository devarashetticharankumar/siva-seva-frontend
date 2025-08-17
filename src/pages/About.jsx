// function About() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">About Us</h1>
//       <p className="text-lg mb-4">
//         Siva Seva Youth is dedicated to fostering community engagement and youth
//         development through meaningful events and initiatives.
//       </p>
//       <p className="text-lg">
//         Our mission is to inspire and empower the next generation to contribute
//         positively to society.
//       </p>
//     </div>
//   );
// }

// export default About;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { FaUsers, FaHandsHelping, FaLightbulb } from "react-icons/fa";

// function About() {
//   return (
//     <div className="flex flex-col">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-16 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           About Siva Seva Youth
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg md:text-xl">
//           Empowering the youth, preserving traditions, and creating a better
//           tomorrow.
//         </p>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-12 bg-gray-50 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
//             <FaUsers className="text-orange-500 text-5xl mx-auto mb-4" />
//             <h2 className="text-xl font-semibold mb-2">Community First</h2>
//             <p className="text-gray-600">
//               We bring people together through cultural, spiritual, and social
//               initiatives.
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
//             <FaHandsHelping className="text-orange-500 text-5xl mx-auto mb-4" />
//             <h2 className="text-xl font-semibold mb-2">Service & Support</h2>
//             <p className="text-gray-600">
//               Our mission is to serve those in need and uplift our community
//               with compassion.
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
//             <FaLightbulb className="text-orange-500 text-5xl mx-auto mb-4" />
//             <h2 className="text-xl font-semibold mb-2">Inspiring Youth</h2>
//             <p className="text-gray-600">
//               Encouraging the younger generation to embrace leadership, values,
//               and innovation.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-orange-500 text-white py-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
//         <p className="mb-6 max-w-2xl mx-auto">
//           Be part of Siva Seva Youth and help us make a lasting impact in our
//           community.
//         </p>
//         <a
//           href="/contact"
//           className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
//         >
//           Contact Us
//         </a>
//       </section>
//     </div>
//   );
// }

// export default About;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Persistent dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setIsDarkMode(JSON.parse(saved));
    // Simulate loading for demo purposes
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Initialize particles.js for header
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("about-particles", {
        particles: {
          number: { value: 15, density: { enable: true, value_area: 1500 } },
          color: { value: ["#990000", "#FFD700", "#FF9933"] },
          shape: { type: "circle", stroke: { width: 0 } },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 0.5 },
          },
          size: { value: 2, random: true },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 60, duration: 0.3 },
            push: { particles_nb: 1 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  if (loading) {
    return (
      <motion.div
        className={`flex justify-center items-center min-h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Skeleton width={300} height={20} className="animate-pulse" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`min-h-screen font-poppins ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section
        className="relative text-white min-h-[40vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="about-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/40 to-[#990000]/50"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
            About Siva Seva Youth
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl">
            Empowering the youth, preserving traditions, and creating a better
            tomorrow.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            className={`bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } border border-[#FF9933]/50`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-[#FF9933] text-5xl mx-auto mb-4" />
            <h2
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Community First
            </h2>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } telugu-text`}
            >
              We bring people together through cultural, spiritual, and social
              initiatives.
            </p>
          </motion.div>
          <motion.div
            className={`bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } border border-[#FF9933]/50`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaHandsHelping className="text-[#FF9933] text-5xl mx-auto mb-4" />
            <h2
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Service & Support
            </h2>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } telugu-text`}
            >
              Our mission is to serve those in need and uplift our community
              with compassion.
            </p>
          </motion.div>
          <motion.div
            className={`bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } border border-[#FF9933]/50`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaLightbulb className="text-[#FF9933] text-5xl mx-auto mb-4" />
            <h2
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Inspiring Youth
            </h2>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } telugu-text`}
            >
              Encouraging the younger generation to embrace leadership, values,
              and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#990000] text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="mb-6 max-w-2xl mx-auto text-lg telugu-text">
            Be part of Siva Seva Youth and help us make a lasting impact in our
            community.
          </p>
          <a
            href="/contact"
            className="bg-[#FFD700] text-[#990000] px-6 py-3 rounded-full font-semibold hover:bg-[#FF9933] transition-colors shadow-md"
            aria-label="Contact us to join Siva Seva Youth"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu&display=swap");
        .telugu-text {
          font-family: "Noto Serif Telugu", Poppins, sans-serif;
        }
      `}</style>
    </motion.div>
  );
}

export default About;
