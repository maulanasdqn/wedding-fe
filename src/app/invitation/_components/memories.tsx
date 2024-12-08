import { FC, ReactElement, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";

type TImageGalleryProps = {
  isLoading: boolean;
};

type TImage = {
  id: number;
  src: string;
};

const imageData: TImage[] = [
  { id: 1, src: "/gallery/1.webp" },
  { id: 2, src: "/gallery/2.webp" },
  { id: 3, src: "/gallery/3.webp" },
  { id: 4, src: "/gallery/4.webp" },
  { id: 5, src: "/gallery/5.webp" },
  { id: 6, src: "/gallery/6.webp" },
  { id: 7, src: "/gallery/7.webp" },
  { id: 8, src: "/gallery/8.webp" },
  { id: 9, src: "/gallery/9.webp" },
];

const ImageCacheContext = createContext<Set<number>>(new Set());

const useImageCache = () => useContext(ImageCacheContext);

export const Memories: FC<TImageGalleryProps> = ({
  isLoading,
}): ReactElement => {
  const imageCache = useImageCache();

  return (
    <div className="grid grid-cols-3 gap-4 bg-black mt-10 mb-[90px] px-2">
      {imageData.map((image) => (
        <div key={image.id}>
          {isLoading ? (
            <div className="w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-gray-700 animate-pulse rounded-lg"></div>
          ) : (
            <AnimatedImage image={image} imageCache={imageCache} />
          )}
        </div>
      ))}
    </div>
  );
};

const AnimatedImage: FC<{ image: TImage; imageCache: Set<number> }> = ({
  image,
  imageCache,
}) => {
  const [loaded, setLoaded] = useState(imageCache.has(image.id));

  const handleLoad = () => {
    imageCache.add(image.id);
    setLoaded(true);
  };

  return (
    <motion.picture
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <source
        srcSet={`${image.src}?w=400&h=400&format=webp`}
        type="image/webp"
      />
      <motion.img
        onLoad={handleLoad}
        loading="lazy"
        src={`${image.src}?w=400&h=400`}
        alt={`Image ${image.id}`}
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.picture>
  );
};

export const ImageGalleryWithCache: FC<TImageGalleryProps> = (props) => {
  const imageCache = new Set<number>();

  return (
    <ImageCacheContext.Provider value={imageCache}>
      <Memories {...props} />
    </ImageCacheContext.Provider>
  );
};
