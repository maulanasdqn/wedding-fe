import { motion } from "framer-motion";
import { lazily } from "react-lazily";
import { FC, ReactElement, Suspense, useState } from "react";
import { Tab } from "./tab";
import { BrideGroom } from "./brid-groom";
import { OurStory } from "./our-story";

const { Calendar, Eye, MapPin, MessageCircle } = lazily(
  () => import("lucide-react"),
);

const { ImageGallery } = lazily(() => import("./image-gallery"));
const { AudioControl } = lazily(() => import("./audio-control"));
const { Navbar } = lazily(() => import("@/app/_components/ui/navbar"));

export const InvitationPoster: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState("bride-groom");
  return (
    <Suspense>
      <motion.div className="flex flex-col items-start justify-start h-full min-h-screen bg-black">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-y-4 mt-4 text-white text-left px-4">
          <h2 className="text-2xl font-bold">Maul & Fenny : Sebelum Hari H</h2>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm flex items-center gap-x-2">
              <Calendar /> 2024 - 12 - 14
            </p>
            <p className="text-sm flex items-center gap-x-2">
              <MapPin /> Kanaya Resto & Caffe
            </p>
          </div>
          <button className="bg-white font-bold flex items-center gap-x-2 justify-center text-black py-3 px-4 rounded-md text-sm">
            <Eye /> Detail Acara
          </button>
          <button className="text-sm font-bold flex items-center gap-x-2 justify-center bg-blackc border text-white py-3 px-4 rounded-md">
            <MessageCircle /> Ucapkan Sesuatu
          </button>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sint voluptates repellat. Soluta, aspernatur. Corrupti, quas.
            Repellat autem
          </p>
        </div>
        <Tab active={activeTab} setActive={setActiveTab} />
        {activeTab === "bride-groom" && <BrideGroom />}
        {activeTab === "our-story" && <OurStory />}
        {activeTab === "memories" && <ImageGallery />}

        <Navbar />
        <AudioControl />
      </motion.div>
    </Suspense>
  );
};
