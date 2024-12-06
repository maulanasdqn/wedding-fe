import { FC, ReactElement } from "react";

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

export const ImageGallery: FC = (): ReactElement => (
  <div className="grid grid-cols-3 gap-4 bg-black mt-10 mb-[90px] px-2">
    {imageData.map((image) => (
      <img
        loading="lazy"
        key={image.id}
        src={image.src}
        alt={`Image ${image.id}`}
        className="w-full h-auto rounded-lg"
      />
    ))}
  </div>
);
