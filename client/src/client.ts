import { DefaultApiFactory } from "./api"
import axios from "axios"

const baseURL = "http://localhost:3000"
const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
  },
})
export const axiosApi = DefaultApiFactory(undefined, baseURL, axiosInstance)
