import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

type TTabProps = {
  active: string;
  setActive: (value: string) => void;
};

export const Tab: FC<TTabProps> = ({ active, setActive }): ReactElement => {
  const variant = {
    initial: { scale: 1 },
    blink: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full flex flex-col mt-8 select-none">
      <div className="flex justify-start items-center border-t-[3px] border-gray-900/90">
        {[
          { id: "bride-groom", label: "Bride & Groom" },
          { id: "our-story", label: "Our Story" },
          { id: "memories", label: "Memories" },
        ].map((tab) => (
          <motion.div
            key={tab.id}
            variants={variant}
            whileTap="blink"
            onClick={() => setActive(tab.id)}
            className={`text-white border-t-[3px] mt-[-3px] text-xs focus:outline-none font-semibold cursor-pointer ${
              active === tab.id ? "border-red-700" : "border-gray-900/90"
            } py-2 px-4`}
          >
            {tab.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
