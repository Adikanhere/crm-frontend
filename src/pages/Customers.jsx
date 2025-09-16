// src/pages/Customers.jsx
// import React, { useEffect, useState } from 'react';
// import API from '../services/api';
// import CustomerCard from '../components/CustomerCard';
// import AddCustomerModal from '../components/AddCustomerModal';

// export default function Customers() {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAdd, setShowAdd] = useState(false);

//   const load = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get('/customers');
//       setCustomers(res.data || []);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { load(); }, []);

//   const handleAdd = async (customer) => {
//     await API.post('/customers', customer);
//     setShowAdd(false);
//     load();
//   };

//   const handleDelete = async (id) => {
//     if (!confirm('Delete this customer?')) return;
//     await API.delete(`/customers/${id}`);
//     load();
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center">
//         <h2>Customers</h2>
//         <button className="btn btn-primary" onClick={() => setShowAdd(true)}>Add Customer</button>
//       </div>

//       {loading ? <p className="mt-3">Loading...</p> : (
//         <div className="row mt-3">
//           {customers.map(c => (
//             <div key={c.id} className="col-md-4 mb-3">
//               <CustomerCard customer={c} onDelete={handleDelete} />
//             </div>
//           ))}
//           {customers.length === 0 && <p className="text-muted mt-3">No customers yet.</p>}
//         </div>
//       )}

//       {showAdd && <AddCustomerModal onClose={() => setShowAdd(false)} onSave={handleAdd} />}
//     </div>
//   );
// }




// // src/pages/Customers.jsx
// import React from "react";
// import { customers } from "../data/mockData";

// export default function Customers() {
//   return (
//     <div>
//       <h2>Customers</h2>
//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((c) => (
//             <tr key={c.id}>
//               <td>{c.id}</td>
//               <td>{c.name}</td>
//               <td>{c.email}</td>
//               <td>{c.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




// // src/pages/Customers.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { customers } from "../data/mockData";

// export default function Customers() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Customers</h2>
//       <div className="table-responsive">
//         <table className="table mt-3">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((c) => (
//               <motion.tr
//                 key={c.id}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: c.id * 0.1 }}
//               >
//                 <td>{c.id}</td>
//                 <td>{c.name}</td>
//                 <td>{c.email}</td>
//                 <td>{c.phone}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }



// With search bar


// src/pages/Customers.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { customers } from "../data/mockData";

// export default function Customers() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter customers based on search term
//   const filteredCustomers = customers.filter(
//     (c) =>
//       c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.phone.includes(searchTerm)
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Customers</h2>

//       {/* Search Input */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, email or phone..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="table-responsive">
//         <table className="table mt-3 table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCustomers.length > 0 ? (
//               filteredCustomers.map((c) => (
//                 <motion.tr
//                   key={c.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: c.id * 0.05 }}
//                 >
//                   <td>{c.id}</td>
//                   <td>{c.name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.phone}</td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }







// src/pages/Customers.jsx
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { customers } from "../data/mockData";

// // Debounce helper function
// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   React.useEffect(() => {
//     const handler = setTimeout(() => setDebouncedValue(value), delay);
//     return () => clearTimeout(handler);
//   }, [value, delay]);

//   return debouncedValue;
// }

// export default function Customers() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Debounced search term
//   const debouncedSearch = useDebounce(searchTerm, 300);

//   // Filter customers using useMemo for performance
//   const filteredCustomers = useMemo(() => {
//     return customers.filter(
//       (c) =>
//         c.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//         c.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//         c.phone.includes(debouncedSearch)
//     );
//   }, [debouncedSearch]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Customers</h2>

//       {/* Search Input */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by name, email, or phone..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="table-responsive">
//         <table className="table mt-3 table-striped table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCustomers.length > 0 ? (
//               filteredCustomers.map((c) => (
//                 <motion.tr
//                   key={c.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: c.id * 0.05 }}
//                 >
//                   <td>{c.id}</td>
//                   <td>{c.name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.phone}</td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-muted">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }




// src/pages/Customers.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { customers } from "../data/mockData";

