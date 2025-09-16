// // src/components/Footer.jsx
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-white text-center py-3 mt-5">
//       <p>© 2025 My CRM App. All rights reserved.</p>
//     </footer>
//   );
// }



// src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <motion.footer
//       className="bg-dark text-white text-center py-3 mt-5"
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <p>© 2025 My CRM App. All rights reserved.</p>
//     </motion.footer>
//   );
// }




// // src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <motion.footer
//       className="bg-dark text-white text-center py-3 mt-5"
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <p>© 2025 My CRM App. All rights reserved.</p>
//       <div className="d-flex justify-content-center gap-3 mt-2">
//         <a
//           href="http://www.linkedin.com/in/akanhere"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white fs-5"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://www.instagram.com/adii_kanhere_t9/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white fs-5"
//         >
//           <FaInstagram />
//         </a>
//         <a
//           href="https://www.facebook.com/aditya.kanhere.562?rdid=y3KJODe0MIgBxuYB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18UaUp8wVT%2F"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white fs-5"
//         >
//           <FaFacebook />
//         </a>
//       </div>
//     </motion.footer>
//   );
// }




// src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <motion.footer
//       className="bg-dark text-white text-center py-3 mt-5"
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <p>© 2025 My CRM App. All rights reserved.</p>
//       <p className="mt-2 fw-bold">Connect with me:</p>
//       <div className="d-flex justify-content-center gap-3 mt-2">
//         <a
//           href="http://www.linkedin.com/in/akanhere"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white fs-5"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://www.instagram.com/adii_kanhere_t9/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white fs-5"
//         >
//           <FaInstagram />
//         </a>
//         <a
//           href="https://www.facebook.com/aditya.kanhere.562?rdid=y3KJODe0MIgBxuYB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18UaUp8wVT%2F"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white fs-5"
//         >
//           <FaFacebook />
//         </a>
//       </div>
//     </motion.footer>
//   );
// }




// src/components/Footer.jsx
// // src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   const sections = {
//     Product: [
//       "Website Templates",
//       "Website Builder",
//       "Website Design",
//       "Web Hosting",
//       "Domain Names",
//     ],
//     Solutions: [
//       "Online Store",
//       "Online Booking",
//       "Portfolio Website",
//       "eCommerce Website",
//       "Enterprise Solutions",
//     ],
//     Learn: [
//       "Blog",
//       "Privacy & Security",
//       "SEO Learning Hub",
//       "Documentation",
//     ],
//     Support: [
//       "Help Center",
//       "Hire a Professional",
//       "Report Abuse",
//       "System Status",
//     ],
//     Company: [
//       // "About Us",
//       // "Contact Us",
//       <Link to="/about" className="text-decoration-none text-white">About Us</Link>,
//   <Link to="/contact" className="text-decoration-none text-white">Contact Us</Link>,
//       "Careers",
//       "Accessibility",
//       "Sitemap",
//     ],
//   };

//   return (
//     <motion.footer
//       className="bg-dark text-white mt-5 pt-5 pb-3"
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container">
//         {/* Section Links */}
//         <div className="row text-start">
//           {Object.keys(sections).map((section) => (
//             <div className="col-6 col-md-2 mb-4" key={section}>
//               <h6 className="fw-bold">{section}</h6>
//               <ul className="list-unstyled">
//                 {sections[section].map((item, i) => (
//                   <li
//                     key={i}
//                     className="small"
//                     style={{
//                       color: "#adb5bd", // light grey
//                       cursor: "pointer",
//                     }}
//                     onMouseOver={(e) => (e.target.style.color = "#fff")}
//                     onMouseOut={(e) => (e.target.style.color = "#adb5bd")}
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <hr className="border-secondary" />

//         {/* Social links */}
//         <div className="text-center">
//           <p className="fw-bold mb-2">Connect with me:</p>
//           <div className="d-flex justify-content-center gap-3 mb-3">
//             <a
//               href="http://www.linkedin.com/in/akanhere"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://www.instagram.com/adii_kanhere_t9/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.facebook.com/aditya.kanhere.562"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               href="https://github.com/adityakanhere"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaGithub />
//             </a>
//           </div>

