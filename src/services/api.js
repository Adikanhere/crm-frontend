// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000", // json-server backend
});

export default API;
