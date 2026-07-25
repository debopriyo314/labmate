import { useState } from "react";

import CalculatorHeader from "../components/tools/CalculatorHeader";
import CalculatorCard from "../components/tools/CalculatorCard";
import InputField from "../components/tools/InputField";
import ActionButtons from "../components/tools/ActionButtons";
import ResultCard from "../components/tools/ResultCard";

import { calculatePercentageError } from "../utils/calculations";

function PercentageErrorCalculator() {
  const [observed, setObserved] = useState("");
  const [accepted, setAccepted] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (observed === "" || accepted === "") {
      alert("Please fill in all fields.");
      return;
    }

    const observedValue = Number(observed);
    const acceptedValue = Number(accepted);

    if (acceptedValue === 0) {
      alert("Accepted Value cannot be zero.");
      return;
    }

    const error = calculatePercentageError(
      observedValue,
      acceptedValue
    );

    setResult(error);
  };

  const reset = () => {
    setObserved("");
    setAccepted("");
    setResult(null);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
      <CalculatorHeader
        title="📊 Percentage Error Calculator"
        description="Calculate the percentage error between observed and accepted values."
      />

      <CalculatorCard>
        <InputField
          label="Observed Value"
          value={observed}
          onChange={setObserved}
          placeholder="Enter Observed Value"
        />

        <InputField
          label="Accepted Value"
          value={accepted}
          onChange={setAccepted}
          placeholder="Enter Accepted Value"
        />

        <ActionButtons
          onCalculate={calculate}
          onReset={reset}
        />
      </CalculatorCard>

      {result !== null && (
        <ResultCard
          formula="Percentage Error = |Observed − Accepted| / Accepted × 100"
          calculation={`|${observed} - ${accepted}| ÷ ${accepted} × 100`}
          resultContent={
            <div className="space-y-4 text-center">
              <p className="text-4xl font-bold text-blue-600">
                {result.toFixed(2)}%
              </p>

              <div className="rounded-xl bg-slate-100 p-4 text-left">
                <p>
                  <strong>Observed Value:</strong> {observed}
                </p>

                <p>
                  <strong>Accepted Value:</strong> {accepted}
                </p>

                <p>
                  <strong>Difference:</strong>{" "}
                  {Math.abs(
                    Number(observed) - Number(accepted)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          }
        />
      )}
    </section>
  );
}

export default PercentageErrorCalculator;