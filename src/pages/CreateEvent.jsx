// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createEvent } from "../api";

// function CreateEvent() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     visibility: "public",
//     media: [],
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

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
//       await createEvent(formData);
//       navigate("/events");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Create Event</h1>
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
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createEvent } from "../api";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";

// function CreateEvent() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     visibility: "public",
//     media: [],
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === "media") {
//       setFormData({ ...formData, media: Array.from(e.target.files) });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleDescriptionChange = (value) => {
//     setFormData({ ...formData, description: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createEvent(formData);
//       navigate("/events");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 border">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Event</h1>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Title */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Enter event title"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description
//             </label>
//             <ReactQuill
//               theme="snow"
//               value={formData.description}
//               onChange={handleDescriptionChange}
//               className="bg-white rounded-lg"
//             />
//           </div>

//           {/* Date */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Enter location"
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Visibility */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Visibility
//             </label>
//             <select
//               name="visibility"
//               value={formData.visibility}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             >
//               <option value="public">Public</option>
//               <option value="private">Private</option>
//             </select>
//           </div>

//           {/* Media */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Media (Images/Videos)
//             </label>
//             <input
//               type="file"
//               name="media"
//               multiple
//               accept="image/jpeg,image/png,video/mp4"
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Create Event
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createEvent } from "../api";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";

// function CreateEvent() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     location: "",
//     visibility: "public",
//     media: [],
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === "media") {
//       setFormData({ ...formData, media: Array.from(e.target.files) });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   const handleDescriptionChange = (value) => {
//     setFormData({ ...formData, description: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title.trim()) {
//       return setError("Event title is required.");
//     }
//     if (!formData.date) {
//       return setError("Event date is required.");
//     }
//     try {
//       await createEvent(formData);
//       navigate("/events");
//     } catch (err) {
//       setError(err.message || "Failed to create event.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           📅 Create Event
//         </h1>

//         {error && (
//           <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Event Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Enter event title"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Event Description
//             </label>
//             <div className="bg-white rounded-lg border border-gray-300">
//               <ReactQuill
//                 theme="snow"
//                 value={formData.description}
//                 onChange={handleDescriptionChange}
//                 className="h-40"
//               />
//             </div>
//           </div>

//           {/* Date */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Event Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="Enter location"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Visibility */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Visibility
//             </label>
//             <select
//               name="visibility"
//               value={formData.visibility}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             >
//               <option value="public">🌍 Public</option>
//               <option value="private">🔒 Private</option>
//             </select>
//           </div>

//           {/* Media */}
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Media (Images/Videos)
//             </label>
//             <input
//               type="file"
//               name="media"
//               multiple
//               accept="image/jpeg,image/png,video/mp4"
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//             >
//               Create Event 🎉
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;

// CreateEvent.jsx (Updated: Integrated new color palette, added header with particles and rangoli, improved form accessibility and spacing, added Telugu font if needed, error handling improvements)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../api";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    visibility: "public",
    media: [],
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Initialize particles.js
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("create-event-particles", {
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
    if (e.target.name === "media") {
      setFormData({ ...formData, media: Array.from(e.target.files) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      return setError("Event title is required.");
    }
    if (!formData.date) {
      return setError("Event date is required.");
    }
    try {
      await createEvent(formData);
      navigate("/events");
    } catch (err) {
      setError(err.message || "Failed to create event.");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-10 px-4"
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
        <div id="create-event-particles" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933]/40 to-[#990000]/50"></div>
        <div className="absolute inset-0 bg-[url('/rangoli-pattern.png')] bg-opacity-10 bg-repeat" />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
            Create Event
          </h1>
        </motion.div>
      </section>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border p-8">
        {error && (
          <div className="bg-red-100 border border-red-300 text-[#990000] p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Event Title <span className="text-[#990000]">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              className="w-full p-3 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              required
              aria-required="true"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Event Description <span className="text-[#990000]">*</span>
            </label>
            <div className="bg-white rounded-lg border border-[#FF9933]/50">
              <ReactQuill
                theme="snow"
                value={formData.description}
                onChange={handleDescriptionChange}
                className="h-40"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Event Date <span className="text-[#990000]">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              required
              aria-required="true"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full p-3 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
            />
          </div>

          {/* Visibility */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Visibility
            </label>
            <select
              name="visibility"
              value={formData.visibility}
              onChange={handleChange}
              className="w-full p-3 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              aria-label="Event visibility"
            >
              <option value="public">🌍 Public</option>
              <option value="private">🔒 Private</option>
            </select>
          </div>

          {/* Media */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Media (Images/Videos)
            </label>
            <input
              type="file"
              name="media"
              multiple
              accept="image/jpeg,image/png,video/mp4"
              onChange={handleChange}
              className="w-full p-3 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#FF9933]/20 file:text-[#990000] hover:file:bg-[#FF9933]/30"
              aria-label="Upload media files"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#FF9933] text-white py-3 rounded-lg hover:bg-[#990000] transition-colors font-medium shadow-md"
            >
              Create Event 🎉
            </button>
          </div>
        </form>
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

export default CreateEvent;
