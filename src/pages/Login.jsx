// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "../api";

// function Login({ setUser }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login(formData);
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("user", JSON.stringify(response.user));
//       setUser(response.user);
//       navigate(
//         response.user.role === "admin" ? "/admin/dashboard" : "/profile"
//       );
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Login</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       <div className="max-w-md mx-auto">
//         <div className="space-y-4">
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
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { login } from "../api";

// function Login({ setUser }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const response = await login(formData);
//       localStorage.setItem("token", response.token);
//       localStorage.setItem("user", JSON.stringify(response.user));
//       setUser(response.user);
//       navigate(
//         response.user.role === "admin" ? "/admin/dashboard" : "/profile"
//       );
//     } catch (err) {
//       setError(err.message || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
//       <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
//         <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
//           Welcome Back 👋
//         </h1>
//         <p className="text-center text-gray-500 mb-6">
//           Please sign in to continue
//         </p>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-colors duration-300 disabled:opacity-60"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         <p className="text-center text-gray-500 text-sm mt-6">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// Login.jsx (Updated: New color palette, improved form accessibility, added animations, better spacing, error styling, consistent with register)
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api";
import { motion } from "framer-motion";

function Login({ setUser }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await login(formData);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
      navigate(
        response.user.role === "admin" ? "/admin/dashboard" : "/profile"
      );
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF9933]/5 to-white flex items-center justify-center px-4">
      <motion.div
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please sign in to continue
        </p>

        {error && (
          <motion.div
            className="mb-4 p-3 bg-red-100 text-[#990000] rounded-lg text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              aria-required="true"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-[#FF9933]/50 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF9933] hover:bg-[#990000] text-white font-semibold py-2 rounded-lg shadow-md transition-colors duration-300 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#990000] hover:underline hover:text-[#FF9933]"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
