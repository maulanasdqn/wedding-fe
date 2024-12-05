import axios from "axios";
import { apiConfig, uploadThingConfig } from "./config";

export const api = axios.create(apiConfig);

export const uploadThing = axios.create(uploadThingConfig);
