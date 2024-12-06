import { FC, ReactElement } from "react";

type TProps = {
  active: string;
  setActive: (value: string) => void;
};

export const Tab: FC<TProps> = ({ active, setActive }): ReactElement => {
  return (
    <div className="w-full mt-8">
      <div className="w-full h-[3px] bg-gray-900/90" />
      <span
        onClick={() => setActive("bride-groom")}
        className={`text-white text-sm font-semibold ${active === "bride-groom" && "border-t-[3px] border-red-700"} py-1  px-4`}
      >
        Bride & Groom
      </span>
      <span
        onClick={() => setActive("our-story")}
        className={`text-white text-sm font-semibold ${active === "our-story" && "border-t-[3px] border-red-700"} py-1  px-4`}
      >
        Our Story
      </span>
      <span
        onClick={() => setActive("memories")}
        className={`text-white text-sm font-semibold ${active === "memories" && "border-t-[3px] border-red-700"} py-1  px-4`}
      >
        Memories
      </span>
    </div>
  );
};
