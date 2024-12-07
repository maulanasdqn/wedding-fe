import { FC, ReactElement } from "react";

const imageData = [
  {
    id: 1,
    src: "/gallery/brides.JPG",
    title: "Fenny Oktaviani S.T.",
    detail: "Anak ke 5 dari (Alm.) Bapa Ahyar dan Ibu Irawati",
  },
  {
    id: 2,
    src: "/gallery/groom.JPG",
    title: "Maulana Sodiqin S.T.",
    detail: "Anak ke 1 dari Bapak Topik Cahyana dan Ibu Yati Maryati ",
  },
];

export const BrideGroom: FC = (): ReactElement => (
  <div className="flex flex-col gap-y-4 bg-black mt-10 mb-[90px] px-2">
    <div className="flex flex-col gap-y-4">
      {imageData.map((image) => (
        <div
          key={image.id}
          className="flex text-white items-center gap-x-4 p-2"
        >
          <img
            loading="eager"
            src={image.src}
            alt={`Image ${image.id}`}
            className="w-[150px] h-[150px] object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-md font-bold">{image.title}</span>
            <span className="text-xs">{image.detail}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
