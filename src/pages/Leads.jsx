// // src/pages/Leads.jsx
// import React from "react";
// import { leads } from "../data/mockData";

// export default function Leads() {
//   return (
//     <div>
//       <h2>Leads</h2>
//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Source</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead.id}>
//               <td>{lead.id}</td>
//               <td>{lead.name}</td>
//               <td>{lead.source}</td>
//               <td>{lead.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




// // src/pages/Leads.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { leads } from "../data/mockData";

// export default function Leads() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Leads</h2>
//       <div className="table-responsive">
//         <table className="table mt-3">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Source</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.map((lead) => (
//               <motion.tr
//                 key={lead.id}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: lead.id * 0.1 }}
//               >
//                 <td>{lead.id}</td>
//                 <td>{lead.name}</td>
//                 <td>{lead.source}</td>
//                 <td>{lead.status}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }




// // src/pages/Leads.jsx
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { leads } from "../data/mockData";

// export default function Leads() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter leads using useMemo for performance
//   const filteredLeads = useMemo(
//     () =>
//       leads.filter(
//         (lead) =>
//           lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           lead.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           lead.status.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     [searchTerm]
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Leads</h2>

//       {/* Search Input */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, source, or status..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="table-responsive">
//         <table className="table mt-3 table-striped table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Source</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredLeads.length > 0 ? (
//               filteredLeads.map((lead) => (
//                 <motion.tr
//                   key={lead.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: lead.id * 0.05 }}
//                 >
//                   <td>{lead.id}</td>
//                   <td>{lead.name}</td>
//                   <td>{lead.source}</td>
//                   <td>{lead.status}</td>
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




// // src/pages/Leads.jsx
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { leads } from "../data/mockData";
// import API from "../api/axios";

// // Utility: export CSV
// const exportToCSV = (data) => {
//   const headers = ["ID", "Name", "Source", "Status"];
//   const rows = data.map((l) => [l.id, l.name, l.source, l.status]);

//   let csvContent =
//     "data:text/csv;charset=utf-8," +
//     [headers, ...rows].map((e) => e.join(",")).join("\n");

//   const link = document.createElement("a");
//   link.setAttribute("href", encodeURI(csvContent));
//   link.setAttribute("download", "leads.csv");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export default function Leads() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Filter
//   const filteredLeads = useMemo(
//     () =>
//       leads.filter(
//         (lead) =>
//           lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           lead.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           lead.status.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     [searchTerm]
//   );

//   // Sorting
//   const sortedLeads = [...filteredLeads].sort((a, b) => {
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

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentLeads = sortedLeads.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(sortedLeads.length / itemsPerPage);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <div className="d-flex justify-content-between align-items-center">
//         <h2>Leads</h2>
//         <button className="btn btn-success" onClick={() => exportToCSV(filteredLeads)}>
//           Export CSV
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, source, or status..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table table-striped table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th onClick={() => requestSort("id")} style={{ cursor: "pointer" }}>
//                 ID {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("name")} style={{ cursor: "pointer" }}>
//                 Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("source")} style={{ cursor: "pointer" }}>
//                 Source {sortConfig.key === "source" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("status")} style={{ cursor: "pointer" }}>
//                 Status {sortConfig.key === "status" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentLeads.length > 0 ? (
//               currentLeads.map((lead) => (
//                 <motion.tr
//                   key={lead.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td>{lead.id}</td>
//                   <td>{lead.name}</td>
//                   <td>{lead.source}</td>
//                   <td>{lead.status}</td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center text-muted">No results found</td>
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
//         <span>Page {currentPage} of {totalPages}</span>
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



// with integration
// src/pages/Leads.jsx
// src/pages/Leads.jsx
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";
import { toast } from "react-toastify";

// Utility: export CSV
const exportToCSV = (data) => {
  const headers = ["ID", "Name", "Contact", "Status"];
  const rows = data.map((l) => [l.id, l.name, l.contact, l.status]);

  let csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csvContent));
  link.setAttribute("download", "leads.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form state
  const [formData, setFormData] = useState({ id: null, name: "", contact: "", status: "" });

  // Fetch leads from backend
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    API.get("/leads")
      .then((res) => setLeads(res.data))
      .catch(() => toast.error("Failed to fetch leads"));
  };

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.status) {
      toast.error("Please fill all fields");
      return;
    }

    if (formData.id) {
      // Update existing lead
      API.put(`/leads/${formData.id}`, formData)
        .then(() => {
          toast.success("Lead updated successfully");
          setFormData({ id: null, name: "", contact: "", status: "" });
          fetchLeads();
        })
        .catch(() => toast.error("Failed to update lead"));
    } else {
      // Add new lead
      API.post("/leads", formData)
        .then(() => {
          toast.success("Lead added successfully");
          setFormData({ id: null, name: "", contact: "", status: "" });
          fetchLeads();
        })
        .catch(() => toast.error("Failed to add lead"));
    }
  };

  // Edit
  const handleEdit = (lead) => {
    setFormData(lead);
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      API.delete(`/leads/${id}`)
        .then(() => {
          toast.success("Lead deleted successfully");
          fetchLeads();
        })
        .catch(() => toast.error("Failed to delete lead"));
    }
  };

  // Filter
  const filteredLeads = useMemo(
    () =>
      leads.filter(
        (lead) =>
          (lead.name && lead.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (lead.contact && lead.contact.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (lead.status && lead.status.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    [searchTerm, leads]
  );

  // Sorting
  const sortedLeads = [...filteredLeads].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key]?.toString().toLowerCase() || "";
    const valB = b[sortConfig.key]?.toString().toLowerCase() || "";
    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeads = sortedLeads.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedLeads.length / itemsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Leads</h2>
        <button className="btn btn-success" onClick={() => exportToCSV(filteredLeads)}>
          Export CSV
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="form-control"
              placeholder="Contact"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-control"
              placeholder="Status"
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              {formData.id ? "Update Lead" : "Add Lead"}
            </button>
          </div>
        </div>
      </form>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, contact, or status..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th onClick={() => requestSort("id")} style={{ cursor: "pointer" }}>
                ID {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => requestSort("name")} style={{ cursor: "pointer" }}>
                Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => requestSort("contact")} style={{ cursor: "pointer" }}>
                Contact {sortConfig.key === "contact" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => requestSort("status")} style={{ cursor: "pointer" }}>
                Status {sortConfig.key === "status" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.length > 0 ? (
              currentLeads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.contact}</td>
                  <td>{lead.status}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(lead)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(lead.id)}>
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-secondary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
