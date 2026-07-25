import { useState } from "react";

import CalculatorCard from "../CalculatorCard";
import InputField from "../InputField";
import ActionButtons from "../ActionButtons";
import ResultCard from "../ResultCard";

import { dmsToDecimal } from "../../../utils/calculations";

function DMSToDecimal() {
  const [degrees, setDegrees] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    if (
      degrees === "" ||
      minutes === "" ||
      seconds === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const decimal = dmsToDecimal(
      Number(degrees),
      Number(minutes),
      Number(seconds)
    );

    setResult(decimal);
  };

  const reset = () => {
    setDegrees("");
    setMinutes("");
    setSeconds("");
    setResult(null);
  };

  return (
    <>
      <CalculatorCard>
        <InputField
          label="Degrees"
          value={degrees}
          onChange={setDegrees}
        />

        <InputField
          label="Minutes"
          value={minutes}
          onChange={setMinutes}
        />

        <InputField
          label="Seconds"
          value={seconds}
          onChange={setSeconds}
        />

        <ActionButtons
          onCalculate={convert}
          onReset={reset}
        />
      </CalculatorCard>

      {result !== null && (
        <ResultCard
          formula="Decimal = Degrees + Minutes/60 + Seconds/3600"
          calculation={`${degrees} + (${minutes}/60) + (${seconds}/3600)`}
          resultContent={
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">
                {result.toFixed(6)}°
              </p>
            </div>
          }
        />
      )}
    </>
  );
}

export default DMSToDecimal;