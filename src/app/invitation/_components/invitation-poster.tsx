import { motion } from "framer-motion";
import { Calendar, Eye, MapPin, MessageCircle } from "lucide-react";
import { TopNavbar, Navbar } from "@/app/_components/ui/navbar";
import { useEffect, useRef, useState } from "react";

const data = [
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

const ImageGallery = () => (
  <div className="grid grid-cols-3 gap-4 bg-black mt-10 mb-[90px] px-2">
    {data.map((image) => (
      <img
        key={image.id}
        src={image.src}
        alt={`Image ${image.id}`}
        className="w-full h-auto rounded-lg"
      />
    ))}
  </div>
);

const Audio = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setAudioPlaying(true);
    return () => setAudioPlaying(false);
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    setPaused(!paused);
    if (paused) {
      audioRef?.current?.play();
    } else {
      audioRef?.current?.pause();
    }
    setPaused(!paused);
  };

  return (
    <>
      <TopNavbar onClick={togglePlayPause} audio={paused} />
      {audioPlaying && (
        <audio ref={audioRef} id="audio" autoPlay>
          <source src="/lagu-nikah.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  );
};

export const InvitationPoster = () => (
  <motion.div className="flex flex-col items-start justify-start h-full mt-[40px] min-h-screen bg-black">
    <img
      src="https://via.placeholder.com/400x300"
      alt="Wedding Invitation Poster"
      className="max-w-auto object-cover shadow-lg"
    />
    <div
      style={{
        fontFamily: "!important Parkinsans",
      }}
      className="flex flex-col gap-y-4 mt-4 text-white text-left px-4"
    >
      <h2
        style={{
          fontWeight: "bold",
        }}
        className="text-2xl"
      >
        Maul & Fenny : Sebelum Hari H
      </h2>
      <div className="flex flex-col gap-y-3">
        <p className="text-sm flex items-center gap-x-2">
          <Calendar /> 2024 - 12 - 14
        </p>
        <p className="text-sm flex items-center gap-x-2">
          <MapPin /> Kanaya Resto & Caffe
        </p>
      </div>
      <button
        style={{
          fontWeight: "bold",
        }}
        className="bg-white flex items-center gap-x-2 justify-center text-black py-3 px-4 rounded-md text-sm"
      >
        <Eye /> Detail Acara
      </button>
      <button
        style={{
          fontWeight: "bold",
        }}
        className="text-sm flex items-center gap-x-2 justify-center bg-blackc border text-white py-3 px-4 rounded-md"
      >
        <MessageCircle /> Ucapkan Sesuatu
      </button>
      <p className="text-xs text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint
        voluptates repellat. Soluta, aspernatur. Corrupti, quas. Repellat autem
      </p>
    </div>
    <ImageGallery />
    <Navbar />
    <Audio />
  </motion.div>
);
