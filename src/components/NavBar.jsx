// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/dashboard">CRM</Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">Dashboard</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/customers">Customers</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Logout</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Navbar() {
//   const { logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/dashboard">CRM</Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">Dashboard</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/customers">Customers</Link>
//             </li>
//             <li className="nav-item">
//               <button className="btn btn-sm btn-danger ms-2" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }




// src/components/Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">CRM</span>
//         <div>
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">Dashboard</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/customers">Customers</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/leads">Leads</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/opportunities">Opportunities</Link>
//             </li>
//           </ul>
//         </div>
//         <button className="btn btn-outline-light" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }



// src/components/Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false); // Important: update App state
//     navigate("/"); // go to login
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">CRM</span>
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <Link className="nav-link" to="/dashboard">Dashboard</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/customers">Customers</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/leads">Leads</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/opportunities">Opportunities</Link>
//           </li>
//         </ul>
//         <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// }




// Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false); // Update App state
//     navigate("/"); // redirect to login
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">CRM</span>
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <Link className="nav-link" to="/dashboard">Dashboard</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/customers">Customers</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/leads">Leads</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/opportunities">Opportunities</Link>
//           </li>
//         </ul>
//         <button className="btn btn-outline-light" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }



// // Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">CRM</span>
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           {["/dashboard", "/customers", "/leads", "/opportunities", "/historical"].map(
//             (path, idx) => (
//               <motion.li
//                 key={idx}
//                 className="nav-item"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Link className="nav-link" to={path}>
//                   {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                 </Link>
//               </motion.li>
//             )
//           )}
//         </ul>
//         <button className="btn btn-outline-light" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }




// Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">CRM</span>

//         {/* Hamburger button for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible menu */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {["/dashboard", "/customers", "/leads", "/opportunities", "/historical"].map(
//               (path, idx) => (
//                 <motion.li
//                   key={idx}
//                   className="nav-item"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Link className="nav-link" to={path}>
//                     {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                   </Link>
//                 </motion.li>
//               )
//             )}
//           </ul>
//           <motion.button
//             className="btn btn-outline-light"
//             onClick={handleLogout}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Logout
//           </motion.button>
//         </div>
//       </div>
//     </nav>
//   );
// }




// src/components/Navbar.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css"; // Custom CSS for vertical mobile menu

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const links = [
//     { path: "/dashboard", label: "Dashboard" },
//     { path: "/customers", label: "Customers" },
//     { path: "/leads", label: "Leads" },
//     { path: "/opportunities", label: "Opportunities" },
//     { path: "/historical", label: "Historical" },
//   ];

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark bg-dark fixed-top">
//         <div className="container-fluid">
//           <span className="navbar-brand">CRM</span>
//           <button
//             className="btn btn-outline-light d-lg-none"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             ☰
//           </button>

//           {/* Desktop links */}
//           <div className="d-none d-lg-flex">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
//               {links.map((link, idx) => (
//                 <li key={idx} className="nav-item me-3">
//                   <Link className="nav-link text-white" to={link.path}>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <button className="btn btn-outline-light" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile vertical menu */}
//       <div className={`mobile-sidebar bg-dark text-white ${sidebarOpen ? "open" : ""}`}>
//         <ul className="nav flex-column p-3">
//           {links.map((link, idx) => (
//             <li key={idx} className="nav-item mb-2">
//               <Link
//                 className="nav-link text-white"
//                 to={link.path}
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//           <li className="nav-item mt-3">
//             <button className="btn btn-outline-light w-100" onClick={handleLogout}>
//               Logout
//             </button>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }




// Navbar.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const links = ["/dashboard", "/customers", "/leads", "/opportunities", "/historical","/users"];

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <span className="navbar-brand">CRM</span>

//         {/* Hamburger button for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible menu */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {links.map((path, idx) => (
//               <motion.li
//                 key={idx}
//                 className="nav-item"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Link className="nav-link" to={path}>
//                   {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>

//           <motion.button
//             className="btn btn-outline-light mt-2 mt-lg-0"
//             onClick={handleLogout}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Logout
//           </motion.button>
//         </div>
//       </div>
//     </nav>
//   );
// }



// Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Navbar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("crm_user");
    setIsLoggedIn(false);
    toast.info("You have been logged out 👋"); // 🔔 Notification
    navigate("/");
  };

  const links = ["/dashboard", "/customers", "/leads", "/opportunities", "/historical", "/users"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">CRM</span>

        {/* Hamburger button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((path, idx) => (
              <motion.li
                key={idx}
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link className="nav-link" to={path}>
                  {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="btn btn-outline-light mt-2 mt-lg-0"
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </div>
    </nav>
  );
}




// // Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // Bootstrap lg breakpoint

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false);
//     navigate("/");
//     setSidebarOpen(false);
//   };

//   const links = [
//     { path: "/dashboard", label: "Dashboard" },
//     { path: "/customers", label: "Customers" },
//     { path: "/leads", label: "Leads" },
//     { path: "/opportunities", label: "Opportunities" },
//     { path: "/historical", label: "Historical" },
//   ];

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 992);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark bg-dark fixed-top">
//         <div className="container-fluid">
//           <span className="navbar-brand">CRM</span>

//           {isMobile ? (
//             <button
//               className="btn btn-outline-light"
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//             >
//               ☰
//             </button>
//           ) : (
//             <div className="d-flex gap-3">
//               {links.map((link, idx) => (
//                 <motion.div key={idx} whileHover={{ scale: 1.05 }}>
//                   <Link className="nav-link text-white" to={link.path}>
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.button
//                 className="btn btn-outline-light"
//                 onClick={handleLogout}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Logout
//               </motion.button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       {isMobile && (
//         <div
//           className="bg-dark text-white position-fixed"
//           style={{
//             top: "56px",
//             left: sidebarOpen ? "0" : "-200px",
//             width: "200px",
//             height: "100%",
//             transition: "left 0.3s",
//             paddingTop: "20px",
//             zIndex: 1000,
//           }}
//         >
//           <ul className="nav flex-column">
//             {links.map((link, idx) => (
//               <li key={idx} className="nav-item">
//                 <Link
//                   className="nav-link text-white"
//                   to={link.path}
//                   onClick={() => setSidebarOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//             <li className="nav-item mt-3">
//               <button className="btn btn-outline-light w-100" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}

//       {/* Page wrapper margin to avoid content hidden */}
//       <div
//         style={{
//           marginLeft: isMobile && sidebarOpen ? "200px" : "0",
//           transition: "margin-left 0.3s",
//           marginTop: "56px",
//         }}
//       >
//         {/* App container content goes here */}
//       </div>
//     </>
//   );
// }









// Mobile Friendly


// Navbar.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar({ setIsLoggedIn }) {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("crm_user");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const links = [
//     { path: "/dashboard", label: "Dashboard" },
//     { path: "/customers", label: "Customers" },
//     { path: "/leads", label: "Leads" },
//     { path: "/opportunities", label: "Opportunities" },
//     { path: "/historical", label: "Historical" },
//   ];

//   return (
//     <>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-dark bg-dark fixed-top">
//         <div className="container-fluid">
//           <span className="navbar-brand">CRM</span>
//           <button
//             className="btn btn-outline-light"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* Sidebar */}
//       <div
//         className="bg-dark text-white position-fixed"
//         style={{
//           top: "56px", // height of navbar
//           left: sidebarOpen ? "0" : "-200px",
//           width: "200px",
//           height: "100%",
//           transition: "left 0.3s",
//           paddingTop: "20px",
//           zIndex: 1000,
//         }}
//       >
//         <ul className="nav flex-column">
//           {links.map((link, idx) => (
//             <li key={idx} className="nav-item">
//               <Link
//                 className="nav-link text-white"
//                 to={link.path}
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//           <li className="nav-item mt-3">
//             <button className="btn btn-outline-light w-100" onClick={handleLogout}>
//               Logout
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Page wrapper margin to avoid content hidden */}
//       <div style={{ marginLeft: sidebarOpen ? "200px" : "0", transition: "margin-left 0.3s", marginTop: "56px" }}>
//         {/* Place your page content here or keep App.jsx container */}
//       </div>
//     </>
//   );
// }
