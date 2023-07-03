import axios from "../axios";
import {API_URL} from "../env";

const login = async ({email, password}) => {
  
  const response = await axios.post(API_URL + "login", { email, password });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response;
};

const logout = () => {
  localStorage.removeItem("user");
};


const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default {
  login,
  logout,
  setAuthToken
};