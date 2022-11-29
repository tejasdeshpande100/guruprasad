import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_DOMAIN;

export const defaultAxios = axios.create({
  baseURL: "https://devapi.exmyb.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

defaultAxios.interceptors.response.use(
  (response) => {
    if (response.data?.status === 1) return response.data;
    return Promise.reject(response.data?.err);
  },
  (error) => {
    const { response } = error;

    const message = response?.data?.err || "Something Went Wrong";
    return Promise.reject(message);
  }
);
