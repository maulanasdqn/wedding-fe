import { FC, ReactElement } from "react";

const imageData = [
  {
    id: 1,
    src: "https://via.placeholder.com/200x100",
    story: "Dikala itu disebuah matahari terbenam, kami bertemu wadidwda wacaw",
    title: "Bertemu dikampus",
    year: "2023",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/200x100",
    story: "Dikala itu disebuah matahari terbenam, kami bertemu wadidwda wacaw",
    title: "Ngapain lagi ya",
    year: "2023",
  },
];

export const OurStory: FC = (): ReactElement => (
  <div className="flex flex-col h-full gap-y-8 bg-black mt-10 mb-[90px] px-2">
    {imageData.map((image) => (
      <div className="flex flex-col gap-y-2 text-white w-full">
        <div className="w-auto flex items-center gap-x-4 gap-y-2">
          <img
            loading="lazy"
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            width={150}
            height={100}
            className="object-cover rounded-lg"
          />
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-bold">{image.title}</span>
            <span className="text-xs text-gray-400">{image.year}</span>
          </div>
        </div>
        <span className="text-xs">{image.story}</span>
      </div>
    ))}
  </div>
);
