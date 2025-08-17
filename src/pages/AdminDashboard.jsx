// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   getEvents,
//   deleteEvent,
//   getGalleryItems,
//   deleteGalleryItem,
//   getContacts,
//   getUsers,
// } from "../api";
// import EventCard from "../components/EventCard";
// import GalleryItem from "../components/GalleryItem";

// function AdminDashboard() {
//   const [events, setEvents] = useState([]);
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [
//           eventsResponse,
//           galleryResponse,
//           contactsResponse,
//           usersResponse,
//         ] = await Promise.all([
//           getEvents({ limit: 10 }),
//           getGalleryItems({ limit: 10 }),
//           getContacts(),
//           getUsers(),
//         ]);
//         setEvents(eventsResponse.events);
//         setGalleryItems(galleryResponse.items);
//         setContacts(contactsResponse);
//         setUsers(usersResponse);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDeleteEvent = async (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       try {
//         await deleteEvent(id);
//         setEvents(events.filter((event) => event._id !== id));
//       } catch (err) {
//         setError(err.message);
//       }
//     }
//   };

//   const handleDeleteGalleryItem = async (id) => {
//     if (window.confirm("Are you sure you want to delete this gallery item?")) {
//       try {
//         await deleteGalleryItem(id);
//         setGalleryItems(galleryItems.filter((item) => item._id !== id));
//       } catch (err) {
//         setError(err.message);
//       }
//     }
//   };

//   if (loading) return <p className="text-center">Loading...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}

//       <div className="mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">Events</h2>
//           <Link
//             to="/admin/create-event"
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Create Event
//           </Link>
//         </div>
//         {events.length === 0 ? (
//           <p>No events found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {events.map((event) => (
//               <div key={event._id} className="relative">
//                 <EventCard event={event} />
//                 <button
//                   onClick={() => handleDeleteEvent(event._id)}
//                   className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//                 <Link
//                   to={`/admin/edit-event/${event._id}`}
//                   className="absolute top-10 right-2 bg-blue-600 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Gallery Items</h2>
//         {galleryItems.length === 0 ? (
//           <p>No gallery items found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {galleryItems.map((item) => (
//               <GalleryItem
//                 key={item._id}
//                 item={item}
//                 onDelete={handleDeleteGalleryItem}
//                 isAdmin={true}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
//         {contacts.length === 0 ? (
//           <p>No contact messages found.</p>
//         ) : (
//           <div className="space-y-4">
//             {contacts.map((contact) => (
//               <div
//                 key={contact._id}
//                 className="bg-white shadow-md rounded-lg p-4"
//               >
//                 <p>
//                   <strong>Name:</strong> {contact.name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {contact.email}
//                 </p>
//                 <p>
//                   <strong>Message:</strong> {contact.message}
//                 </p>
//                 <p>
//                   <strong>Date:</strong>{" "}
//                   {new Date(contact.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div>
//         <h2 className="text-2xl font-bold mb-4">Users</h2>
//         {users.length === 0 ? (
//           <p>No users found.</p>
//         ) : (
//           <div className="space-y-4">
//             {users.map((user) => (
//               <div key={user._id} className="bg-white shadow-md rounded-lg p-4">
//                 <p>
//                   <strong>Name:</strong> {user.name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {user.email}
//                 </p>
//                 <p>
//                   <strong>Role:</strong> {user.role}
//                 </p>
//                 <p>
//                   <strong>Joined:</strong>{" "}
//                   {new Date(user.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   getEvents,
//   deleteEvent,
//   getGalleryItems,
//   deleteGalleryItem,
//   getContacts,
//   getUsers,
// } from "../api";
// import EventCard from "../components/EventCard";
// import GalleryItem from "../components/GalleryItem";
// import { Trash2, Edit, Plus, Image, Users, Mail } from "lucide-react";

// function AdminDashboard() {
//   const [events, setEvents] = useState([]);
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [
//           eventsResponse,
//           galleryResponse,
//           contactsResponse,
//           usersResponse,
//         ] = await Promise.all([
//           getEvents({ limit: 10 }),
//           getGalleryItems({ limit: 10 }),
//           getContacts(),
//           getUsers(),
//         ]);
//         setEvents(eventsResponse.events);
//         setGalleryItems(galleryResponse.items);
//         setContacts(contactsResponse);
//         setUsers(usersResponse);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDeleteEvent = async (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       try {
//         await deleteEvent(id);
//         setEvents(events.filter((event) => event._id !== id));
//       } catch (err) {
//         setError(err.message);
//       }
//     }
//   };

//   const handleDeleteGalleryItem = async (id) => {
//     if (window.confirm("Are you sure you want to delete this gallery item?")) {
//       try {
//         await deleteGalleryItem(id);
//         setGalleryItems(galleryItems.filter((item) => item._id !== id));
//       } catch (err) {
//         setError(err.message);
//       }
//     }
//   };

//   if (loading)
//     return <p className="text-center text-lg text-gray-500">Loading...</p>;

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//         Admin Dashboard
//       </h1>
//       {error && (
//         <p className="text-red-600 mb-4 p-3 bg-red-50 rounded">{error}</p>
//       )}

//       {/* Events Section */}
//       <section className="mb-12">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//             <Image className="text-blue-500" size={22} /> Events
//           </h2>
//           <Link
//             to="/admin/create-event"
//             className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 flex items-center gap-2"
//           >
//             <Plus size={18} /> Create Event
//           </Link>
//         </div>
//         {events.length === 0 ? (
//           <p className="text-gray-500">No events found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {events.map((event) => (
//               <div key={event._id} className="relative group">
//                 <EventCard event={event} />
//                 <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition">
//                   <button
//                     onClick={() => handleDeleteEvent(event._id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 flex items-center gap-1"
//                   >
//                     <Trash2 size={14} /> Delete
//                   </button>
//                   <Link
//                     to={`/admin/edit-event/${event._id}`}
//                     className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 flex items-center gap-1"
//                   >
//                     <Edit size={14} /> Edit
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Gallery Section */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//           <Image className="text-purple-500" size={22} /> Gallery Items
//         </h2>
//         {galleryItems.length === 0 ? (
//           <p className="text-gray-500">No gallery items found.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {galleryItems.map((item) => (
//               <GalleryItem
//                 key={item._id}
//                 item={item}
//                 onDelete={handleDeleteGalleryItem}
//                 isAdmin={true}
//               />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Contacts Section */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//           <Mail className="text-green-500" size={22} /> Contact Messages
//         </h2>
//         {contacts.length === 0 ? (
//           <p className="text-gray-500">No contact messages found.</p>
//         ) : (
//           <div className="grid gap-6">
//             {contacts.map((contact) => (
//               <div
//                 key={contact._id}
//                 className="bg-white shadow-lg rounded-xl p-5 border border-gray-100 hover:shadow-xl transition"
//               >
//                 <p className="mb-1">
//                   <strong>Name:</strong> {contact.name}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Email:</strong> {contact.email}
//                 </p>
//                 <p className="mb-2">
//                   <strong>Message:</strong> {contact.message}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   {new Date(contact.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Users Section */}
//       <section>
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//           <Users className="text-indigo-500" size={22} /> Users
//         </h2>
//         {users.length === 0 ? (
//           <p className="text-gray-500">No users found.</p>
//         ) : (
//           <div className="grid gap-6">
//             {users.map((user) => (
//               <div
//                 key={user._id}
//                 className="bg-white shadow-lg rounded-xl p-5 border border-gray-100 hover:shadow-xl transition"
//               >
//                 <p className="mb-1">
//                   <strong>Name:</strong> {user.name}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Email:</strong> {user.email}
//                 </p>
//                 <p className="mb-1">
//                   <strong>Role:</strong> {user.role}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Joined: {new Date(user.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default AdminDashboard;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   getEvents,
//   deleteEvent,
//   getGalleryItems,
//   deleteGalleryItem,
//   getContacts,
//   getUsers,
// } from "../api";
// import EventCard from "../components/EventCard";
// import GalleryItem from "../components/GalleryItem";
// import { Trash2, Edit, Plus, Image, Users, Mail } from "lucide-react";

// function AdminDashboard() {
//   const [events, setEvents] = useState([]);
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved) setIsDarkMode(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
//   }, [isDarkMode]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [
//           eventsResponse,
//           galleryResponse,
//           contactsResponse,
//           usersResponse,
//         ] = await Promise.all([
//           getEvents({ limit: 10 }),
//           getGalleryItems({ limit: 10 }),
//           getContacts(),
//           getUsers(),
//         ]);
//         setEvents(eventsResponse.events);
//         setGalleryItems(galleryResponse.items);
//         setContacts(contactsResponse);
//         setUsers(usersResponse);
//         setError("");
//       } catch (err) {
//         setError(err.message || "Failed to fetch data");
//         toast.error(err.message || "Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const handleDeleteEvent = async (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       try {
//         await deleteEvent(id);
//         setEvents(events.filter((event) => event._id !== id));
//         toast.success("Event deleted successfully");
//       } catch (err) {
//         setError(err.message);
//         toast.error(err.message || "Failed to delete event");
//       }
//     }
//   };

//   const handleDeleteGalleryItem = async (id) => {
//     if (window.confirm("Are you sure you want to delete this gallery item?")) {
//       try {
//         await deleteGalleryItem(id);
//         setGalleryItems(galleryItems.filter((item) => item._id !== id));
//         toast.success("Gallery item deleted successfully");
//       } catch (err) {
//         setError(err.message);
//         toast.error(err.message || "Failed to delete gallery item");
//       }
//     }
//   };

//   if (loading)
//     return (
//       <div
//         className={`min-h-screen flex items-center justify-center ${
//           isDarkMode
//             ? "bg-gray-950"
//             : "bg-gradient-to-br from-gray-100 to-blue-50"
//         } transition-colors duration-500 font-poppins`}
//       >
//         <p className="text-lg text-gray-500 dark:text-gray-400">Loading...</p>
//       </div>
//     );

//   return (
//     <div
//       className={`min-h-screen ${
//         isDarkMode
//           ? "bg-gray-950"
//           : "bg-gradient-to-br from-gray-100 to-blue-50"
//       } transition-colors duration-500 font-poppins`}
//     >
//       {/* Sticky Header */}
//       {/* <header className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           <button
//             onClick={() => window.history.back()}
//             className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
//             aria-label="Back to previous page"
//           >
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L5.414 11H17a1 1 0 000-2H5.414l5.293-5.293a1 1 0 000-1.414z" />
//             </svg>
//             Back
//           </button>
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
//             aria-label={
//               isDarkMode ? "Switch to light mode" : "Switch to dark mode"
//             }
//           >
//             {isDarkMode ? (
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </header> */}

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 pt-20 pb-12">
//         <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center">
//           Admin Dashboard
//         </h1>

//         {error && (
//           <p className="text-red-600 mb-6 p-3 bg-red-50 dark:bg-red-900 rounded">
//             {error}
//           </p>
//         )}

//         {/* Events Section */}
//         <section className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
//               <Image className="text-blue-500" size={22} /> Events
//             </h2>
//             <Link
//               to="/admin/create-event"
//               className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 flex items-center gap-2"
//             >
//               <Plus size={18} /> Create Event
//             </Link>
//           </div>
//           {events.length === 0 ? (
//             <p className="text-gray-600 dark:text-gray-400 text-center">
//               No events found.
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {events.map((event) => (
//                 <div key={event._id} className="relative group">
//                   <EventCard event={event} />
//                   <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <button
//                       onClick={() => handleDeleteEvent(event._id)}
//                       className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 flex items-center gap-1"
//                     >
//                       <Trash2 size={14} /> Delete
//                     </button>
//                     <Link
//                       to={`/admin/edit-event/${event._id}`}
//                       className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 flex items-center gap-1"
//                     >
//                       <Edit size={14} /> Edit
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* Gallery Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
//             <Image className="text-purple-500" size={22} /> Gallery Items
//           </h2>
//           {galleryItems.length === 0 ? (
//             <p className="text-gray-600 dark:text-gray-400 text-center">
//               No gallery items found.
//             </p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               {galleryItems.map((item) => (
//                 <GalleryItem
//                   key={item._id}
//                   item={item}
//                   onDelete={handleDeleteGalleryItem}
//                   isAdmin={true}
//                 />
//               ))}
//             </div>
//           )}
//         </section>

//         {/* Contacts Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
//             <Mail className="text-green-500" size={22} /> Contact Messages
//           </h2>
//           {contacts.length === 0 ? (
//             <p className="text-gray-600 dark:text-gray-400 text-center">
//               No contact messages found.
//             </p>
//           ) : (
//             <div className="grid gap-6">
//               {contacts.map((contact) => (
//                 <div
//                   key={contact._id}
//                   className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition"
//                 >
//                   <p className="mb-1 text-gray-900 dark:text-gray-100">
//                     <strong>Name:</strong> {contact.name}
//                   </p>
//                   <p className="mb-1 text-gray-900 dark:text-gray-100">
//                     <strong>Email:</strong> {contact.email}
//                   </p>
//                   <p className="mb-2 text-gray-900 dark:text-gray-100">
//                     <strong>Message:</strong> {contact.message}
//                   </p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     {new Date(contact.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* Users Section */}
//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
//             <Users className="text-indigo-500" size={22} /> Users
//           </h2>
//           {users.length === 0 ? (
//             <p className="text-gray-600 dark:text-gray-400 text-center">
//               No users found.
//             </p>
//           ) : (
//             <div className="grid gap-6">
//               {users.map((user) => (
//                 <div
//                   key={user._id}
//                   className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition"
//                 >
//                   <p className="mb-1 text-gray-900 dark:text-gray-100">
//                     <strong>Name:</strong> {user.name}
//                   </p>
//                   <p className="mb-1 text-gray-900 dark:text-gray-100">
//                     <strong>Email:</strong> {user.email}
//                   </p>
//                   <p className="mb-1 text-gray-900 dark:text-gray-100">
//                     <strong>Role:</strong> {user.role}
//                   </p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     Joined: {new Date(user.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default AdminDashboard;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import {
//   getEvents,
//   deleteEvent,
//   getGalleryItems,
//   deleteGalleryItem,
//   getContacts,
//   getUsers,
// } from "../api";
// import EventCard from "../components/EventCard";
// import GalleryItem from "../components/GalleryItem";
// import {
//   Trash2,
//   Edit,
//   Plus,
//   Image,
//   Users,
//   Mail,
//   ArrowLeft,
// } from "lucide-react";

// function AdminDashboard() {
//   const [events, setEvents] = useState([]);
//   const [galleryItems, setGalleryItems] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [eventsPage, setEventsPage] = useState(1);
//   const [galleryPage, setGalleryPage] = useState(1);
//   const eventsPerPage = 6;
//   const galleryItemsPerPage = 12;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [
//           eventsResponse,
//           galleryResponse,
//           contactsResponse,
//           usersResponse,
//         ] = await Promise.all([
//           getEvents({ limit: 100 }), // Increased limit to fetch more items for pagination
//           getGalleryItems({ limit: 100 }),
//           getContacts(),
//           getUsers(),
//         ]);
//         setEvents(eventsResponse.events);
//         setGalleryItems(galleryResponse.items);
//         setContacts(contactsResponse);
//         setUsers(usersResponse);
//         setError("");
//       } catch (err) {
//         setError(err.message || "Failed to fetch data");
//         toast.error(err.message || "Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleDeleteEvent = async (id) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       try {
//         await deleteEvent(id);
//         setEvents(events.filter((event) => event._id !== id));
//         toast.success("Event deleted successfully");
//       } catch (err) {
//         setError(err.message);
//         toast.error(err.message || "Failed to delete event");
//       }
//     }
//   };

//   const handleDeleteGalleryItem = async (id) => {
//     if (window.confirm("Are you sure you want to delete this gallery item?")) {
//       try {
//         await deleteGalleryItem(id);
//         setGalleryItems(galleryItems.filter((item) => item._id !== id));
//         toast.success("Gallery item deleted successfully");
//       } catch (err) {
//         setError(err.message);
//         toast.error(err.message || "Failed to delete gallery item");
//       }
//     }
//   };

//   // Pagination logic for Events
//   const totalEventsPages = Math.ceil(events.length / eventsPerPage);
//   const indexOfLastEvent = eventsPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//   const handlePreviousEventsPage = () => {
//     if (eventsPage > 1) {
//       setEventsPage(eventsPage - 1);
//     }
//   };

//   const handleNextEventsPage = () => {
//     if (eventsPage < totalEventsPages) {
//       setEventsPage(eventsPage + 1);
//     }
//   };

//   // Pagination logic for Gallery Items
//   const totalGalleryPages = Math.ceil(
//     galleryItems.length / galleryItemsPerPage
//   );
//   const indexOfLastGalleryItem = galleryPage * galleryItemsPerPage;
//   const indexOfFirstGalleryItem = indexOfLastGalleryItem - galleryItemsPerPage;
//   const currentGalleryItems = galleryItems.slice(
//     indexOfFirstGalleryItem,
//     indexOfLastGalleryItem
//   );

//   const handlePreviousGalleryPage = () => {
//     if (galleryPage > 1) {
//       setGalleryPage(galleryPage - 1);
//     }
//   };

//   const handleNextGalleryPage = () => {
//     if (galleryPage < totalGalleryPages) {
//       setGalleryPage(galleryPage + 1);
//     }
//   };

//   if (loading) {
//     return (
//       <motion.div
//         className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       className="min-h-screen bg-gray-100 font-poppins mt-11"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-extrabold text-gray-900">
//             Admin Dashboard
//           </h1>
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
//             aria-label="Back to home"
//           >
//             <ArrowLeft size={24} />
//             Back
//           </Link>
//         </div>

//         {error && (
//           <motion.p
//             className="text-red-600 mb-6 p-3 bg-red-50 rounded-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {error}
//           </motion.p>
//         )}

//         {/* Events Section */}
//         <section className="mb-12">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
//               <Image className="text-blue-500" size={22} /> Events
//             </h2>
//             <Link
//               to="/admin/create-event"
//               className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 flex items-center gap-2 shadow-md"
//             >
//               <Plus size={18} /> Create Event
//             </Link>
//           </div>
//           {currentEvents.length === 0 ? (
//             <motion.p
//               className="text-gray-600 text-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               No events found.
//             </motion.p>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {currentEvents.map((event) => (
//                   <motion.div
//                     key={event._id}
//                     className="relative group"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <EventCard event={event} />
//                     <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <motion.button
//                         onClick={() => handleDeleteEvent(event._id)}
//                         className="px-3 py-1 bg-red-600 text-white rounded shadow hover:bg-red-700 flex items-center gap-1"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Trash2 size={14} /> Delete
//                       </motion.button>
//                       <Link
//                         to={`/admin/edit-event/${event._id}`}
//                         className="px-3 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 flex items-center gap-1"
//                       >
//                         <Edit size={14} /> Edit
//                       </Link>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//               {/* Events Pagination */}
//               <div className="mt-8 flex justify-center items-center space-x-4">
//                 <motion.button
//                   onClick={handlePreviousEventsPage}
//                   disabled={eventsPage === 1}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
//                     eventsPage === 1
//                       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       : "bg-red-600 text-white hover:bg-red-700"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Previous
//                 </motion.button>
//                 <span className="text-sm text-gray-700">
//                   Page {eventsPage} of {totalEventsPages}
//                 </span>
//                 <motion.button
//                   onClick={handleNextEventsPage}
//                   disabled={eventsPage === totalEventsPages}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
//                     eventsPage === totalEventsPages
//                       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       : "bg-red-600 text-white hover:bg-red-700"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Next
//                 </motion.button>
//               </div>
//             </>
//           )}
//         </section>

//         {/* Gallery Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//             <Image className="text-purple-500" size={22} /> Gallery Items
//           </h2>
//           {currentGalleryItems.length === 0 ? (
//             <motion.p
//               className="text-gray-600 text-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               No gallery items found.
//             </motion.p>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                 {currentGalleryItems.map((item) => (
//                   <motion.div
//                     key={item._id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <GalleryItem
//                       item={item}
//                       onDelete={handleDeleteGalleryItem}
//                       isAdmin={true}
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//               {/* Gallery Pagination */}
//               <div className="mt-8 flex justify-center items-center space-x-4">
//                 <motion.button
//                   onClick={handlePreviousGalleryPage}
//                   disabled={galleryPage === 1}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
//                     galleryPage === 1
//                       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       : "bg-red-600 text-white hover:bg-red-700"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Previous
//                 </motion.button>
//                 <span className="text-sm text-gray-700">
//                   Page {galleryPage} of {totalGalleryPages}
//                 </span>
//                 <motion.button
//                   onClick={handleNextGalleryPage}
//                   disabled={galleryPage === totalGalleryPages}
//                   className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
//                     galleryPage === totalGalleryPages
//                       ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       : "bg-red-600 text-white hover:bg-red-700"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Next
//                 </motion.button>
//               </div>
//             </>
//           )}
//         </section>

//         {/* Contacts Section */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//             <Mail className="text-green-500" size={22} /> Contact Messages
//           </h2>
//           {contacts.length === 0 ? (
//             <motion.p
//               className="text-gray-600 text-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               No contact messages found.
//             </motion.p>
//           ) : (
//             <div className="grid gap-6">
//               {contacts.map((contact) => (
//                 <motion.div
//                   key={contact._id}
//                   className="bg-white shadow-lg rounded-xl p-5 border border-gray-100 hover:shadow-xl transition"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <p className="mb-1 text-gray-900">
//                     <strong>Name:</strong> {contact.name}
//                   </p>
//                   <p className="mb-1 text-gray-900">
//                     <strong>Email:</strong> {contact.email}
//                   </p>
//                   <p className="mb-2 text-gray-900">
//                     <strong>Message:</strong> {contact.message}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {new Date(contact.createdAt).toLocaleDateString()}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </section>

//         {/* Users Section */}
//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//             <Users className="text-indigo-500" size={22} /> Users
//           </h2>
//           {users.length === 0 ? (
//             <motion.p
//               className="text-gray-600 text-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               No users found.
//             </motion.p>
//           ) : (
//             <div className="grid gap-6">
//               {users.map((user) => (
//                 <motion.div
//                   key={user._id}
//                   className="bg-white shadow-lg rounded-xl p-5 border border-gray-100 hover:shadow-xl transition"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <p className="mb-1 text-gray-900">
//                     <strong>Name:</strong> {user.name}
//                   </p>
//                   <p className="mb-1 text-gray-900">
//                     <strong>Email:</strong> {user.email}
//                   </p>
//                   <p className="mb-1 text-gray-900">
//                     <strong>Role:</strong> {user.role}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     Joined: {new Date(user.createdAt).toLocaleDateString()}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </section>
//       </main>
//     </motion.div>
//   );
// }

// export default AdminDashboard;

// AdminDashboard.jsx (Updated: New color palette, added skeletons for loading, improved pagination accessibility, added rangoli patterns if needed, better spacing and typography)
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  getEvents,
  deleteEvent,
  getGalleryItems,
  deleteGalleryItem,
  getContacts,
  getUsers,
} from "../api";
import EventCard from "../components/EventCard";
import GalleryItem from "../components/GalleryItem";
import {
  Trash2,
  Edit,
  Plus,
  Image,
  Users,
  Mail,
  ArrowLeft,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [eventsPage, setEventsPage] = useState(1);
  const [galleryPage, setGalleryPage] = useState(1);
  const eventsPerPage = 6;
  const galleryItemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          eventsResponse,
          galleryResponse,
          contactsResponse,
          usersResponse,
        ] = await Promise.all([
          getEvents({ limit: 100 }),
          getGalleryItems({ limit: 100 }),
          getContacts(),
          getUsers(),
        ]);
        setEvents(eventsResponse.events);
        setGalleryItems(galleryResponse.items);
        setContacts(contactsResponse);
        setUsers(usersResponse);
        setError("");
      } catch (err) {
        setError(err.message || "Failed to fetch data");
        toast.error(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(id);
        setEvents(events.filter((event) => event._id !== id));
        toast.success("Event deleted successfully");
      } catch (err) {
        setError(err.message);
        toast.error(err.message || "Failed to delete event");
      }
    }
  };

  const handleDeleteGalleryItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      try {
        await deleteGalleryItem(id);
        setGalleryItems(galleryItems.filter((item) => item._id !== id));
        toast.success("Gallery item deleted successfully");
      } catch (err) {
        setError(err.message);
        toast.error(err.message || "Failed to delete gallery item");
      }
    }
  };

  // Pagination logic for Events
  const totalEventsPages = Math.ceil(events.length / eventsPerPage);
  const indexOfLastEvent = eventsPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePreviousEventsPage = () => {
    if (eventsPage > 1) {
      setEventsPage(eventsPage - 1);
    }
  };

  const handleNextEventsPage = () => {
    if (eventsPage < totalEventsPages) {
      setEventsPage(eventsPage + 1);
    }
  };

  // Pagination logic for Gallery Items
  const totalGalleryPages = Math.ceil(
    galleryItems.length / galleryItemsPerPage
  );
  const indexOfLastGalleryItem = galleryPage * galleryItemsPerPage;
  const indexOfFirstGalleryItem = indexOfLastGalleryItem - galleryItemsPerPage;
  const currentGalleryItems = galleryItems.slice(
    indexOfFirstGalleryItem,
    indexOfLastGalleryItem
  );

  const handlePreviousGalleryPage = () => {
    if (galleryPage > 1) {
      setGalleryPage(galleryPage - 1);
    }
  };

  const handleNextGalleryPage = () => {
    if (galleryPage < totalGalleryPages) {
      setGalleryPage(galleryPage + 1);
    }
  };

  if (loading) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Skeleton width={200} height={20} className="animate-pulse" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-100 font-poppins mt-11"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Admin Dashboard
          </h1>
          <Link
            to="/"
            className="flex items-center gap-2 text-[#990000] hover:text-[#FF9933] transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft size={24} />
            Back
          </Link>
        </div>

        {error && (
          <motion.p
            className="text-[#990000] mb-6 p-3 bg-red-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}

        {/* Events Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              <Image className="text-[#FF9933]" size={22} /> Events
            </h2>
            <Link
              to="/admin/create-event"
              className="px-5 py-2 rounded-lg bg-[#990000] text-white hover:bg-[#FF9933] flex items-center gap-2 shadow-md"
            >
              <Plus size={18} /> Create Event
            </Link>
          </div>
          {currentEvents.length === 0 ? (
            <motion.p
              className="text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              No events found.
            </motion.p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentEvents.map((event) => (
                  <motion.div
                    key={event._id}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <EventCard event={event} />
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        onClick={() => handleDeleteEvent(event._id)}
                        className="px-3 py-1 bg-[#990000] text-white rounded shadow hover:bg-[#FF9933] flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Trash2 size={14} /> Delete
                      </motion.button>
                      <Link
                        to={`/admin/edit-event/${event._id}`}
                        className="px-3 py-1 bg-[#FF9933] text-white rounded shadow hover:bg-[#990000] flex items-center gap-1"
                      >
                        <Edit size={14} /> Edit
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Events Pagination */}
              <div className="mt-8 flex justify-center items-center space-x-4">
                <motion.button
                  onClick={handlePreviousEventsPage}
                  disabled={eventsPage === 1}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    eventsPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#990000] text-white hover:bg-[#FF9933]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous events page"
                >
                  Previous
                </motion.button>
                <span className="text-sm text-gray-700">
                  Page {eventsPage} of {totalEventsPages}
                </span>
                <motion.button
                  onClick={handleNextEventsPage}
                  disabled={eventsPage === totalEventsPages}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    eventsPage === totalEventsPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#990000] text-white hover:bg-[#FF9933]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next events page"
                >
                  Next
                </motion.button>
              </div>
            </>
          )}
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Image className="text-[#990000]" size={22} /> Gallery Items
          </h2>
          {currentGalleryItems.length === 0 ? (
            <motion.p
              className="text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              No gallery items found.
            </motion.p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {currentGalleryItems.map((item) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GalleryItem
                      item={item}
                      onDelete={handleDeleteGalleryItem}
                      isAdmin={true}
                    />
                  </motion.div>
                ))}
              </div>
              {/* Gallery Pagination */}
              <div className="mt-8 flex justify-center items-center space-x-4">
                <motion.button
                  onClick={handlePreviousGalleryPage}
                  disabled={galleryPage === 1}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    galleryPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#990000] text-white hover:bg-[#FF9933]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous gallery page"
                >
                  Previous
                </motion.button>
                <span className="text-sm text-gray-700">
                  Page {galleryPage} of {totalGalleryPages}
                </span>
                <motion.button
                  onClick={handleNextGalleryPage}
                  disabled={galleryPage === totalGalleryPages}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    galleryPage === totalGalleryPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#990000] text-white hover:bg-[#FF9933]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next gallery page"
                >
                  Next
                </motion.button>
              </div>
            </>
          )}
        </section>

        {/* Contacts Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Mail className="text-[#FF9933]" size={22} /> Contact Messages
          </h2>
          {contacts.length === 0 ? (
            <motion.p
              className="text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              No contact messages found.
            </motion.p>
          ) : (
            <div className="grid gap-6">
              {contacts.map((contact) => (
                <motion.div
                  key={contact._id}
                  className="bg-white shadow-lg rounded-xl p-5 border border-[#FF9933]/50 hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-1 text-gray-900">
                    <strong>Name:</strong> {contact.name}
                  </p>
                  <p className="mb-1 text-gray-900">
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p className="mb-2 text-gray-900">
                    <strong>Message:</strong> {contact.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Users Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="text-[#990000]" size={22} /> Users
          </h2>
          {users.length === 0 ? (
            <motion.p
              className="text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              No users found.
            </motion.p>
          ) : (
            <div className="grid gap-6">
              {users.map((user) => (
                <motion.div
                  key={user._id}
                  className="bg-white shadow-lg rounded-xl p-5 border border-[#FF9933]/50 hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-1 text-gray-900">
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p className="mb-1 text-gray-900">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="mb-1 text-gray-900">
                    <strong>Role:</strong> {user.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    Joined: {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Telugu&display=swap");
        .telugu-text {
          font-family: "Noto Serif Telugu", Poppins, sans-serif;
        }
      `}</style>
    </motion.div>
  );
}

export default AdminDashboard;
