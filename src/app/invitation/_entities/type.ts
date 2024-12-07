import { TResponse } from "@/app/_entities/type";

export type TReservationItem = {
  id: string;
  fullname: string;
  attendance: string;
  speech: string;
  speech_audio: string;
};

export type TUploadThingItem = {
  key: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
  contentDisposition: string;
  pollingJwt: string;
  pollingUrl: string;
  customId: string;
  url: string;
  fields: unknown;
};

export type TReservationRequest = Omit<TReservationItem, "id">;

export type TReservationResponse = TResponse<TReservationItem[]>;

export type TUploadThingRequest = {
  files: Array<{
    name: string;
    size: number;
  }>;
  acl: string;
  contentDisposition: string;
};

export type TUploadAudioResponse = {
  file_url: string;
};

export type TDownloadAudioRequest = {
  fileKey: string;
};

export type TDownloadAudioResponse = {
  file_url: string;
};
