import type { FC, ReactElement } from "react";

export const VideoControl: FC = (): ReactElement => {
  return (
    <video autoPlay muted loop className="w-full h-full object-cover">
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};
