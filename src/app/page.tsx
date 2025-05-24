//images
import riskImage from "@/../public/risk-image.svg";
import takeProfitImage from "@/../public/takeprofit-image.svg"
import stopLossImage from "@/../public/stoploss-image.svg"
import stopLossPercentageImage from "@/../public/stoplosspercentage.svg"


//components
import InputField from "./components/InputField";
import CustomRadioButtons from "./components/RadioButtons";
import XLogo from "./components/XLogo";
import InstagramLogo from "./components/InstagramLogo";
import LinkedinLogo from "./components/LinkedinLogo";
import CustomModal from "./components/CustomModal";


export default function Home() {
  return (
    <div>
      <main className="p-6 text-sm flex flex-col gap-4 md:px-20 lg:px-36 xl:px-72 2xl:px-96">
        <div className="text-center capitalize flex flex-col gap-3 my-8 ">
          <h1 className="text-3xl font-bold tracking-wider">position calculator</h1>
          <h3 className="text-gray">fill out the form and press submit</h3>
        </div>

        <form className="flex flex-col gap-16" action="/">
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-[.9rem]">What order are you taking?</p>
            <CustomRadioButtons></CustomRadioButtons>
          </div>

          <div className="flex flex-col gap-9 md:gap-12 xl:grid xl:grid-cols-2">
            <InputField label="risk" imgSrc={riskImage} inputHolder="How much are you comfortable losing?" required={true}></InputField>
            <InputField label="TP" imgSrc={takeProfitImage} inputHolder="What is your Take Profit?" required={true}></InputField>
            <InputField label="SL" imgSrc={stopLossImage} inputHolder="What is your Stop Loss?" required={true}></InputField>
            <InputField label="SL% (Optional)" imgSrc={stopLossPercentageImage} inputHolder="What is your Stop Loss Percentage?"></InputField>
          </div>

          <div className="flex flex-col gap-3 md:items-center md:my-20">
            <button type="submit" className="capitalize font-semibold text-white bg-blue p-2 rounded-sm md:w-xs cursor-pointer">calculate</button>
            <button className="capitalize font-semibold text-blue border-2 border-blue p-2 rounded-sm md:w-xs cursor-pointer">reset</button>
          </div>
        </form>

        <div className="mt-8 flex flex-col gap-2 md:absolute bottom-10 left-10">
          <p className="text-gray text-xs">Connect with me</p>
          <div className="flex gap-10">
            <XLogo></XLogo>
            <LinkedinLogo></LinkedinLogo>
            <InstagramLogo></InstagramLogo>
          </div>
        </div>
      </main>
    </div>
  );
}