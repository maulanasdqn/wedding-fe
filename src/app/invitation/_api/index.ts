import { api } from "@/libs/axios/init";
import {
  TReservationRequest,
  TReservationResponse,
  TUploadAudioResponse,
} from "../_entities/type";
import { TMeta } from "@/app/_entities/type";

export const getReservations = async (
  params: TMeta,
): Promise<TReservationResponse> => {
  const { data } = await api({
    method: "get",
    url: "/reservations",
    params,
  });
  return data;
};

export const postReservation = async (payload: TReservationRequest) => {
  const { data } = await api({
    method: "post",
    url: "/reservations/create",
    data: payload,
  });
  return data;
};

export const postUploadAudio = async (
  payload: File,
): Promise<TUploadAudioResponse> => {
  const formData = new FormData();
  formData.append("file", payload);
  const { data } = await api({
    method: "post",
    url: "/upload",
    data: formData,
    headers: {
      "Content-Type": "application/form-data",
    },
  });
  return data;
};
