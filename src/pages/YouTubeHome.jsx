// import React, { useState, useEffect } from "react";
// import { formatDistanceToNow } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   HiArrowLeft,
//   HiX,
//   HiChevronLeft,
//   HiChevronRight,
// } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const YouTubeHome = () => {
//   const [videos, setVideos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [prevPageToken, setPrevPageToken] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

//   const API_KEY = "AIzaSyCh74rye_2wrFfhpSxXi9vx0-SB4XN7e0E";
//   const CHANNEL_ID = "UCElGoKc830nI-SAyvCkNlIA";

//   const fetchVideos = async (query = "", pageToken = "") => {
//     try {
//       setLoading(true);
//       setError(null);

//       const endpoint = query
//         ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(
//             query
//           )}&type=video&channelId=${CHANNEL_ID}&key=${API_KEY}&pageToken=${pageToken}`
//         : `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&channelId=${CHANNEL_ID}&order=date&key=${API_KEY}&pageToken=${pageToken}`;

//       const response = await fetch(endpoint);
//       const data = await response.json();

//       if (data.items) {
//         const videoIds = data.items.map((item) => item.id.videoId).join(",");

//         const statsRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
//         );
//         const statsData = await statsRes.json();

//         const statsMap = {};
//         if (statsData.items) {
//           statsData.items.forEach((statItem) => {
//             statsMap[statItem.id] = statItem.statistics;
//           });
//         }

//         const itemsWithStats = data.items.map((item) => ({
//           ...item,
//           statistics: statsMap[item.id.videoId] || {},
//         }));

//         setVideos(itemsWithStats);
//         setNextPageToken(data.nextPageToken || null);
//         setPrevPageToken(data.prevPageToken || null);
//       } else {
//         throw new Error("No videos found");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim() !== "") {
//       setCurrentPage(1);
//       fetchVideos(searchTerm);
//       setSelectedVideoIndex(null);
//     }
//   };

//   const handleNextPage = () => {
//     if (nextPageToken) {
//       setCurrentPage((prev) => prev + 1);
//       fetchVideos(searchTerm, nextPageToken);
//       setSelectedVideoIndex(null);
//     }
//   };

//   const handlePrevPage = () => {
//     if (prevPageToken) {
//       setCurrentPage((prev) => Math.max(prev - 1, 1));
//       fetchVideos(searchTerm, prevPageToken);
//       setSelectedVideoIndex(null);
//     }
//   };

//   const formatViews = (views) => {
//     if (!views) return "0";
//     if (views >= 1000000) {
//       return (views / 1000000).toFixed(1) + "M";
//     } else if (views >= 1000) {
//       return (views / 1000).toFixed(1) + "K";
//     }
//     return views;
//   };

//   const openVideoPopup = (index) => {
//     setSelectedVideoIndex(index);
//   };

//   const closePopup = () => {
//     setSelectedVideoIndex(null);
//   };

//   const popupPrevVideo = () => {
//     setSelectedVideoIndex((prev) =>
//       prev === 0 ? videos.length - 1 : prev - 1
//     );
//   };

//   const popupNextVideo = () => {
//     setSelectedVideoIndex((prev) =>
//       prev === videos.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <motion.div
//       className="min-h-screen font-poppins bg-gray-100 transition-colors duration-500"
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
//           <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
//             YouTube Videos
//           </h1>

//           {/* Search Bar */}
//           <form
//             onSubmit={handleSearch}
//             className="flex items-center justify-center mb-8 space-x-2 max-w-md mx-auto"
//           >
//             <input
//               type="text"
//               placeholder="Search videos..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-100 text-gray-900 transition-all duration-300"
//             />
//             <motion.button
//               type="submit"
//               className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-md"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Search
//             </motion.button>
//           </form>

//           {/* Loading and Error States */}
//           {loading && (
//             <motion.p
//               className="text-center text-lg text-gray-500 animate-pulse"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading...
//             </motion.p>
//           )}
//           {error && (
//             <motion.p
//               className="text-center text-lg text-red-600"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Error: {error}
//             </motion.p>
//           )}

