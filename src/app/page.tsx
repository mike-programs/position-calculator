'use client'

// Images
import riskImage from "@/../public/risk-image.svg";
import takeProfitImage from "@/../public/takeprofit-image.svg";
import stopLossImage from "@/../public/stoploss-image.svg";
import stopLossPercentageImage from "@/../public/stoplosspercentage.svg";

// Components
import InputField from "./components/InputField";
import CustomRadioButtons from "./components/RadioButtons";
import XLogo from "./components/XLogo";
import InstagramLogo from "./components/InstagramLogo";
import LinkedinLogo from "./components/LinkedinLogo";
import CustomModal from "./components/CustomModal";
import { useState } from "react";

type OrderData = {
  label: string;
  value: number;
};

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<OrderData[]>([]);

  const handleCalculate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      risk: formData.get("risk"),
      takeProfit: formData.get("TP"),
      stopLoss: formData.get("SL"),
      orderPrice: formData.get("order-price"),
      positionType: formData.get("positionType"), // ✅ Added
    };

    try {
      const response = await fetch("/server/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      // Format the data for the modal
      const formatted = [
        { label: "order value", value: result.orderValue },
        { label: "risk", value: result.risk },
        { label: "take profit", value: result.takeProfit },
        { label: "stop loss", value: result.stopLoss }
      ];

      setModalData(formatted);
      setOpenModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="relative md:min-h-dvh max-w-[2500px] mx-auto">
      <main className="p-6 text-sm flex flex-col gap-4 md:px-20 lg:px-36 xl:px-72 2xl:px-96">
        <div className="text-center capitalize flex flex-col gap-3 my-8">
          <h1 className="text-3xl font-bold tracking-wider">position calculator</h1>
          <h3 className="text-gray">fill out the form and press submit</h3>
        </div>

        <form className="flex flex-col gap-16" onSubmit={handleCalculate}>
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-[.9rem]">What order are you taking?</p>
            <CustomRadioButtons />
          </div>

          <div className="flex flex-col gap-9 md:gap-12 xl:grid xl:grid-cols-2">
            <InputField label="Order Price/Entry" name="order-price" imgSrc={stopLossPercentageImage} inputHolder="What is your Order Price?" required />
            <InputField label="risk" name="risk" imgSrc={riskImage} inputHolder="How much are you comfortable losing?" required />
            <InputField label="TP" name="TP" imgSrc={takeProfitImage} inputHolder="What is your Take Profit?" required />
            <InputField label="SL" name="SL" imgSrc={stopLossImage} inputHolder="What is your Stop Loss?" required />
          </div>

          <div className="flex flex-col gap-3 md:items-center md:my-20">
            <button type="submit" className="capitalize font-semibold text-white bg-blue p-2 rounded-sm md:w-xs cursor-pointer">calculate</button>
            <button type="reset" className="capitalize font-semibold text-blue border-2 border-blue p-2 rounded-sm md:w-xs cursor-pointer">reset</button>
          </div>
        </form>

        <div className="mt-8 flex flex-col gap-2 md:absolute bottom-10 left-10">
          <p className="text-gray text-xs">Connect with me</p>
          <div className="flex gap-10">
            <XLogo />
            <LinkedinLogo />
            <InstagramLogo />
          </div>
        </div>
      </main>

      {openModal && <CustomModal data={modalData} onClose={handleCloseModal} />}
    </div>
  );
}
