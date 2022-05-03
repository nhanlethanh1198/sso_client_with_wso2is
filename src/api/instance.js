import axios from "axios";
import { asyncLocalStorage } from "../utils";

const BASE_URL = `${process.env.REACT_APP_HOST}/api/${process.env.REACT_APP_API_VERSION}`;

const axiosInstance = (contentType) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
  });

  instance.interceptors.request.use(async (config) => {
    config.headers["Content-Type"] = contentType;
    config.headers["Access-Control-Allow-Origin"] = "*";
    const access_token = await asyncLocalStorage.getItem("access_token");
    const token_type = await asyncLocalStorage.getItem("token_type");

    if (!!access_token && !!token_type) {
      config.headers["Authorization"] = `${token_type} ${access_token}`;
    }

    return config;
  });

  return instance;
};

const instance = axiosInstance("application/json");

const instanceFormData = axiosInstance("multipart/form-data");

const instanceApplication = axiosInstance("application/x-www-form-urlencoded");

export { instance, instanceFormData, instanceApplication };
