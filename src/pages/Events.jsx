// import { useEffect, useState } from "react";
// import { getEvents } from "../api";
// import EventCard from "../components/EventCard";
// import { motion } from "framer-motion";
// import { HiArrowLeft } from "react-icons/hi";
// import { Link } from "react-router-dom";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("all"); // all | upcoming | past
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
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
//         setLoading(true);
//         let upcoming =
//           filter === "upcoming" ? true : filter === "past" ? false : undefined;

//         const response = await getEvents({
//           upcoming,
//           page,
//           limit: 12,
//         });

//         setEvents(response.events);
//         setTotal(response.total);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, [filter, page]);

//   const buttonClasses = (active) =>
//     `px-5 py-2 rounded-full font-semibold transition ${
//       active
//         ? "bg-red-600 text-white shadow-lg hover:bg-red-700"
//         : isDarkMode
//         ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
//         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//     }`;

//   return (
//     <motion.div
//       className={`min-h-screen font-poppins ${
//         isDarkMode ? "bg-gray-950" : "bg-gray-100"
//       } transition-colors duration-500`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1
//             className={`text-4xl font-extrabold text-center mb-8 ${
//               isDarkMode ? "text-gray-100" : "text-gray-900"
//             }`}
//           >
//             Events
//           </h1>

//           {/* Filter Buttons */}
//           <div className="flex justify-center gap-4 mb-10">
//             <motion.button
//               onClick={() => {
//                 setFilter("all");
//                 setPage(1);
//               }}
//               className={buttonClasses(filter === "all")}
//               aria-label="Show all events"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               All
//             </motion.button>
//             <motion.button
//               onClick={() => {
//                 setFilter("upcoming");
//                 setPage(1);
//               }}
//               className={buttonClasses(filter === "upcoming")}
//               aria-label="Show upcoming events"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Upcoming
//             </motion.button>
//             <motion.button
//               onClick={() => {
//                 setFilter("past");
//                 setPage(1);
//               }}
//               className={buttonClasses(filter === "past")}
//               aria-label="Show past events"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Past
//             </motion.button>
//           </div>

//           {/* Events Grid */}
//           {loading ? (
//             <motion.p
//               className={`text-center text-lg ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               } animate-pulse`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading events...
//             </motion.p>
//           ) : events.length === 0 ? (
//             <motion.p
//               className={`text-center text-lg ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No events found.
//             </motion.p>
//           ) : (
//             <div className="flex flex-col lg:flex-row gap-6">
//               {/* Left Section (70%) */}
//               <div className="lg:w-full">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//                   {events.map((event, idx) => (
//                     <EventCard
//                       key={event._id}
//                       event={event}
//                       isDarkMode={isDarkMode}
//                     />
//                   ))}
//                 </div>

//                 {/* Pagination */}
//                 <div className="mt-12 flex justify-center gap-6">
//                   <motion.button
//                     onClick={() => setPage((p) => Math.max(p - 1, 1))}
//                     disabled={page === 1}
//                     className={`px-5 py-2 rounded-full font-semibold transition ${
//                       isDarkMode
//                         ? "bg-gray-800 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
//                         : "bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
//                     }`}
//                     aria-label="Previous page"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Previous
//                   </motion.button>
//                   <span
//                     className={`flex items-center font-semibold ${
//                       isDarkMode ? "text-gray-400" : "text-gray-700"
//                     }`}
//                   >
//                     Page {page}
//                   </span>
//                   <motion.button
//                     onClick={() => setPage((p) => p + 1)}
//                     disabled={page * 12 >= total}
//                     className={`px-5 py-2 rounded-full font-semibold transition ${
//                       isDarkMode
//                         ? "bg-gray-800 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
//                         : "bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
//                     }`}
//                     aria-label="Next page"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Next
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>

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

// export default Events;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { getEvents } from "../api";
// import EventCard from "../components/EventCard";
// import { motion } from "framer-motion";
// import { HiArrowLeft } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import VanillaTilt from "vanilla-tilt";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("all"); // all | upcoming | past
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
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

