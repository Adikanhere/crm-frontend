// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Login from "./pages/Login.jsx";
// import Dashboard from './pages/Dashboard'
// import Customers from './pages/Customers'
// import NavBar from './components/NavBar'

// function App() {
//   const isLoggedIn = Boolean(localStorage.getItem('crm_user'))

//   return (
//     <>
//       {isLoggedIn && <NavBar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/login" />} />
//         </Routes>
//       </div>

//     </>
//   )
// }

// export default App




// src/App.jsx
// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";

// // Pages
// function Login() {
//   return (
//     <div className="container mt-5">
//       <h2>Login Page</h2>
//       <p>This is where your login form will go.</p>
//       <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div className="container mt-5">
//       <h2>Dashboard</h2>
//       <p>Welcome to your dashboard!</p>
//       <Link to="/customers" className="btn btn-secondary">View Customers</Link>
//     </div>
//   );
// }

// function Customers() {
//   return (
//     <div className="container mt-5">
//       <h2>Customers</h2>
//       <p>Here you will display customer list.</p>
//       <Link to="/dashboard" className="btn btn-outline-primary">Back to Dashboard</Link>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/customers" element={<Customers />} />
//     </Routes>
//   );
// }



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// import Navbar from "./components/NavBar";

// function Login() {
//   return (
//     <div className="container mt-5">
//       <h2>Login Page</h2>
//       <p>This is where your login form will go.</p>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div className="container mt-5">
//       <h2>Dashboard</h2>
//       <p>Welcome to your dashboard!</p>
//     </div>
//   );
// }

// function Customers() {
//   return (
//     <div className="container mt-5">
//       <h2>Customers</h2>
//       <p>Here you will display customer list.</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/customers" element={<Customers />} />
//       </Routes>
//     </>
//   );
// }




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Login from './pages/Login.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Customers from './pages/Customers.jsx';


// export default function App() {
//   const isLoggedIn = Boolean(localStorage.getItem('crm_user'));
//   return (
//     <>
//       {isLoggedIn && <Navbar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login />} />
//           <Route path="/customers" element={isLoggedIn ? <Customers /> : <Login />} />
//         </Routes>
//       </div>
//     </>
//   );
// }




// src/App.jsx
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";

// export default function App() {
//   const isLoggedIn = Boolean(localStorage.getItem("crm_user"));

//   return (
//     <>
//       {/* Show Navbar only if logged in */}
//       {isLoggedIn && <Navbar />}

//       <div className="container mt-4">
//         <Routes>
//           {/* Default route → if logged in go dashboard, else login */}
//           <Route
//             path="/"
//             element={
//               isLoggedIn ? <Navigate to="/dashboard" /> : <Login />
//             }
//           />

//           {/* Protected routes */}
//           <Route
//             path="/dashboard"
//             element={
//               isLoggedIn ? <Dashboard /> : <Navigate to="/" />
//             }
//           />
//           <Route
//             path="/customers"
//             element={
//               isLoggedIn ? <Customers /> : <Navigate to="/" />
//             }
//           />

//           {/* Catch-all route */}
//           <Route
//             path="*"
//             element={<h3 className="text-center mt-5">Page Not Found</h3>}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }


// src/App.jsx
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";

// export default function App() {
//   const isLoggedIn = Boolean(localStorage.getItem("crm_user"));

//   return (
//     <>
//       {isLoggedIn && <Navbar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/customers"
//             element={isLoggedIn ? <Customers /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/leads"
//             element={isLoggedIn ? <Leads /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/opportunities"
//             element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }




// src/App.jsx
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";

// export default function App() {
//   const isLoggedIn = Boolean(localStorage.getItem("crm_user"));

//   return (
//     <>
//       {isLoggedIn && <Navbar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               isLoggedIn ? <Navigate to="/dashboard" /> : <h2>Please Login</h2>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/customers"
//             element={isLoggedIn ? <Customers /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/leads"
//             element={isLoggedIn ? <Leads /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/opportunities"
//             element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }



// src/App.jsx
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import Login from "./pages/Login.jsx"; // Add Login component

// export default function App() {
//   const isLoggedIn = Boolean(localStorage.getItem("crm_user"));

//   return (
//     <>
//       {isLoggedIn && <Navbar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
//           <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
//           <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
//           <Route path="/leads" element={isLoggedIn ? <Leads /> : <Navigate to="/" />} />
//           <Route path="/opportunities" element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />} />
//         </Routes>
//       </div>
//     </>
//   );
// }




// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import Login from "./pages/Login.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));

//   return (
//     <>
//       {isLoggedIn && <Navbar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               isLoggedIn ? (
//                 <Navigate to="/dashboard" />
//               ) : (
//                 <Login setIsLoggedIn={setIsLoggedIn} />
//               )
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/customers"
//             element={isLoggedIn ? <Customers /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/leads"
//             element={isLoggedIn ? <Leads /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/opportunities"
//             element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }



// src/App.jsx
// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import Login from "./pages/Login.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));

//   return (
//     <>
//       {isLoggedIn && <Navbar />}
//       <div className="container mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route
//             path="/dashboard"
//             element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/customers"
//             element={isLoggedIn ? <Customers /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/leads"
//             element={isLoggedIn ? <Leads /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/opportunities"
//             element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }




// App.jsx
// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import Login from "./pages/Login.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));

//   return (
//     <>
//       {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
//       <div className="container mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route
//             path="/dashboard"
//             element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/customers"
//             element={isLoggedIn ? <Customers /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/leads"
//             element={isLoggedIn ? <Leads /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/opportunities"
//             element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </>
//   );
// }



// App.jsx
// import React, { useState } from "react";
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import Login from "./pages/Login.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));
//   const location = useLocation();

//   // Only show footer on authenticated pages
//   const showFooter = isLoggedIn && ["/dashboard", "/customers", "/leads", "/opportunities"].includes(location.pathname);

//   return (
//     <>
//       {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
//       <div className="container mt-4">
//         <Routes>
//           <Route
//             path="/"
//             element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
//           <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
//           <Route path="/leads" element={isLoggedIn ? <Leads /> : <Navigate to="/" />} />
//           <Route path="/opportunities" element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />} />
//         </Routes>
//       </div>
//       {showFooter && <Footer />}
//     </>
//   );
// }



// App.jsx
// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import HistoricalData from "./pages/HistoricalData.jsx";
// import Users from "./pages/Users.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));

//   return (
//     <div className="d-flex flex-column min-vh-100 bg-red">
//       {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
//       <div className="container mt-4 flex-grow-1">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
//           <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
//           <Route path="/leads" element={isLoggedIn ? <Leads /> : <Navigate to="/" />} />
//           <Route path="/opportunities" element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />} />
//           <Route path="/historical" element={isLoggedIn ? <HistoricalData /> : <Login />} />
//           <Route path="/users" element={isLoggedIn ? <Users /> : <Navigate to="/" />} />

//         </Routes>
//       </div>
//       {isLoggedIn && <Footer />}
//     </div>
//   );
// }





// App.jsx
// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Customers from "./pages/Customers.jsx";
// import Leads from "./pages/Leads.jsx";
// import Opportunities from "./pages/Opportunities.jsx";
// import HistoricalData from "./pages/HistoricalData.jsx";
// import Users from "./pages/Users.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));

//   return (
//     <div className="d-flex flex-column min-vh-100 bg-red">
//       {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
//       <div className="container mt-4 flex-grow-1">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
//           <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
//           <Route path="/leads" element={isLoggedIn ? <Leads /> : <Navigate to="/" />} />
//           <Route path="/opportunities" element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />} />
//           <Route path="/historical" element={isLoggedIn ? <HistoricalData /> : <Login />} />
//           <Route path="/users" element={isLoggedIn ? <Users /> : <Navigate to="/" />} />
//         </Routes>
//       </div>
//       {isLoggedIn && <Footer />}
//     </div>
//   );
// }




// App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Customers from "./pages/Customers.jsx";
import Leads from "./pages/Leads.jsx";
import Opportunities from "./pages/Opportunities.jsx";
import HistoricalData from "./pages/HistoricalData.jsx";
import Users from "./pages/Users.jsx";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("crm_user")));

  return (
    <div className="d-flex flex-column min-vh-100 bg-red">
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <div className="container mt-4 flex-grow-1">
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
          <Route path="/leads" element={isLoggedIn ? <Leads /> : <Navigate to="/" />} />
          <Route path="/opportunities" element={isLoggedIn ? <Opportunities /> : <Navigate to="/" />} />
          <Route path="/historical" element={isLoggedIn ? <HistoricalData /> : <Login />} />
          <Route path="/users" element={isLoggedIn ? <Users /> : <Navigate to="/" />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      {isLoggedIn && <Footer />}

      {/* 🔔 Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}
