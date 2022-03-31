import axios from "axios";
import { BASE_URL } from 'utils/constant';
export * from "./request";

export const baseURL = BASE_URL
const axiosInstance: any = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  }
});

export default axiosInstance;