//   // Fetch events
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         let upcoming =
//           filter === "upcoming" ? true : filter === "past" ? false : undefined;

//         const response = await getEvents({
//           upcoming,
//           page,
//           limit: 12,
//         });

//         setEvents(response.events);
//         setTotal(response.total);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, [filter, page]);

//   // Initialize particles.js for header
//   useEffect(() => {
//     if (window.particlesJS) {
//       window.particlesJS("events-particles", {
//         particles: {
//           number: { value: 60, density: { enable: true, value_area: 800 } },
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

//   const buttonClasses = (active) =>
//     `px-6 py-3 rounded-full font-semibold text-lg transition-all backdrop-blur-sm ${
//       active
//         ? "bg-red-600 text-white shadow-lg hover:shadow-[0_0_15px_rgba(255,165,0,0.7)] hover:bg-red-700"
//         : isDarkMode
//         ? "bg-gray-800/80 text-gray-100 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]"
//         : "bg-gray-200/80 text-gray-700 hover:bg-gray-300 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]"
//     }`;

//   return (
//     <motion.div
//       className={`min-h-screen font-poppins ${
//         isDarkMode ? "bg-gray-950" : "bg-gray-100"
//       } transition-colors duration-500`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Header Section with Particles */}
//       <section
//         className="relative text-white min-h-[60vh] flex items-center justify-center bg-fixed px-4 text-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1610085927744-7217728267a6?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div id="events-particles" className="absolute inset-0" />
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/50"></div>
//         <motion.div
//           className="relative z-10 max-w-5xl mx-auto py-12"
//           initial={{ opacity: 0, y: 50, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
//             Events
//           </h1>
//           <p
//             className={`text-xl md:text-2xl mb-8 telugu-text font-medium ${
//               isDarkMode ? "text-gray-100" : "text-white"
//             }`}
//             lang="te"
//           >
//             మా సంఘం యొక్క పండుగలు మరియు కార్యక్రమాలను కలిసి ఆనందించండి
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <motion.button
//               onClick={() => {
//                 setFilter("all");
//                 setPage(1);
//               }}
//               className={buttonClasses(filter === "all")}
//               aria-label="Show all events"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               All Events
//             </motion.button>
//             <motion.button
//               onClick={() => {
//                 setFilter("upcoming");
//                 setPage(1);
//               }}
//               className={buttonClasses(filter === "upcoming")}
//               aria-label="Show upcoming events"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Upcoming
//             </motion.button>
//             <motion.button
//               onClick={() => {
//                 setFilter("past");
//                 setPage(1);
//               }}
//               className={buttonClasses(filter === "past")}
//               aria-label="Show past events"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Past
//             </motion.button>
//           </div>

//           {/* Events Grid */}
//           {loading ? (
//             <motion.p
//               className={`text-center text-lg ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               } animate-pulse`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading events...
//             </motion.p>
//           ) : events.length === 0 ? (
//             <motion.p
//               className={`text-center text-lg ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No events found.
//             </motion.p>
//           ) : (
//             <div className="flex flex-col lg:flex-row gap-6">
//               {/* Events Grid */}
//               <div className="lg:w-full">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//                   {events.map((event, idx) => (
//                     <EventCard
//                       key={event._id}
//                       event={event}
//                       isDarkMode={isDarkMode}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: idx * 0.1 }}
//                     />
//                   ))}
//                 </div>

