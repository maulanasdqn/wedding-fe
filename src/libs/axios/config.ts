import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
};

export const uploadThingConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_UPLOADTHING_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Uploadthing-Api-Key": import.meta.env.VITE_UPLOADTHING_API_KEY,
  },
};
