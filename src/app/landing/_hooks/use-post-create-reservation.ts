import { TError } from "@/app/_entities/type";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { TReservationRequest } from "../_entities/type";
import { postReservation } from "../_api";

export const usePostCreateReservation = (): UseMutationResult<
  unknown,
  TError,
  TReservationRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-create-reservation"],
    mutationFn: async (payload) => await postReservation(payload),
  });
};
