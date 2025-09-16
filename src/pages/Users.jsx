// src/pages/Users.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import API from "../api/axios";

// export default function Users() {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
//     { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
//   ]);
//   const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

//   const handleAddUser = () => {
//     if (newUser.name && newUser.email && newUser.role) {
//       setUsers([...users, { id: users.length + 1, ...newUser }]);
//       setNewUser({ name: "", email: "", role: "" });
//     }
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter((u) => u.id !== id));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Users</h2>

//       {/* Add User Form */}
//       <div className="mb-3 d-flex gap-2 flex-wrap">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Name"
//           value={newUser.name}
//           onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//         />
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//         />
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Role"
//           value={newUser.role}
//           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//         />
//         <button className="btn btn-primary" onClick={handleAddUser}>
//           Add User
//         </button>
//       </div>

//       {/* Users Table */}
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <motion.tr
//                 key={user.id}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: user.id * 0.05 }}
//               >
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.role}</td>
//                 <td>
//                   <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }




// Integrated code
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import API from "../api/axios";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ username: "", password: "", role: "" });

//   // Fetch users from backend
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await API.get("/users");
//     setUsers(res.data);
//   };

//   const handleAddUser = async () => {
//     if (newUser.username && newUser.password && newUser.role) {
//       await API.post("/users", newUser);
//       setNewUser({ username: "", password: "", role: "" });
//       fetchUsers();
//     }
//   };

//   const handleDelete = async (id) => {
//     await API.delete(`/users/${id}`);
//     fetchUsers();
//   };

//   const handleUpdate = async (id, updatedUser) => {
//     await API.put(`/users/${id}`, updatedUser);
//     fetchUsers();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
//     >
//       <h2>Users</h2>

//       {/* Add User Form */}
//       <div className="mb-3 d-flex gap-2 flex-wrap">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Username"
//           value={newUser.username}
//           onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//         />
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Password"
//           value={newUser.password}
//           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//         />
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Role"
//           value={newUser.role}
//           onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//         />
//         <button className="btn btn-primary" onClick={handleAddUser}>
//           Add User
//         </button>
//       </div>

//       {/* Users Table */}
//       <div className="table-responsive">
//         <table className="table table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Password</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <motion.tr
//                 key={user.id}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: user.id * 0.05 }}
//               >
//                 <td>{user.id}</td>
//                 <td>{user.username}</td>
//                 <td>{user.password}</td>
//                 <td>{user.role}</td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-warning me-2"
//                     onClick={() =>
//                       handleUpdate(user.id, {
//                         ...user,
//                         role: user.role === "Admin" ? "User" : "Admin",
//                       })
//                     }
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// }



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: "", password: "", role: "" });

  // Fetch users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to load users");
    }
  };

  const handleAddUser = async () => {
    if (newUser.username && newUser.password && newUser.role) {
      try {
        await API.post("/users", newUser);
        setNewUser({ username: "", password: "", role: "" });
        fetchUsers();
        toast.success("User added successfully ✅");
      } catch (err) {
        toast.error("Error adding user ❌");
      }
    } else {
      toast.warn("Please fill all fields ⚠️");
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      fetchUsers();
      toast.info("User deleted 🗑️");
    } catch (err) {
      toast.error("Error deleting user ❌");
    }
  };

  const handleUpdate = async (id, updatedUser) => {
    try {
      await API.put(`/users/${id}`, updatedUser);
      fetchUsers();
      toast.success("User updated ✏️");
    } catch (err) {
      toast.error("Error updating user ❌");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: "lightgrey", minHeight: "60vh", padding: "20px" }}
    >
      <h2>Users</h2>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Add User Form */}
      <div className="mb-3 d-flex gap-2 flex-wrap">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddUser}>
          Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: user.id * 0.05 }}
              >
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() =>
                      handleUpdate(user.id, {
                        ...user,
                        role: user.role === "Admin" ? "User" : "Admin",
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
