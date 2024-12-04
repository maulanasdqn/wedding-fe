import { FC, ReactElement } from "react";

export const LandingHeader: FC = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center bg-black h-screen">
      <h1 className="text-[#E50914] font-mono font-bold text-6xl py-4">
        Nikahan
      </h1>
      <p className="text-white text-base text-sm ">Who's watching?</p>
      <img src="./netflix.png" alt="netflix" />
      <p className="text-sm text-red-500">Nama Tamu</p>
    </div>
  );
};
