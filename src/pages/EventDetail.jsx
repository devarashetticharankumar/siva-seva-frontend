import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getEventById, deleteEvent } from "../api";
import { toast } from "react-toastify";
import {
  HiArrowLeft,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import "react-quill-new/dist/quill.snow.css";

function DonationForm({ eventId, onDonationAdded, isDarkMode }) {
  const [donorName, setDonorName] = useState("");
  const [donationType, setDonationType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!donorName.trim() || !donationType.trim()) {
      setError("Name and donation type are required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "http://localhost:5000/api"
        }/events/${eventId}/donations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            donorName,
            donationType,
            amount: amount ? Number(amount) : undefined,
            description,
          }),
        }
      );
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to add donation");
      }
      setDonorName("");
      setDonationType("");
      setAmount("");
      setDescription("");
      toast.success("Donation added successfully!");
      onDonationAdded();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-500`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        } text-center`}
      >
        Add a Donation
      </h2>

      {error && (
        <motion.div
          className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-2`}
            htmlFor="donorName"
          >
            Donor Name <span className="text-red-500">*</span>
          </label>
          <input
            id="donorName"
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none ${
              isDarkMode
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-gray-100 text-gray-900 border-gray-200"
            } transition-all duration-300`}
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-2`}
            htmlFor="donationType"
          >
            Donation Type <span className="text-red-500">*</span>
          </label>
          <input
            id="donationType"
            type="text"
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none ${
              isDarkMode
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-gray-100 text-gray-900 border-gray-200"
            } transition-all duration-300`}
            placeholder="e.g., Money, Annadhanam"
            required
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-2`}
            htmlFor="amount"
          >
            Amount (optional)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none ${
              isDarkMode
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-gray-100 text-gray-900 border-gray-200"
            } transition-all duration-300`}
            placeholder="Enter amount if applicable"
            min="0"
          />
        </div>

        <div>
          <label
            className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-2`}
            htmlFor="description"
          >
            Note (optional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-3 rounded-lg border focus:ring-2 focus:ring-red-500 focus:outline-none resize-none h-24 ${
              isDarkMode
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-gray-100 text-gray-900 border-gray-200"
            } transition-all duration-300`}
            placeholder="Any message or details"
            rows={4}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-full transition-colors shadow-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-600 text-white hover:bg-red-700"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Submitting..." : "Add Donation"}
        </motion.button>
      </form>
    </motion.div>
  );
}

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const commentsSectionRef = useRef(null);

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fetchEvent = async () => {
    setLoading(true);
    try {
      const response = await getEventById(id);
      if (!response) {
        toast.error("Event not found");
        navigate("/events");
        return;
      }
      setEvent(response);
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setIsAdmin(user.role === "admin");
    } catch (err) {
      console.error("Error fetching event:", err);
      toast.error("Failed to load event details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await deleteEvent(id);
      toast.success("Event deleted successfully");
      navigate("/events");
    } catch (err) {
      console.error("Error deleting event:", err);
      toast.error("Failed to delete event");
    }
  };

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevItem = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : event.media.length - 1));
  const nextItem = () =>
    setSelectedIndex((prev) => (prev < event.media.length - 1 ? prev + 1 : 0));

  if (loading) {
    return (
      <motion.div
        className={`flex justify-center items-center min-h-screen ${
          isDarkMode ? "bg-gray-950" : "bg-gray-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } animate-pulse`}
        >
          Loading event details...
        </p>
      </motion.div>
    );
  }

  if (!event) {
    return (
      <motion.div
        className={`p-6 text-center min-h-screen ${
          isDarkMode ? "bg-gray-950" : "bg-gray-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-red-600 text-xl font-semibold">Event not found</p>
      </motion.div>
    );
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
      {/* Header */}
      {/* Header Section with Particles */}
      <section
        className="relative text-white min-h-[40vh] flex items-center justify-center bg-fixed px-4 text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/0"></div>
        <motion.div
          className="relative z-10 max-w-5xl mx-auto py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-white mt-3 tracking-tight">
            {event.title}
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto lg:px-4 px-1 lg:pt-20 pb-12 flex flex-col lg:flex-row gap-6">
        {/* Left Section (70%) */}
        <div className="lg:w-7/10">
          <motion.div
            className={`p-6 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } transition-colors duration-500 `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              className={`text-3xl font-bold mb-2 ${
                isDarkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              {event.title}
            </h1>
            <div
              className={`flex gap-4 mb-4 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <p className="flex items-center">
                <span className="mr-2">📅</span>
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                {event.location}
              </p>
            </div>
            <div
              className={`text-base leading-relaxed ${
                isDarkMode ? "text-gray-200" : "text-black"
              }`}
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
            {isAdmin && (
              <motion.button
                onClick={handleDelete}
                className="mt-6 bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete Event
              </motion.button>
            )}
          </motion.div>

          {/* Gallery Section */}
          {event.media?.length > 0 && (
            <motion.div
              className={`mt-6 p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              } transition-colors duration-500`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Gallery Collection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.media.map((media, index) => (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 group hover:shadow-lg transition"
                    onClick={() => openModal(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.url}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src={media.url}
                        alt={event.title}
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Section (30%) */}
        <div className="lg:w-3/10 space-y-6 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto scrollbar-hide">
          {isAdmin && (
            <DonationForm
              eventId={id}
              onDonationAdded={fetchEvent}
              isDarkMode={isDarkMode}
            />
          )}

          {event.donations && event.donations.length > 0 ? (
            <motion.div
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              } transition-colors duration-500`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className={`text-xl font-bold mb-4 ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                } text-center`}
              >
                Donations Received
              </h2>
              <div
                ref={commentsSectionRef}
                className="max-h-[50vh] overflow-y-auto scrollbar-hide"
              >
                <AnimatePresence>
                  {event.donations.map((donation, idx) => (
                    <motion.div
                      key={idx}
                      className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition ${
                        isDarkMode ? "border-gray-700" : "border-gray-200"
                      } mb-4`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <p
                        className={
                          isDarkMode ? "text-gray-200" : "text-gray-800"
                        }
                      >
                        <strong>Name:</strong> {donation.donorName}
                      </p>
                      <p
                        className={
                          isDarkMode ? "text-gray-200" : "text-gray-800"
                        }
                      >
                        <strong>Type:</strong> {donation.donationType}
                      </p>
                      {donation.amount !== undefined &&
                        donation.amount !== null && (
                          <p
                            className={
                              isDarkMode ? "text-gray-200" : "text-gray-800"
                            }
                          >
                            <strong>Amount:</strong> ₹{donation.amount}
                          </p>
                        )}
                      {donation.description && (
                        <p
                          className={
                            isDarkMode ? "text-gray-200" : "text-gray-800"
                          }
                        >
                          <strong>Note:</strong> {donation.description}
                        </p>
                      )}
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        } mt-2`}
                      >
                        Donated on:{" "}
                        {new Date(donation.donatedAt).toLocaleString()}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.p
              className={`text-center text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No donations yet.
            </motion.p>
          )}
        </div>
      </div>
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="absolute top-4 right-4 bg-amber-600 rounded-3xl text-white hover:text-gray-300 transition"
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiX size={32} />
            </motion.button>
            <motion.button
              className="absolute left-4 text-white hover:text-gray-300 transition bg-amber-600 rounded-3xl"
              onClick={prevItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronLeft size={48} />
            </motion.button>
            <motion.button
              className="absolute right-4 text-white hover:text-gray-300 transition bg-amber-600 rounded-3xl"
              onClick={nextItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HiChevronRight size={48} />
            </motion.button>

            <motion.div
              className="max-w-6xl max-h-[85vh] p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {event.media[selectedIndex].type === "video" ? (
                <video
                  src={event.media[selectedIndex].url}
                  controls
                  autoPlay
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-xl"
                />
              ) : (
                <img
                  src={event.media[selectedIndex].url}
                  alt={event.title}
                  className="max-h-[85vh] w-auto mx-auto rounded-lg shadow-xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

export default EventDetail;

// import { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { getEventById, deleteEvent } from "../api";
// import { toast } from "react-toastify";
// import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import Masonry from "react-masonry-css";
// import "react-quill-new/dist/quill.snow.css";

// function DonationForm({ eventId, onDonationAdded, isDarkMode }) {
//   const [donorName, setDonorName] = useState("");
//   const [donationType, setDonationType] = useState("");
//   const [amount, setAmount] = useState("");
//   const [description, setDescription] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!donorName.trim() || !donationType.trim()) {
//       setError("Donor name and donation type are required");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       const res = await fetch(
//         `${
//           import.meta.env.VITE_API_URL || "http://localhost:5000/api"
//         }/events/${eventId}/donations`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//           body: JSON.stringify({
//             donorName,
//             donationType,
//             amount: amount ? Number(amount) : undefined,
//             description,
//           }),
//         }
//       );
//       if (!res.ok) {
//         const errData = await res.json();
//         throw new Error(errData.message || "Failed to add donation");
//       }
//       setDonorName("");
//       setDonationType("");
//       setAmount("");
//       setDescription("");
//       toast.success("Donation added successfully!");
//       onDonationAdded();
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className={`p-5 rounded-lg shadow-sm ${
//         isDarkMode ? "bg-gray-800/90" : "bg-white/90"
//       } transition-colors duration-300 backdrop-blur-sm`}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2
//         className={`text-lg font-semibold mb-3 ${
//           isDarkMode ? "text-gray-200" : "text-orange-500"
//         } text-center`}
//       >
//         Add Donation
//       </h2>

//       {error && (
//         <motion.div
//           className="mb-3 p-2 bg-red-50 border-l-2 border-red-500 text-red-600 rounded text-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           {error}
//         </motion.div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-3">
//         <div>
//           <label
//             className={`block text-sm font-medium ${
//               isDarkMode ? "text-gray-300" : "text-gray-600"
//             } mb-1`}
//             htmlFor="donorName"
//           >
//             Donor Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="donorName"
//             type="text"
//             value={donorName}
//             onChange={(e) => setDonorName(e.target.value)}
//             className={`w-full p-2 rounded-md border focus:ring-1 focus:ring-orange-400 focus:outline-none ${
//               isDarkMode
//                 ? "bg-gray-700 text-gray-100 border-gray-600"
//                 : "bg-gray-50 text-gray-800 border-orange-200"
//             } transition-all duration-200`}
//             placeholder="Enter your full name"
//             required
//           />
//         </div>

//         <div>
//           <label
//             className={`block text-sm font-medium ${
//               isDarkMode ? "text-gray-300" : "text-gray-600"
//             } mb-1`}
//             htmlFor="donationType"
//           >
//             Donation Type <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="donationType"
//             type="text"
//             value={donationType}
//             onChange={(e) => setDonationType(e.target.value)}
//             className={`w-full p-2 rounded-md border focus:ring-1 focus:ring-orange-400 focus:outline-none ${
//               isDarkMode
//                 ? "bg-gray-700 text-gray-100 border-gray-600"
//                 : "bg-gray-50 text-gray-800 border-orange-200"
//             } transition-all duration-200`}
//             placeholder="e.g., Money, Food Donation"
//             required
//           />
//         </div>

//         <div>
//           <label
//             className={`block text-sm font-medium ${
//               isDarkMode ? "text-gray-300" : "text-gray-600"
//             } mb-1`}
//             htmlFor="amount"
//           >
//             Amount (Optional)
//           </label>
//           <input
//             id="amount"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             className={`w-full p-2 rounded-md border focus:ring-1 focus:ring-orange-400 focus:outline-none ${
//               isDarkMode
//                 ? "bg-gray-700 text-gray-100 border-gray-600"
//                 : "bg-gray-50 text-gray-800 border-orange-200"
//             } transition-all duration-200`}
//             placeholder="Enter amount if applicable"
//             min="0"
//           />
//         </div>

//         <div>
//           <label
//             className={`block text-sm font-medium ${
//               isDarkMode ? "text-gray-300" : "text-gray-600"
//             } mb-1`}
//             htmlFor="description"
//           >
//             Note (Optional)
//           </label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className={`w-full p-2 rounded-md border focus:ring-1 focus:ring-orange-400 focus:outline-none resize-none h-20 ${
//               isDarkMode
//                 ? "bg-gray-700 text-gray-100 border-gray-600"
//                 : "bg-gray-50 text-gray-800 border-orange-200"
//             } transition-all duration-200`}
//             placeholder="Any message or details"
//             rows={4}
//           />
//         </div>

//         <motion.button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 rounded-md font-semibold text-sm transition-all ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : isDarkMode
//               ? "bg-gray-700 text-gray-100 hover:bg-gray-600 hover:shadow-sm"
//               : "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-sm"
//           }`}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//         >
//           {loading ? "Submitting..." : "Add Donation"}
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// }

// function EventDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const commentsSectionRef = useRef(null);

//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
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

//   // Initialize particles.js for header
//   useEffect(() => {
//     if (window.particlesJS) {
//       window.particlesJS("event-particles", {
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

//   const fetchEvent = async () => {
//     setLoading(true);
//     try {
//       const response = await getEventById(id);
//       if (!response) {
//         toast.error("Event not found");
//         navigate("/events");
//         return;
//       }
//       setEvent(response);
//       const user = JSON.parse(localStorage.getItem("user") || "{}");
//       setIsAdmin(user.role === "admin");
//     } catch (err) {
//       console.error("Error fetching event:", err);
//       toast.error("Failed to load event details");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvent();
//   }, [id]);

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this event?")) return;
//     try {
//       await deleteEvent(id);
//       toast.success("Event deleted successfully");
//       navigate("/events");
//     } catch (err) {
//       console.error("Error deleting event:", err);
//       toast.error("Failed to delete event");
//     }
//   };

//   const openModal = (index) => setSelectedIndex(index);
//   const closeModal = () => setSelectedIndex(null);
//   const prevItem = () =>
//     setSelectedIndex((prev) => (prev > 0 ? prev - 1 : event.media.length - 1));
//   const nextItem = () =>
//     setSelectedIndex((prev) => (prev < event.media.length - 1 ? prev + 1 : 0));

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

//   if (!event) {
//     return (
//       <motion.div
//         className={`p-6 text-center min-h-screen ${
//           isDarkMode ? "bg-gray-900" : "bg-gray-50"
//         }`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <p className="text-red-500 text-base font-semibold">Event not found</p>
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
//         <div id="event-particles" className="absolute inset-0" />
//         <div className="absolute inset-0 bg-black/30"></div>
//         <motion.div
//           className="relative z-10 max-w-5xl mx-auto py-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 tracking-tight">
//             {event.title}
//           </h1>
//         </motion.div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6">
//         {/* Left Section (70%) */}
//         <div className="lg:w-7/10 space-y-6">
//           <motion.div
//             className={`p-5 rounded-lg shadow-sm ${
//               isDarkMode ? "bg-gray-800/90" : "bg-white/90"
//             } transition-colors duration-300 backdrop-blur-sm`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1
//               className={`text-lg font-semibold mb-2 ${
//                 isDarkMode ? "text-gray-200" : "text-orange-500"
//               }`}
//             >
//               {event.title}
//             </h1>
//             <div
//               className={`flex gap-3 mb-3 text-sm ${
//                 isDarkMode ? "text-gray-400" : "text-gray-500"
//               }`}
//             >
//               <p className="flex items-center">
//                 <span className="mr-1">📅</span>
//                 {new Date(event.date).toLocaleDateString()}
//               </p>
//               <p className="flex items-center">
//                 <span className="mr-1">📍</span>
//                 {event.location}
//               </p>
//             </div>
//             <div
//               className={`text-sm leading-relaxed ${
//                 isDarkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//               dangerouslySetInnerHTML={{ __html: event.description }}
//             />
//             {isAdmin && (
//               <motion.button
//                 onClick={handleDelete}
//                 className={`mt-4 py-2 px-4 rounded-md font-semibold text-sm transition-all ${
//                   isDarkMode
//                     ? "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:shadow-sm"
//                     : "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-sm"
//                 }`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Delete Event
//               </motion.button>
//             )}
//           </motion.div>

//           {/* Gallery Section */}
//           {event.media?.length > 0 && (
//             <motion.div
//               className={`p-5 rounded-lg shadow-sm ${
//                 isDarkMode ? "bg-gray-800/90" : "bg-white/90"
//               } transition-colors duration-300 backdrop-blur-sm`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2
//                 className={`text-lg font-semibold mb-3 ${
//                   isDarkMode ? "text-gray-200" : "text-orange-500"
//                 }`}
//               >
//                 Gallery
//               </h2>
//               <Masonry
//                 breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
//                 className="flex w-auto -ml-3"
//                 columnClassName="pl-3 bg-clip-padding"
//               >
//                 {event.media.map((media, index) => (
//                   <motion.div
//                     key={index}
//                     className={`media-card-${index} rounded-md shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border min-h-[300px] max-h-[300px] flex flex-col mb-4 ${
//                       isDarkMode
//                         ? "bg-gray-800 border-gray-600"
//                         : "bg-white border-orange-200"
//                     }`}
//                     onClick={() => openModal(index)}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.05 }}
//                   >
//                     <div className="relative h-full overflow-hidden rounded-md">
//                       {media.type === "video" ? (
//                         <video
//                           src={media.url}
//                           className="w-full h-full object-cover"
//                           loading="lazy"
//                         />
//                       ) : (
//                         <img
//                           src={media.url}
//                           alt={event.title}
//                           className="w-full h-full object-cover"
//                           loading="lazy"
//                         />
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent opacity-50 hover:opacity-60 transition-opacity"></div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </Masonry>
//             </motion.div>
//           )}
//         </div>

//         {/* Right Section (30%) */}
//         <div className="lg:w-3/10 space-y-6 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:overflow-y-auto scrollbar-hide">
//           {isAdmin && (
//             <DonationForm
//               eventId={id}
//               onDonationAdded={fetchEvent}
//               isDarkMode={isDarkMode}
//             />
//           )}

//           {event.donations && event.donations.length > 0 ? (
//             <motion.div
//               className={`p-5 rounded-lg shadow-sm ${
//                 isDarkMode ? "bg-gray-800/90" : "bg-white/90"
//               } transition-colors duration-300 backdrop-blur-sm`}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2
//                 className={`text-lg font-semibold mb-3 ${
//                   isDarkMode ? "text-gray-200" : "text-orange-500"
//                 } text-center`}
//               >
//                 Donations Received
//               </h2>
//               <div
//                 ref={commentsSectionRef}
//                 className="max-h-[50vh] overflow-y-auto scrollbar-hide"
//               >
//                 <AnimatePresence>
//                   {event.donations.map((donation, idx) => (
//                     <motion.div
//                       key={idx}
//                       className={`border p-3 rounded-md shadow-sm hover:shadow-md transition min-h-[140px] max-h-[140px] flex flex-col ${
//                         isDarkMode ? "border-gray-600" : "border-orange-200"
//                       } mb-3`}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: idx * 0.05 }}
//                     >
//                       <p
//                         className={`text-sm ${
//                           isDarkMode ? "text-gray-300" : "text-gray-700"
//                         } line-clamp-1`}
//                       >
//                         <strong>Name:</strong> {donation.donorName}
//                       </p>
//                       <p
//                         className={`text-sm ${
//                           isDarkMode ? "text-gray-300" : "text-gray-700"
//                         } line-clamp-1`}
//                       >
//                         <strong>Type:</strong> {donation.donationType}
//                       </p>
//                       {donation.amount !== undefined &&
//                         donation.amount !== null && (
//                           <p
//                             className={`text-sm ${
//                               isDarkMode ? "text-gray-300" : "text-gray-700"
//                             } line-clamp-1`}
//                           >
//                             <strong>Amount:</strong> ₹{donation.amount}
//                           </p>
//                         )}
//                       {donation.description && (
//                         <p
//                           className={`text-sm ${
//                             isDarkMode ? "text-gray-300" : "text-gray-700"
//                           } line-clamp-2`}
//                         >
//                           <strong>Note:</strong> {donation.description}
//                         </p>
//                       )}
//                       <p
//                         className={`text-xs ${
//                           isDarkMode ? "text-gray-400" : "text-gray-500"
//                         } mt-1 line-clamp-1`}
//                       >
//                         Donated on:{" "}
//                         {new Date(donation.donatedAt).toLocaleString()}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.p
//               className={`text-center text-sm ${
//                 isDarkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               No donations yet.
//             </motion.p>
//           )}
//         </div>
//       </div>

//       {/* Fullscreen Modal */}
//       <AnimatePresence>
//         {selectedIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={closeModal}
//           >
//             <motion.button
//               className={`absolute top-2 right-2 ${
//                 isDarkMode
//                   ? "text-gray-200 bg-gray-700/80"
//                   : "text-white bg-orange-500/80"
//               } rounded-full p-1 hover:bg-orange-600 transition-all`}
//               onClick={closeModal}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <HiX size={20} />
//             </motion.button>
//             <motion.button
//               className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
//                 isDarkMode
//                   ? "text-gray-200 bg-gray-700/80"
//                   : "text-white bg-orange-500/80"
//               } rounded-full p-1 hover:bg-orange-600 transition-all`}
//               onClick={prevItem}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <HiChevronLeft size={24} />
//             </motion.button>
//             <motion.button
//               className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
//                 isDarkMode
//                   ? "text-gray-200 bg-gray-700/80"
//                   : "text-white bg-orange-500/80"
//               } rounded-full p-1 hover:bg-orange-600 transition-all`}
//               onClick={nextItem}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <HiChevronRight size={24} />
//             </motion.button>
//             <motion.div
//               className="max-w-4xl max-h-[80vh] p-3"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {event.media[selectedIndex].type === "video" ? (
//                 <video
//                   src={event.media[selectedIndex].url}
//                   controls
//                   autoPlay
//                   className="max-h-[80vh] w-auto mx-auto rounded-md shadow-sm"
//                   loading="lazy"
//                 />
//               ) : (
//                 <img
//                   src={event.media[selectedIndex].url}
//                   alt={event.title}
//                   className="max-h-[80vh] w-auto mx-auto rounded-md shadow-sm"
//                   loading="lazy"
//                 />
//               )}
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
//           .media-card {
//             display: flex;
//             flex-direction: column;
//             height: 300px;
//           }
//         `}
//       </style>
//     </motion.div>
//   );
// }

// export default EventDetail;
