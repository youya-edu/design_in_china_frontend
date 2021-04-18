import { isDevelopment } from "@/utils/env";
import axios, { AxiosInstance } from "axios";
import userUtils from "@/utils/user";
import keys from "@/utils/user/constants";

axios.defaults.baseURL =
  process.env.VUE_APP_DEV_BASE_API_URL || process.env.BASE_URL;

const httpRequest: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 10 * 1000, // 10s
  withCredentials: isDevelopment,
});

httpRequest.interceptors.request.use(
  async (config) => {
    const jwtToken = await userUtils.get(keys.JWT);
    if (jwtToken) {
      config.headers["Authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default httpRequest;
