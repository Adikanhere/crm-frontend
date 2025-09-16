// import axios from "axios";

// const API = axios.create({
//   // baseURL: "http://localhost:8080/api",
//   baseURL: "https://crm-backend-2-dycr.onrender.com",

//   headers: { "Content-Type": "application/json" },
// });

// export default API;




import axios from "axios";

const API = axios.create({
  baseURL: "https://crm-backend-2-dycr.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

export default API;
