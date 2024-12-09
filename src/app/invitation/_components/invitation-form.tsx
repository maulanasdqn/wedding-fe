import { InputText } from "@/app/_components/ui/inputs/text";
import { FC, Fragment, ReactElement, Suspense } from "react";
import { useForm } from "react-hook-form";
import { TReservationRequest } from "../_entities/type";
import { Select } from "@/app/_components/ui/inputs/select";
import { TextArea } from "@/app/_components/ui/inputs/text-area";
import { VoiceNote } from "@/app/_components/ui/inputs/voice-note";
import { useGetReservations } from "../_hooks/use-get-reservations";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaReservation } from "../_entities/schema";
import { motion } from "framer-motion";
import { usePostCreateReservation } from "../_hooks/use-post-create-reservation";
import { usePostUploadAudio } from "../_hooks/use-post-upload-audio";
import { Navbar, TopNavbar } from "@/app/_components/ui/navbar";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg: string) => toast(msg);

export const InvitationForm: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TReservationRequest>({
    mode: "all",
    resolver: zodResolver(schemaReservation),
    defaultValues: {
      fullname: "",
      attendance: "",
      speech: "",
      speech_audio: "",
    },
  });

  const attendenceOptions = [
    { value: "", label: "Pilih Kehadiran" },
    { value: "true", label: "Hadir" },
    { value: "false", label: "Tidak Hadir" },
  ];

  const { data, refetch } = useGetReservations({
    page: 1,
    per_page: 100,
  });

  const { mutate, isPending: isPendingCreate } = usePostCreateReservation();
  const { mutate: uploadAudio, isPending: isPendingUpload } =
    usePostUploadAudio();

  const isPending = isPendingCreate || isPendingUpload;

  const onSubmit = handleSubmit((data) => {
    mutate(
      {
        ...data,
        speech_audio: "",
      },
      {
        onSuccess: () => {
          refetch();
          reset({
            fullname: "",
            attendance: "",
            speech: "",
            speech_audio: "",
          });
          notify("Berhasil mengirim ucapan");
        },
      },
    );
    if (data.speech_audio) {
      fetch(data.speech_audio)
        .then((res) => res.blob())
        .then((blob) => {
          const audioFile = new File([blob], `{${Date.now()}}.webm`, {
            type: blob.type,
          });
          uploadAudio(audioFile, {
            onSuccess: (res) => {
              mutate(
                {
                  ...data,
                  speech_audio: res.file_url,
                },
                {
                  onSuccess: () => {
                    refetch();
                    reset({
                      fullname: "",
                      attendance: "",
                      speech: "",
                      speech_audio: "",
                    });
                    notify("Berhasil mengirim ucapan");
                  },
                },
              );
            },
          });
        })
        .catch((err) => {
          console.error("Failed to process speech audio:", err);
        });
    }
  });

  return (
    <Fragment>
      <Toaster />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: 20 }}
        className="flex flex-col bg-black mt-[60px] text-white p-6 rounded-lg w-full max-w-3xl mx-auto shadow-lg"
      >
        <TopNavbar />
        <Navbar />
        <h2 className="text-2xl font-bold mb-4">Mari Ucapkan Sesuatu</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-6">
          <Suspense>
            <InputText
              required
              message={errors.fullname?.message}
              placeholder="Masukkan Nama Lengkap"
              control={control}
              name="fullname"
              label="Nama Lengkap"
            />
            <Select
              required
              message={errors.attendance?.message}
              options={attendenceOptions}
              control={control}
              name="attendance"
              label="Kehadiran"
            />
            <TextArea
              message={errors.speech?.message}
              required
              placeholder="Masukkan Ucapan"
              control={control}
              name="speech"
              label="Ucapan"
            />
            <VoiceNote
              message={errors.speech_audio?.message}
              label="Ucapkan dengan VN"
              name="speech_audio"
              control={control}
            />

            <button
              disabled={!isValid}
              type="submit"
              className={`mt-4 px-6 py-3 rounded font-semibold text-lg transition-colors ${
                isValid
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
            >
              {isPending ? "Loading..." : "Kirim Ucapan"}
            </button>
          </Suspense>
        </form>

        {data && (
          <div className="mt-6 mb-[80px]">
            {data?.data?.map((reservation, key) => (
              <div
                key={key}
                className="p-4 border mt-4 border-gray-700 bg-gray-800 rounded-md text-gray-300"
              >
                <h2 className="font-bold text-lg text-white">
                  {reservation.fullname}
                </h2>
                {reservation.attendance === "true" ? (
                  <p className="text-green-400">Hadir</p>
                ) : (
                  <p className="text-red-400">Tidak Hadir</p>
                )}
                <p className="text-gray-400 mt-4">{reservation.speech}</p>
                {reservation.speech_audio && (
                  <div className="mt-4">
                    <audio controls className="w-full max-w-md rounded">
                      <source
                        src={reservation.speech_audio}
                        type="audio/webm"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.section>
    </Fragment>
  );
};
