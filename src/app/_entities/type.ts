import { AxiosError } from "axios";

export type TMeta = {
  total?: number;
  page?: number;
  per_page?: number;
};

export type TResponse<T> = {
  message: string;
  data: T;
  meta: TMeta;
};

export type TError = AxiosError<Pick<TResponse<unknown>, "message">>;
