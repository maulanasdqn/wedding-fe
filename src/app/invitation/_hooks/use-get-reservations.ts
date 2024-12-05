import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TReservationResponse } from "../_entities/type";
import { TError, TMeta } from "@/app/_entities/type";
import { getReservations } from "../_api";

export const useGetReservations = (
  params: TMeta,
): UseQueryResult<TReservationResponse, TError> => {
  return useQuery({
    queryKey: ["get-reservations", params],
    queryFn: async () => await getReservations(params),
  });
};
