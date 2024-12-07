import { FC, ReactElement } from "react";

type TImageGalleryProps = {
  isLoading: boolean;
};

const imageData = [
  { id: 1, src: "/gallery/1.JPG" },
  { id: 2, src: "/gallery/2.JPG" },
  { id: 3, src: "/gallery/3.JPG" },
  { id: 4, src: "/gallery/4.JPG" },
  { id: 5, src: "/gallery/5.JPG" },
  { id: 6, src: "https://via.placeholder.com/300x400" },
  { id: 7, src: "https://via.placeholder.com/300x400" },
  { id: 8, src: "https://via.placeholder.com/300x400" },
  { id: 9, src: "https://via.placeholder.com/300x400" },
];

export const Memories: FC<TImageGalleryProps> = ({
  isLoading,
}): ReactElement => (
  <div className="grid grid-cols-3 gap-4 bg-black mt-10 mb-[90px] px-2">
    {imageData.map((image) =>
      isLoading ? (
        <div
          key={image.id}
          className="w-full h-[400px] bg-gray-700 animate-pulse rounded-lg"
        ></div>
      ) : (
        <img
          loading="lazy"
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          className="w-[200px] h-[200px] rounded-lg"
        />
      )
    )}
  </div>
);
