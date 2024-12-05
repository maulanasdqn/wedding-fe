import { useSearchParams } from "react-router-dom";

export const useUrlSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = {
    to: searchParams.get("to") ?? "User 1",
  };

  return {
    getParams,
    setSearchParams,
  };
};
