// api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "/api/v1/idp/auth",  // Use this to test locally with proxy
  baseURL: "https://nimc-mosip-be.onrender.com/api/v1/idp/auth",
  headers: { "Content-Type": "application/json" },
});

// Attach token before requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired token (401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      window.location.href = "/login"; // redirect
    }
    return Promise.reject(error);
  }
);

export default api;