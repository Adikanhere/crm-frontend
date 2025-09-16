// // src/pages/HistoricalData.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { historicalData } from "../data/historicalData";

// export default function HistoricalData() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ minHeight: "80vh", padding: "20px" }}
//     >
//       <h2>Historical Data</h2>
//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Type</th>
//             <th>Action</th>
//             <th>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {historicalData.map((record) => (
//             <motion.tr
//               key={record.id}
//               whileHover={{ scale: 1.02, backgroundColor: "#f0f0f0" }}
//               transition={{ duration: 0.2 }}
//             >
//               <td>{record.date}</td>
//               <td>{record.type}</td>
//               <td>{record.action}</td>
//               <td>{record.name}</td>
//             </motion.tr>
//           ))}
//         </tbody>
//       </table>
//     </motion.div>
//   );
// }



// src/pages/HistoricalData.jsx
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   // Mock historical data
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.6)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.6)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.6)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2>Historical Data</h2>
//       <div className="mt-4">
//         <Bar data={data} options={options} />
//       </div>
//     </motion.div>
//   );
// }



// src/pages/HistoricalData.jsx
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.6)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.6)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.6)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false, // Important: allows custom height
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     },
//     scales: {
//       y: { beginAtZero: true }
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ minHeight: "400px" }} // Set container height
//     >
//       <h2>Historical Data</h2>
//       <div className="mt-4" style={{ height: "400px" }}>
//         <Bar data={data} options={options} />
//       </div>
//     </motion.div>
//   );
// }




// src/pages/HistoricalData.jsx
// import React, { useState } from "react";
// import { Bar, Pie, Doughnut } from "react-chartjs-2";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   const [chartType, setChartType] = useState("Bar");

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.6)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.6)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.6)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     },
//     scales: {
//       y: { beginAtZero: true }
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ minHeight: "400px" }}
//     >
//       <h2>Historical Data</h2>

//       {/* Chart Type Selector */}
//       <div className="mb-3 mt-3">
//         <label>Select Chart Type: </label>
//         <select
//           className="form-select w-auto d-inline-block ms-2"
//           value={chartType}
//           onChange={(e) => setChartType(e.target.value)}
//         >
//           <option value="Bar">Bar</option>
//           <option value="Pie">Pie</option>
//           <option value="Doughnut">Doughnut</option>
//         </select>
//       </div>

//       {/* Chart Container */}
//       <div className="mt-4" style={{ height: "400px" }}>
//         {chartType === "Bar" && <Bar data={data} options={options} />}
//         {chartType === "Pie" && <Pie data={data} options={options} />}
//         {chartType === "Doughnut" && <Doughnut data={data} options={options} />}
//       </div>
//     </motion.div>
//   );
// }






// src/pages/HistoricalData.jsx
// import React, { useState } from "react";
// import { Bar, Pie, Doughnut } from "react-chartjs-2";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   const [chartType, setChartType] = useState("Bar");

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.7)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.7)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.7)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     },
//     scales: chartType === "Bar" ? { y: { beginAtZero: true } } : {}
//   };

//   const chartTypes = ["Bar", "Pie", "Doughnut"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mb-5"
//     >
//       <h2>Historical Data</h2>

//       {/* Chart Type Selector */}
//       <div className="mb-3 mt-3 d-flex align-items-center">
//         <label className="me-3 fw-bold">Select Chart Type:</label>
//         <div className="d-flex gap-2">
//           {chartTypes.map((type) => (
//             <motion.button
//               key={type}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className={`btn ${chartType === type ? "btn-primary" : "btn-outline-primary"}`}
//               onClick={() => setChartType(type)}
//             >
//               {type}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Chart Container with AnimatePresence */}
//       <div style={{ minHeight: "400px" }}>
//         <AnimatePresence mode="wait">
//           {chartType === "Bar" && (
//             <motion.div
//               key="bar"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <Bar data={data} options={options} />
//             </motion.div>
//           )}
//           {chartType === "Pie" && (
//             <motion.div
//               key="pie"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <Pie
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Data",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//               />
//             </motion.div>
//           )}
//           {chartType === "Doughnut" && (
//             <motion.div
//               key="doughnut"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <Doughnut
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Data",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }




