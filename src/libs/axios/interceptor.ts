import { TError } from "@/app/_entities/type";
import { api } from "./init";

api.interceptors.response.use(
  (resp) => {
    return resp;
  },
  (error: TError) => {
    return error;
  },
);
