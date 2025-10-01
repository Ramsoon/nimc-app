// auth.js
import api from "./api";

export async function registerUser(data) {
  const response = await api.post("/register", data);
  return response.data;
}

export async function loginUser(credentials) {
  const response = await api.post("/login", credentials);
  return response.data;
}
