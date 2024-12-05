import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { TUploadAudioResponse, TUploadThingRequest } from "../_entities/type";
import { TError } from "@/app/_entities/type";
import { postUploadAudio } from "../_api";

export const usePostUploadAudio = (): UseMutationResult<
  TUploadAudioResponse,
  TError,
  TUploadThingRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-upload-audio"],
    mutationFn: async (payload) => await postUploadAudio(payload),
  });
};
