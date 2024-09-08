import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
axiosInstance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axiosInstance.defaults.headers.get["Content-Type"] = "application/json";
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
