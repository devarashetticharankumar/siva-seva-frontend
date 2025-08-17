// import { useEffect, useState } from "react";
// import { getGalleryItems, deleteGalleryItem } from "../api";
// import GalleryItem from "../components/GalleryItem";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// function Gallery() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [isAdmin, setIsAdmin] = useState(false);

//   const [selectedIndex, setSelectedIndex] = useState(null); // for modal

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await getGalleryItems({ page, limit: 24 });
//         setItems(response.items);
//         setTotal(response.total);
//         const user = JSON.parse(localStorage.getItem("user") || "{}");
//         setIsAdmin(user.role === "admin");
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, [page]);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this gallery item?")) {
//       try {
//         await deleteGalleryItem(id);
//         setItems(items.filter((item) => item._id !== id));
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   };

//   const openModal = (index) => {
//     setSelectedIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedIndex(null);
//   };

//   const prevItem = () => {
//     setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
//   };

//   const nextItem = () => {
//     setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
//   };

//   return (
//     <div className="container mx-auto p-4 mt-15">
//       <h1 className="text-3xl font-bold mb-4 text-center">Gallery</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//             {items.map((item, idx) => (
//               <div
//                 key={item._id}
//                 className="relative cursor-pointer overflow-hidden group"
//                 onClick={() => openModal(idx)}
//               >
//                 {item.type === "video" ? (
//                   <video
//                     src={item.url}
//                     className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                   />
//                 ) : (
//                   <img
//                     src={item.url}
//                     alt=""
//                     className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                   />
//                 )}
//                 {isAdmin && (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDelete(item._id);
//                     }}
//                     className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm"
//                   >
//                     Delete
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 flex justify-center">
//             <button
//               onClick={() => setPage(page - 1)}
//               disabled={page === 1}
//               className="p-2 bg-blue-600 text-white rounded mr-2 disabled:bg-gray-400"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => setPage(page + 1)}
//               disabled={page * 24 >= total}
//               className="p-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}

//       {/* Fullscreen modal */}
//       {selectedIndex !== null && (
//         <div className="fixed inset-0 bg-gray-400/70 bg-opacity-90 z-50 flex items-center justify-center">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={closeModal}
//           >
//             <X size={32} />
//           </button>
//           <button
//             className="absolute left-5 text-white text-3xl"
//             onClick={prevItem}
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <button
//             className="absolute right-5 text-white text-3xl"
//             onClick={nextItem}
//           >
//             <ChevronRight size={40} />
//           </button>

//           <div className="max-w-4xl max-h-[90vh]">
//             {items[selectedIndex].type === "video" ? (
//               <video
//                 src={items[selectedIndex].url}
//                 controls
//                 autoPlay
//                 className="max-h-[90vh] w-auto mx-auto"
//               />
//             ) : (
//               <img
//                 src={items[selectedIndex].url}
//                 alt=""
//                 className="max-h-[90vh] w-auto mx-auto"
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Gallery;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { getGalleryItems, deleteGalleryItem } from "../api";
// import GalleryItem from "../components/GalleryItem";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import Masonry from "react-masonry-css";
// import { motion } from "framer-motion";

// function Gallery() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Persistent dark mode
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved) setIsDarkMode(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   // Fetch gallery items
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await getGalleryItems({ page, limit: 24 });
//         setItems(response.items);
//         setTotal(response.total);
//         const user = JSON.parse(localStorage.getItem("user") || "{}");
//         setIsAdmin(user.role === "admin");
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, [page]);

//   // Initialize particles.js for header
//   useEffect(() => {
//     if (window.particlesJS) {
//       window.particlesJS("gallery-particles", {
//         particles: {
//           number: { value: 40, density: { enable: true, value_area: 1000 } },
//           color: { value: ["#FFD700", "#FFFFFF"] },
//           shape: {
//             type: ["circle", "star"],
//             stroke: { width: 0 },
//             polygon: { nb_sides: 5 },
//           },
//           opacity: {
//             value: 0.5,
//             random: true,
//             anim: { enable: true, speed: 0.8 },
//           },
//           size: { value: 3, random: true },
//           move: {
//             enable: true,
//             speed: 1.5,
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
//             repulse: { distance: 80, duration: 0.4 },
//             push: { particles_nb: 3 },
//           },
//         },
//         retina_detect: true,
//       });
//     }
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this gallery item?")) {
//       try {
//         await deleteGalleryItem(id);
//         setItems(items.filter((item) => item._id !== id));
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   };

//   const openModal = (index) => {
//     setSelectedIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedIndex(null);
//   };

//   const prevItem = () => {
//     setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
//   };

