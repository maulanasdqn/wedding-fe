import { useUrlSearchParams } from "@/app/_hooks/use-url-search-params";

export const useWelcomeBanner = () => {
  const { getParams } = useUrlSearchParams();
  const guestName = getParams.to;
  return {
    guestName,
  };
};
