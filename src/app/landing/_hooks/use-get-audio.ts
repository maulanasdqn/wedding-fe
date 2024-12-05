import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  TDownloadAudioRequest,
  TDownloadAudioResponse,
} from "../_entities/type";
import { TError } from "@/app/_entities/type";
import { getAudio } from "../_api";

export const useGetAudio = (
  params: TDownloadAudioRequest,
): UseQueryResult<TDownloadAudioResponse, TError> => {
  return useQuery({
    queryKey: ["get-audio", params],
    queryFn: async () => await getAudio(params),
  });
};
