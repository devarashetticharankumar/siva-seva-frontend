// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import EventDetail from "./pages/EventDetail";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import CreateEvent from "./pages/admin/CreateEvent";
// import Login from "./pages/admin/Login";
// import Profile from "./pages/Profile";

// export default function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/events/:id" element={<EventDetail />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/admin/create-event" element={<CreateEvent />} />
//             <Route path="/admin/create-event/:id" element={<CreateEvent />} />
//             <Route path="/admin/login" element={<Login />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "./api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import YouTubeHome from "./pages/YouTubeHome";

import "./index.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response);
      } catch (err) {
        setUser(null);
      }
    };
    if (localStorage.getItem("token")) fetchUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Home />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/events",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Events />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/events/:id",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <EventDetail />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Gallery />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Contact />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <About />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Login setUser={setUser} />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Register setUser={setUser} />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute user={user}>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <Profile user={user} />
          </main>
          <Footer />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/create-event",
      element: (
        <ProtectedRoute user={user} adminOnly>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <CreateEvent />
          </main>
          <Footer />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/edit-event/:id",
      element: (
        <ProtectedRoute user={user} adminOnly>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <EditEvent />
          </main>
          <Footer />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute user={user} adminOnly>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <AdminDashboard />
          </main>
          <Footer />
        </ProtectedRoute>
      ),
    },
    // New route for YouTubeHome page
    {
      path: "/youtube",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
          <main className="min-h-screen">
            <YouTubeHome />
          </main>
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
