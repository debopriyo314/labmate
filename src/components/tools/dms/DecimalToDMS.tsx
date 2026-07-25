import { useState } from "react";

import CalculatorCard from "../CalculatorCard";
import InputField from "../InputField";
import ActionButtons from "../ActionButtons";
import ResultCard from "../ResultCard";

import { decimalToDMS } from "../../../utils/calculations";

function DecimalToDMS() {
  const [decimal, setDecimal] = useState("");

  const [result, setResult] = useState<{
    degrees: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const convert = () => {
    if (decimal === "") {
      alert("Please enter a decimal value.");
      return;
    }

    const converted = decimalToDMS(Number(decimal));

    setResult(converted);
  };

  const reset = () => {
    setDecimal("");
    setResult(null);
  };

  return (
    <>
      <CalculatorCard>
        <InputField
          label="Decimal Degrees"
          value={decimal}
          onChange={setDecimal}
          placeholder="Example: 25.7583"
        />

        <ActionButtons
          onCalculate={convert}
          onReset={reset}
        />
      </CalculatorCard>

      {result && (
        <ResultCard
          formula="Decimal → DMS"
          calculation={`${decimal}°`}
          resultContent={
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">
                {result.degrees}°
                {" "}
                {result.minutes}'
                {" "}
                {result.seconds.toFixed(2)}"
              </p>
            </div>
          }
        />
      )}
    </>
  );
}

export default DecimalToDMS;