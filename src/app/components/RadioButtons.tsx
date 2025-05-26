'use client'
import { useState, useEffect } from "react";

export default function CustomRadioButtons() {
  const [selected, setSelected] = useState("long");

  useEffect(() => {
    const input = document.getElementById("positionType") as HTMLInputElement;
    if (input) input.value = selected;
  }, [selected]);

  return (
    <div className="flex gap-4">
      <input type="hidden" id="positionType" name="positionType" value={selected} />
      <span
        onClick={() => setSelected("long")}
        className={`cursor-pointer px-6 py-2 capitalize font-semibold rounded-sm transition ${selected === "long" ? "bg-green text-white" : "outline outline-2 outline-green text-green"}`}>
        long
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transition-colors my-auto inline ml-2">
                    <path d="M0.769231 0V1.53846H7.37692L0 8.91538L1.08462 10L8.46154 2.62308V9.23077H10V0H0.769231Z" />
                </svg>
      </span>
      <span
        onClick={() => setSelected("short")}
        className={`cursor-pointer px-6 py-2 capitalize font-semibold rounded-sm transition ${selected === "short" ? "bg-red text-white" : "outline outline-2 outline-red text-red"}`}>
        short
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transition-colors my-auto inline ml-2">
                    <path d="M0.769231 0V1.53846H7.37692L0 8.91538L1.08462 10L8.46154 2.62308V9.23077H10V0H0.769231Z" />
                </svg>
      </span>
    </div>
  );
}