//           <p className="small text-muted mb-0">
//             © 2025 My CRM App. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }



// // src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // ← MUST import Link
// import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   const sections = {
//     Product: [
//       "Website Templates",
//       "Website Builder",
//       "Website Design",
//       "Web Hosting",
//       "Domain Names",
//     ],
//     Solutions: [
//       "Online Store",
//       "Online Booking",
//       "Portfolio Website",
//       "eCommerce Website",
//       "Enterprise Solutions",
//     ],
//     Learn: [
//       "Blog",
//       "Privacy & Security",
//       "SEO Learning Hub",
//       "Documentation",
//     ],
//     Support: [
//       "Help Center",
//       "Hire a Professional",
//       "Report Abuse",
//       "System Status",
//     ],
//     Company: [
//       { label: "About Us", link: "/about" },
//       { label: "Contact Us", link: "/contact" },
//       { label: "Careers" },
//       { label: "Accessibility" },
//       { label: "Sitemap" },
//     ],
//   };

//   return (
//     <motion.footer
//       className="bg-dark text-white mt-5 pt-5 pb-3"
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container">
//         {/* Section Links */}
//         <div className="row text-start">
//           {Object.keys(sections).map((section) => (
//             <div className="col-6 col-md-2 mb-4" key={section}>
//               <h6 className="fw-bold">{section}</h6>
//               <ul className="list-unstyled">
//                 {sections[section].map((item, i) => (
//                   <li
//                     key={i}
//                     className="small"
//                     style={{
//                       color: "#adb5bd",
//                       cursor: "pointer",
//                     }}
//                     onMouseOver={(e) => (e.target.style.color = "#fff")}
//                     onMouseOut={(e) => (e.target.style.color = "#adb5bd")}
//                   >
//                     {item.link ? (
//                       <Link to={item.link} className="text-decoration-none text-white">
//                         {item.label}
//                       </Link>
//                     ) : (
//                       item.label || item
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <hr className="border-secondary" />

//         {/* Social links */}
//         <div className="text-center">
//           <p className="fw-bold mb-2">Connect with me:</p>
//           <div className="d-flex justify-content-center gap-3 mb-3">
//             <a
//               href="http://www.linkedin.com/in/akanhere"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/Adikanhere"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://www.instagram.com/adii_kanhere_t9/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.facebook.com/aditya.kanhere.562"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaFacebook />
//             </a>

//           </div>

//           <p className="small text-muted mb-0">
//             © 2025 My CRM App. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </motion.footer>
//   );
// }



// src/components/Footer.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

// export default function Footer() {
//   const sections = {
//     Product: [
//       "Website Templates",
//       "Website Builder",
//       "Website Design",
//       "Web Hosting",
//       "Domain Names",
//     ],
//     Solutions: [
//       "Online Store",
//       "Online Booking",
//       "Portfolio Website",
//       "eCommerce Website",
//       "Enterprise Solutions",
//     ],
//     Learn: [
//       "Blog",
//       "Privacy & Security",
//       "SEO Learning Hub",
//       "Documentation",
//     ],
//     Support: [
//       "Help Center",
//       "Hire a Professional",
//       "Report Abuse",
//       "System Status",
//     ],
//     Company: [
//       { label: "About Us", link: "/about" },
//       { label: "Contact Us", link: "/contact" },
//       { label: "Careers" },
//       { label: "Accessibility" },
//       { label: "Sitemap" },
//     ],
//   };

