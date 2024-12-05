import { useEffect, useState, type FC, type ReactElement } from "react";
import { RootLoading } from "./loading";
import { Outlet } from "react-router-dom";

export const RootLayout: FC = (): ReactElement => {
  const loadTimeOut = 4;
  const [loadPage, setLoadPage] = useState(false);

  const parseLoad = parseInt(`${loadTimeOut / 2}000`);

  useEffect(() => {
    setTimeout(() => setLoadPage(true), parseLoad);
  }, [loadPage, setLoadPage, parseLoad]);

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-black">
      {loadPage ? (
        <section className="w-full h-full max-w-[425px] bg-black">
          <Outlet />
        </section>
      ) : (
        <RootLoading />
      )}
    </main>
  );
};