// import React, { useState } from "react";
// import { Bar, Pie, Doughnut } from "react-chartjs-2";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   const [chartType, setChartType] = useState("Bar");

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.7)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.7)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.7)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     },
//     scales: chartType === "Bar" ? { y: { beginAtZero: true } } : {}
//   };

//   const chartTypes = ["Bar", "Pie", "Doughnut"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mb-5"
//     >
//       <h2>Historical Data</h2>

//       {/* Chart Type Selector */}
//       <div className="mb-3 mt-3 d-flex flex-wrap align-items-center">
//         <label className="me-3 fw-bold">Select Chart Type:</label>
//         <div className="d-flex gap-2 flex-wrap">
//           {chartTypes.map((type) => (
//             <motion.button
//               key={type}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className={`btn ${chartType === type ? "btn-primary" : "btn-outline-primary"}`}
//               onClick={() => setChartType(type)}
//             >
//               {type}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Chart Container */}
//       <div style={{ minHeight: "400px", maxHeight: "500px" }}>
//         <AnimatePresence mode="wait">
//           {chartType === "Bar" && (
//             <motion.div
//               key="bar"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <Bar data={data} options={options} height={400} />
//             </motion.div>
//           )}
//           {chartType === "Pie" && (
//             <motion.div
//               key="pie"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <Pie
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Total",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//                 height={400}
//               />
//             </motion.div>
//           )}
//           {chartType === "Doughnut" && (
//             <motion.div
//               key="doughnut"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <Doughnut
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Total",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//                 height={400}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }



// src/pages/HistoricalData.jsx
// import React, { useState } from "react";
// import { Bar, Pie, Doughnut } from "react-chartjs-2";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   const [chartType, setChartType] = useState("Bar");

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.7)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.7)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.7)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     },
//     scales: chartType === "Bar" ? { y: { beginAtZero: true } } : {}
//   };

//   const chartTypes = ["Bar", "Pie", "Doughnut"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mb-5"
//     >
//       <h2>Historical Data</h2>

//       {/* Chart Type Selector */}
//       <div className="mb-3 mt-3 d-flex flex-wrap align-items-center">
//         <label className="me-3 fw-bold">Select Chart Type:</label>
//         <div className="d-flex gap-2 flex-wrap">
//           {chartTypes.map((type) => (
//             <motion.button
//               key={type}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className={`btn ${chartType === type ? "btn-primary" : "btn-outline-primary"}`}
//               onClick={() => setChartType(type)}
//             >
//               {type}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Chart Container */}
//       <div style={{ minHeight: "250px", maxHeight: "300px" }}>
//         <AnimatePresence mode="wait">
//           {chartType === "Bar" && (
//             <motion.div key="bar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//               <Bar data={data} options={options} height={250} />
//             </motion.div>
//           )}
//           {chartType === "Pie" && (
//             <motion.div key="pie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//               <Pie
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Total",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//                 height={250}
//               />
//             </motion.div>
//           )}
//           {chartType === "Doughnut" && (
//             <motion.div key="doughnut" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//               <Doughnut
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Total",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//                 height={250}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }




// // src/pages/HistoricalData.jsx
// import React, { useState } from "react";
// import { Bar, Pie, Doughnut } from "react-chartjs-2";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// export default function HistoricalData() {
//   const [chartType, setChartType] = useState("Bar");

//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
//     datasets: [
//       {
//         label: "Customers",
//         data: [12, 19, 10, 15, 20, 25, 30, 28],
//         backgroundColor: "rgba(54, 162, 235, 0.7)"
//       },
//       {
//         label: "Leads",
//         data: [8, 12, 15, 10, 18, 22, 25, 20],
//         backgroundColor: "rgba(75, 192, 192, 0.7)"
//       },
//       {
//         label: "Opportunities",
//         data: [5, 10, 8, 12, 15, 18, 20, 22],
//         backgroundColor: "rgba(255, 206, 86, 0.7)"
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: { display: true, text: "Historical Data Overview" }
//     },
//     scales: chartType === "Bar" ? { y: { beginAtZero: true } } : {}
//   };

//   const chartTypes = ["Bar", "Pie", "Doughnut"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="mb-5"
//     >
//       <h2>Historical Data</h2>

