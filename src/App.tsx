import "./App.css";
import { useState } from "react";
import pattern_devider_desktop from "./assets/pattern-divider-desktop.svg";
import pattern_devider_mobile from "./assets/pattern-divider-mobile.svg";
import icon_dice from "./assets/icon-dice.svg";

function App() {
  const [slip_id, setSlip_id] = useState(1);
  const [slip_advice, setSlip_advice] = useState<string>("");
  function handleClick() {
    setSlip_id(slip_id + 1);
  }
  async function GetAdvice(id: number) {
    const ApiUrl = `https://api.adviceslip.com/advice/${id}`;
    try {
      const response = await fetch(ApiUrl);
      const data = await response.json();

      if (data.slip) {
        setSlip_advice(data.slip.advice);
      }
    } catch (error) {
      console.error("error fetching advice", error);
    }
  }
  GetAdvice(slip_id);
  return (
    <>
      <div className="bg-[hsl(217,19%,24%)] rounded-xl md:w-sm flex items-center justify-center flex-col p-4 mx-6">
        <p className="text-[hsl(150,100%,66%)] text-center tracking-[0.25rem]">
          Advice #{slip_id}
        </p>
        <p className="text-white py-2 px-4 text-center"> "{slip_advice}" </p>

        <picture className="pt-4">
          <source media="(min-width: 768)" srcSet={pattern_devider_desktop} />
          <img src={pattern_devider_mobile} alt="pattern_devider_mobile" />
        </picture>

        <button
          className="relative top-9 rounded-full bg-[hsl(150,100%,66%)] p-3 hover:shadow-[0_0_17px_hsl(150,100%,66%)]"
          onClick={handleClick}
          type="button"
        >
          <img src={icon_dice} alt="icon_dice" className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

export default App;
