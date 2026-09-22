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
  return <></>;
}

export default App;
