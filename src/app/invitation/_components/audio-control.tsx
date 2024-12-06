import { TopNavbar } from "@/app/_components/ui/navbar";
import { FC, Fragment, ReactElement, useEffect, useRef, useState } from "react";

export const AudioControl: FC = (): ReactElement => {
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
    <Fragment>
      <TopNavbar onClick={togglePlayPause} audio={paused} />
      {audioPlaying && (
        <audio ref={audioRef} id="audio" autoPlay>
          <source src="/lagu-nikah.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </Fragment>
  );
};
