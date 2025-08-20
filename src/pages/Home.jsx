// import { useEffect, useState } from "react";
// import { getEvents, getGalleryItems } from "../api";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { HiArrowLeft } from "react-icons/hi";

// function Home() {
//   const [events, setEvents] = useState([]);
//   const [gallery, setGallery] = useState([]);
//   const [loadingEvents, setLoadingEvents] = useState(true);
//   const [loadingGallery, setLoadingGallery] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Persistent dark mode
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved) setIsDarkMode(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await getEvents({ upcoming: true, limit: 3 });
//         setEvents(res.events || []);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//       } finally {
//         setLoadingEvents(false);
//       }
//     };

//     const fetchGallery = async () => {
//       try {
//         const res = await getGalleryItems({ limit: 4 });
//         setGallery(res.items || []);
//       } catch (err) {
//         console.error("Error fetching gallery:", err);
//       } finally {
//         setLoadingGallery(false);
//       }
//     };

//     fetchEvents();
//     fetchGallery();
//   }, []);

//   return (
//     <motion.div
//       className={`min-h-screen font-poppins ${
//         isDarkMode ? "bg-gray-950" : "bg-gray-100"
//       } transition-colors duration-500`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section */}
//       <section
//         className="relative text-white py-45 px-4 text-center"
//         style={{
//           backgroundImage: `url('https://i.pinimg.com/1200x/01/47/49/014749fe0a458e46ab870b4559ba5e8c.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 to-red-500/40"></div>
//         <motion.div
//           className="relative z-10 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">
//             <span className="text-white">Welcome to</span>
//             <br />
//             <span className="text-yellow-300">Siva Seva Youth</span>
//           </h1>
//           <p
//             className={`text-lg md:text-xl mb-6 ${
//               isDarkMode ? "text-gray-200" : "text-white"
//             }`}
//           >
//             మా ఊరి పండుగలు, వేడుకలు, మరియు సాంస్కృతిక కార్యక్రమాలను కలిసికట్టుగా
//             జరుపుకుందాం మరియు జ్ఞాపకాలలో భాగస్వామ్యం చేసుకుందాం
//           </p>
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {[
//               "📅 Vinayaka Chavithi 2024",
//               "🎉 Community Celebrations",
//               "🖼 Memories & Photos",
//             ].map((item, idx) => (
//               <motion.span
//                 key={idx}
//                 className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item}
//               </motion.span>
//             ))}
//           </div>
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/gallery"
//               className="from-orange-900/90 to-red-500/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md"
//             >
//               View Gallery
//             </Link>
//             <Link
//               to="/events"
//               className={`px-6 py-3 rounded-full font-semibold transition-colors shadow-md ${
//                 isDarkMode
//                   ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               Upcoming Events
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* What We Offer */}
//       <section className="py-16 px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold text-red-600 mb-3">
//             What We Offer
//           </h2>
//           <p
//             className={`text-base mb-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             }`}
//           >
//             మా కమ్యూనిటీ కోసం ప్రత్యేకంగా రూపొందించిన ఫీచర్లు
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: "📸",
//                 title: "Photo Gallery",
//                 text: "మా సంఘంలోని అందమైన క్షణాలు మరియు జ్ఞాపకాలు",
//               },
//               {
//                 icon: "📅",
//                 title: "Events Calendar",
//                 text: "రాబోయే పండుగలు మరియు కార్యక్రమాల సమాచారం",
//               },
//               {
//                 icon: "🤝",
//                 title: "Community",
//                 text: "మా సంఘం కార్యక్రమాలు మరియు ఆన్‌లైన్ చర్చలు",
//               },
//               {
//                 icon: "🎭",
//                 title: "Traditions",
//                 text: "మా సాంప్రదాయాల గురించి మరియు వాటి ప్రాముఖ్యత",
//               },
//               {
//                 icon: "📝",
//                 title: "Share Memories",
//                 text: "మీ అనుభవాలు మరియు జ్ఞాపకాలను పంచుకోండి",
//               },
//               {
//                 icon: "🌟",
//                 title: "Highlights",
//                 text: "ప్రత్యేక క్షణాల ఫోటోలు మరియు వీడియోలు",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className={`p-6 rounded-xl shadow-lg transition-colors ${
//                   isDarkMode ? "bg-gray-900" : "bg-white"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <div className="text-4xl mb-3">{item.icon}</div>
//                 <h3
//                   className={`text-lg font-semibold mb-2 ${
//                     isDarkMode ? "text-gray-100" : "text-gray-900"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>
//                 <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
//                   {item.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Gallery Highlights */}
//       <section
//         className={`py-16 px-4 ${
//           isDarkMode
//             ? "bg-gray-900"
//             : "bg-gradient-to-b from-orange-50 to-white"
//         } text-center`}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className={`text-3xl font-bold mb-3 ${
//               isDarkMode ? "text-gray-100" : "text-red-600"
//             }`}
//           >
//             Gallery Highlights
//           </h2>
//           <p
//             className={`text-base mb-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             }`}
//           >
//             మా ఊరి పండుగల అందమైన క్షణాలు
//           </p>

//           {loadingGallery ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading gallery...
//             </motion.p>
//           ) : gallery.length === 0 ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No gallery items found.
//             </motion.p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//               {gallery.map((item, idx) => {
//                 const mediaUrl = item.url || item.media?.[0]?.url || "";
//                 const isVideo =
//                   item.type === "video" || /\.(mp4|webm|ogg)$/i.test(mediaUrl);

//                 return (
//                   <motion.div
//                     key={item._id}
//                     className={`rounded-xl shadow-lg overflow-hidden ${
//                       isDarkMode ? "bg-gray-800" : "bg-white"
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   >
//                     {isVideo ? (
//                       <video
//                         src={mediaUrl}
//                         controls
//                         className="w-full h-48 object-cover"
//                       />
//                     ) : (
//                       <img
//                         src={mediaUrl}
//                         alt={item.title || "Gallery image"}
//                         className="w-full h-48 object-cover"
//                         onError={(e) =>
//                           (e.target.src =
//                             "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
//                         }
//                       />
//                     )}
//                     <div className="p-4">
//                       <h4
//                         className={`font-semibold ${
//                           isDarkMode ? "text-gray-100" : "text-gray-900"
//                         }`}
//                       >
//                         {item.title}
//                       </h4>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           )}

//           <motion.div
//             className="mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Link
//               to="/gallery"
//               className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md"
//             >
//               View Full Gallery →
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="py-16 px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className={`text-3xl font-bold mb-3 ${
//               isDarkMode ? "text-gray-100" : "text-red-600"
//             }`}
//           >
//             Upcoming Events
//           </h2>
//           <p
//             className={`text-base mb-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             }`}
//           >
//             రాబోయే పండుగలు మరియు కార్యక్రమాలు
//           </p>
//           {loadingEvents ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading events...
//             </motion.p>
//           ) : events.length === 0 ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No upcoming events found.
//             </motion.p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               {events.map((event, idx) => (
//                 <motion.div
//                   key={event._id}
//                   className={`p-6 rounded-xl shadow-lg text-left ${
//                     isDarkMode ? "bg-gray-900" : "bg-white"
//                   } transition-colors`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 >
//                   <h4
//                     className={`text-lg font-semibold mb-2 ${
//                       isDarkMode ? "text-gray-100" : "text-orange-600"
//                     }`}
//                   >
//                     {event.title}
//                   </h4>
//                   <div
//                     className={`text-sm mb-4 ${
//                       isDarkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     <p>📅 {new Date(event.date).toLocaleDateString()}</p>
//                     <p>🕒 {event.time || "TBA"}</p>
//                     <p>📍 {event.location || "Venue TBA"}</p>
//                   </div>
//                   <p className={isDarkMode ? "text-gray-400" : "text-gray-700"}>
//                     {event.description.replace(/<[^>]+>/g, "").slice(0, 100)}
//                   </p>
//                   <Link
//                     to={`/events/${event._id}`}
//                     className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md"
//                   >
//                     More Details
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//           <motion.div
//             className="mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Link
//               to="/events"
//               className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-md"
//             >
//               View All Events
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>
//     </motion.div>
//   );
// }

// export default Home;

// Home.jsx
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { getEvents, getGalleryItems } from "../api";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import Masonry from "react-masonry-css";
// import VanillaTilt from "vanilla-tilt";

// function Home() {
//   const [events, setEvents] = useState([]);
//   const [gallery, setGallery] = useState([]);
//   const [loadingEvents, setLoadingEvents] = useState(true);
//   const [loadingGallery, setLoadingGallery] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Persistent dark mode
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved) setIsDarkMode(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await getEvents({ upcoming: true, limit: 3 });
//         setEvents(res.events || []);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//       } finally {
//         setLoadingEvents(false);
//       }
//     };

//     const fetchGallery = async () => {
//       try {
//         const res = await getGalleryItems({ limit: 4 });
//         setGallery(res.items || []);
//       } catch (err) {
//         console.error("Error fetching gallery:", err);
//       } finally {
//         setLoadingGallery(false);
//       }
//     };

//     fetchEvents();
//     fetchGallery();
//   }, []);

//   // Tilt effect for cards
//   useEffect(() => {
//     const cards = document.querySelectorAll(".offer-card");
//     if (cards.length > 0) {
//       VanillaTilt.init(cards, {
//         max: 15,
//         speed: 400,
//         glare: true,
//         "max-glare": 0.5,
//       });
//     }
//   }, []);

//   // Initialize particles.js with festival-themed particles
//   useEffect(() => {
//     if (window.particlesJS) {
//       window.particlesJS("particles-js", {
//         particles: {
//           number: { value: 80, density: { enable: true, value_area: 800 } },
//           color: { value: ["#FF4500", "#FFD700", "#FF0000"] },
//           shape: {
//             type: ["circle", "star"],
//             stroke: { width: 0 },
//             polygon: { nb_sides: 5 },
//           },
//           opacity: {
//             value: 0.6,
//             random: true,
//             anim: { enable: true, speed: 1 },
//           },
//           size: { value: 4, random: true },
//           move: {
//             enable: true,
//             speed: 2,
//             direction: "none",
//             random: true,
//             out_mode: "out",
//           },
//         },
//         interactivity: {
//           events: {
//             onhover: { enable: true, mode: "repulse" },
//             onclick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 100, duration: 0.4 },
//             push: { particles_nb: 4 },
//           },
//         },
//         retina_detect: true,
//       });
//     }
//   }, []);

//   // Event Countdown Component
//   function EventCountdown({ eventDate }) {
//     const [timeLeft, setTimeLeft] = useState("");

//     useEffect(() => {
//       const timer = setInterval(() => {
//         const now = new Date();
//         const event = new Date(eventDate);
//         const diff = event - now;
//         if (diff > 0) {
//           const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//           const hours = Math.floor(
//             (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           );
//           setTimeLeft(`${days}d ${hours}h`);
//         } else {
//           setTimeLeft("Ongoing");
//         }
//       }, 1000);
//       return () => clearInterval(timer);
//     }, [eventDate]);

//     return <p>🕒 Starts in: {timeLeft}</p>;
//   }

//   return (
//     <motion.div
//       className={`min-h-screen font-poppins ${
//         isDarkMode ? "bg-gray-950" : "bg-gray-100"
//       } transition-colors duration-500`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section with Increased Height and Enhanced Style */}
//       <section
//         className="relative text-white min-h-[90vh] flex items-center justify-center bg-fixed px-4 text-center"
//         style={{
//           backgroundImage: `url('https://i.pinimg.com/1200x/01/47/49/014749fe0a458e46ab870b4559ba5e8c.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div id="particles-js" className="absolute inset-0" />
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-600/40 to-red-600/50"></div>
//         <motion.div
//           className="relative z-10 max-w-5xl mx-auto py-24 "
//           initial={{ opacity: 0, y: 50, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight ">
//             <TypeAnimation
//               sequence={[
//                 "Welcome to Siva Seva Youth",
//                 2000,
//                 "Celebrate Our Traditions",
//                 2000,
//                 "Join Our Community",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p
//             className={`text-xl md:text-2xl mb-8 telugu-text font-medium ${
//               isDarkMode ? "text-gray-100" : "text-white"
//             }`}
//             lang="te"
//           >
//             మా ఊరి పండుగలు, వేడుకలు, మరియు సాంస్కృతిక కార్యక్రమాలను కలిసికట్టుగా
//             జరుపుకుందాం మరియు జ్ఞాపకాలలో భాగస్వామ్యం చేసుకుందాం
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             {[
//               "📅 Vinayaka Chavithi 2024",
//               "🎉 Community Celebrations",
//               "🖼 Memories & Photos",
//             ].map((item, idx) => (
//               <motion.span
//                 key={idx}
//                 className="bg-white/30 px-5 py-2 rounded-full flex items-center gap-2 text-base font-semibold backdrop-blur-sm"
//                 whileHover={{
//                   scale: 1.1,
//                   boxShadow: "0 0 10px rgba(255,255,255,0.5)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item}
//               </motion.span>
//             ))}
//           </div>
//           <div className="flex flex-wrap justify-center gap-6">
//             <Link
//               to="/gallery"
//               className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,165,0,0.7)]"
//             >
//               View Gallery
//             </Link>
//             <Link
//               to="/events"
//               className={`px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,165,0,0.7)] ${
//                 isDarkMode
//                   ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               Upcoming Events
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* What We Offer with Tilt */}
//       <section className="py-16 px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold text-red-600 mb-3">
//             What We Offer
//           </h2>
//           <p
//             className={`text-base mb-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             }`}
//           >
//             మా కమ్యూనిటీ కోసం ప్రత్యేకంగా రూపొందించిన ఫీచర్లు
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 icon: "📸",
//                 title: "Photo Gallery",
//                 text: "మా సంఘంలోని అందమైన క్షణాలు మరియు జ్ఞాపకాలు",
//               },
//               {
//                 icon: "📅",
//                 title: "Events Calendar",
//                 text: "రాబోయే పండుగలు మరియు కార్యక్రమాల సమాచారం",
//               },
//               {
//                 icon: "🤝",
//                 title: "Community",
//                 text: "మా సంఘం కార్యక్రమాలు మరియు ఆన్‌లైన్ చర్చలు",
//               },
//               {
//                 icon: "🎭",
//                 title: "Traditions",
//                 text: "మా సాంప్రదాయాల గురించి మరియు వాటి ప్రాముఖ్యత",
//               },
//               {
//                 icon: "📝",
//                 title: "Share Memories",
//                 text: "మీ అనుభవాలు మరియు జ్ఞాపకాలను పంచుకోండి",
//               },
//               {
//                 icon: "🌟",
//                 title: "Highlights",
//                 text: "ప్రత్యేక క్షణాల ఫోటోలు మరియు వీడియోలు",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className={`offer-card p-6 rounded-xl shadow-lg transition-colors ${
//                   isDarkMode ? "bg-gray-900" : "bg-white"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//               >
//                 <div className="text-4xl mb-3">{item.icon}</div>
//                 <h3
//                   className={`text-lg font-semibold mb-2 ${
//                     isDarkMode ? "text-gray-100" : "text-gray-900"
//                   }`}
//                 >
//                   {item.title}
//                 </h3>
//                 <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
//                   {item.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Gallery Highlights with Masonry and Hover Zoom */}
//       <section
//         className={`py-16 px-4 ${
//           isDarkMode
//             ? "bg-gray-900"
//             : "bg-gradient-to-b from-orange-50 to-white"
//         } text-center`}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className={`text-3xl font-bold mb-3 ${
//               isDarkMode ? "text-gray-100" : "text-red-600"
//             }`}
//           >
//             Gallery Highlights
//           </h2>
//           <p
//             className={`text-base mb-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             }`}
//           >
//             మా ఊరి పండుగల అందమైన క్షణాలు
//           </p>

//           {loadingGallery ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading gallery...
//             </motion.p>
//           ) : gallery.length === 0 ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No gallery items found.
//             </motion.p>
//           ) : (
//             <Masonry
//               breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
//               className="flex w-auto -ml-4"
//               columnClassName="pl-4 bg-clip-padding"
//             >
//               {gallery.map((item, idx) => {
//                 const mediaUrl = item.url || item.media?.[0]?.url || "";
//                 const isVideo =
//                   item.type === "video" || /\.(mp4|webm|ogg)$/i.test(mediaUrl);

//                 return (
//                   <motion.div
//                     key={item._id}
//                     className={`mb-4 rounded-xl shadow-lg overflow-hidden ${
//                       isDarkMode ? "bg-gray-800" : "bg-white"
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   >
//                     {isVideo ? (
//                       <video
//                         src={mediaUrl}
//                         controls
//                         className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <img
//                         src={mediaUrl}
//                         alt={item.title || "Gallery image"}
//                         className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//                         onError={(e) =>
//                           (e.target.src =
//                             "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
//                         }
//                         loading="lazy"
//                       />
//                     )}
//                     <div className="p-4">
//                       <h4
//                         className={`font-semibold ${
//                           isDarkMode ? "text-gray-100" : "text-gray-900"
//                         }`}
//                       >
//                         {item.title}
//                       </h4>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </Masonry>
//           )}

//           <motion.div
//             className="mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Link
//               to="/gallery"
//               className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md"
//             >
//               View Full Gallery →
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Upcoming Events with Flip Animation and Countdown */}
//       <section className="py-16 px-4 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className={`text-3xl font-bold mb-3 ${
//               isDarkMode ? "text-gray-100" : "text-red-600"
//             }`}
//           >
//             Upcoming Events
//           </h2>
//           <p
//             className={`text-base mb-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             }`}
//           >
//             రాబోయే పండుగలు మరియు కార్యక్రమాలు
//           </p>
//           {loadingEvents ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading events...
//             </motion.p>
//           ) : events.length === 0 ? (
//             <motion.p
//               className={isDarkMode ? "text-gray-400" : "text-gray-600"}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No upcoming events found.
//             </motion.p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//               {events.map((event, idx) => (
//                 <motion.div
//                   key={event._id}
//                   className={`p-6 rounded-xl shadow-lg text-left ${
//                     isDarkMode ? "bg-gray-900" : "bg-white"
//                   } transition-colors`}
//                   whileHover={{ rotateY: 10, scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 100,
//                     delay: idx * 0.1,
//                   }}
//                 >
//                   <h4
//                     className={`text-lg font-semibold mb-2 ${
//                       isDarkMode ? "text-gray-100" : "text-orange-600"
//                     }`}
//                   >
//                     {event.title}
//                   </h4>
//                   <div
//                     className={`text-sm mb-4 ${
//                       isDarkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     <p>📅 {new Date(event.date).toLocaleDateString()}</p>
//                     <p>🕒 {event.time || "TBA"}</p>
//                     <p>📍 {event.location || "Venue TBA"}</p>
//                     <EventCountdown eventDate={event.date} />
//                   </div>
//                   <p className={isDarkMode ? "text-gray-400" : "text-gray-700"}>
//                     {event.description.replace(/<[^>]+>/g, "").slice(0, 100)}
//                   </p>
//                   <Link
//                     to={`/events/${event._id}`}
//                     className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md"
//                   >
//                     More Details
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//           <motion.div
//             className="mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Link
//               to="/events"
//               className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-md"
//             >
//               View All Events
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>
//     </motion.div>
//   );
// }

// export default Home;

// Home.jsx (Updated: Added Telugu font, rangoli pattern (assume asset), reduced hero height for mobile, added sepia filter to images, improved accessibility, standardized spacing, added skeletons for loading)
import { useEffect, useState } from "react";
import { getEvents, getGalleryItems } from "../api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Masonry from "react-masonry-css";
import VanillaTilt from "vanilla-tilt";
import Skeleton from "react-loading-skeleton"; // New import for skeletons
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persistent dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setIsDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getEvents({ upcoming: true, limit: 3 });
        setEvents(res.events || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoadingEvents(false);
      }
    };

    const fetchGallery = async () => {
      try {
        const res = await getGalleryItems({ limit: 4 });
        setGallery(res.items || []);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoadingGallery(false);
      }
    };

    fetchEvents();
    fetchGallery();
  }, []);

  // Tilt effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".offer-card");
    if (cards.length > 0) {
      VanillaTilt.init(cards, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  // Initialize particles.js with festival-themed particles
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#990000", "#FFD700", "#FF9933"] }, // Updated colors
          shape: {
            type: ["circle", "star"],
            stroke: { width: 0 },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 1 },
          },
          size: { value: 4, random: true },
          move: {
            enable: true,
            speed: 2,
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
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  // Event Countdown Component
  function EventCountdown({ eventDate }) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date();
        const event = new Date(eventDate);
        const diff = event - now;
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          setTimeLeft(`${days}d ${hours}h`);
        } else {
          setTimeLeft("Ongoing");
        }
      }, 1000);
      return () => clearInterval(timer);
    }, [eventDate]);

    return <p>🕒 Starts in: {timeLeft}</p>;
  }

  return (
    <motion.div
      className={`min-h-screen font-poppins ${
        isDarkMode ? "bg-gray-950" : "bg-gray-100"
      } transition-colors duration-500`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Reduced Height for Mobile and Rangoli Pattern */}
      <section
        className="relative text-white min-h-[70vh] md:min-h-[90vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/01/47/49/014749fe0a458e46ab870b4559ba5e8c.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="particles-js" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/40 to-[#990000]/50"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />{" "}
        {/* Assume rangoli-pattern.png asset */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-12 md:py-24"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 mt-10 tracking-tight ">
            <TypeAnimation
              sequence={[
                "Welcome to Siva Seva Youth",
                2000,
                "Celebrate Our Traditions",
                2000,
                "Join Our Community",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 telugu-text font-medium leading-relaxed ${
              isDarkMode ? "text-gray-100" : "text-white"
            }`}
            lang="te"
          >
            మన ఊరి పండుగలు, వేడుకలు, మరియు సాంస్కృతిక కార్యక్రమాలను కలిసికట్టుగా
            జరుపుకుందాం మరియు జ్ఞాపకాలలో భాగస్వామ్యం చేసుకుందాం
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "📅 Vinayaka Chavithi 2024",
              "🎉 Community Celebrations",
              "🖼 Memories & Photos",
            ].map((item, idx) => (
              <motion.span
                key={idx}
                className="bg-white/30 px-5 py-2 rounded-full flex items-center gap-2 text-base font-semibold backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 10px rgba(255,215,0,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/gallery"
              className="bg-[#FF9933] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#990000] transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,165,0,0.7)]"
            >
              View Gallery
            </Link>
            <Link
              to="/events"
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(255,165,0,0.7)] ${
                isDarkMode
                  ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Upcoming Events
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What We Offer with Tilt */}
      <section className="py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#990000] mb-3">
            What We Offer
          </h2>
          <p
            className={`text-base mb-10 leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            మా కమ్యూనిటీ కోసం ప్రత్యేకంగా రూపొందించిన ఫీచర్లు
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "📸",
                title: "Photo Gallery",
                text: "మా సంఘంలోని అందమైన క్షణాలు మరియు జ్ఞాపకాలు",
              },
              {
                icon: "📅",
                title: "Events Calendar",
                text: "రాబోయే పండుగలు మరియు కార్యక్రమాల సమాచారం",
              },
              {
                icon: "🤝",
                title: "Community",
                text: "మా సంఘం కార్యక్రమాలు మరియు ఆన్‌లైన్ చర్చలు",
              },
              {
                icon: "🎭",
                title: "Traditions",
                text: "మా సాంప్రదాయాల గురించి మరియు వాటి ప్రాముఖ్యత",
              },
              {
                icon: "📝",
                title: "Share Memories",
                text: "మీ అనుభవాలు మరియు జ్ఞాపకాలను పంచుకోండి",
              },
              {
                icon: "🌟",
                title: "Highlights",
                text: "ప్రత్యేక క్షణాల ఫోటోలు మరియు వీడియోలు",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`offer-card p-6 rounded-xl shadow-lg transition-colors ${
                  isDarkMode ? "bg-gray-900" : "bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Highlights with Masonry and Hover Zoom */}
      <section
        className={`py-16 px-4 ${
          isDarkMode
            ? "bg-gray-900"
            : "bg-gradient-to-b from-[#FF9933]/5 to-white"
        } text-center`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl font-bold mb-3 ${
              isDarkMode ? "text-gray-100" : "text-[#990000]"
            }`}
          >
            Gallery Highlights
          </h2>
          <p
            className={`text-base mb-10 leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            మా ఊరి పండుగల అందమైన క్షణాలు
          </p>

          {loadingGallery ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} height={192} className="rounded-xl" />
                ))}
            </div>
          ) : gallery.length === 0 ? (
            <motion.p
              className={isDarkMode ? "text-gray-400" : "text-gray-600"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No gallery items found.
            </motion.p>
          ) : (
            <Masonry
              breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
              className="flex w-auto -ml-4"
              columnClassName="pl-4 bg-clip-padding"
            >
              {gallery.map((item, idx) => {
                const mediaUrl = item.url || item.media?.[0]?.url || "";
                const isVideo =
                  item.type === "video" || /\.(mp4|webm|ogg)$/i.test(mediaUrl);

                return (
                  <motion.div
                    key={item._id}
                    className={`mb-4 rounded-xl shadow-lg overflow-hidden ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {isVideo ? (
                      <video
                        src={mediaUrl}
                        controls
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 filter sepia-[20%] saturate-[150%]"
                        loading="lazy"
                        alt={`Video: ${item.title || "Gallery video"}`} // Added alt
                      />
                    ) : (
                      <img
                        src={mediaUrl}
                        alt={item.title || "Gallery image"}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 filter sepia-[20%] saturate-[150%]"
                        onError={(e) =>
                          (e.target.src =
                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
                        }
                        loading="lazy"
                      />
                    )}
                    <div className="p-4">
                      <h4
                        className={`font-semibold ${
                          isDarkMode ? "text-gray-100" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </Masonry>
          )}

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/gallery"
              className="bg-[#FF9933] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#990000] transition-colors shadow-md"
            >
              View Full Gallery →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Events with Flip Animation and Countdown */}
      <section className="py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl font-bold mb-3 ${
              isDarkMode ? "text-gray-100" : "text-[#990000]"
            }`}
          >
            Upcoming Events
          </h2>
          <p
            className={`text-base mb-10 leading-relaxed ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            రాబోయే పండుగలు మరియు కార్యక్రమాలు
          </p>
          {loadingEvents ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} height={300} className="rounded-xl" />
                ))}
            </div>
          ) : events.length === 0 ? (
            <motion.p
              className={isDarkMode ? "text-gray-400" : "text-gray-600"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No upcoming events found.
            </motion.p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {events.map((event, idx) => (
                <motion.div
                  key={event._id}
                  className={`p-6 rounded-xl shadow-lg text-left ${
                    isDarkMode ? "bg-gray-900" : "bg-white"
                  } transition-colors`}
                  whileHover={{ rotateY: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: idx * 0.1,
                  }}
                >
                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-gray-100" : "text-[#FF9933]"
                    }`}
                  >
                    {event.title}
                  </h4>
                  <div
                    className={`text-sm mb-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>🕒 {event.time || "TBA"}</p>
                    <p>📍 {event.location || "Venue TBA"}</p>
                    <EventCountdown eventDate={event.date} />
                  </div>
                  <p className={isDarkMode ? "text-gray-400" : "text-gray-700"}>
                    {event.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
                  </p>
                  <Link
                    to={`/events/${event._id}`}
                    className="mt-4 inline-block bg-[#FF9933] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#990000] transition-colors shadow-md"
                  >
                    More Details
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/events"
              className="bg-[#FF9933] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#990000] transition-colors shadow-md"
            >
              View All Events
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu&display=swap");
        .telugu-text {
          font-family: "Noto Serif Telugu", Poppins, sans-serif;
        }
      `}</style>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </motion.div>
  );
}

export default Home;
