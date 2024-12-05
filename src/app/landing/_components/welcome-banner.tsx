import { FC, ReactElement, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWelcomeBanner } from "../_hooks/use-welcome-banner";
import { useNavigate } from "react-router-dom";

export const WelcomeBanner: FC = (): ReactElement => {
  const [animationStage, setAnimationStage] = useState<
    "initial" | "expanded" | "shrunk"
  >("initial");
  const { isDouble, firstName, secondName, inviteText } = useWelcomeBanner();
  const navigate = useNavigate();

  const handleImageClick = () => {
    setAnimationStage("expanded");
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (animationStage === "expanded") {
      timeoutId = setTimeout(() => {
        setAnimationStage("shrunk");
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [animationStage]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (animationStage === "shrunk") {
      timeoutId = setTimeout(() => {
        navigate("/invitation");
      }, 500);
    }
    return () => clearTimeout(timeoutId);
  }, [animationStage, navigate]);

  const popupVariants = {
    initial: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
    },
    expanded: {
      scale: 3,
      x: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    shrunk: {
      scale: 0.3,
      x: 170,
      y: 400,
      opacity: 0.5,
      transition: {
        duration: 0.4,
        ease: "linear",
      },
    },
  };

  const renderImageSection = (name: string, key?: number) => (
    <div
      key={key}
      className="flex flex-col items-center"
      onClick={animationStage === "initial" ? handleImageClick : undefined}
    >
      <AnimatePresence>
        <motion.img
          width={116}
          src="./netflix.png"
          alt="netflix"
          variants={popupVariants}
          initial="initial"
          animate={animationStage}
          whileHover={animationStage === "initial" ? { scale: 1.1 } : {}}
        />
      </AnimatePresence>
      <p className="text-xs mr-3 text-white">{name}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col justify-start items-center py-20 bg-black h-screen"
    >
      <h1 className="text-[#E50914] font-bold tracking-wider text-5xl transform [text-transform:uppercase] [text-shadow:0px_0px_3px_rgba(0,0,0,0.5)]">
        NIKAHFIX
      </h1>
      <div className="flex flex-col justify-center h-full items-center">
        <p className="text-white text-base mb-4">{inviteText}</p>
        {!isDouble ? (
          renderImageSection(firstName)
        ) : (
          <div className="flex mt-6 gap-x-4">
            {[
              { name: firstName, key: 0 },
              { name: secondName, key: 1 },
            ].map(({ name, key }) => renderImageSection(name, key))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
