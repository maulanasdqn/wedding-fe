import { TResponse } from "@/app/_entities/type";

export type TReservationItem = {
  id: string;
  fullname: string;
  attendence: boolean;
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

export type TUploadAudioResponse = TResponse<TUploadThingItem[]>;

export type TDownloadAudioRequest = {
  fileKey: string;
};

export type TDownloadAudioResponse = {
  status: string;
  file: {
    fileKey: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    fileUrl: string;
    customId: string;
    callbackUrl: string;
    callbackSlug: string;
  };
  metadata: unknown;
  callbackData: unknown;
};
