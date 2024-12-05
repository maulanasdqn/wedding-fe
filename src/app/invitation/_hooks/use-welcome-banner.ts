import { useUrlSearchParams } from "@/app/_hooks/use-url-search-params";

export const useWelcomeBanner = () => {
  const { getParams } = useUrlSearchParams();

  const guestName = getParams.to;
  const isDouble = guestName.split("dan").length > 1;
  const firstName = guestName.split("dan")[0];
  const secondName = guestName.split("dan")[1];
  const inviteText = "Kami Mengundang";

  return {
    firstName,
    secondName,
    inviteText,
    isDouble,
  };
};
