import { useState } from "react";

import CalculatorCard from "../components/tools/CalculatorCard";
import InputField from "../components/tools/InputField";
import ResultCard from "../components/tools/ResultCard";

import { calculateScrewGaugeReading } from "../utils/calculations";

function ScrewGaugeCalculator() {
  const [psr, setPsr] = useState("");
  const [csr, setCsr] = useState("");
  const [leastCount, setLeastCount] = useState("0.01");
  const [result, setResult] = useState<number | null>(null);

  const calculateReading = () => {
    if (psr === "" || csr === "") {
      alert("Please fill in all fields.");
      return;
    }

    const reading = calculateScrewGaugeReading(
      Number(psr),
      Number(csr),
      Number(leastCount)
    );

    setResult(reading);
  };

  const resetCalculator = () => {
    setPsr("");
    setCsr("");
    setLeastCount("0.01");
    setResult(null);
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pt-28 pb-16">

      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          🔩 Screw Gauge Calculator
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Calculate Screw Gauge readings quickly and accurately.
        </p>
      </div>

      <CalculatorCard>

        <InputField
          label="Pitch Scale Reading (mm)"
          value={psr}
          onChange={setPsr}
          placeholder="Enter Pitch Scale Reading"
        />

        <InputField
          label="Circular Scale Reading"
          value={csr}
          onChange={setCsr}
          placeholder="Enter Circular Scale Reading"
        />

        <div className="mb-8">
          <label className="mb-2 block font-semibold text-slate-700">
            Least Count
          </label>

          <select
            value={leastCount}
            onChange={(e) => setLeastCount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="0.01">0.01 mm</option>
            <option value="0.005">0.005 mm</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateReading}
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Calculate
          </button>

          <button
            onClick={resetCalculator}
            className="rounded-xl border border-slate-300 px-6 font-semibold hover:bg-slate-100"
          >
            Reset
          </button>
        </div>

      </CalculatorCard>

      {result !== null && (
        <ResultCard
  formula="Reading = PSR + (CSR × Least Count)"
  calculation={`${psr} + (${csr} × ${leastCount})`}
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

export default ScrewGaugeCalculator;