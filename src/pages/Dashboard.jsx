// import React, { useEffect, useState } from 'react'
// import API from '../services/api'


// export default function Dashboard() {
//     const [counts, setCounts] = useState({ customers: 0, leads: 0, opportunities: 0 })


//     useEffect(() => {
//         const load = async () => {
//             try {
//                 const [c, l, o] = await Promise.all([API.get('/customers'), API.get('/leads'), API.get('/opportunities')])
//                 setCounts({ customers: c.data.length, leads: l.data.length, opportunities: o.data.length })
//             } catch (e) {
//                 // ignore for now
//             }
//         }
//         load()
//     }, [])


//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <div className="row mt-4">
//                 <div className="col-md-4">
//                     <div className="card p-3">
//                         <h5>Customers</h5>
//                         <p className="display-6">{counts.customers}</p>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card p-3">
//                         <h5>Leads</h5>
//                         <p className="display-6">{counts.leads}</p>
//                     </div>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card p-3">
//                         <h5>Opportunities</h5>
//                         <p className="display-6">{counts.opportunities}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




// src/pages/Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import API from '../services/api';

// export default function Dashboard() {
//   const [counts, setCounts] = useState({ customers: 0, leads: 0, opportunities: 0 });
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     const load = async () => {
//       setLoading(true);
//       try {
//         const [c, l, o] = await Promise.all([
//           API.get('/customers'),
//           API.get('/leads'),
//           API.get('/opportunities'),
//         ]);
//         if (!mounted) return;
//         setCounts({
//           customers: Array.isArray(c.data) ? c.data.length : 0,
//           leads: Array.isArray(l.data) ? l.data.length : 0,
//           opportunities: Array.isArray(o.data) ? o.data.length : 0,
//         });
//       } catch (e) {
//         if (mounted) setErr('Failed to load dashboard data');
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };
//     load();
//     return () => { mounted = false; };
//   }, []);

//   if (loading) return <p>Loading dashboard...</p>;
//   if (err) return <div className="alert alert-danger">{err}</div>;

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div className="row mt-4">
//         <div className="col-md-4 mb-3">
//           <div className="card p-3">
//             <h6>Customers</h6>
//             <p className="display-6 mb-0">{counts.customers}</p>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="card p-3">
//             <h6>Leads</h6>
//             <p className="display-6 mb-0">{counts.leads}</p>
//           </div>
//         </div>
//         <div className="col-md-4 mb-3">
//           <div className="card p-3">
//             <h6>Opportunities</h6>
//             <p className="display-6 mb-0">{counts.opportunities}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// src/pages/Dashboard.jsx
// import React from "react";
// import { customers, leads, opportunities } from "../data/mockData";

// export default function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div className="row mt-4">
//         <div className="col-md-4">
//           <div className="card text-white bg-primary mb-3">
//             <div className="card-body">
//               <h5 className="card-title">Customers</h5>
//               <p className="card-text">{customers.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card text-white bg-success mb-3">
//             <div className="card-body">
//               <h5 className="card-title">Leads</h5>
//               <p className="card-text">{leads.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card text-white bg-warning mb-3">
//             <div className="card-body">
//               <h5 className="card-title">Opportunities</h5>
//               <p className="card-text">{opportunities.length}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/Dashboard.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { customers, leads, opportunities } from "../data/mockData";

// export default function Dashboard() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "30px" }}
//     >
//       <h2>Dashboard</h2>
//       <div className="row mt-4">
//         <motion.div
//           className="col-md-4"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <div className="card text-white bg-primary mb-3">
//             <div className="card-body">
//               <h5 className="card-title">Customers</h5>
//               <p className="card-text">{customers.length}</p>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="col-md-4"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <div className="card text-white bg-success mb-3">
//             <div className="card-body">
//               <h5 className="card-title">Leads</h5>
//               <p className="card-text">{leads.length}</p>
//             </div>
//           </div>
//         </motion.div>
//         <motion.div
//           className="col-md-4"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <div className="card text-white bg-warning mb-3">
//             <div className="card-body">
//               <h5 className="card-title">Opportunities</h5>
//               <p className="card-text">{opportunities.length}</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }



// src/pages/Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line
} from "recharts";
import { customers, leads, opportunities } from "../data/mockData";

export default function Dashboard() {
  // Example: Count leads by status
  const leadStatusData = [
    { name: "New", value: leads.filter((l) => l.status === "New").length },
    { name: "Contacted", value: leads.filter((l) => l.status === "Contacted").length },
    { name: "Qualified", value: leads.filter((l) => l.status === "Qualified").length },
    { name: "Lost", value: leads.filter((l) => l.status === "Lost").length },
  ];

  // Opportunities by stage
  const oppStageData = [
    { name: "Prospecting", value: opportunities.filter((o) => o.stage === "Prospecting").length },
    { name: "Negotiation", value: opportunities.filter((o) => o.stage === "Negotiation").length },
    { name: "Closed Won", value: opportunities.filter((o) => o.stage === "Closed Won").length },
    { name: "Closed Lost", value: opportunities.filter((o) => o.stage === "Closed Lost").length },
  ];

  // Customer growth trend (dummy trend by ID)
  const customerGrowth = customers.map((c) => ({
    month: `C${c.id}`,
    customers: c.id,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
    >
      <h2>Dashboard</h2>
      <p className="mb-4">Visual overview of CRM data</p>

      <div className="row">
        {/* Pie Chart - Lead Status */}
        <div className="col-md-4 mb-4">
          <h5 className="text-center">Lead Status</h5>
          <PieChart width={300} height={250}>
            <Pie
              data={leadStatusData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {leadStatusData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Bar Chart - Opportunities by Stage */}
        <div className="col-md-4 mb-4">
          <h5 className="text-center">Opportunities by Stage</h5>
          <BarChart width={350} height={250} data={oppStageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Line Chart - Customer Growth */}
        <div className="col-md-4 mb-4">
          <h5 className="text-center">Customer Growth</h5>
          <LineChart width={350} height={250} data={customerGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="customers" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </motion.div>
  );
}
