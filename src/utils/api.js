
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://dummyjson.com";

export const api = axios.create({
  baseURL
});
