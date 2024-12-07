import { motion } from "framer-motion";
import { lazily } from "react-lazily";
import { FC, ReactElement, Suspense, useState } from "react";

const { Calendar, Eye, MapPin, MessageCircle } = lazily(
  () => import("lucide-react")
);
const { Tab } = lazily(() => import("./tab"));
const { Navbar } = lazily(() => import("@/app/_components/ui/navbar"));
const { Memories } = lazily(() => import("./memories"));
const { OurStory } = lazily(() => import("./our-story"));
const { BrideGroom } = lazily(() => import("./bride-groom"));
const { AudioControl } = lazily(() => import("./audio-control"));
const { VideoControl } = lazily(() => import("./video-control"));

const LoadingFallback: FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
    <div className="animate-spin w-8 h-8 border-4 border-white border-t-transparent rounded-full mb-4"></div>
    <p>Loading...</p>
  </div>
);

const TabLoadingFallback: FC = () => (
  <div className="flex items-center justify-center w-full h-64 bg-gray-800 text-white">
    <p>Loading content...</p>
  </div>
);

export const InvitationPoster: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState("bride-groom");

  return (
    <Suspense fallback={<LoadingFallback />}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start justify-start h-full min-h-screen bg-black"
      >
        <VideoControl />
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
          <button className="text-sm font-bold flex items-center gap-x-2 justify-center bg-black border text-white py-3 px-4 rounded-md">
            <MessageCircle /> Ucapkan Sesuatu
          </button>
          <p className="text-xs text-white">
            Pesan dari calon pengantin : Kami meminta doa restu dari semua.
            Mohon maaf akan keterbatasan tempat,lokasi,makanan dan keterbatasan
            tamu yang terundang. Terimakasih atas dukungan dan doa-doa dari
            semua pihak.
          </p>
        </div>
        <Tab active={activeTab} setActive={setActiveTab} />
        <Suspense fallback={<TabLoadingFallback />}>
          {activeTab === "bride-groom" && <BrideGroom />}
          {activeTab === "our-story" && <OurStory />}
          {activeTab === "memories" && (
            <Memories isLoading={activeTab !== "memories"} />
          )}
        </Suspense>
        <Navbar />
        <AudioControl />
      </motion.div>
    </Suspense>
  );
};
