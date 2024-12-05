import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  MessageCircle,
  MapPin,
  ArrowLeft,
  VolumeX,
  Volume1,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const User = () => <img src="/netflix.png" alt="user" className="w-8 h-auto" />;

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { icon: Home, label: "Beranda", key: "home" },
    { icon: MessageCircle, label: "Ucapan", key: "search" },
    { icon: MapPin, label: "Lokasi", key: "downloads" },
    { icon: User, label: "My Nikahfix", key: "my-nikahfix" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#141414] rounded-tl-lg rounded-tr-lg backdrop-blur-sm">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <motion.div
            key={item.key}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActiveTab(item.key)}
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

export const TopNavbar: React.FC<{
  audio: boolean;
  onClick: () => void;
}> = ({ audio, onClick }) => {
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
