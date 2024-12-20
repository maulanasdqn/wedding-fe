import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

const text = "NIKAHFIX";

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.2, ease: "easeInOut", duration: 0.6 },
    exit: { opacity: 0, transition: { duration: 1.5 } },
  }),
  exit: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 1 },
  },
};

export const WelcomeLoading: FC = (): ReactElement => {
  return (
    <div className="fixed font-neue inset-0 flex items-center justify-center bg-black px-8 transition-all duration-1000">
      <div className="flex text-red-600 font-bold text-7xl tracking-tight">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={typewriterVariants}
            className="inline-block space-x-2"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
