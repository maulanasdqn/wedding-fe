import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

type TTabProps = {
  active: string;
  setActive: (value: string) => void;
};

export const Tab: FC<TTabProps> = ({ active, setActive }): ReactElement => {
  const variant = {
    whileHover: {
      scale: 1.1,
    },
    whileTap: {
      scale: 0.9,
      background: "red",
    },
    blink: {
      backgroundColor: ["#ffffff", "transparent"],
    },
  };

  return (
    <div className="w-full flex flex-col mt-8 select-none">
      <div className="w-full h-[3px] bg-gray-900/90" />
      <div className="flex justify-start items-center">
        {[
          { id: "bride-groom", label: "Bride & Groom" },
          { id: "our-story", label: "Our Story" },
          { id: "memories", label: "Memories" },
        ].map((tab) => (
          <motion.div
            key={tab.id}
            variants={variant}
            whileHover={{ scale: 1.1 }}
            whileTap="blink"
            onClick={() => setActive(tab.id)}
            animate={active === tab.id ? { scale: 1.2 } : { scale: 1 }}
            className={`text-white text-xs font-semibold ${
              active === tab.id && "border-t-[3px] border-red-700"
            } py-1 px-4`}
          >
            {tab.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