// // Utility: export customers as CSV
// const exportToCSV = (data) => {
//   const headers = ["ID", "Name", "Email", "Phone"];
//   const rows = data.map((c) => [c.id, c.name, c.email, c.phone]);

//   let csvContent =
//     "data:text/csv;charset=utf-8," +
//     [headers, ...rows].map((e) => e.join(",")).join("\n");

//   const link = document.createElement("a");
//   link.setAttribute("href", encodeURI(csvContent));
//   link.setAttribute("download", "customers.csv");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export default function Customers() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Filter by search
//   const filteredCustomers = customers.filter(
//     (c) =>
//       c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.phone.includes(searchTerm)
//   );

//   // Sorting logic
//   const sortedCustomers = [...filteredCustomers].sort((a, b) => {
//     if (!sortConfig.key) return 0;
//     const valA = a[sortConfig.key].toString().toLowerCase();
//     const valB = b[sortConfig.key].toString().toLowerCase();
//     if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
//     if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
//     return 0;
//   });

//   const requestSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCustomers = sortedCustomers.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <div className="d-flex justify-content-between align-items-center">
//         <h2>Customers</h2>
//         <button
//           className="btn btn-success"
//           onClick={() => exportToCSV(filteredCustomers)}
//         >
//           Export CSV
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, email or phone..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th onClick={() => requestSort("id")} style={{ cursor: "pointer" }}>
//                 ID {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("name")} style={{ cursor: "pointer" }}>
//                 Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("email")} style={{ cursor: "pointer" }}>
//                 Email {sortConfig.key === "email" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("phone")} style={{ cursor: "pointer" }}>
//                 Phone {sortConfig.key === "phone" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentCustomers.length > 0 ? (
//               currentCustomers.map((c) => (
//                 <motion.tr
//                   key={c.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td>{c.id}</td>
//                   <td>{c.name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.phone}</td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between mt-3">
//         <button
//           className="btn btn-secondary"
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           className="btn btn-secondary"
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </motion.div>
//   );
// }



// src/pages/Customers.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { customers as initialCustomers } from "../data/mockData";

// export default function Customers() {
//   const [customers, setCustomers] = useState(initialCustomers);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [formData, setFormData] = useState({ id: null, name: "", email: "", phone: "" });
//   const [isEditing, setIsEditing] = useState(false);

//   // Filter customers
//   const filteredCustomers = customers.filter(
//     (c) =>
//       c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.phone.includes(searchTerm)
//   );

