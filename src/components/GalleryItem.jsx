// function GalleryItem({ item, onDelete, isAdmin }) {
//   return (
//     <div className="relative">
//       {item.type === "image" ? (
//         <img
//           src={item.url}
//           alt={item.title}
//           className="w-full h-48 object-cover rounded-lg"
//         />
//       ) : (
//         <video
//           src={item.url}
//           controls
//           className="w-full h-48 object-cover rounded-lg"
//         />
//       )}
//       {item.title && <p className="text-gray-700 mt-2">{item.title}</p>}
//       {item.eventRef && (
//         <p className="text-gray-600">Event: {item.eventRef.title}</p>
//       )}
//       {isAdmin && (
//         <button
//           onClick={() => onDelete(item._id)}
//           className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// }

// export default GalleryItem;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import VanillaTilt from "vanilla-tilt";

// function GalleryItem({
//   item,
//   onDelete,
//   isAdmin,
//   className = "",
//   ...motionProps
// }) {
//   // Apply tilt effect
//   useEffect(() => {
//     const itemElement = document.querySelectorAll(`.gallery-item-${item._id}`);
//     if (itemElement.length > 0) {
//       VanillaTilt.init(itemElement, {
//         max: 5,
//         speed: 600,
//         glare: true,
//         "max-glare": 0.2,
//       });
//     }
//   }, [item._id]);

//   return (
//     <motion.div
//       className={`gallery-item-${
//         item._id
//       } relative rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-orange-300/50 mb-5 bg-white ${
//         isAdmin ? "bg-gray-800 border-gray-600" : "bg-white border-orange-300"
//       } ${className}`}
//       whileHover={{ scale: 1.03, borderColor: "rgba(255,165,0,1)" }}
//       whileTap={{ scale: 0.98 }}
//       {...motionProps}
//     >
//       {item.type === "image" ? (
//         <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
//           <img
//             src={item.url}
//             alt={item.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             onError={(e) =>
//               (e.target.src =
//                 "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
//             }
//             loading="lazy"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
//         </div>
//       ) : (
//         <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
//           <video
//             src={item.url}
//             controls
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//             onError={(e) =>
//               (e.target.src =
//                 "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
//             }
//             loading="lazy"
//           />
//         </div>
//       )}
//       <div className="p-3">
//         {item.title && (
//           <p
//             className={`text-base font-semibold ${
//               isAdmin ? "text-gray-900" : "text-orange-700"
//             }`}
//           >
//             {item.title}
//           </p>
//         )}
//         {item.eventRef && (
//           <p
//             className={`text-sm ${
//               isAdmin ? "text-gray-600" : "text-gray-600"
//             } mt-1`}
//           >
//             Event: {item.eventRef.title}
//           </p>
//         )}
//       </div>
//       {isAdmin && (
//         <button
//           onClick={() => onDelete(item._id)}
//           className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-red-600 hover:shadow-[0_0_8px_rgba(255,165,0,0.4)] transition-all"
//         >
//           Delete
//         </button>
//       )}
//     </motion.div>
//   );
// }

// export default GalleryItem;

// GalleryItem.jsx (Updated: Added sepia filter, ornate border, updated colors, added alt text, improved accessibility)
import { motion } from "framer-motion";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function GalleryItem({
  item,
  onDelete,
  isAdmin,
  className = "",
  ...motionProps
}) {
  // Apply tilt effect
  useEffect(() => {
    const itemElement = document.querySelectorAll(`.gallery-item-${item._id}`);
    if (itemElement.length > 0) {
      VanillaTilt.init(itemElement, {
        max: 5,
        speed: 600,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, [item._id]);

  return (
    <motion.div
      className={`gallery-item-${
        item._id
      } relative rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border mb-5 bg-white ${
        isAdmin ? "bg-gray-800 border-gray-600" : "bg-white border-[#FF9933]/50"
      } ${className}`}
      whileHover={{ scale: 1.03, borderColor: "rgba(255,215,0,1)" }}
      whileTap={{ scale: 0.98 }}
      {...motionProps}
    >
      {item.type === "image" ? (
        <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
          <img
            src={item.url}
            alt={item.title || "Gallery image"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter sepia-[20%] saturate-[150%]"
            onError={(e) =>
              (e.target.src =
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
            }
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
          <div className="absolute inset-0 border-2 border-[#FFD700]/30 rounded-t-lg pointer-events-none"></div>{" "}
          {/* Ornate border */}
        </div>
      ) : (
        <div className="relative h-48 md:h-56 overflow-hidden rounded-t-lg">
          <video
            src={item.url}
            controls
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter sepia-[20%] saturate-[150%]"
            onError={(e) =>
              (e.target.src =
                "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4")
            }
            loading="lazy"
            aria-label={`Video: ${item.title || "Gallery video"}`}
          />
          <div className="absolute inset-0 border-2 border-[#FFD700]/30 rounded-t-lg pointer-events-none"></div>
        </div>
      )}
      <div className="p-3">
        {item.title && (
          <p
            className={`text-base font-semibold ${
              isAdmin ? "text-gray-900" : "text-[#990000]"
            }`}
          >
            {item.title}
          </p>
        )}
        {item.eventRef && (
          <p
            className={`text-sm ${
              isAdmin ? "text-gray-600" : "text-gray-600"
            } mt-1`}
          >
            Event: {item.eventRef.title}
          </p>
        )}
      </div>
      {isAdmin && (
        <button
          onClick={() => onDelete(item._id)}
          className="absolute top-1 right-1 bg-[#990000] text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-[#FF9933] hover:shadow-[0_0_8px_rgba(255,215,0,0.4)] transition-all"
          aria-label={`Delete gallery item: ${item.title}`}
        >
          Delete
        </button>
      )}
    </motion.div>
  );
}

export default GalleryItem;
