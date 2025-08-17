// import { useState } from "react";
// import { createContact } from "../api";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createContact(formData);
//       setSuccess("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//       setError("");
//     } catch (err) {
//       setError(err.message);
//       setSuccess("");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       {success && <p className="text-green-600 mb-4">{success}</p>}
//       <div className="max-w-md mx-auto">
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             className="w-full p-2 border rounded"
//             rows="5"
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { createContact } from "../api";
// import { Mail, User, MessageSquare } from "lucide-react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createContact(formData);
//       setSuccess("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//       setError("");
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//       setSuccess("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
//           Contact Us
//         </h1>
//         <p className="text-gray-500 text-center mb-6">
//           We’d love to hear from you! Send us a message below.
//         </p>

//         {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
//         {success && <p className="text-green-600 mb-4 text-sm">{success}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div className="relative">
//             <User className="absolute left-3 top-3 text-gray-400" size={18} />
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
//               required
//             />
//           </div>

//           {/* Message */}
//           <div className="relative">
//             <MessageSquare
//               className="absolute left-3 top-3 text-gray-400"
//               size={18}
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition resize-none"
//               rows="5"
//               required
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import { useState, useEffect } from "react";
import { createContact } from "../api";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persistent dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setIsDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Initialize particles.js for header
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("contact-particles", {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await createContact(formData);
      setSuccess("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      toast.error(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

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
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-[#FF9933]/10 to-[#990000]/10"
      } transition-colors duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <section
        className="relative text-white min-h-[40vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="contact-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/40 to-[#990000]/50"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl telugu-text">
            We’d love to hear from you! Send us a message below.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <div className="max-w-lg mx-auto px-4 py-10">
        <motion.div
          className={`bg-white rounded-2xl shadow-xl p-8 ${
            isDarkMode ? "bg-gray-800" : "bg-white/90"
          } transition-colors duration-300 backdrop-blur-sm`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {error && (
            <motion.div
              className="mb-4 p-3 bg-red-50 border-l-2 border-red-500 text-red-600 rounded text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}
          {success && (
            <motion.div
              className="mb-4 p-3 bg-green-50 border-l-2 border-green-500 text-green-600 rounded text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {success}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none transition ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                }`}
                required
                aria-required="true"
                aria-label="Your name"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none transition ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                }`}
                required
                aria-required="true"
                aria-label="Your email"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none transition resize-none h-32 ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                } telugu-text`}
                rows="5"
                required
                aria-required="true"
                aria-label="Your message"
              />
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg font-semibold text-white transition-colors shadow-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-[#FF9933] hover:bg-[#990000]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu&display=swap");
        .telugu-text {
          font-family: "Noto Serif Telugu", Poppins, sans-serif;
        }
      `}</style>
    </motion.div>
  );
}

export default Contact;
