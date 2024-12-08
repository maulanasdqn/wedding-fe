import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

export const InvitationGift: FC = (): ReactElement => {
  const onCopyMandiri = () => {
    alert("Rekening berhasil dicopy");
    navigator.clipboard.writeText("1300020982875");
  };

  const onGiftRedirect = () => {
    alert("Alamat berhasil dicopy");
    navigator.clipboard.writeText(
      "Jln Karang Sari 225d, RT06/RW01, Kota Cimahi, Jawa Barat 40535",
    );
    window.open(
      "https://www.tokopedia.com/search?q=hampers+nikahan+kado+wedding&source=universe&st=product&navsource=home&srp_component_id=02.02.01.02",
      "_blank",
    );
  };

  return (
    <div className="flex flex-col gap-y-6 items-center mt-[80px] justify-start h-full min-h-screen bg-black text-white px-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Gift the Bride & Groom
      </h1>
      <motion.div
        onClick={onCopyMandiri}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        className="border-[2px] flex flex-col justify-between p-6 rounded-lg w-full h-[200px]"
      >
        <div className="flex w-full justify-end">
          <div className="flex flex-col text-right">
            <span className="text-lg font-bold justify-end items-end">
              mandiri
            </span>
            <span className="text-xs mt-[-2px] font-thin">debit virtual</span>
          </div>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="flex flex-col gap-y-1">
            <span className="text-[16px] font-semibold">13000-2098-2875</span>
            <span className="text-xs font-bold">MAULANA SODIQIN</span>
          </div>
          <span className="text-lg font-bold">VISA</span>
        </div>
      </motion.div>

      <motion.div
        onClick={onGiftRedirect}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        className="border-[2px] flex flex-col justify-between p-6 rounded-lg w-full h-[200px]"
      >
        <div className="flex w-full justify-end">
          <div className="flex flex-col">
            <span className="text-lg font-bold justify-end items-end">
              GIFT TOKOPEDIA
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between items-end">
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-semibold">Wedding GIFT</span>
          </div>
        </div>
      </motion.div>

      <span>Click the card to copy</span>
    </div>
  );
};
