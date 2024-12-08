import { FC, ReactElement, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";

const imageData = [
  {
    id: 1,
    src: "/gallery/story1.webp",
    story:
      "Dikala itu di suatu kampus kita saling mengenal,bertemu,dan seiring berjalannya waktu kita tambah mengenal 1 sama lain",
    title: "Pertemuan",
    year: "2020",
  },
  {
    id: 2,
    src: "/gallery/story2.webp",
    story:
      "Setelah beberapa drama perkuliahan dan kehidupan, kami pun saling mengsupport satu sama lain",
    title: "Mulai Bersama",
    year: "2021",
  },
  {
    id: 3,
    src: "/gallery/story4.webp",
    story:
      "Harapan semakin nyata ketika hal hal baik datang untuk mempersiapkan rencana kedepan, saat itulah kita mencoba meyakinkan diri untuk selangkah lebih maju",
    title: "Lamaran",
    year: "2024",
  },
  {
    id: 4,
    src: "/gallery/story3.webp",
    story:
      "Moment wisuda pun jadi saksi betapa kita ingin bersama menghadapi part part kehidupan selanjutnya",
    title: "Wisuda",
    year: "2024",
  },
];

const ImageCacheContext = createContext<Set<number>>(new Set());

const useImageCache = () => useContext(ImageCacheContext);

export const OurStory: FC = (): ReactElement => {
  const imageCache = useImageCache();

  return (
    <div className="flex flex-col h-full gap-y-8 bg-black mt-10 mb-[90px] px-2">
      {imageData.map((image) => (
        <ImageWithMotion key={image.id} image={image} imageCache={imageCache} />
      ))}
    </div>
  );
};

const ImageWithMotion: FC<{
  image: (typeof imageData)[0];
  imageCache: Set<number>;
}> = ({ image, imageCache }) => {
  const [loaded, setLoaded] = useState(imageCache.has(image.id));

  const handleLoad = () => {
    imageCache.add(image.id);
    setLoaded(true);
  };

  return (
    <div className="flex flex-col gap-y-2 text-white w-full">
      <div className="w-auto flex items-center gap-x-4 gap-y-2">
        <motion.picture
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            loading="lazy"
            src={image.src}
            alt={`Image ${image.id}`}
            width={150}
            height={100}
            className="object-cover rounded-lg"
            onLoad={handleLoad}
          />
        </motion.picture>
        <div className="flex flex-col gap-y-1">
          <span className="text-sm font-bold">{image.title}</span>
          <span className="text-xs text-gray-400">{image.year}</span>
        </div>
      </div>
      <span className="text-xs">{image.story}</span>
    </div>
  );
};

export const OurStoryWithCache: FC = () => {
  const imageCache = new Set<number>();

  return (
    <ImageCacheContext.Provider value={imageCache}>
      <OurStory />
    </ImageCacheContext.Provider>
  );
};