//       {/* Chart Type Selector */}
//       <div className="mb-3 mt-3 d-flex flex-wrap align-items-center">
//         <label className="me-3 fw-bold">Select Chart Type:</label>
//         <div className="d-flex gap-2 flex-wrap">
//           {chartTypes.map((type) => (
//             <motion.button
//               key={type}
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.1, backgroundColor: "#0d6efd", color: "#fff" }}
//               whileTap={{ scale: 0.95 }}
//               animate={{
//                 backgroundColor: chartType === type ? "#0d6efd" : "#fff",
//                 color: chartType === type ? "#fff" : "#0d6efd",
//                 borderColor: "#0d6efd"
//               }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="btn border"
//               onClick={() => setChartType(type)}
//             >
//               {type}
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Chart Container */}
//       <div style={{ minHeight: "250px", maxHeight: "300px" }}>
//         <AnimatePresence mode="wait">
//           {chartType === "Bar" && (
//             <motion.div key="bar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//               <Bar data={data} options={options} height={250} />
//             </motion.div>
//           )}
//           {chartType === "Pie" && (
//             <motion.div key="pie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//               <Pie
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Total",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//                 height={250}
//               />
//             </motion.div>
//           )}
//           {chartType === "Doughnut" && (
//             <motion.div key="doughnut" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//               <Doughnut
//                 data={{
//                   labels: ["Customers", "Leads", "Opportunities"],
//                   datasets: [
//                     {
//                       label: "Total",
//                       data: [
//                         data.datasets[0].data.reduce((a, b) => a + b, 0),
//                         data.datasets[1].data.reduce((a, b) => a + b, 0),
//                         data.datasets[2].data.reduce((a, b) => a + b, 0)
//                       ],
//                       backgroundColor: [
//                         "rgba(54, 162, 235, 0.7)",
//                         "rgba(75, 192, 192, 0.7)",
//                         "rgba(255, 206, 86, 0.7)"
//                       ]
//                     }
//                   ]
//                 }}
//                 options={options}
//                 height={250}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }




// After integrated code

// src/pages/HistoricalData.jsx
import React, { useEffect, useState } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import { motion, AnimatePresence } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function HistoricalData() {
  const [chartType, setChartType] = useState("Bar");
  const [records, setRecords] = useState([]);

  // Fetch historical data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/histodata");
      setRecords(res.data);
    } catch (err) {
      toast.error("Failed to load historical data ❌");
    }
  };

  // Aggregate for charts
  const entityCounts = records.reduce((acc, rec) => {
    acc[rec.entityType] = (acc[rec.entityType] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(entityCounts),
    datasets: [
      {
        label: "Actions Count",
        data: Object.values(entityCounts),
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)"
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Historical Data Overview" }
    },
    scales: chartType === "Bar" ? { y: { beginAtZero: true } } : {}
  };

  const chartTypes = ["Bar", "Pie", "Doughnut"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-5"
    >
      <h2>Historical Data</h2>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Chart Type Selector */}
      <div className="mb-3 mt-3 d-flex flex-wrap align-items-center">
        <label className="me-3 fw-bold">Select Chart Type:</label>
        <div className="d-flex gap-2 flex-wrap">
          {chartTypes.map((type) => (
            <motion.button
              key={type}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: "#0d6efd", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: chartType === type ? "#0d6efd" : "#fff",
                color: chartType === type ? "#fff" : "#0d6efd",
                borderColor: "#0d6efd"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn border"
              onClick={() => setChartType(type)}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div style={{ minHeight: "250px", maxHeight: "300px" }}>
        <AnimatePresence mode="wait">
          {chartType === "Bar" && (
            <motion.div key="bar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Bar data={chartData} options={options} height={250} />
            </motion.div>
          )}
          {chartType === "Pie" && (
            <motion.div key="pie" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Pie data={chartData} options={options} height={250} />
            </motion.div>
          )}
          {chartType === "Doughnut" && (
            <motion.div key="doughnut" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Doughnut data={chartData} options={options} height={250} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Data Table */}
      <div className="mt-4 table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Action</th>
              <th>Date</th>
              <th>Entity Type</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.id}</td>
                  <td>{rec.action}</td>
                  <td>{rec.date}</td>
                  <td>{rec.entityType}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No historical data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
