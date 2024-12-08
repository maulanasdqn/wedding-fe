import { FC, ReactElement, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";

const imageData = [
  {
    id: 1,
    src: "/gallery/brides.webp",
    title: "Fenny Oktaviani S.T.",
    detail: "Anak ke 5 dari (Alm.) Bapa Ahyar dan Ibu Irawati",
  },
  {
    id: 2,
    src: "/gallery/groom.webp",
    title: "Maulana Sodiqin S.T.",
    detail: "Anak ke 1 dari Bapak Topik Cahyana dan Ibu Yati Maryati ",
  },
];

const ImageCacheContext = createContext<Set<number>>(new Set());

const useImageCache = () => useContext(ImageCacheContext);

export const BrideGroom: FC = (): ReactElement => {
  const imageCache = useImageCache();

  return (
    <div className="flex flex-col gap-y-4 bg-black mt-10 mb-[90px] px-2">
      <div className="flex flex-col gap-y-4">
        {imageData.map((image) => (
          <BrideGroomCard
            key={image.id}
            image={image}
            imageCache={imageCache}
          />
        ))}
      </div>
    </div>
  );
};

const BrideGroomCard: FC<{
  image: (typeof imageData)[0];
  imageCache: Set<number>;
}> = ({ image, imageCache }) => {
  const [loaded, setLoaded] = useState(imageCache.has(image.id));

  const handleLoad = () => {
    imageCache.add(image.id);
    setLoaded(true);
  };

  return (
    <motion.div
      className="flex text-white items-center gap-x-4 p-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.img
        loading="eager"
        src={image.src}
        alt={`Image ${image.id}`}
        className="w-[150px] h-[150px] object-cover rounded-lg"
        onLoad={handleLoad}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="flex flex-col">
        <span className="text-md font-bold">{image.title}</span>
        <span className="text-xs">{image.detail}</span>
      </div>
    </motion.div>
  );
};

export const BrideGroomWithCache: FC = () => {
  const imageCache = new Set<number>();

  return (
    <ImageCacheContext.Provider value={imageCache}>
      <BrideGroom />
    </ImageCacheContext.Provider>
  );
};
