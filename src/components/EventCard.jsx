// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function EventCard({ event, className = "", isDarkMode }) {
//   // Helper: check if media item is video or image
//   const firstMedia = event.media?.[0];
//   const isVideo =
//     firstMedia?.type === "video" ||
//     (firstMedia?.url && /\.(mp4|webm|ogg)$/i.test(firstMedia.url));

//   return (
//     <motion.div
//       className={`group relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border ${
//         isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
//       } ${className}`}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Media Section */}
//       {firstMedia && (
//         <div className="relative h-48 md:h-52 overflow-hidden rounded-t-xl">
//           {isVideo ? (
//             <video
//               src={firstMedia.url}
//               className="w-full h-full object-cover"
//               muted
//               loop
//               playsInline
//               autoPlay
//               controls={false}
//               onError={(e) =>
//                 (e.target.src =
//                   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
//               }
//             />
//           ) : (
//             <img
//               src={firstMedia.url}
//               alt={event.title}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               onError={(e) =>
//                 (e.target.src =
//                   "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
//               }
//             />
//           )}
//           {!isVideo && (
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
//           )}
//           {!isVideo && (
//             <div className="absolute bottom-3 left-4 text-white font-semibold text-lg drop-shadow-md line-clamp-1">
//               {event.title}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Content Section */}
//       <div className="p-4 md:p-5">
//         <div
//           className={`flex justify-between items-center text-sm mb-2 ${
//             isDarkMode ? "text-gray-400" : "text-gray-600"
//           } font-medium`}
//         >
//           <span className="bg-red-100 text-orange-700 px-2 py-0.5 rounded-full">
//             {new Date(event.date).toLocaleDateString(undefined, {
//               month: "short",
//               day: "numeric",
//               year: "numeric",
//             })}
//           </span>
//           <span className="truncate max-w-[60%]">{event.location}</span>
//         </div>

//         <p className={isDarkMode ? "text-gray-400 mb-4" : "text-gray-700 mb-4"}>
//           {event.description.replace(/<[^>]+>/g, "").slice(0, 100)}
//         </p>

//         <Link
//           to={`/events/${event._id}`}
//           className="block w-full text-center bg-orange-600 hover:bg-red-700 text-white py-2 rounded-full font-semibold transition-colors shadow-md"
//         >
//           View Details
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// export default EventCard;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import VanillaTilt from "vanilla-tilt";

// function EventCard({ event, className = "", isDarkMode, ...motionProps }) {
//   // Helper: check if media item is video or image
//   const firstMedia = event.media?.[0];
//   const isVideo =
//     firstMedia?.type === "video" ||
//     (firstMedia?.url && /\.(mp4|webm|ogg)$/i.test(firstMedia.url));

//   // Apply tilt effect
//   useEffect(() => {
//     const card = document.querySelectorAll(`.event-card-${event._id}`);
//     if (card.length > 0) {
//       VanillaTilt.init(card, {
//         max: 10,
//         speed: 400,
//         glare: true,
//         "max-glare": 0.3,
//       });
//     }
//   }, [event._id]);

//   return (
//     <motion.div
//       className={`event-card-${
//         event._id
//       } group relative rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(255,165,0,0.7)] transition-shadow duration-300 overflow-hidden border ${
//         isDarkMode
//           ? "bg-gray-900 border-gray-700"
//           : "bg-white border-orange-200"
//       } ${className}`}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       {...motionProps}
//     >
//       {/* Media Section */}
//       {firstMedia && (
//         <div className="relative h-52 md:h-60 overflow-hidden rounded-t-xl">
//           {isVideo ? (
//             <video
//               src={firstMedia.url}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               muted
//               loop
//               playsInline
//               autoPlay
//               controls={false}
//               onError={(e) =>
//                 (e.target.src =
//                   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
//               }
//             />
//           ) : (
//             <img
//               src={firstMedia.url}
//               alt={event.title}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               onError={(e) =>
//                 (e.target.src =
//                   "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
//               }
//             />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
//           <div className="absolute bottom-4 left-4 text-white font-extrabold text-xl md:text-2xl drop-shadow-lg line-clamp-1">
//             {event.title}
//           </div>
//         </div>
//       )}