//                 {/* Pagination */}
//                 <div className="mt-12 flex justify-center gap-6">
//                   <motion.button
//                     onClick={() => setPage((p) => Math.max(p - 1, 1))}
//                     disabled={page === 1}
//                     className={`px-6 py-3 rounded-full font-semibold text-lg transition-all backdrop-blur-sm ${
//                       isDarkMode
//                         ? "bg-gray-800/80 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]"
//                         : "bg-gray-200/80 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]"
//                     }`}
//                     aria-label="Previous page"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Previous
//                   </motion.button>
//                   <span
//                     className={`flex items-center font-semibold text-lg ${
//                       isDarkMode ? "text-gray-400" : "text-gray-700"
//                     }`}
//                   >
//                     Page {page}
//                   </span>
//                   <motion.button
//                     onClick={() => setPage((p) => p + 1)}
//                     disabled={page * 12 >= total}
//                     className={`px-6 py-3 rounded-full font-semibold text-lg transition-all backdrop-blur-sm ${
//                       isDarkMode
//                         ? "bg-gray-800/80 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]"
//                         : "bg-gray-200/80 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 hover:shadow-[0_0_10px_rgba(255,165,0,0.5)]"
//                     }`}
//                     aria-label="Next page"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Next
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </div>

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

// export default Events;

// Events.jsx (Updated: Updated colors, added skeletons, improved button classes with new palette, added ARIA, rangoli in header, particles color update)
import { useEffect, useState } from "react";
import { getEvents } from "../api";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | upcoming | past
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
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

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        let upcoming =
          filter === "upcoming" ? true : filter === "past" ? false : undefined;

        const response = await getEvents({
          upcoming,
          page,
          limit: 12,
        });

        setEvents(response.events);
        setTotal(response.total);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [filter, page]);

  // Initialize particles.js for header
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("events-particles", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ["#990000", "#FFD700", "#FF9933"] }, // Updated
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

  const buttonClasses = (active) =>
    `px-6 py-3 rounded-full font-semibold text-lg transition-all backdrop-blur-sm ${
      active
        ? "bg-[#990000] text-white shadow-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.7)] hover:bg-[#FF9933]"
        : isDarkMode
        ? "bg-gray-800/80 text-gray-100 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]"
        : "bg-gray-200/80 text-gray-700 hover:bg-gray-300 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]"
    }`;

  return (
    <motion.div
      className={`min-h-screen font-poppins ${
        isDarkMode ? "bg-gray-950" : "bg-gray-100"
      } transition-colors duration-500`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section with Particles */}
      <section
        className="relative text-white min-h-[60vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610085927744-7217728267a6?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="events-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/80 to-[#990000]/50"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />{" "}
        {/* Added pattern */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-12"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Events
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 telugu-text font-medium leading-relaxed ${
              isDarkMode ? "text-gray-100" : "text-white"
            }`}
            lang="te"
          >
            మా సంఘం యొక్క పండుగలు మరియు కార్యక్రమాలను కలిసి ఆనందించండి
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              onClick={() => {
                setFilter("all");
                setPage(1);
              }}
              className={buttonClasses(filter === "all")}
              aria-label="Show all events"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              All Events
            </motion.button>
            <motion.button
              onClick={() => {
                setFilter("upcoming");
                setPage(1);
              }}
              className={buttonClasses(filter === "upcoming")}
              aria-label="Show upcoming events"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Upcoming
            </motion.button>
            <motion.button
              onClick={() => {
                setFilter("past");
                setPage(1);
              }}
              className={buttonClasses(filter === "past")}
              aria-label="Show past events"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Past
            </motion.button>
          </div>

          {/* Events Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {Array(12)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} height={400} className="rounded-xl" />
                ))}
            </div>
          ) : events.length === 0 ? (
            <motion.p
              className={`text-center text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No events found.
            </motion.p>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Events Grid */}
              <div className="lg:w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                  {events.map((event, idx) => (
                    <EventCard
                      key={event._id}
                      event={event}
                      isDarkMode={isDarkMode}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center gap-6">
                  <motion.button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    className={`px-6 py-3 rounded-full font-semibold text-lg transition-all backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-gray-800/80 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                        : "bg-gray-200/80 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                    }`}
                    aria-label="Previous page"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Previous
                  </motion.button>
                  <span
                    className={`flex items-center font-semibold text-lg ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    Page {page}
                  </span>
                  <motion.button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page * 12 >= total}
                    className={`px-6 py-3 rounded-full font-semibold text-lg transition-all backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-gray-800/80 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                        : "bg-gray-200/80 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                    }`}
                    aria-label="Next page"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

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

export default Events;
