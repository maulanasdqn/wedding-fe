import { Navbar } from "@/app/_components/ui/navbar";
import { FC, Suspense, ReactElement } from "react";

export const Component: FC = (): ReactElement => {
  const eventDetails = {
    bannerSrc: "/gallery/banner.JPG",
    akad: {
      date: "14 December 2024",
      time: "08:00 AM - 10.00 AM",
      location: "Resto Kanaya Food Court",
    },
    resepsi: {
      date: "14 December 2024",
      time: "10:30 AM - 13.30 AM",
      location: "Resto Kanaya Food Court",
    },
  };
  return (
    <Suspense>
      <div className="flex flex-col h-full bg-black text-white font-sans">
        <div className="relative">
          <img
            src={eventDetails.bannerSrc}
            alt="Netflix Themed Wedding Banner"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex flex-col justify-end p-6">
            <h1 className="text-3xl font-bold font-neue shadow-lg text-red-600">
              Nikahfix M & F
            </h1>
            <p className="text-md text-white font-sans">
              A love story will begin
            </p>
          </div>
        </div>

        <div className="px-6 ">
          <h2 className="text-2xl font-bold text-red-600 mb-3">
            Event Details
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Akad</h3>
            <p className="text-sm">
              <span className="font-bold">Date:</span> {eventDetails.akad.date}
            </p>
            <p className="text-sm">
              <span className="font-bold">Time:</span> {eventDetails.akad.time}
            </p>
            <p className="text-sm">
              <span className="font-bold">Location:</span>{" "}
              {eventDetails.akad.location}
            </p>
          </div>

          <div>
            <h3 className="text-2lg font-semibold ">Resepsi</h3>
            <p className="text-sm">
              <span className="font-bold">Date:</span>{" "}
              {eventDetails.resepsi.date}
            </p>
            <p className="text-sm">
              <span className="font-bold">Time:</span>{" "}
              {eventDetails.resepsi.time}
            </p>
            <p className="text-sm">
              <span className="font-bold">Location:</span>{" "}
              {eventDetails.resepsi.location}
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </Suspense>
  );
};
