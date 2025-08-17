// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Logo / Title */}
//         <h4 className="font-extrabold text-xl mb-4 md:mb-0">Siva Seva Youth</h4>

//         {/* Navigation Links */}
//         <nav className="flex space-x-6 text-sm font-medium">
//           <Link
//             to="/about"
//             className="hover:text-yellow-400 transition duration-300 hover:underline"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-yellow-400 transition duration-300 hover:underline"
//           >
//             Contact
//           </Link>
//         </nav>
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-700 my-6 max-w-6xl mx-auto" />

//       {/* Text Sections */}
//       <div className="max-w-6xl mx-auto text-center text-gray-400 text-xs space-y-2">
//         <p>Celebrating traditions, creating memories, building community</p>
//         <p>
//           Made with <span className="text-red-500">❤️</span> for our community
//         </p>
//         <p>© 2024 Siva Seva Youth. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// Footer.jsx (with enhancements: social icons, animated hover, festival background)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Footer() {
//   return (
//     <footer
//       className="bg-gray-900 text-white py-6 px-4"
//       style={{
//         background:
//           "linear-gradient(to bottom, #1a202c, rgba(255, 69, 0, 0.1))",
//         // Add rangoli-pattern.png as background if available: url('rangoli-pattern.png')
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Logo / Title */}
//         <h4 className="font-extrabold text-xl mb-4 md:mb-0">Siva Seva Youth</h4>

//         {/* Navigation Links */}
//         <nav className="flex space-x-6 text-sm font-medium">
//           <Link
//             to="/about"
//             className="hover:text-yellow-400 transition duration-300 hover:underline"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-yellow-400 transition duration-300 hover:underline"
//           >
//             Contact
//           </Link>
//         </nav>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex gap-4 justify-center mt-4">
//         {[
//           {
//             icon: "📺",
//             url: "https://www.youtube.com/@upendragoud751",
//             label: "YouTube",
//           },
//           { icon: "📷", url: "https://instagram.com", label: "Instagram" },
//         ].map((social, idx) => (
//           <motion.a
//             key={idx}
//             href={social.url}
//             className="text-2xl"
//             whileHover={{ scale: 1.2, rotate: 10 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label={social.label}
//           >
//             {social.icon}
//           </motion.a>
//         ))}
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-700 my-6 max-w-6xl mx-auto" />

//       {/* Text Sections */}
//       <div className="max-w-6xl mx-auto text-center text-gray-100 text-xs space-y-2">
//         <p>Celebrating traditions, creating memories, building community</p>
//         <p>
//           Made with <span className="text-red-500">❤️</span> for our community
//         </p>
//         <p>© 2024 Siva Seva Youth. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// Footer.jsx (Updated: Updated colors, added gold accents, improved accessibility)
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg"; // Importing the logo from the assets folder

function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white py-6 px-4"
      style={{
        background:
          "linear-gradient(to bottom, #1a202c, rgba(255, 153, 51, 0.1))", // Updated to saffron tint
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Title */}
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
        <h4 className="font-extrabold text-xl mb-4 md:mb-0">Siva Seva Youth</h4>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <Link
            to="/about"
            className="hover:text-[#FFD700] transition duration-300 hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#FFD700] transition duration-300 hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 justify-center mt-4">
        {[
          {
            icon: "📺",
            url: "https://www.youtube.com/@upendragoud751",
            label: "YouTube",
          },
          {
            icon: "📷",
            url: "https://www.instagram.com/gossiphub247/",
            label: "Instagram",
          },
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.url}
            className="text-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <hr className="border-[#FFD700]/30 my-6 max-w-6xl mx-auto" />

      {/* Text Sections */}
      <div className="max-w-6xl mx-auto text-center text-gray-100 text-xs space-y-2">
        <p>Celebrating traditions, creating memories, building community</p>
        <p>
          Made with <span className="text-[#990000]">❤️</span> for our community
        </p>
        <p>© 2024 Siva Seva Youth. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
