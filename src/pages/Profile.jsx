// function Profile({ user }) {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Profile</h1>
//       <p className="text-lg mb-2">Name: {user.name}</p>
//       <p className="text-lg mb-2">Email: {user.email}</p>
//       <p className="text-lg mb-2">Role: {user.role}</p>
//     </div>
//   );
// }

// export default Profile;

import { User, Mail, Shield } from "lucide-react";

function Profile({ user }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          {/* Name */}
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <User className="text-blue-500" size={20} />
            <span className="text-gray-700">{user.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-500" size={20} />
            <span className="text-gray-700">{user.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="text-purple-500" size={20} />
            <span className="text-gray-700 capitalize">{user.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
