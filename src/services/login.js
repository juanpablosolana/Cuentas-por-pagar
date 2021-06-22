import axios from "axios";

const baseUrl = "http://localhost:3000/api/login";

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  sessionStorage.setItem("user", JSON.stringify(data));
  return data;
};

const logout = () => {
  sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export default { login, logout, getCurrentUser };
