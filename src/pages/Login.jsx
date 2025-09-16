// // src/pages/Login.jsx
// import React, { useState } from "react";
// import API from "../services/api";  // ✅ use the API instance
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     try {
//       const res = await API.get("/users", {
//         params: { email, password },
//       });
//       if (res.data && res.data.length > 0) {
//         localStorage.setItem("crm_user", JSON.stringify(res.data[0]));
//         navigate("/dashboard"); // redirect after login
//       } else {
//         setErr("Invalid email or password");
//       }
//     } catch (error) {
//       console.error(error);
//       setErr("Server error. Make sure json-server is running on port 4000");
//     }
//   };

//   return (
//     <div className="row justify-content-center">
//       <div className="col-md-6">
//         <h3 className="mb-3">Login to CRM</h3>
//         {err && <div className="alert alert-danger">{err}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



// src/pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErr("");

//     // 👉 Dummy check (replace with API later)
//     if (email === "admin@test.com" && password === "1234") {
//       const user = { email };
//       localStorage.setItem("crm_user", JSON.stringify(user));
//       navigate("/dashboard"); // redirect
//     } else {
//       setErr("Invalid email or password");
//     }
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6">
//         <h3 className="mb-3">Login</h3>
//         {err && <div className="alert alert-danger">{err}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// src/pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErr("");

//     // ✅ Dummy validation (replace later with API)
//     if (email === "admin@test.com" && password === "1234") {
//       const user = { email };
//       localStorage.setItem("crm_user", JSON.stringify(user));
//       navigate("/dashboard"); // redirect to Dashboard
//     } else {
//       setErr("Invalid email or password");
//     }
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6">
//         <h3 className="mb-3">Login to CRM</h3>
//         {err && <div className="alert alert-danger">{err}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// export default function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErr("");

//     if (email === "admin@test.com" && password === "1234") {
//       localStorage.setItem("crm_user", JSON.stringify({ email }));
//       setIsLoggedIn(true); // ✅ Notify App that login happened
//     } else {
//       setErr("Invalid email or password");
//     }
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6">
//         <h3 className="mb-3">Login to CRM</h3>
//         {err && <div className="alert alert-danger">{err}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// src/pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErr("");

//     // ✅ Dummy admin login
//     if (email === "admin@test.com" && password === "1234") {
//       const user = { email };
//       localStorage.setItem("crm_user", JSON.stringify(user));
//       setIsLoggedIn(true); // Important: notify App
//       navigate("/dashboard"); // redirect to Dashboard
//     } else {
//       setErr("Invalid email or password");
//     }
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6">
//         <h3 className="mb-3">Login to CRM</h3>
//         {err && <div className="alert alert-danger">{err}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button className="btn btn-primary w-100" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




// // Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "admin@test.com" && password === "1234") {
//       localStorage.setItem("crm_user", JSON.stringify({ email }));
//       setIsLoggedIn(true); // Update App state
//       navigate("/dashboard");
//     } else {
//       setErr("Invalid email or password");
//     }
//   };

//   return (
//     <div className="row justify-content-center mt-5">
//       <div className="col-md-6">
//         <h3 className="mb-3">Login to CRM</h3>
//         {err && <div className="alert alert-danger">{err}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label>Email</label>
//             <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
//           </div>
//           <div className="mb-3">
//             <label>Password</label>
//             <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
//           </div>
//           <button className="btn btn-primary w-100" type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }



// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "1234") {
      localStorage.setItem("crm_user", JSON.stringify({ email }));
      setIsLoggedIn(true);
      toast.success("Login successful 🎉"); // 🔔 Notification
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password ❌"); // 🔔 Notification
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <h3 className="mb-3">Login to CRM</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
