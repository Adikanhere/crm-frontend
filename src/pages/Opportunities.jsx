// // src/pages/Opportunities.jsx
// import React from "react";
// import { opportunities } from "../data/mockData";

// export default function Opportunities() {
//   return (
//     <div>
//       <h2>Opportunities</h2>
//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Value ($)</th>
//             <th>Stage</th>
//           </tr>
//         </thead>
//         <tbody>
//           {opportunities.map((opp) => (
//             <tr key={opp.id}>
//               <td>{opp.id}</td>
//               <td>{opp.name}</td>
//               <td>{opp.value}</td>
//               <td>{opp.stage}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



// // src/pages/Opportunities.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { opportunities } from "../data/mockData";

// export default function Opportunities() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Opportunities</h2>
//       <div className="table-responsive">
//         <table className="table mt-3">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Value ($)</th>
//               <th>Stage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {opportunities.map((opp) => (
//               <motion.tr
//                 key={opp.id}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: opp.id * 0.1 }}
//               >
//                 <td>{opp.id}</td>
//                 <td>{opp.name}</td>
//                 <td>{opp.value}</td>
//                 <td>{opp.stage}</td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }




// // src/pages/Opportunities.jsx
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { opportunities } from "../data/mockData";

// export default function Opportunities() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter opportunities using useMemo for performance
//   const filteredOpportunities = useMemo(
//     () =>
//       opportunities.filter(
//         (opp) =>
//           opp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           opp.stage.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           String(opp.value).includes(searchTerm)
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
//       <h2>Opportunities</h2>

//       {/* Search Input */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, value, or stage..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="table-responsive">
//         <table className="table mt-3 table-striped table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Value ($)</th>
//               <th>Stage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOpportunities.length > 0 ? (
//               filteredOpportunities.map((opp) => (
//                 <motion.tr
//                   key={opp.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: opp.id * 0.05 }}
//                 >
//                   <td>{opp.id}</td>
//                   <td>{opp.name}</td>
//                   <td>{opp.value}</td>
//                   <td>{opp.stage}</td>
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




// // src/pages/Opportunities.jsx
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import { opportunities } from "../data/mockData";
// import API from "../api/axios";

// // Utility: export CSV
// const exportToCSV = (data) => {
//   const headers = ["ID", "Name", "Value", "Stage"];
//   const rows = data.map((o) => [o.id, o.name, o.value, o.stage]);

//   let csvContent =
//     "data:text/csv;charset=utf-8," +
//     [headers, ...rows].map((e) => e.join(",")).join("\n");

//   const link = document.createElement("a");
//   link.setAttribute("href", encodeURI(csvContent));
//   link.setAttribute("download", "opportunities.csv");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export default function Opportunities() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Filter
//   const filteredOpportunities = useMemo(
//     () =>
//       opportunities.filter(
//         (opp) =>
//           opp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           opp.stage.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           String(opp.value).includes(searchTerm)
//       ),
//     [searchTerm]
//   );

//   // Sorting
//   const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
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
//   const currentOpportunities = sortedOpportunities.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(sortedOpportunities.length / itemsPerPage);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <div className="d-flex justify-content-between align-items-center">
//         <h2>Opportunities</h2>
//         <button className="btn btn-success" onClick={() => exportToCSV(filteredOpportunities)}>
//           Export CSV
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, value, or stage..."
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
//               <th onClick={() => requestSort("value")} style={{ cursor: "pointer" }}>
//                 Value ($) {sortConfig.key === "value" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//               <th onClick={() => requestSort("stage")} style={{ cursor: "pointer" }}>
//                 Stage {sortConfig.key === "stage" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentOpportunities.length > 0 ? (
//               currentOpportunities.map((opp) => (
//                 <motion.tr
//                   key={opp.id}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td>{opp.id}</td>
//                   <td>{opp.name}</td>
//                   <td>{opp.value}</td>
//                   <td>{opp.stage}</td>
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




// Integrated code
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";
import { toast } from "react-toastify";

// Utility: export CSV
const exportToCSV = (data) => {
  const headers = ["ID", "Description", "Value ($)", "Stage"];
  const rows = data.map((o) => [o.id, o.description, o.value, o.stage]);

  let csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csvContent));
  link.setAttribute("download", "opportunities.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Opportunities() {
  const [opps, setOpps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({ id: null, description: "", value: "", stage: "" });
  const itemsPerPage = 5;

  // Fetch opportunities
  useEffect(() => {
    loadOpps();
  }, []);

  const loadOpps = () => {
    API.get("/opportunity")
      .then((res) => setOpps(res.data))
      .catch(() => toast.error("Failed to fetch opportunities"));
  };

  // Handle form submit (add/edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.value || !form.stage) {
      toast.error("All fields are required");
      return;
    }
    if (form.id) {
      // Update
      API.put(`/opportunity/${form.id}`, form)
        .then(() => {
          toast.success("Opportunity updated");
          setForm({ id: null, description: "", value: "", stage: "" });
          loadOpps();
        })
        .catch(() => toast.error("Failed to update opportunity"));
    } else {
      // Add
      API.post("/opportunity", form)
        .then(() => {
          toast.success("Opportunity added");
          setForm({ id: null, description: "", value: "", stage: "" });
          loadOpps();
        })
        .catch(() => toast.error("Failed to add opportunity"));
    }
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      API.delete(`/opportunity/${id}`)
        .then(() => {
          toast.success("Opportunity deleted");
          loadOpps();
        })
        .catch(() => toast.error("Failed to delete opportunity"));
    }
  };

  // Edit
  const handleEdit = (opp) => {
    setForm(opp);
  };

  // Filter
  const filteredOpps = useMemo(
    () =>
      opps.filter(
        (o) =>
          (o.description && o.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (o.stage && o.stage.toLowerCase().includes(searchTerm.toLowerCase())) ||
          String(o.value).includes(searchTerm)
      ),
    [searchTerm, opps]
  );

  // Sorting
  const sortedOpps = [...filteredOpps].sort((a, b) => {
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
  const currentOpps = sortedOpps.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedOpps.length / itemsPerPage);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h2>Opportunities</h2>
        <button className="btn btn-success" onClick={() => exportToCSV(filteredOpps)}>
          Export CSV
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by description, value, or stage..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add/Edit Form */}
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Value ($)"
              value={form.value}
              onChange={(e) => setForm({ ...form, value: e.target.value })}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Stage"
              value={form.stage}
              onChange={(e) => setForm({ ...form, stage: e.target.value })}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              {form.id ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th onClick={() => requestSort("id")} style={{ cursor: "pointer" }}>
                ID {sortConfig.key === "id" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => requestSort("description")} style={{ cursor: "pointer" }}>
                Description {sortConfig.key === "description" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => requestSort("value")} style={{ cursor: "pointer" }}>
                Value ($) {sortConfig.key === "value" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th onClick={() => requestSort("stage")} style={{ cursor: "pointer" }}>
                Stage {sortConfig.key === "stage" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOpps.length > 0 ? (
              currentOpps.map((opp) => (
                <motion.tr
                  key={opp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <td>{opp.id}</td>
                  <td>{opp.description}</td>
                  <td>{opp.value}</td>
                  <td>{opp.stage}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(opp)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(opp.id)}>
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No results found
                </td>
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
        <span>
          Page {currentPage} of {totalPages}
        </span>
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
