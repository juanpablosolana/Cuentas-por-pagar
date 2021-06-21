import axios from "axios";

const baseUrl = "http://localhost:3000/api/login";

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { login, logout, getCurrentUser };