//           {/* Video Grid */}
//           {!loading && !error && (
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//               {videos.map((video, idx) => (
//                 <motion.div
//                   key={video.id.videoId || video.id}
//                   className="video-card rounded-lg shadow-lg bg-white overflow-hidden cursor-pointer"
//                   onClick={() => openVideoPopup(idx)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 >
//                   <iframe
//                     width="100%"
//                     height="200"
//                     src={`https://www.youtube.com/embed/${
//                       video.id.videoId || video.id
//                     }`}
//                     title={video.snippet.title}
//                     className="rounded-t-lg"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                   <div className="p-4">
//                     <h4 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">
//                       {video.snippet.title}
//                     </h4>
//                     <p className="text-base font-semibold text-gray-600">
//                       {video.snippet.channelTitle}
//                     </p>
//                     <div className="mt-2 text-sm text-gray-500 flex gap-2">
//                       <p>{formatViews(video.statistics?.viewCount)} views</p>
//                       <p>
//                         {formatDistanceToNow(
//                           new Date(video.snippet.publishedAt),
//                           { addSuffix: true }
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {!loading && !error && (
//             <div className="mt-8 flex justify-center gap-4 items-center">
//               <motion.button
//                 onClick={handlePrevPage}
//                 disabled={!prevPageToken}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Previous
//               </motion.button>
//               <span className="flex items-center font-semibold text-gray-700">
//                 Page {currentPage}
//               </span>
//               <motion.button
//                 onClick={handleNextPage}
//                 disabled={!nextPageToken}
//                 className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Next
//               </motion.button>
//             </div>
//           )}
//         </motion.div>
//       </div>

//       {/* Video Popup Modal */}
//       <AnimatePresence>
//         {selectedVideoIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={closePopup}
//           >
//             <motion.div
//               className="relative max-w-4xl w-full p-6 bg-white rounded-lg shadow-xl"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.button
//                 onClick={closePopup}
//                 className="absolute top-4 right-4 text-gray-700 hover:text-red-600"
//                 aria-label="Close"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <HiX size={32} />
//               </motion.button>
//               <motion.button
//                 onClick={popupPrevVideo}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
//                 aria-label="Previous video"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <HiChevronLeft size={48} />
//               </motion.button>
//               <motion.button
//                 onClick={popupNextVideo}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
//                 aria-label="Next video"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <HiChevronRight size={48} />
//               </motion.button>
//               <iframe
//                 width="100%"
//                 height="480"
//                 src={`https://www.youtube.com/embed/${
//                   videos[selectedVideoIndex].id.videoId ||
//                   videos[selectedVideoIndex].id
//                 }?autoplay=1`}
//                 title={videos[selectedVideoIndex].snippet.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="rounded-lg"
//               ></iframe>
//               <h3 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
//                 {videos[selectedVideoIndex].snippet.title}
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 {videos[selectedVideoIndex].snippet.channelTitle}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

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
// };

// export default YouTubeHome;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { formatDistanceToNow } from "date-fns";
// import { motion, AnimatePresence } from "framer-motion";
// import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import Masonry from "react-masonry-css";
// import VanillaTilt from "vanilla-tilt";

// const YouTubeHome = () => {
//   const [videos, setVideos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [nextPageToken, setNextPageToken] = useState(null);
//   const [prevPageToken, setPrevPageToken] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const API_KEY = "AIzaSyCh74rye_2wrFfhpSxXi9vx0-SB4XN7e0E";
//   const CHANNEL_ID = "UCElGoKc830nI-SAyvCkNlIA";

//   // Persistent dark mode
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved) setIsDarkMode(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   // Initialize particles.js for header
//   useEffect(() => {
//     if (window.particlesJS) {
//       window.particlesJS("youtube-particles", {
//         particles: {
//           number: { value: 30, density: { enable: true, value_area: 1200 } },
//           color: { value: ["#FFD700", "#FFFFFF"] },
//           shape: {
//             type: ["circle", "star"],
//             stroke: { width: 0 },
//             polygon: { nb_sides: 5 },
//           },
//           opacity: {
//             value: 0.4,
//             random: true,
//             anim: { enable: true, speed: 0.6 },
//           },
//           size: { value: 2.5, random: true },
//           move: {
//             enable: true,
//             speed: 1,
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
//             repulse: { distance: 80, duration: 0.3 },
//             push: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//       });
//     }
//   }, []);

//   const fetchVideos = async (query = "", pageToken = "") => {
//     try {
//       setLoading(true);
//       setError(null);

//       const endpoint = query
//         ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(
//             query
//           )}&type=video&channelId=${CHANNEL_ID}&key=${API_KEY}&pageToken=${pageToken}`
//         : `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&channelId=${CHANNEL_ID}&order=date&key=${API_KEY}&pageToken=${pageToken}`;

//       const response = await fetch(endpoint);
//       const data = await response.json();

//       if (data.items) {
//         const videoIds = data.items.map((item) => item.id.videoId).join(",");

//         const statsRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
//         );
//         const statsData = await statsRes.json();

//         const statsMap = {};
//         if (statsData.items) {
//           statsData.items.forEach((statItem) => {
//             statsMap[statItem.id] = statItem.statistics;
//           });
//         }

//         const itemsWithStats = data.items.map((item) => ({
//           ...item,
//           statistics: statsMap[item.id.videoId] || {},
//         }));

//         setVideos(itemsWithStats);
//         setNextPageToken(data.nextPageToken || null);
//         setPrevPageToken(data.prevPageToken || null);
//       } else {
//         throw new Error("No videos found");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim() !== "") {
//       setCurrentPage(1);
//       fetchVideos(searchTerm);
//       setSelectedVideoIndex(null);
//     }
//   };

//   const handleNextPage = () => {
//     if (nextPageToken) {
//       setCurrentPage((prev) => prev + 1);
//       fetchVideos(searchTerm, nextPageToken);
//       setSelectedVideoIndex(null);
//     }
//   };

//   const handlePrevPage = () => {
//     if (prevPageToken) {
//       setCurrentPage((prev) => Math.max(prev - 1, 1));
//       fetchVideos(searchTerm, prevPageToken);
//       setSelectedVideoIndex(null);
//     }
//   };

//   const formatViews = (views) => {
//     if (!views) return "0";
//     if (views >= 1000000) {
//       return (views / 1000000).toFixed(1) + "M";
//     } else if (views >= 1000) {
//       return (views / 1000).toFixed(1) + "K";
//     }
//     return views;
//   };

//   const openVideoPopup = (index) => {
//     setSelectedVideoIndex(index);
//   };

//   const closePopup = () => {
//     setSelectedVideoIndex(null);
//   };

//   const popupPrevVideo = () => {
//     setSelectedVideoIndex((prev) =>
//       prev === 0 ? videos.length - 1 : prev - 1
//     );
//   };

//   const popupNextVideo = () => {
//     setSelectedVideoIndex((prev) =>
//       prev === videos.length - 1 ? 0 : prev + 1
//     );
//   };

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
//         className="relative text-white min-h-[50vh] flex items-center justify-center bg-fixed px-4 text-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1608501076189-c7ae200b54e9?q=80&w=2070&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div id="youtube-particles" className="absolute inset-0" />
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 to-red-500/20"></div>
//         <motion.div
//           className="relative z-10 max-w-5xl mx-auto py-10"
//           initial={{ opacity: 0, y: 30, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
//             YouTube Videos
//           </h1>
//           <p
//             className={`text-xl md:text-2xl telugu-text font-medium ${
//               isDarkMode ? "text-gray-100" : "text-white"
//             } drop-shadow-md`}
//             lang="te"
//           >
//             మా ఊరి పండుగలు మరియు కార్యక్రమాల వీడియోలను ఆస్వాదించండి
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Search Bar */}
//           <form
//             onSubmit={handleSearch}
//             className="flex items-center justify-center mb-10 space-x-3 max-w-lg mx-auto"
//           >
//             <input
//               type="text"
//               placeholder="వీడియోలను వెతకండి..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className={`w-full px-4 py-2 text-base ${
//                 isDarkMode
//                   ? "bg-gray-800 text-gray-100 border-gray-600"
//                   : "bg-white text-gray-900 border-orange-300"
//               } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm transition-all duration-300`}
//             />
//             <motion.button
//               type="submit"
//               className={`px-5 py-2 text-base font-semibold ${
//                 isDarkMode
//                   ? "bg-gray-700 text-gray-100"
//                   : "bg-orange-500 text-white"
//               } rounded-lg hover:bg-orange-600 hover:shadow-[0_0_6px_rgba(255,165,0,0.3)] transition-all`}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Search
//             </motion.button>
//           </form>

//           {/* Loading and Error States */}
//           {loading && (
//             <motion.p
//               className={`text-center text-lg ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               } animate-pulse`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Loading...
//             </motion.p>
//           )}
//           {error && (
//             <motion.p
//               className={`text-center text-lg ${
//                 isDarkMode ? "text-red-400" : "text-red-500"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Error: {error}
//             </motion.p>
//           )}

//           {/* Video Grid */}
//           {!loading && !error && (
//             <Masonry
//               breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
//               className="flex w-auto -ml-3"
//               columnClassName="pl-3 bg-clip-padding"
//             >
//               {videos.map((video, idx) => (
//                 <motion.div
//                   key={video.id.videoId || video.id}
//                   className={`video-card-${
//                     video.id.videoId || video.id
//                   } rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border min-h-[300px] max-h-[300px] flex flex-col mb-5 ${
//                     isDarkMode
//                       ? "bg-gray-800 border-gray-600"
//                       : "bg-white border-orange-300"
//                   }`}
//                   onClick={() => openVideoPopup(idx)}
//                   whileHover={{ scale: 1.02, borderColor: "rgba(255,165,0,1)" }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: idx * 0.1 }}
//                 >
//                   <div className="relative h-50 overflow-hidden rounded-t-lg">
//                     <iframe
//                       width="100%"
//                       height="100%"
//                       src={`https://www.youtube.com/embed/${
//                         video.id.videoId || video.id
//                       }`}
//                       title={video.snippet.title}
//                       className="rounded-t-lg"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       loading="lazy"
//                     ></iframe>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50 group-hover:opacity-60 transition-opacity"></div>
//                   </div>
//                   <div className="p-3 flex-1 flex flex-col">
//                     <h4
//                       className={`text-sm font-semibold ${
//                         isDarkMode ? "text-gray-100" : "text-orange-600"
//                       } line-clamp-2 mb-1`}
//                     >
//                       {video.snippet.title}
//                     </h4>
//                     <p
//                       className={`text-xs ${
//                         isDarkMode ? "text-gray-400" : "text-gray-600"
//                       } line-clamp-1`}
//                     >
//                       {video.snippet.channelTitle}
//                     </p>
//                     <div
//                       className={`mt-2 text-xs flex gap-2 ${
//                         isDarkMode ? "text-gray-400" : "text-gray-500"
//                       }`}
//                     >
//                       <p>{formatViews(video.statistics?.viewCount)} views</p>
//                       <p>
//                         {formatDistanceToNow(
//                           new Date(video.snippet.publishedAt),
//                           { addSuffix: true }
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </Masonry>
//           )}

//           {/* Pagination */}
//           {!loading && !error && (
//             <div className="mt-10 flex justify-center gap-4 items-center">
//               <motion.button
//                 onClick={handlePrevPage}
//                 disabled={!prevPageToken}
//                 className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
//                   isDarkMode
//                     ? "bg-gray-700/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 hover:shadow-[0_0_6px_rgba(255,165,0,0.3)]"
//                     : "bg-orange-100/70 text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-200 hover:shadow-[0_0_6px_rgba(255,165,0,0.3)]"
//                 }`}
//                 aria-label="Previous page"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 Previous
//               </motion.button>
//               <span
//                 className={`flex items-center font-semibold text-sm ${
//                   isDarkMode ? "text-gray-400" : "text-orange-600"
//                 }`}
//               >
//                 Page {currentPage}
//               </span>
//               <motion.button
//                 onClick={handleNextPage}
//                 disabled={!nextPageToken}
//                 className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
//                   isDarkMode
//                     ? "bg-gray-700/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 hover:shadow-[0_0_6px_rgba(255,165,0,0.3)]"
//                     : "bg-orange-100/70 text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-200 hover:shadow-[0_0_6px_rgba(255,165,0,0.3)]"
//                 }`}
//                 aria-label="Next page"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 Next
//               </motion.button>
//             </div>
//           )}
//         </motion.div>
//       </div>

//       {/* Video Popup Modal */}
//       <AnimatePresence>
//         {selectedVideoIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={closePopup}
//           >
//             <motion.div
//               className={`relative max-w-4xl w-full p-4 ${
//                 isDarkMode ? "bg-gray-800" : "bg-white"
//               } rounded-lg shadow-md`}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.button
//                 onClick={closePopup}
//                 className={`absolute top-2 right-2 ${
//                   isDarkMode
//                     ? "text-gray-100 bg-gray-700/70"
//                     : "text-white bg-orange-500/70"
//                 } rounded-full p-1.5 hover:bg-orange-600 transition-all`}
//                 aria-label="Close video modal"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <HiX size={24} />
//               </motion.button>
//               <motion.button
//                 onClick={popupPrevVideo}
//                 className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
//                   isDarkMode
//                     ? "text-gray-100 bg-gray-700/70"
//                     : "text-white bg-orange-500/70"
//                 } rounded-full p-1.5 hover:bg-orange-600 transition-all`}
//                 aria-label="Previous video"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <HiChevronLeft size={32} />
//               </motion.button>
//               <motion.button
//                 onClick={popupNextVideo}
//                 className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
//                   isDarkMode
//                     ? "text-gray-100 bg-gray-700/70"
//                     : "text-white bg-orange-500/70"
//                 } rounded-full p-1.5 hover:bg-orange-600 transition-all`}
//                 aria-label="Next video"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <HiChevronRight size={32} />
//               </motion.button>
//               <iframe
//                 width="100%"
//                 height="400"
//                 src={`https://www.youtube.com/embed/${
//                   videos[selectedVideoIndex].id.videoId ||
//                   videos[selectedVideoIndex].id
//                 }?autoplay=1`}
//                 title={videos[selectedVideoIndex].snippet.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="rounded-lg"
//                 loading="lazy"
//               ></iframe>
//               <div
//                 className={`mt-3 p-2 ${
//                   isDarkMode ? "bg-gray-700/70" : "bg-orange-100/70"
//                 } rounded-lg backdrop-blur-sm`}
//               >
//                 <h3
//                   className={`text-sm font-semibold ${
//                     isDarkMode ? "text-gray-100" : "text-orange-600"
//                   } line-clamp-2`}
//                 >
//                   {videos[selectedVideoIndex].snippet.title}
//                 </h3>
//                 <p
//                   className={`text-xs ${
//                     isDarkMode ? "text-gray-400" : "text-gray-600"
//                   } mb-1`}
//                 >
//                   {videos[selectedVideoIndex].snippet.channelTitle}
//                 </p>
//                 <div
//                   className={`text-xs flex gap-2 ${
//                     isDarkMode ? "text-gray-400" : "text-gray-500"
//                   }`}
//                 >
//                   <p>
//                     {formatViews(
//                       videos[selectedVideoIndex].statistics?.viewCount
//                     )}{" "}
//                     views
//                   </p>
//                   <p>
//                     {formatDistanceToNow(
//                       new Date(videos[selectedVideoIndex].snippet.publishedAt),
//                       { addSuffix: true }
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style>
//         {`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .video-card {
//             display: flex;
//             flex-direction: column;
//             height: 300px;
//           }
//         `}
//       </style>
//     </motion.div>
//   );
// };

// export default YouTubeHome;

// YouTubeHome.jsx (Updated: Updated colors, added skeletons, rangoli pattern, particles update, Telugu font, improved modal ARIA and accessibility)
import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Masonry from "react-masonry-css";
import VanillaTilt from "vanilla-tilt";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const YouTubeHome = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const API_KEY = "AIzaSyCh74rye_2wrFfhpSxXi9vx0-SB4XN7e0E";
  const CHANNEL_ID = "UCElGoKc830nI-SAyvCkNlIA";

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
      window.particlesJS("youtube-particles", {
        particles: {
          number: { value: 30, density: { enable: true, value_area: 1200 } },
          color: { value: ["#FFD700", "#FFFFFF"] },
          shape: {
            type: ["circle", "star"],
            stroke: { width: 0 },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: { enable: true, speed: 0.6 },
          },
          size: { value: 2.5, random: true },
          move: {
            enable: true,
            speed: 1,
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
            repulse: { distance: 80, duration: 0.3 },
            push: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  const fetchVideos = async (query = "", pageToken = "") => {
    try {
      setLoading(true);
      setError(null);

      const endpoint = query
        ? `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(
            query
          )}&type=video&channelId=${CHANNEL_ID}&key=${API_KEY}&pageToken=${pageToken}`
        : `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&channelId=${CHANNEL_ID}&order=date&key=${API_KEY}&pageToken=${pageToken}`;

      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.items) {
        const videoIds = data.items.map((item) => item.id.videoId).join(",");

        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
        );
        const statsData = await statsRes.json();

        const statsMap = {};
        if (statsData.items) {
          statsData.items.forEach((statItem) => {
            statsMap[statItem.id] = statItem.statistics;
          });
        }

        const itemsWithStats = data.items.map((item) => ({
          ...item,
          statistics: statsMap[item.id.videoId] || {},
        }));

        setVideos(itemsWithStats);
        setNextPageToken(data.nextPageToken || null);
        setPrevPageToken(data.prevPageToken || null);
      } else {
        throw new Error("No videos found");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setCurrentPage(1);
      fetchVideos(searchTerm);
      setSelectedVideoIndex(null);
    }
  };

  const handleNextPage = () => {
    if (nextPageToken) {
      setCurrentPage((prev) => prev + 1);
      fetchVideos(searchTerm, nextPageToken);
      setSelectedVideoIndex(null);
    }
  };

  const handlePrevPage = () => {
    if (prevPageToken) {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      fetchVideos(searchTerm, prevPageToken);
      setSelectedVideoIndex(null);
    }
  };

  const formatViews = (views) => {
    if (!views) return "0";
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    }
    return views;
  };

  const openVideoPopup = (index) => {
    setSelectedVideoIndex(index);
  };

  const closePopup = () => {
    setSelectedVideoIndex(null);
  };

  const popupPrevVideo = () => {
    setSelectedVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const popupNextVideo = () => {
    setSelectedVideoIndex((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

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
        className="relative text-white min-h-[50vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1608501076189-c7ae200b54e9?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="youtube-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/60 to-[#990000]/20"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-10"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            YouTube Videos
          </h1>
          <p
            className={`text-xl md:text-2xl telugu-text font-medium leading-relaxed ${
              isDarkMode ? "text-gray-100" : "text-white"
            } drop-shadow-md`}
            lang="te"
          >
            మా ఊరి పండుగలు మరియు కార్యక్రమాల వీడియోలను ఆస్వాదించండి
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center mb-10 space-x-3 max-w-lg mx-auto"
          >
            <input
              type="text"
              placeholder="వీడియోలను వెతకండి..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 py-2 text-base ${
                isDarkMode
                  ? "bg-gray-800 text-gray-100 border-gray-600"
                  : "bg-white text-gray-900 border-[#FF9933]/30"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] shadow-sm transition-all duration-300`}
              aria-label="Search YouTube videos"
            />
            <motion.button
              type="submit"
              className={`px-5 py-2 text-base font-semibold ${
                isDarkMode
                  ? "bg-gray-700 text-gray-100"
                  : "bg-[#FF9933] text-white"
              } rounded-lg hover:bg-[#990000] hover:shadow-[0_0_6px_rgba(255,215,0,0.3)] transition-all`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Search
            </motion.button>
          </form>

          {/* Loading and Error States */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Array(20)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton
                    key={idx}
                    height={300}
                    className="rounded-lg mb-5"
                  />
                ))}
            </div>
          )}
          {error && (
            <motion.p
              className={`text-center text-lg ${
                isDarkMode ? "text-red-400" : "text-[#990000]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Error: {error}
            </motion.p>
          )}

          {/* Video Grid */}
          {!loading && !error && (
            <Masonry
              breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
              className="flex w-auto -ml-3"
              columnClassName="pl-3 bg-clip-padding"
            >
              {videos.map((video, idx) => (
                <motion.div
                  key={video.id.videoId || video.id}
                  className={`video-card-${
                    video.id.videoId || video.id
                  } rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border min-h-[300px] max-h-[300px] flex flex-col mb-5 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-[#FF9933]/50"
                  }`}
                  onClick={() => openVideoPopup(idx)}
                  whileHover={{ scale: 1.02, borderColor: "rgba(255,215,0,1)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="relative h-50 overflow-hidden rounded-t-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${
                        video.id.videoId || video.id
                      }`}
                      title={video.snippet.title}
                      className="rounded-t-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50 group-hover:opacity-60 transition-opacity"></div>
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <h4
                      className={`text-sm font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-[#990000]"
                      } line-clamp-2 mb-1`}
                    >
                      {video.snippet.title}
                    </h4>
                    <p
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      } line-clamp-1`}
                    >
                      {video.snippet.channelTitle}
                    </p>
                    <div
                      className={`mt-2 text-xs flex gap-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <p>{formatViews(video.statistics?.viewCount)} views</p>
                      <p>
                        {formatDistanceToNow(
                          new Date(video.snippet.publishedAt),
                          { addSuffix: true }
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          )}

          {/* Pagination */}
          {!loading && !error && (
            <div className="mt-10 flex justify-center gap-4 items-center">
              <motion.button
                onClick={handlePrevPage}
                disabled={!prevPageToken}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  isDarkMode
                    ? "bg-gray-700/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 hover:shadow-[0_0_6px_rgba(255,215,0,0.3)]"
                    : "bg-[#FF9933]/20 text-[#990000] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF9933]/30 hover:shadow-[0_0_6px_rgba(255,215,0,0.3)]"
                }`}
                aria-label="Previous page"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Previous
              </motion.button>
              <span
                className={`flex items-center font-semibold text-sm ${
                  isDarkMode ? "text-gray-400" : "text-[#990000]"
                }`}
              >
                Page {currentPage}
              </span>
              <motion.button
                onClick={handleNextPage}
                disabled={!nextPageToken}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                  isDarkMode
                    ? "bg-gray-700/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 hover:shadow-[0_0_6px_rgba(255,215,0,0.3)]"
                    : "bg-[#FF9933]/20 text-[#990000] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF9933]/30 hover:shadow-[0_0_6px_rgba(255,215,0,0.3)]"
                }`}
                aria-label="Next page"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Next
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {selectedVideoIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePopup}
            role="dialog"
            aria-modal="true"
            aria-labelledby="youtube-modal-title"
          >
            <h2 id="youtube-modal-title" className="sr-only">
              YouTube Video Preview
            </h2>
            <motion.div
              className={`relative max-w-4xl w-full p-4 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-md`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closePopup}
                className={`absolute top-2 right-2 ${
                  isDarkMode
                    ? "text-gray-100 bg-gray-700/70"
                    : "text-white bg-[#FF9933]/70"
                } rounded-full p-1.5 hover:bg-[#990000] transition-all`}
                aria-label="Close video preview"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiX size={24} />
              </motion.button>
              <motion.button
                onClick={popupPrevVideo}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode
                    ? "text-gray-100 bg-gray-700/70"
                    : "text-white bg-[#FF9933]/70"
                } rounded-full p-1.5 hover:bg-[#990000] transition-all`}
                aria-label="Previous video"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiChevronLeft size={32} />
              </motion.button>
              <motion.button
                onClick={popupNextVideo}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                  isDarkMode
                    ? "text-gray-100 bg-gray-700/70"
                    : "text-white bg-[#FF9933]/70"
                } rounded-full p-1.5 hover:bg-[#990000] transition-all`}
                aria-label="Next video"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiChevronRight size={32} />
              </motion.button>
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${
                  videos[selectedVideoIndex].id.videoId ||
                  videos[selectedVideoIndex].id
                }?autoplay=1`}
                title={videos[selectedVideoIndex].snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                loading="lazy"
              ></iframe>
              <div
                className={`mt-3 p-2 ${
                  isDarkMode ? "bg-gray-700/70" : "bg-[#FF9933]/20"
                } rounded-lg backdrop-blur-sm`}
              >
                <h3
                  className={`text-sm font-semibold ${
                    isDarkMode ? "text-gray-100" : "text-[#990000]"
                  } line-clamp-2`}
                >
                  {videos[selectedVideoIndex].snippet.title}
                </h3>
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-1`}
                >
                  {videos[selectedVideoIndex].snippet.channelTitle}
                </p>
                <div
                  className={`text-xs flex gap-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <p>
                    {formatViews(
                      videos[selectedVideoIndex].statistics?.viewCount
                    )}{" "}
                    views
                  </p>
                  <p>
                    {formatDistanceToNow(
                      new Date(videos[selectedVideoIndex].snippet.publishedAt),
                      { addSuffix: true }
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          .video-card {
            display: flex;
            flex-direction: column;
            height: 300px;
          }
        `}
      </style>
    </motion.div>
  );
};

export default YouTubeHome;
