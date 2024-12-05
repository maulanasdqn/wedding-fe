import { FC, ReactElement } from "react";
import { useWelcomeBanner } from "../_hooks/use-welcome-banner";

export const WelcomeBanner: FC = (): ReactElement => {
  const { guestName } = useWelcomeBanner();
  const isDouble = guestName.split("dan").length > 1;
  const firstName = guestName.split("dan")[0];
  const secondName = guestName.split("dan")[1];
  const text =
    isDouble || guestName.toLowerCase().includes("keluarga")
      ? "Kalian di undang"
      : "Kamu di undang";
  return (
    <div className="flex flex-col justify-start items-center py-20 bg-black h-screen">
      <h1 className="text-[#E50914] font-sans font-bold text-6xl">NIKAHFIX</h1>
      <div className="flex flex-col justify-center h-full items-center">
        <p className="text-white text-base">{text}</p>
        {!isDouble ? (
          <div className="flex flex-col items-center mt-4">
            <img width={116} src="./netflix.png" alt="netflix" />
            <p className="text-xs mr-3 text-white">{firstName}</p>
          </div>
        ) : (
          <div className="flex mt-4 gap-x-4">
            <div className="flex flex-col items-center">
              <img width={116} src="./netflix.png" alt="netflix" />
              <p className="text-xs mr-3 text-white">{firstName}</p>
            </div>
            <div className="flex flex-col items-center">
              <img width={116} src="./netflix.png" alt="netflix" />
              <p className="text-xs mr-3 text-white">{secondName}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
