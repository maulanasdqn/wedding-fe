import { api, uploadThing } from "@/libs/axios/init";
import {
  TDownloadAudioRequest,
  TDownloadAudioResponse,
  TReservationRequest,
  TReservationResponse,
  TUploadAudioResponse,
  TUploadThingRequest,
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
  payload: TUploadThingRequest,
): Promise<TUploadAudioResponse> => {
  const { data } = await uploadThing({
    method: "post",
    url: "/uploadFiles",
    data: payload,
  });
  return data;
};

export const getAudio = async (
  params: TDownloadAudioRequest,
): Promise<TDownloadAudioResponse> => {
  const { data } = await api({
    method: "get",
    url: `/pollUpload/${params.fileKey}`,
  });
  return data;
};
