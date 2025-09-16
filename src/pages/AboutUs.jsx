// // src/pages/AboutUs.jsx
// import React from "react";
// import { motion } from "framer-motion";

// export default function AboutUs() {
//   return (
//     <motion.div
//       className="container my-5"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="mb-3">About Us</h2>
//       <p>
//         Welcome to <strong>My CRM App</strong>! This project was built as a
//         simple CRM system for learning and practice purposes.
//       </p>
//       <p>
//         The goal of this application is to manage <strong>Customers</strong>,{" "}
//         <strong>Leads</strong>, and <strong>Users</strong> while providing a
//         clean and interactive frontend connected to a Spring Boot backend.
//       </p>
//       <p>
//         This project demonstrates how frontend and backend can be connected
//         together with a database, making it a great starting point for any
//         beginner developer.
//       </p>
//     </motion.div>
//   );
// }




// import React from "react";
// import { motion } from "framer-motion";

// export default function AboutUs() {
//   const features = [
//     { title: "Customer Management", desc: "Easily add, update, and manage your customers." },
//     { title: "Lead Tracking", desc: "Track sales leads and convert them into customers." },
//     { title: "Simple UI", desc: "Clean design with responsive and interactive experience." },
//   ];

//   return (
//     <motion.div
//       className="container my-5"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="mb-3 text-center">About Us</h2>
//       <p className="text-center mb-4">
//         Welcome to <strong>My CRM App</strong>!  
//         This project is a simple <strong>CRM system</strong> built for learning and practice purposes.  
//       </p>

//       <p className="text-center mb-5">
//         Our goal is to help beginners understand how to connect{" "}
//         <strong>frontend</strong>, <strong>backend</strong>, and{" "}
//         <strong>database</strong> in a real-world style project.
//       </p>

//       <div className="row">
//         {features.map((item, index) => (
//           <motion.div
//             className="col-md-4 mb-4"
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             <div className="card shadow-sm border-0 h-100 text-center p-3">
//               <h5 className="fw-bold mb-2">{item.title}</h5>
//               <p className="text-muted">{item.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="text-center mt-4">
//         <motion.button
//           className="btn btn-primary px-4 py-2"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Learn More
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }




import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const features = [
    { title: "Customer Management", desc: "Easily add, update, and manage your customers." },
    { title: "Lead Tracking", desc: "Track sales leads and convert them into customers." },
    { title: "Simple UI", desc: "Clean design with responsive and interactive experience." },
  ];

  return (
    <motion.div
      className="container-fluid py-5"
      style={{ backgroundColor: "#f8f9fa" }} // light gray background
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="mb-3 text-center">About Us</h2>
        <p className="text-center mb-4">
          Welcome to <strong>My CRM App</strong>!  
          This project is a simple <strong>CRM system</strong> built for learning and practice purposes.  
        </p>

        <p className="text-center mb-5">
          Our goal is to help beginners understand how to connect{" "}
          <strong>frontend</strong>, <strong>backend</strong>, and{" "}
          <strong>database</strong> in a real-world style project.
        </p>

        <div className="row">
          {features.map((item, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="card shadow-sm border-0 h-100 text-center p-3">
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
