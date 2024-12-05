import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
};

export const uploadThingConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_UPLOADTHING_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Uploadthing-Api-Key": import.meta.env.VITE_UPLOADTHING_API_KEY,
  },
};