//   // Handle form change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Add or Update Customer
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       setCustomers(
//         customers.map((c) => (c.id === formData.id ? { ...formData } : c))
//       );
//       setIsEditing(false);
//     } else {
//       setCustomers([
//         ...customers,
//         { ...formData, id: customers.length + 1 }
//       ]);
//     }
//     setFormData({ id: null, name: "", email: "", phone: "" });
//   };

//   // Edit Customer
//   const handleEdit = (customer) => {
//     setFormData(customer);
//     setIsEditing(true);
//   };

//   // Delete Customer
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this customer?")) {
//       setCustomers(customers.filter((c) => c.id !== id));
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Customers</h2>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, email or phone..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Add/Edit Form */}
//       <form onSubmit={handleSubmit} className="mb-3">
//         <div className="row g-2">
//           <div className="col-md-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="text"
//               name="phone"
//               className="form-control"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-md-3">
//             <button type="submit" className="btn btn-primary w-100">
//               {isEditing ? "Update" : "Add"}
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table mt-3 table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCustomers.length > 0 ? (
//               filteredCustomers.map((c) => (
//                 <motion.tr
//                   key={c.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: c.id * 0.05 }}
//                 >
//                   <td>{c.id}</td>
//                   <td>{c.name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.phone}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-warning me-2"
//                       onClick={() => handleEdit(c)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => handleDelete(c.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }





// // src/pages/Customers.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { customers as initialCustomers } from "../data/mockData";
// import API from "../api/axios";

// export default function Customers() {
//   const [customers, setCustomers] = useState(initialCustomers);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [formData, setFormData] = useState({ id: null, name: "", email: "", phone: "" });
//   const [isEditing, setIsEditing] = useState(false);

//   // Sorting
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

//   // Handle form change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Add or Update Customer
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       setCustomers(
//         customers.map((c) => (c.id === formData.id ? { ...formData } : c))
//       );
//       setIsEditing(false);
//     } else {
//       setCustomers([
//         ...customers,
//         { ...formData, id: customers.length + 1 }
//       ]);
//     }
//     setFormData({ id: null, name: "", email: "", phone: "" });
//   };

//   // Edit Customer
//   const handleEdit = (customer) => {
//     setFormData(customer);
//     setIsEditing(true);
//   };

//   // Delete Customer
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this customer?")) {
//       setCustomers(customers.filter((c) => c.id !== id));
//     }
//   };

//   // Sort handler
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   // Apply search filter
//   let filteredCustomers = customers.filter(
//     (c) =>
//       c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       c.phone.includes(searchTerm)
//   );

//   // Apply sorting
//   if (sortConfig.key) {
//     filteredCustomers = [...filteredCustomers].sort((a, b) => {
//       if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
//       if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }

//   // Pagination
//   const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
//   const paginatedCustomers = filteredCustomers.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Customers</h2>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, email or phone..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Add/Edit Form */}
//       <form onSubmit={handleSubmit} className="mb-3">
//         <div className="row g-2">
//           <div className="col-md-3">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-md-3">
//             <input
//               type="text"
//               name="phone"
//               className="form-control"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="col-md-3">
//             <button type="submit" className="btn btn-primary w-100">
//               {isEditing ? "Update" : "Add"}
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table mt-3 table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
//                 Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>
//                 Email {sortConfig.key === "email" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => handleSort("phone")} style={{ cursor: "pointer" }}>
//                 Phone {sortConfig.key === "phone" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedCustomers.length > 0 ? (
//               paginatedCustomers.map((c) => (
//                 <motion.tr
//                   key={c.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: c.id * 0.05 }}
//                 >
//                   <td>{c.id}</td>
//                   <td>{c.name}</td>
//                   <td>{c.email}</td>
//                   <td>{c.phone}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-warning me-2"
//                       onClick={() => handleEdit(c)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => handleDelete(c.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="d-flex justify-content-center mt-3">
//         <button
//           className="btn btn-secondary me-2"
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         <span className="align-self-center">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           className="btn btn-secondary ms-2"
//           onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </motion.div>
//   );
// }






// Integrated both file
// src/pages/Customers.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Fetch customers from backend
  const fetchCustomers = async () => {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data);
    } catch (err) {
      toast.error("Failed to fetch customers!");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update customer
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const res = await API.put(`/customers/${formData.id}`, formData);
        setCustomers(customers.map((c) => (c.id === formData.id ? res.data : c)));
        toast.success("Customer updated successfully!");
        setIsEditing(false);
      } else {
        const res = await API.post("/customers", formData);
        setCustomers([...customers, res.data]);
        toast.success("Customer added successfully!");
      }
      setFormData({ id: null, name: "", email: "", phone: "" });
    } catch (err) {
      toast.error("Failed to save customer!");
    }
  };

  // Edit customer
  const handleEdit = (customer) => {
    setFormData(customer);
    setIsEditing(true);
  };

  // Delete customer
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await API.delete(`/customers/${id}`);
        setCustomers(customers.filter((c) => c.id !== id));
        toast.success("Customer deleted successfully!");
      } catch (err) {
        toast.error("Failed to delete customer!");
      }
    }
  };

  // Sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  let filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
  );

  if (sortConfig.key) {
    filteredCustomers = [...filteredCustomers].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
    >
      <h2>Customers</h2>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, email or phone..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>

      {/* Table */}
      <div className="table-responsive">
        <table className="table mt-3 table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
                Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => handleSort("email")} style={{ cursor: "pointer" }}>
                Email {sortConfig.key === "email" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => handleSort("phone")} style={{ cursor: "pointer" }}>
                Phone {sortConfig.key === "phone" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCustomers.length > 0 ? (
              paginatedCustomers.map((c) => (
                <motion.tr
                  key={c.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: c.id * 0.05 }}
                >
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(c)}>
                      Edit
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
