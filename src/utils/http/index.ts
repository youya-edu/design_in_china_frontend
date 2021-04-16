import { isDevelopment } from "../env";
import axios, { AxiosInstance } from "axios";

axios.defaults.baseURL =
  process.env.VUE_APP_DEV_BASE_API_URL || process.env.BASE_URL;

const httpRequest: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 10 * 1000, // 10s
  withCredentials: isDevelopment,
});

export default httpRequest;
