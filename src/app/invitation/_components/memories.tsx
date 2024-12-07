import { FC, ReactElement } from "react";

type TImageGalleryProps = {
  isLoading: boolean;
};

const imageData = [
  { id: 1, src: "https://via.placeholder.com/300x400" },
  { id: 2, src: "https://via.placeholder.com/300x400" },
  { id: 3, src: "https://via.placeholder.com/300x400" },
  { id: 4, src: "https://via.placeholder.com/300x400" },
  { id: 5, src: "https://via.placeholder.com/300x400" },
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
          className="w-full h-auto rounded-lg"
        />
      ),
    )}
  </div>
);
