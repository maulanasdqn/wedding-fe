import { FC, ReactElement } from "react";

const imageData = [
  {
    id: 1,
    src: "/gallery/story1.JPG",
    story:
      "Dikala itu di suatu kampus kita saling mengenal,bertemu,dan seiring berjalannya waktu kita tambah mengenal 1 sama lain",
    title: "Pertemuan",
    year: "2020",
  },
  {
    id: 2,
    src: "/gallery/story2.JPG",
    story:
      "Setelah beberapa drama perkuliahan dan kehidupan, kami pun saling mengsupport satu sama lain",
    title: "Mulai Bersama",
    year: "2021",
  },
  {
    id: 3,
    src: "/gallery/story4.JPG",
    story:
      "Harapan semakin nyata ketika hal hal baik datang untuk mempersiapkan rencana kedepan, saat itulah kita mencoba meyakinkan diri untuk selangkah lebih maju",
    title: "Lamaran",
    year: "2024",
  },
  {
    id: 4,
    src: "/gallery/story3.JPG",
    story:
      "Moment wisuda pun jadi saksi betapa kita ingin bersama menghadapi part part kehidupan selanjutnya",
    title: "Wisuda",
    year: "2024",
  },
];

export const OurStory: FC = (): ReactElement => (
  <div className="flex flex-col h-full gap-y-8 bg-black mt-10 mb-[90px] px-2">
    {imageData.map((image, index) => (
      <div key={index} className="flex flex-col gap-y-2 text-white w-full">
        <div className="w-auto flex items-center gap-x-4 gap-y-2">
          <img
            loading="eager"
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
