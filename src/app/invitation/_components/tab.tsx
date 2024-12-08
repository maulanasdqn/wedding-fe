import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

type TTabProps = {
  active: string;
  setActive: (value: string) => void;
};

export const Tab: FC<TTabProps> = ({ active, setActive }): ReactElement => {
  return (
    <div className="w-full flex flex-col mt-8 select-none">
      <div className="flex justify-start items-center border-t-[3px] border-gray-800">
        {[
          { id: "bride-groom", label: "Bride & Groom" },
          { id: "our-story", label: "Our Story" },
          { id: "memories", label: "Memories" },
        ].map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative text-white text-xs font-semibold cursor-pointer px-6 py-3 ${
              active === tab.id ? "text-red-700" : "text-gray-300"
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute top-[-2px] left-0 w-full h-[2px] bg-red-700"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