//   return (
//     <motion.footer
//       className="bg-dark text-white mt-5 pt-5 pb-3"
//       initial={{ y: 50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container">
//         {/* Section Links */}
//         <div className="row text-start">
//           {Object.keys(sections).map((section) => (
//             <div className="col-6 col-md-2 mb-4" key={section}>
//               <h6 className="fw-bold">{section}</h6>
//               <ul className="list-unstyled">
//                 {sections[section].map((item, i) => (
//                   <li
//                     key={i}
//                     className="small"
//                     style={{
//                       color: "#adb5bd",
//                       cursor: "pointer",
//                     }}
//                     onMouseOver={(e) => (e.target.style.color = "#fff")}
//                     onMouseOut={(e) => (e.target.style.color = "#adb5bd")}
//                   >
//                     {item.link ? (
//                       <Link to={item.link} className="text-decoration-none text-white">
//                         {item.label}
//                       </Link>
//                     ) : (
//                       item.label || item
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Contact Info Section */}
//           <div className="col-12 col-md-4 mb-4">
//             <h6 className="fw-bold">Contact Info</h6>
//             <p className="small mb-1">👨‍💻 <strong>Aditya Kanhere</strong></p>
//             <p className="small mb-1">
//               <FaEnvelope className="me-2" />
//               <a href="mailto:akanhere21@gmail.com" className="text-decoration-none text-white">
//                 akanhere21@gmail.com
//               </a>
//             </p>
//             <p className="small mb-0">
//               <FaPhone className="me-2" />
//               <a href="tel:+919763080519" className="text-decoration-none text-white">
//                 +91 9763080519
//               </a>
//             </p>
//           </div>
//         </div>

//         <hr className="border-secondary" />

//         {/* Social links */}
//         <div className="text-center">
//           <p className="fw-bold mb-2">Connect with me:</p>
//           <div className="d-flex justify-content-center gap-3 mb-3">
//             <a
//               href="http://www.linkedin.com/in/akanhere"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/Adikanhere"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://www.instagram.com/adii_kanhere_t9/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.facebook.com/aditya.kanhere.562"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white fs-5"
//             >
//               <FaFacebook />
//             </a>
//           </div>

//           {/* Copyright */}
//           <p
//             className="mb-0"
//             style={{
//               color: "#f8f9fa", // bright white
//               fontSize: "14px",
//             }}
//           >
//             © 2025 <strong>My CRM App</strong>. Built with ❤️ by{" "}
//             <span style={{ color: "#e4e7ecff", fontWeight: "bold" }}>Aditya Kanhere</span>.
//           </p>
//         </div>

//       </div>
//     </motion.footer>
//   );
// }




import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Product */}
          <div className="col-md-2 col-6 mb-3">
            <h6 className="fw-bold text-uppercase">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Integrations</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-md-2 col-6 mb-3">
            <h6 className="fw-bold text-uppercase">Solutions</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">CRM</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sales</a></li>
              <li><a href="#" className="text-light text-decoration-none">Marketing</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div className="col-md-2 col-6 mb-3">
            <h6 className="fw-bold text-uppercase">Learn</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Docs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Tutorials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 col-6 mb-3">
            <h6 className="fw-bold text-uppercase">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Community</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-2 col-6 mb-3">
            <h6 className="fw-bold text-uppercase">Company</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessibility</a></li>
              <li><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-2 col-6 mb-3">
            <h6 className="fw-bold text-uppercase">Contact Info</h6>
            <p className="mb-1">👨‍💻 <strong>Aditya Kanhere</strong></p>
            <p className="mb-1">akanhere21@gmail.com</p>
            <p className="mb-3">+91 9763080519</p>

            <h6 className="fw-bold">Connect with me:</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="http://www.linkedin.com/in/akanhere" target="_blank" rel="noopener noreferrer" className="text-light"><FaLinkedin /></a>
              <a href="https://github.com/Adikanhere" target="_blank" rel="noopener noreferrer" className="text-light"><FaGithub /></a>
              <a href="https://www.instagram.com/adii_kanhere_t9/" target="_blank" rel="noopener noreferrer" className="text-light"><FaInstagram /></a>
              <a href="https://www.facebook.com/aditya.kanhere.562" target="_blank" rel="noopener noreferrer" className="text-light"><FaFacebook /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-light" />

        {/* Bottom */}
        <div className="text-center">
          <p className="mb-0" style={{ fontSize: "14px", color: "#f8f9fa" }}>
            © 2025 <strong>My CRM App</strong>. Built with ❤️ by{" "}
            <span style={{ color: "#ecf1f9ff", fontWeight: "bold" }}>
              Aditya Kanhere
            </span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
