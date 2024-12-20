import { useEffect, useState, type FC, type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { WelcomeLoading } from "./loading";

export const WelcomeLayout: FC = (): ReactElement => {
  const [loadPage, setLoadPage] = useState(false);
  const loadTimeOut = 4;
  const parseLoad = parseInt(`${loadTimeOut / 2}000`);

  useEffect(() => {
    setTimeout(() => setLoadPage(true), parseLoad);
  }, [loadPage, setLoadPage, parseLoad]);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-black">
      {loadPage ? (
        <section className="w-full h-full max-w-[425px] bg-black">
          <Outlet />
        </section>
      ) : (
        <WelcomeLoading />
      )}
    </main>
  );
};
