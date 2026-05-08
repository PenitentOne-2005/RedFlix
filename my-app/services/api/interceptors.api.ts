import axios from "axios";
import { API_URL } from "@/config/api.config";
import { getAccessToken } from "@/services/auth/auth.helper";
import { logout } from "@/providers/auth/authLogout";
import errorCatch from "./error.api";
import { getNewTokens } from "./helper.auth";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 ||
      errorCatch(error) === "jwt expired" ||
      (errorCatch(error) === "jwt must be provided" &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;

      try {
        await getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          await logout();
        }

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