//   const nextItem = () => {
//     setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
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
//           backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669863266275-519daef503ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMGdhbmVzaGF8ZW58MHx8MHx8fDA%3D')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div id="gallery-particles" className="absolute inset-0" />
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-red-500/30"></div>
//         <motion.div
//           className="relative z-10 max-w-5xl mx-auto py-10"
//           initial={{ opacity: 0, y: 30, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight drop-shadow-lg">
//             Gallery
//           </h1>
//           <p
//             className={`text-lg md:text-xl telugu-text font-medium ${
//               isDarkMode ? "text-gray-100" : "text-white"
//             } drop-shadow-md`}
//             lang="te"
//           >
//             మా ఊరి పండుగలు మరియు కార్యక్రమాల అందమైన క్షణాలను ఆస్వాదించండి
//           </p>
//         </motion.div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {loading ? (
//           <motion.p
//             className={`text-center text-lg ${
//               isDarkMode ? "text-gray-400" : "text-gray-500"
//             } animate-pulse`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Loading gallery...
//           </motion.p>
//         ) : (
//           <>
//             <Masonry
//               breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
//               className="flex w-auto -ml-3"
//               columnClassName="pl-3 bg-clip-padding"
//             >
//               {items.map((item, idx) => (
//                 <GalleryItem
//                   key={item._id}
//                   item={item}
//                   onDelete={handleDelete}
//                   isAdmin={isAdmin}
//                   onClick={() => openModal(idx)}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: idx * 0.15 }}
//                 />
//               ))}
//             </Masonry>

//             <div className="mt-10 flex justify-center gap-4">
//               <motion.button
//                 onClick={() => setPage(page - 1)}
//                 disabled={page === 1}
//                 className={`px-5 py-2 rounded-full font-semibold text-base transition-all backdrop-blur-sm ${
//                   isDarkMode
//                     ? "bg-gray-800/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_8px_rgba(255,165,0,0.4)]"
//                     : "bg-orange-100/70 text-orange-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-200 hover:shadow-[0_0_8px_rgba(255,165,0,0.4)]"
//                 }`}
//                 aria-label="Previous page"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Previous
//               </motion.button>
//               <span
//                 className={`flex items-center font-semibold text-base ${
//                   isDarkMode ? "text-gray-400" : "text-orange-700"
//                 }`}
//               >
//                 Page {page}
//               </span>
//               <motion.button
//                 onClick={() => setPage(page + 1)}
//                 disabled={page * 24 >= total}
//                 className={`px-5 py-2 rounded-full font-semibold text-base transition-all backdrop-blur-sm ${
//                   isDarkMode
//                     ? "bg-gray-800/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_8px_rgba(255,165,0,0.4)]"
//                     : "bg-orange-100/70 text-orange-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-200 hover:shadow-[0_0_8px_rgba(255,165,0,0.4)]"
//                 }`}
//                 aria-label="Next page"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Next
//               </motion.button>
//             </div>
//           </>
//         )}

//         {/* Fullscreen Modal */}
//         {selectedIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.button
//               className="absolute top-4 right-4 text-white bg-orange-600/70 rounded-full p-2 hover:bg-orange-700 transition-all"
//               onClick={closeModal}
//               aria-label="Close gallery modal"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <X size={28} />
//             </motion.button>
//             <motion.button
//               className="absolute left-4 text-white bg-orange-600/70 rounded-full p-2 hover:bg-orange-700 transition-all"
//               onClick={prevItem}
//               aria-label="Previous item"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ChevronLeft size={36} />
//             </motion.button>
//             <motion.button
//               className="absolute right-4 text-white bg-orange-600/70 rounded-full p-2 hover:bg-orange-700 transition-all"
//               onClick={nextItem}
//               aria-label="Next item"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ChevronRight size={36} />
//             </motion.button>

//             <div className="max-w-5xl max-h-[85vh] p-3">
//               {items[selectedIndex].type === "video" ? (
//                 <video
//                   src={items[selectedIndex].url}
//                   controls
//                   autoPlay
//                   className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-md"
//                   onError={(e) =>
//                     (e.target.src =
//                       "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
//                   }
//                 />
//               ) : (
//                 <img
//                   src={items[selectedIndex].url}
//                   alt={items[selectedIndex].title}
//                   className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-md"
//                   onError={(e) =>
//                     (e.target.src =
//                       "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
//                   }
//                 />
//               )}
//               <div className="mt-3 text-center bg-orange-100/80 backdrop-blur-sm p-3 rounded-lg">
//                 <p className="text-orange-700 text-base font-semibold">
//                   {items[selectedIndex].title}
//                 </p>
//                 {items[selectedIndex].eventRef && (
//                   <p className="text-orange-600 text-sm">
//                     Event: {items[selectedIndex].eventRef.title}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
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

// export default Gallery;

