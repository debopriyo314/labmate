import { useState } from "react";

import CalculatorCard from "../components/tools/CalculatorCard";
import CalculatorHeader from "../components/tools/CalculatorHeader";
import InputField from "../components/tools/InputField";
import SelectField from "../components/tools/SelectField";
import ActionButtons from "../components/tools/ActionButtons";
import ResultCard from "../components/tools/ResultCard";

import { calculateVernierReading } from "../utils/calculations";

function VernierCalculator() {
  const [msr, setMsr] = useState("");
  const [vsr, setVsr] = useState("");
  const [leastCount, setLeastCount] = useState("0.01");
  const [result, setResult] = useState<number | null>(null);

  const calculateReading = () => {
    if (msr === "" || vsr === "") {
      alert("Please fill in all fields.");
      return;
    }

    const reading = calculateVernierReading(
      Number(msr),
      Number(vsr),
      Number(leastCount)
    );

    setResult(reading);
  };

  const resetCalculator = () => {
    setMsr("");
    setVsr("");
    setLeastCount("0.01");
    setResult(null);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">
      <CalculatorHeader
        title="📏 Vernier Calculator"
        description="Calculate Vernier Caliper readings quickly and accurately."
      />

      <CalculatorCard>
        <InputField
          label="Main Scale Reading (mm)"
          value={msr}
          onChange={setMsr}
          placeholder="Enter Main Scale Reading"
        />

        <InputField
          label="Vernier Scale Reading"
          value={vsr}
          onChange={setVsr}
          placeholder="Enter Vernier Scale Reading"
        />

        <SelectField
          label="Least Count"
          value={leastCount}
          onChange={setLeastCount}
          options={[
            { label: "0.01 mm", value: "0.01" },
            { label: "0.02 mm", value: "0.02" },
            { label: "0.05 mm", value: "0.05" },
            { label: "0.10 mm", value: "0.10" },
          ]}
        />

        <ActionButtons
          onCalculate={calculateReading}
          onReset={resetCalculator}
        />
      </CalculatorCard>

      {result !== null && (
       <ResultCard
  formula="Reading = MSR + (VSR × Least Count)"
  calculation={`${msr} + (${vsr} × ${leastCount})`}
  resultContent={
    <p>
      <span className="font-semibold">
        Final Reading:
      </span>

      <span className="ml-3 text-3xl font-bold text-blue-600">
        {result.toFixed(2)} mm
      </span>
    </p>
  }
/>
      )}
    </section>
  );
}

export default VernierCalculator;