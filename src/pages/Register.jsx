// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "../api";

// function Register({ setUser }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await register(formData);
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("user", JSON.stringify(response.user));
//       setUser(response.user);
//       navigate("/profile");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Register</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       <div className="max-w-md mx-auto">
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-2 border rounded"
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "../api";

// function Register({ setUser }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await register(formData);
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("user", JSON.stringify(response.user));
//       setUser(response.user);
//       navigate("/profile");
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Create Your Account
//         </h1>

//         {error && (
//           <div className="mb-4 text-sm text-red-600 bg-red-100 p-3 rounded-lg">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Name */}
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder=" "
//             />
//             <label
//               htmlFor="name"
//               className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
//             >
//               Name
//             </label>
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder=" "
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
//             >
//               Email
//             </label>
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               placeholder=" "
//             />
//             <label
//               htmlFor="password"
//               className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
//             >
//               Password
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-500">
//           Already have an account?{" "}
//           <a
//             href="/login"
//             className="text-blue-600 hover:underline hover:text-blue-700"
//           >
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;

// Register.jsx (Updated: New color palette, improved form accessibility, added animations, better spacing, error styling)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api";
import { motion } from "framer-motion";

function Register({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await register(formData);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
      navigate("/profile");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>

        {error && (
          <motion.div
            className="mb-4 text-sm text-[#990000] bg-red-100 p-3 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-3 pt-5 pb-2 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              placeholder=" "
              aria-required="true"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#990000]"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-3 pt-5 pb-2 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              placeholder=" "
              aria-required="true"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#990000]"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="peer w-full px-3 pt-5 pb-2 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              placeholder=" "
              aria-required="true"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-[#990000]"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FF9933] hover:bg-[#990000] text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#990000] hover:underline hover:text-[#FF9933]"
          >
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;
