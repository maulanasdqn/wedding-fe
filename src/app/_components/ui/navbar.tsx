import { FC, ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { lazily } from "react-lazily";

const User = () => <img src="/netflix.png" alt="user" className="w-8 h-auto" />;

const { Home, MessageCircle, MapPin, ArrowLeft, VolumeX, Volume1 } = lazily(
  () => import("lucide-react"),
);

export const Navbar: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState("home");

  const openGoogleMaps = () => {
    const url =
      "https://www.google.com/maps/place/Kanaya+Food+Court/@-6.8932531,107.6355664,18z/data=!4m6!3m5!1s0x2e68e7a5abc8e9c3:0x16dbc3cec4a648b!8m2!3d-6.8935936!4d107.6359289!16s%2Fg%2F11b61qy3rh?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D";
    window.open(url, "_blank");
  };

  const navItems = [
    { icon: Home, label: "Beranda", key: "home" },
    { icon: MessageCircle, label: "Ucapan", key: "search" },
    {
      icon: MapPin,
      label: "Lokasi",
      key: "downloads",
      onClick: openGoogleMaps,
    },
    { icon: User, label: "M & F", key: "my-nikahfix" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#141414] rounded-tl-lg rounded-tr-lg backdrop-blur-sm">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <motion.div
            key={item.key}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              setActiveTab(item.key);
              item.onClick?.();
            }}
            whileTap={{ scale: 0.9 }}
          >
            <item.icon
              size={24}
              color={activeTab === item.key ? "white" : "gray"}
            />
            <motion.p
              className={`text-xs mt-1 ${activeTab === item.key ? "text-white" : "text-gray-400"}`}
            >
              {item.label}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const TopNavbar: FC<{
  audio: boolean;
  onClick: () => void;
}> = ({ audio, onClick }): ReactElement => {
  const navigate = useNavigate();

  const navItems = [
    {
      icon: ArrowLeft,
      label: "",
      key: "back",
      onClick: () => navigate(-1),
    },
    {
      icon: audio ? VolumeX : Volume1,
      label: "",
      key: "audio",
      onClick,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black">
      <div className="flex justify-between px-4 items-center py-3">
        {navItems.map((item) => (
          <motion.div
            key={item.key}
            className="flex flex-col items-center cursor-pointer"
            whileTap={{ scale: 0.9 }}
          >
            <item.icon onClick={item.onClick} size={24} color="white" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
