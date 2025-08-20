// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//     setIsOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-500 backdrop-blur-md text-white shadow-lg transition-colors duration-500">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-3xl font-extrabold tracking-wider hover:text-yellow-300 transition-colors duration-300"
//         >
//           Siva Seva Youth
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 font-medium text-lg">
//           <Link
//             to="/"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/events"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Events
//           </Link>
//           <Link
//             to="/gallery"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/youtube"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             YouTube
//           </Link>
//           {user ? (
//             <>
//               {user.role === "admin" && (
//                 <Link
//                   to="/admin/dashboard"
//                   className="hover:text-yellow-300 transition-colors duration-300"
//                 >
//                   Admin Dashboard
//                 </Link>
//               )}
//               <motion.button
//                 onClick={handleLogout}
//                 className="hover:text-yellow-300 transition-colors duration-300"
//                 aria-label="Logout"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Logout
//               </motion.button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="hover:text-yellow-300 transition-colors duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <motion.button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <svg
//             className="w-8 h-8 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden bg-orange-700 px-6 py-5 space-y-4 text-lg font-medium transition-colors duration-500"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//         >
//           <Link
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className="block hover:text-yellow-300 transition-colors duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/events"
//             onClick={() => setIsOpen(false)}
//             className="block hover:text-yellow-300 transition-colors duration-300"
//           >
//             Events
//           </Link>
//           <Link
//             to="/gallery"
//             onClick={() => setIsOpen(false)}
//             className="block hover:text-yellow-300 transition-colors duration-300"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/youtube"
//             onClick={() => setIsOpen(false)}
//             className="block hover:text-yellow-300 transition-colors duration-300"
//           >
//             YouTube
//           </Link>
//           {user ? (
//             <>
//               {user.role === "admin" && (
//                 <Link
//                   to="/admin/dashboard"
//                   onClick={() => setIsOpen(false)}
//                   className="block hover:text-yellow-300 transition-colors duration-300"
//                 >
//                   Admin Dashboard
//                 </Link>
//               )}
//               <motion.button
//                 onClick={handleLogout}
//                 className="block hover:text-yellow-300 transition-colors duration-300 w-full text-left"
//                 aria-label="Logout"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Logout
//               </motion.button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 onClick={() => setIsOpen(false)}
//                 className="block hover:text-yellow-300 transition-colors duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 onClick={() => setIsOpen(false)}
//                 className="block bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.jsx (with enhancements: glow on scroll, icons, staggered mobile menu animations)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// function Navbar({ user, setUser }) {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector("nav");
//       if (window.scrollY > 50) {
//         nav.classList.add("scrolled");
//       } else {
//         nav.classList.remove("scrolled");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-500 backdrop-blur-md text-white shadow-lg transition-colors duration-500 transition-shadow duration-300">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-3xl font-extrabold tracking-wider hover:text-yellow-300 transition-colors duration-300"
//         >
//           Siva Seva Youth
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8 font-medium text-lg">
//           <Link
//             to="/"
//             className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
//           >
//             <span>🏠</span> Home
//           </Link>
//           <Link
//             to="/events"
//             className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
//           >
//             <span>🪔</span> Events
//           </Link>
//           <Link
//             to="/gallery"
//             className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
//           >
//             <span>📸</span> Gallery
//           </Link>
//           <Link
//             to="/youtube"
//             className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
//           >
//             <span>📺</span> YouTube
//           </Link>
//           {user ? (
//             <>
//               {user.role === "admin" && (
//                 <Link
//                   to="/admin/dashboard"
//                   className="hover:text-yellow-300 transition-colors duration-300"
//                 >
//                   Admin Dashboard
//                 </Link>
//               )}
//               <motion.button
//                 onClick={handleLogout}
//                 className="hover:text-yellow-300 transition-colors duration-300"
//                 aria-label="Logout"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 Logout
//               </motion.button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="hover:text-yellow-300 transition-colors duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <motion.button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <svg
//             className="w-8 h-8 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           className="md:hidden bg-orange-700 px-6 py-5 space-y-4 text-lg font-medium transition-colors duration-500"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//         >
//           {[
//             { path: "/", label: "Home", icon: "🏠" },
//             { path: "/events", label: "Events", icon: "🪔" },
//             { path: "/gallery", label: "Gallery", icon: "📸" },
//             { path: "/youtube", label: "YouTube", icon: "📺" },
//           ].map((item, idx) => (
//             <motion.div
//               key={item.label}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: idx * 0.1 }}
//             >
//               <Link
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className="block flex items-center gap-2 hover:text-yellow-300 transition-colors duration-300"
//               >
//                 <span>{item.icon}</span> {item.label}
//               </Link>
//             </motion.div>
//           ))}
//           {user ? (
//             <>
//               {user.role === "admin" && (
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <Link
//                     to="/admin/dashboard"
//                     onClick={() => setIsOpen(false)}
//                     className="block hover:text-yellow-300 transition-colors duration-300"
//                   >
//                     Admin Dashboard
//                   </Link>
//                 </motion.div>
//               )}
//               <motion.button
//                 onClick={handleLogout}
//                 className="block hover:text-yellow-300 transition-colors duration-300 w-full text-left"
//                 aria-label="Logout"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Logout
//               </motion.button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 onClick={() => setIsOpen(false)}
//                 className="block hover:text-yellow-300 transition-colors duration-300"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 onClick={() => setIsOpen(false)}
//                 className="block bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// Navbar.jsx (Updated: Changed colors to saffron/gold gradient, added diya icon to logo, improved accessibility with ARIA, standardized spacing)
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/sivasevalogo.svg"; // Importing the logo from the assets folder

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF9933] to-[#FFD700] backdrop-blur-md text-white shadow-lg transition-colors duration-500 transition-shadow duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity duration-300"
          aria-label="Siva Seva Youth Home"
        >
          <motion.img
            src={logo}
            alt="Siva Seva Youth Logo"
            className="h-12 w-auto rounded-xl"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-lg">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-[#990000] transition-colors duration-300"
          >
            <span>🏠</span> Home
          </Link>
          <Link
            to="/events"
            className="flex items-center gap-2 hover:text-[#990000] transition-colors duration-300"
          >
            <span>🪔</span> Events
          </Link>
          <Link
            to="/gallery"
            className="flex items-center gap-2 hover:text-[#990000] transition-colors duration-300"
          >
            <span>📸</span> Gallery
          </Link>
          <Link
            to="/youtube"
            className="flex items-center gap-2 hover:text-[#990000] transition-colors duration-300"
          >
            <span>📺</span> YouTube
          </Link>
          {user ? (
            <>
              {user.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="hover:text-[#990000] transition-colors duration-300"
                >
                  Admin Dashboard
                </Link>
              )}
              <motion.button
                onClick={handleLogout}
                className="hover:text-[#990000] transition-colors duration-300"
                aria-label="Logout"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-[#990000] transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-[#990000] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <motion.button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-b from-[#FF9933] to-[#990000] px-6 py-5 space-y-4 text-lg font-medium transition-colors duration-500"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {[
            { path: "/", label: "Home", icon: "🏠" },
            { path: "/events", label: "Events", icon: "🪔" },
            { path: "/gallery", label: "Gallery", icon: "📸" },
            { path: "/youtube", label: "YouTube", icon: "📺" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block flex items-center gap-2 hover:text-[#FFD700] transition-colors duration-300"
              >
                <span>{item.icon}</span> {item.label}
              </Link>
            </motion.div>
          ))}
          {user ? (
            <>
              {user.role === "admin" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-[#FFD700] transition-colors duration-300"
                  >
                    Admin Dashboard
                  </Link>
                </motion.div>
              )}
              <motion.button
                onClick={handleLogout}
                className="block hover:text-[#FFD700] transition-colors duration-300 w-full text-left"
                aria-label="Logout"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block hover:text-[#FFD700] transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block bg-white text-[#990000] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Register
              </Link>
            </>
          )}
        </motion.div>
      )}

      <style jsx>{`
        .scrolled {
          background: linear-gradient(
            to right,
            rgba(255, 153, 51, 0.9),
            rgba(255, 215, 0, 0.9)
          );
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
