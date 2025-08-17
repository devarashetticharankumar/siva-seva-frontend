// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getEventById, updateEvent } from "../api";

// function EditEvent() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     visibility: "public",
//     media: [],
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await getEventById(id);
//         setFormData({
//           title: response.title,
//           description: response.description,
//           date: response.date.split("T")[0],
//           location: response.location || "",
//           visibility: response.visibility,
//           media: [],
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   const handleChange = (e) => {
//     if (e.target.name === "media") {
//       setFormData({ ...formData, media: Array.from(e.target.files) });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateEvent(id, formData);
//       navigate(`/events/${id}`);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Edit Event</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       <div className="max-w-md mx-auto">
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Title"
//             className="w-full p-2 border rounded"
//           />
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Description"
//             className="w-full p-2 border rounded"
//             rows="5"
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Location"
//             className="w-full p-2 border rounded"
//           />
//           <select
//             name="visibility"
//             value={formData.visibility}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="public">Public</option>
//             <option value="private">Private</option>
//           </select>
//           <input
//             type="file"
//             name="media"
//             multiple
//             accept="image/jpeg,image/png,video/mp4"
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditEvent;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getEventById, updateEvent } from "../api";

// export default function EditEvent() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     visibility: "public",
//     media: [],
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const data = await getEventById(id);
//         setFormData({
//           title: data.title,
//           description: data.description,
//           date: data.date?.split("T")[0] || "",
//           location: data.location || "",
//           visibility: data.visibility || "public",
//           media: [],
//         });
//       } catch (err) {
//         setError(err.message || "Failed to load event");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "media") {
//       setFormData((prev) => ({ ...prev, media: Array.from(files) }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateEvent(id, formData);
//       navigate(`/events/${id}`);
//     } catch (err) {
//       setError(err.message || "Failed to update event");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <p className="text-gray-500">Loading event...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Event</h1>

//       {error && (
//         <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Enter event title"
//             className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Write event details..."
//             rows={4}
//             className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Location
//           </label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Event location"
//             className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Visibility
//           </label>
//           <select
//             name="visibility"
//             value={formData.visibility}
//             onChange={handleChange}
//             className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
//           >
//             <option value="public">Public</option>
//             <option value="private">Private</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Media (Images/Videos)
//           </label>
//           <input
//             type="file"
//             name="media"
//             multiple
//             accept="image/jpeg,image/png,video/mp4"
//             onChange={handleChange}
//             className="mt-1 block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />
//         </div>

//         <div className="pt-4 flex justify-end">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Update Event
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { getEventById, updateEvent } from "../api";
// import { toast } from "react-toastify";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";

// export default function EditEvent() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     visibility: "public",
//     media: [],
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

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
//       window.particlesJS("edit-event-particles", {
//         particles: {
//           number: { value: 15, density: { enable: true, value_area: 1500 } },
//           color: { value: "#FFFFFF" },
//           shape: { type: "circle", stroke: { width: 0 } },
//           opacity: {
//             value: 0.3,
//             random: true,
//             anim: { enable: true, speed: 0.5 },
//           },
//           size: { value: 2, random: true },
//           move: {
//             enable: true,
//             speed: 0.8,
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
//             repulse: { distance: 60, duration: 0.3 },
//             push: { particles_nb: 1 },
//           },
//         },
//         retina_detect: true,
//       });
//     }
//   }, []);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const data = await getEventById(id);
//         if (!data) {
//           toast.error("Event not found");
//           navigate("/events");
//           return;
//         }
//         setFormData({
//           title: data.title,
//           description: data.description,
//           date: data.date?.split("T")[0] || "",
//           location: data.location || "",
//           visibility: data.visibility || "public",
//           media: [],
//         });
//       } catch (err) {
//         setError(err.message || "Failed to load event");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvent();
//   }, [id, navigate]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "media") {
//       setFormData((prev) => ({ ...prev, media: Array.from(files) }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleDescriptionChange = (value) => {
//     setFormData((prev) => ({ ...prev, description: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title.trim()) {
//       setError("Event title is required");
//       return;
//     }
//     if (!formData.date) {
//       setError("Event date is required");
//       return;
//     }
//     try {
//       await updateEvent(id, formData);
//       toast.success("Event updated successfully!");
//       navigate(`/events/${id}`);
//     } catch (err) {
//       setError(err.message || "Failed to update event");
//     }
//   };