// Gallery.jsx (Updated: Updated colors, added skeletons, rangoli pattern, particles color, Telugu font, improved modal ARIA)
import { useEffect, useState } from "react";
import { getGalleryItems, deleteGalleryItem } from "../api";
import GalleryItem from "../components/GalleryItem";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persistent dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setIsDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Fetch gallery items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getGalleryItems({ page, limit: 24 });
        setItems(response.items);
        setTotal(response.total);
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        setIsAdmin(user.role === "admin");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [page]);

  // Initialize particles.js for header
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("gallery-particles", {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 1000 } },
          color: { value: ["#FFD700", "#FFFFFF"] },
          shape: {
            type: ["circle", "star"],
            stroke: { width: 0 },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.8 },
          },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1.5,
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
            repulse: { distance: 80, duration: 0.4 },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      try {
        await deleteGalleryItem(id);
        setItems(items.filter((item) => item._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevItem = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const nextItem = () => {
    setSelectedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
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
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669863266275-519daef503ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMGdhbmVzaGF8ZW58MHx8MHx8fDA%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="gallery-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/70 to-[#990000]/30"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-10"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 tracking-tight drop-shadow-lg">
            Gallery
          </h1>
          <p
            className={`text-lg md:text-xl telugu-text font-medium leading-relaxed ${
              isDarkMode ? "text-gray-100" : "text-white"
            } drop-shadow-md`}
            lang="te"
          >
            మా ఊరి పండుగలు మరియు కార్యక్రమాల అందమైన క్షణాలను ఆస్వాదించండి
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Array(24)
              .fill(0)
              .map((_, idx) => (
                <Skeleton key={idx} height={224} className="rounded-xl mb-4" />
              ))}
          </div>
        ) : (
          <>
            <Masonry
              breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
              className="flex w-auto -ml-3"
              columnClassName="pl-3 bg-clip-padding"
            >
              {items.map((item, idx) => (
                <GalleryItem
                  key={item._id}
                  item={item}
                  onDelete={handleDelete}
                  isAdmin={isAdmin}
                  onClick={() => openModal(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                />
              ))}
            </Masonry>

            <div className="mt-10 flex justify-center gap-4">
              <motion.button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className={`px-5 py-2 rounded-full font-semibold text-base transition-all backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-gray-800/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                    : "bg-[#FF9933]/20 text-[#990000] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF9933]/30 hover:shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                }`}
                aria-label="Previous page"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
              <span
                className={`flex items-center font-semibold text-base ${
                  isDarkMode ? "text-gray-400" : "text-[#990000]"
                }`}
              >
                Page {page}
              </span>
              <motion.button
                onClick={() => setPage(page + 1)}
                disabled={page * 24 >= total}
                className={`px-5 py-2 rounded-full font-semibold text-base transition-all backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-gray-800/70 text-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 hover:shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                    : "bg-[#FF9933]/20 text-[#990000] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF9933]/30 hover:shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                }`}
                aria-label="Next page"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            </div>
          </>
        )}

        {/* Fullscreen Modal with improved ARIA */}
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            <h2 id="gallery-modal-title" className="sr-only">
              Gallery Item Preview
            </h2>
            <motion.button
              className="absolute top-4 right-4 text-white bg-[#FF9933]/70 rounded-full p-2 hover:bg-[#990000] transition-all"
              onClick={closeModal}
              aria-label="Close gallery preview"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={28} />
            </motion.button>
            <motion.button
              className="absolute left-4 text-white bg-[#FF9933]/70 rounded-full p-2 hover:bg-[#990000] transition-all"
              onClick={prevItem}
              aria-label="Previous gallery item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={36} />
            </motion.button>
            <motion.button
              className="absolute right-4 text-white bg-[#FF9933]/70 rounded-full p-2 hover:bg-[#990000] transition-all"
              onClick={nextItem}
              aria-label="Next gallery item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={36} />
            </motion.button>

            <div className="max-w-5xl max-h-[85vh] p-3">
              {items[selectedIndex].type === "video" ? (
                <video
                  src={items[selectedIndex].url}
                  controls
                  autoPlay
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-md"
                  onError={(e) =>
                    (e.target.src =
                      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
                  }
                  aria-label={`Preview video: ${items[selectedIndex].title}`}
                />
              ) : (
                <img
                  src={items[selectedIndex].url}
                  alt={items[selectedIndex].title || "Gallery image preview"}
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-md"
                  onError={(e) =>
                    (e.target.src =
                      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
                  }
                />
              )}
              <div className="mt-3 text-center bg-[#FF9933]/20 backdrop-blur-sm p-3 rounded-lg">
                <p className="text-[#990000] text-base font-semibold">
                  {items[selectedIndex].title}
                </p>
                {items[selectedIndex].eventRef && (
                  <p className="text-[#990000] text-sm">
                    Event: {items[selectedIndex].eventRef.title}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
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

export default Gallery;
