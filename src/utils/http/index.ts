import { isDevelopment } from "@/utils/env";
import axios, { AxiosInstance } from "axios";
import { getJwt } from "@/domain";
import { StatusCode } from "./status-codes";
import { CONTENT_TYPE, AUTHORIZATION } from "./headers";

const APPLICATION_JSON_UTF8 = "application/json;charset=UTF-8";

axios.defaults.baseURL =
  process.env.VUE_APP_DEV_BASE_API_URL || process.env.BASE_URL;

const httpRequest: AxiosInstance = axios.create({
  headers: {
    [CONTENT_TYPE]: APPLICATION_JSON_UTF8,
  },
  timeout: 10 * 1000, // 10s
  withCredentials: isDevelopment,
});

httpRequest.interceptors.request.use(
  async (config) => {
    const jwtToken = await getJwt();
    if (jwtToken) {
      config.headers[AUTHORIZATION] = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export { httpRequest, StatusCode };