//       {/* Content Section */}
//       <div className="p-5">
//         <div
//           className={`flex justify-between items-center text-sm mb-3 ${
//             isDarkMode ? "text-gray-400" : "text-gray-600"
//           } font-medium`}
//         >
//           <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
//             {new Date(event.date).toLocaleDateString(undefined, {
//               month: "short",
//               day: "numeric",
//               year: "numeric",
//             })}
//           </span>
//           <span className="truncate max-w-[60%]">{event.location}</span>
//         </div>

//         <p
//           className={`mb-4 ${
//             isDarkMode ? "text-gray-400" : "text-gray-700"
//           } font-medium`}
//         >
//           {event.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
//         </p>

//         <Link
//           to={`/events/${event._id}`}
//           className="block w-full text-center bg-orange-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold text-lg transition-colors shadow-md hover:shadow-[0_0_15px_rgba(255,165,0,0.7)]"
//         >
//           View Details
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// export default EventCard;

// EventCard.jsx (Updated: Added sepia filter, ornate border with gold, updated colors, added alt text, improved accessibility)
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function EventCard({ event, className = "", isDarkMode, ...motionProps }) {
  // Helper: check if media item is video or image
  const firstMedia = event.media?.[0];
  const isVideo =
    firstMedia?.type === "video" ||
    (firstMedia?.url && /\.(mp4|webm|ogg)$/i.test(firstMedia.url));

  // Apply tilt effect
  useEffect(() => {
    const card = document.querySelectorAll(`.event-card-${event._id}`);
    if (card.length > 0) {
      VanillaTilt.init(card, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, [event._id]);

  return (
    <motion.div
      className={`event-card-${
        event._id
      } group relative rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.7)] transition-shadow duration-300 overflow-hidden border ${
        isDarkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-[#FF9933]/20"
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...motionProps}
    >
      {/* Media Section */}
      {firstMedia && (
        <div className="relative h-52 md:h-60 overflow-hidden rounded-t-xl">
          {isVideo ? (
            <video
              src={firstMedia.url}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 filter sepia-[20%] saturate-[150%]"
              muted
              loop
              playsInline
              autoPlay
              controls={false}
              onError={(e) =>
                (e.target.src =
                  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
              }
              aria-label={`Video for event: ${event.title}`}
            />
          ) : (
            <img
              src={firstMedia.url}
              alt={`Image for event: ${event.title}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 filter sepia-[20%] saturate-[150%]"
              onError={(e) =>
                (e.target.src =
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
              }
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
          <div className="absolute bottom-4 left-4 text-white font-extrabold text-xl md:text-2xl drop-shadow-lg line-clamp-1">
            {event.title}
          </div>
          <div className="absolute inset-0 border-2 border-[#FFD700]/30 rounded-xl pointer-events-none"></div>{" "}
          {/* Ornate border */}
        </div>
      )}

      {/* Content Section */}
      <div className="p-5">
        <div
          className={`flex justify-between items-center text-sm mb-3 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } font-medium`}
        >
          <span className="bg-[#FF9933]/20 text-[#990000] px-3 py-1 rounded-full">
            {new Date(event.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="truncate max-w-[60%]">{event.location}</span>
        </div>

        <p
          className={`mb-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          } font-medium line-clamp-3`} // Improved readability with line-clamp
        >
          {event.description.replace(/<[^>]+>/g, "").slice(0, 100)}...
        </p>

        <Link
          to={`/events/${event._id}`}
          className="block w-full text-center bg-[#FF9933] hover:bg-[#990000] text-white py-3 rounded-full font-semibold text-lg transition-colors shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default EventCard;
