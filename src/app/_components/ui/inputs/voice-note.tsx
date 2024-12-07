import { useState, useRef, ReactElement, Fragment } from "react";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { InputWrap, TInputWrap } from "./wrap";
import { motion } from "framer-motion";
import { Mic, StopCircle, PlayCircle, PauseCircle } from "lucide-react";

type TVoiceNote<T extends FieldValues> = Omit<TInputWrap, "children"> &
  UseControllerProps<T>;

export const VoiceNote = <T extends FieldValues>({
  name,
  control,
  label,
  message,
  required,
}: TVoiceNote<T>): ReactElement => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { field } = useController<T>({
    name,
    control,
  });

  const startRecording = async () => {
    if (isRecording) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setPlaybackProgress(0);
      setIsPlaying(false);
    }

    field.onChange(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        audioChunks.current = [];
        const url = URL.createObjectURL(audioBlob);
        field.onChange(url);
      };

      mediaRecorder.start();
      setIsRecording(true);

      const id = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (!isRecording || !mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setRecordingDuration(0);
  };

  const playAudio = () => {
    if (!field.value) {
      return;
    }

    if (!audioRef.current) {
      const audio = new Audio(field.value);
      audioRef.current = audio;

      audio.ontimeupdate = () => {
        if (audio.duration) {
          setPlaybackProgress((audio.currentTime / audio.duration) * 100);
          setCurrentPlaybackTime(audio.currentTime);
        }
      };

      audio.onended = () => {
        setIsPlaying(false);
        setPlaybackProgress(0);
        setCurrentPlaybackTime(0);
      };
    }

    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatDuration = (seconds: number | undefined): string => {
    if (seconds === undefined || isNaN(seconds)) return "00:00";

    const minutes = Math.floor(seconds / 60);
    if (minutes === 0 || isNaN(minutes)) return "00:00";

    const remainingSeconds = Math.floor(seconds % 60);
    if (remainingSeconds === 0 || isNaN(remainingSeconds)) return "00:00";

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <InputWrap label={label} message={message} required={required}>
      <div className="flex flex-col gap-4">
        {isRecording && (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
            <span className="text-sm text-red-600">
              Recording... {formatDuration(recordingDuration)}
            </span>
          </div>
        )}

        <div className="flex items-center gap-4 bg-gray-800 px-4 py-2 rounded-lg shadow">
          <button
            type="button"
            onClick={startRecording}
            disabled={isRecording}
            className={`p-2 rounded-full transition-colors ${
              isRecording
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            <Mic className="text-white w-6 h-6" />
          </button>

          {isRecording && (
            <button
              type="button"
              onClick={stopRecording}
              className="p-2 rounded-full bg-gray-500 hover:bg-gray-600 transition-colors"
            >
              <StopCircle className="text-white w-6 h-6" />
            </button>
          )}

          {field.value && (
            <Fragment>
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={playAudio}
                  className="p-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
                >
                  <PlayCircle className="text-white w-6 h-6" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={pauseAudio}
                  className="p-2 rounded-full bg-yellow-600 hover:bg-yellow-700 transition-colors"
                >
                  <PauseCircle className="text-white w-6 h-6" />
                </button>
              )}
            </Fragment>
          )}

          {field.value && !isRecording && (
            <div className="flex items-center gap-2 flex-1">
              <span className="text-sm text-gray-400">
                {formatDuration(currentPlaybackTime)}
              </span>

              <div className="flex-1 bg-gray-700 h-1 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 bg-green-600 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${playbackProgress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                ></motion.div>
              </div>

              <span className="text-sm text-gray-400">
                {audioRef.current?.duration
                  ? formatDuration(audioRef.current.duration)
                  : formatDuration(recordingDuration)}
              </span>
            </div>
          )}
        </div>
      </div>
    </InputWrap>
  );
};
