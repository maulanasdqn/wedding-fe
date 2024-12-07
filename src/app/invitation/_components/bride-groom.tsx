import { FC, ReactElement } from "react";

const imageData = [
  { id: 1, src: "https://via.placeholder.com/400x200" },
  { id: 2, src: "https://via.placeholder.com/400x200" },
];

export const BrideGroom: FC = (): ReactElement => (
  <div className="grid grid-cols-1 gap-4 bg-black mt-10 mb-[90px] px-2">
    {imageData.map((image) => (
      <img
        loading="lazy"
        key={image.id}
        src={image.src}
        alt={`Image ${image.id}`}
        className="w-full h-auto object-cover rounded-lg"
      />
    ))}
  </div>
);