//   if (loading) {
//     return (
//       <motion.div
//         className={`flex justify-center items-center min-h-screen ${
//           isDarkMode ? "bg-gray-900" : "bg-gray-50"
//         }`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <p
//           className={`text-base ${
//             isDarkMode ? "text-gray-400" : "text-gray-600"
//           } animate-pulse`}
//         >
//           Loading event details...
//         </p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       className={`min-h-screen font-poppins ${
//         isDarkMode ? "bg-gray-900" : "bg-gray-50"
//       } transition-colors duration-300`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Header Section with Particles */}
//       <section
//         className="relative text-white min-h-[40vh] flex items-center justify-center bg-fixed px-4 text-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div id="edit-event-particles" className="absolute inset-0" />
//         <div className="absolute inset-0 bg-black/30"></div>
//         <motion.div
//           className="relative z-10 max-w-5xl mx-auto py-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
//             Edit Event
//           </h1>
//         </motion.div>
//       </section>

//       {/* Form Section */}
//       <div className="max-w-3xl mx-auto px-4 py-10">
//         <motion.div
//           className={`p-8 rounded-2xl shadow-lg ${
//             isDarkMode ? "bg-gray-800/90" : "bg-white/90"
//           } transition-colors duration-300 backdrop-blur-sm`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {error && (
//             <motion.div
//               className="mb-4 p-3 bg-red-50 border-l-2 border-red-500 text-red-600 rounded text-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {error}
//             </motion.div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Title */}
//             <div>
//               <label
//                 className={`block text-sm font-semibold ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 } mb-1`}
//               >
//                 Event Title <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Enter event title"
//                 className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-orange-400 outline-none ${
//                   isDarkMode
//                     ? "bg-gray-700 text-gray-100 border-gray-600"
//                     : "bg-gray-50 text-gray-800 border-orange-200"
//                 } transition-all duration-200`}
//                 required
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label
//                 className={`block text-sm font-semibold ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 } mb-1`}
//               >
//                 Event Description <span className="text-red-500">*</span>
//               </label>
//               <div
//                 className={`rounded-lg border ${
//                   isDarkMode ? "border-gray-600" : "border-orange-200"
//                 }`}
//               >
//                 <ReactQuill
//                   theme="snow"
//                   value={formData.description}
//                   onChange={handleDescriptionChange}
//                   className={`h-40 ${
//                     isDarkMode
//                       ? "bg-gray-700 text-gray-100"
//                       : "bg-white text-gray-800"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Date */}
//             <div>
//               <label
//                 className={`block text-sm font-semibold ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 } mb-1`}
//               >
//                 Event Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-orange-400 outline-none ${
//                   isDarkMode
//                     ? "bg-gray-700 text-gray-100 border-gray-600"
//                     : "bg-gray-50 text-gray-800 border-orange-200"
//                 } transition-all duration-200`}
//                 required
//               />
//             </div>

//             {/* Location */}
//             <div>
//               <label
//                 className={`block text-sm font-semibold ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 } mb-1`}
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 placeholder="Enter event location"
//                 className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-orange-400 outline-none ${
//                   isDarkMode
//                     ? "bg-gray-700 text-gray-100 border-gray-600"
//                     : "bg-gray-50 text-gray-800 border-orange-200"
//                 } transition-all duration-200`}
//               />
//             </div>

//             {/* Visibility */}
//             <div>
//               <label
//                 className={`block text-sm font-semibold ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 } mb-1`}
//               >
//                 Visibility
//               </label>
//               <select
//                 name="visibility"
//                 value={formData.visibility}
//                 onChange={handleChange}
//                 className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-orange-400 outline-none ${
//                   isDarkMode
//                     ? "bg-gray-700 text-gray-100 border-gray-600"
//                     : "bg-gray-50 text-gray-800 border-orange-200"
//                 } transition-all duration-200`}
//               >
//                 <option value="public">Public</option>
//                 <option value="private">Private</option>
//               </select>
//             </div>

//             {/* Media */}
//             <div>
//               <label
//                 className={`block text-sm font-semibold ${
//                   isDarkMode ? "text-gray-300" : "text-gray-600"
//                 } mb-1`}
//               >
//                 Media (Images/Videos)
//               </label>
//               <input
//                 type="file"
//                 name="media"
//                 multiple
//                 accept="image/jpeg,image/png,video/mp4"
//                 onChange={handleChange}
//                 className={`w-full p-3 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold ${
//                   isDarkMode
//                     ? "file:bg-gray-600 file:text-gray-200 hover:file:bg-gray-500"
//                     : "file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
//                 }`}
//               />
//             </div>

//             {/* Submit Button */}
//             <motion.div
//               className="pt-4 flex justify-end"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <button
//                 type="submit"
//                 className={`px-6 py-2 rounded-lg font-medium text-white ${
//                   isDarkMode
//                     ? "bg-gray-700 hover:bg-gray-600"
//                     : "bg-orange-500 hover:bg-orange-600"
//                 } transition-all duration-200 shadow-sm`}
//               >
//                 Update Event
//               </button>
//             </motion.div>
//           </form>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getEventById, updateEvent } from "../api";
import { toast } from "react-toastify";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    visibility: "public",
    media: [],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persistent dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setIsDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Initialize particles.js with festival-themed particles
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("edit-event-particles", {
        particles: {
          number: { value: 15, density: { enable: true, value_area: 1500 } },
          color: { value: ["#990000", "#FFD700", "#FF9933"] }, // Updated colors
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

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        if (!data) {
          toast.error("Event not found");
          navigate("/events");
          return;
        }
        setFormData({
          title: data.title,
          description: data.description,
          date: data.date?.split("T")[0] || "",
          location: data.location || "",
          visibility: data.visibility || "public",
          media: [],
        });
      } catch (err) {
        setError(err.message || "Failed to load event");
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "media") {
      setFormData((prev) => ({ ...prev, media: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError("Event title is required");
      return;
    }
    if (!formData.date) {
      setError("Event date is required");
      return;
    }
    try {
      await updateEvent(id, formData);
      toast.success("Event updated successfully!");
      navigate(`/events/${id}`);
    } catch (err) {
      setError(err.message || "Failed to update event");
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
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section with Particles */}
      <section
        className="relative text-white min-h-[40vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="edit-event-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/40 to-[#990000]/50"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />{" "}
        {/* Added rangoli */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
            Edit Event
          </h1>
        </motion.div>
      </section>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <motion.div
          className={`p-8 rounded-2xl shadow-lg ${
            isDarkMode ? "bg-gray-800/90" : "bg-white/90"
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label
                className={`block text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-1`}
              >
                Event Title <span className="text-[#990000]">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-[#FFD700] outline-none ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                } transition-all duration-200`}
                required
                aria-required="true"
              />
            </div>

            {/* Description */}
            <div>
              <label
                className={`block text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-1`}
              >
                Event Description <span className="text-[#990000]">*</span>
              </label>
              <div
                className={`rounded-lg border ${
                  isDarkMode ? "border-gray-600" : "border-[#FF9933]/50"
                }`}
              >
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  className={`h-40 ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-100"
                      : "bg-white text-gray-800"
                  }`}
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label
                className={`block text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-1`}
              >
                Event Date <span className="text-[#990000]">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-[#FFD700] outline-none ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                } transition-all duration-200`}
                required
                aria-required="true"
              />
            </div>

            {/* Location */}
            <div>
              <label
                className={`block text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-1`}
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter event location"
                className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-[#FFD700] outline-none ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                } transition-all duration-200`}
              />
            </div>

            {/* Visibility */}
            <div>
              <label
                className={`block text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-1`}
              >
                Visibility
              </label>
              <select
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:ring-1 focus:ring-[#FFD700] outline-none ${
                  isDarkMode
                    ? "bg-gray-700 text-gray-100 border-gray-600"
                    : "bg-gray-50 text-gray-800 border-[#FF9933]/50"
                } transition-all duration-200`}
                aria-label="Event visibility"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>

            {/* Media */}
            <div>
              <label
                className={`block text-sm font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-1`}
              >
                Media (Images/Videos)
              </label>
              <input
                type="file"
                name="media"
                multiple
                accept="image/jpeg,image/png,video/mp4"
                onChange={handleChange}
                className={`w-full p-3 text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold ${
                  isDarkMode
                    ? "file:bg-gray-600 file:text-gray-200 hover:file:bg-gray-500"
                    : "file:bg-[#FF9933]/20 file:text-[#990000] hover:file:bg-[#FF9933]/30"
                }`}
                aria-label="Upload media files"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              className="pt-4 flex justify-end"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg font-medium text-white ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-[#FF9933] hover:bg-[#990000]"
                } transition-all duration-200 shadow-sm`}
              >
                Update Event
              </button>
            </motion.div>
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
