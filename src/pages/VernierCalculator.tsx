import { calculateVernierReading } from "../utils/calculations";
import { useState } from "react";

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

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          📏 Vernier Calculator
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Calculate Vernier Caliper readings quickly and accurately.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

        {/* Main Scale */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold text-slate-700">
            Main Scale Reading (mm)
          </label>

          <input
            type="number"
            value={msr}
            onChange={(e) => setMsr(e.target.value)}
            placeholder="Enter Main Scale Reading"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Vernier Scale */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold text-slate-700">
            Vernier Scale Reading
          </label>

          <input
            type="number"
            value={vsr}
            onChange={(e) => setVsr(e.target.value)}
            placeholder="Enter Vernier Scale Reading"
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Least Count */}
        <div className="mb-8">
          <label className="mb-2 block font-semibold text-slate-700">
            Least Count
          </label>

          <select
            value={leastCount}
            onChange={(e) => setLeastCount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-blue-500"
          >
            <option value="0.01">0.01 mm</option>
            <option value="0.02">0.02 mm</option>
            <option value="0.05">0.05 mm</option>
            <option value="0.10">0.10 mm</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={calculateReading}
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Calculate
          </button>

          <button
            onClick={resetCalculator}
            className="rounded-xl border border-slate-300 px-6 font-semibold transition hover:bg-slate-100"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Result */}
      {result !== null && (
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-slate-900">
            Result
          </h2>

          <p className="mt-6 text-lg">
            <span className="font-semibold">
              Final Reading:
            </span>{" "}
            <span className="text-3xl font-bold text-blue-600">
              {result.toFixed(2)} mm
            </span>
          </p>

          <div className="mt-8 rounded-2xl bg-slate-100 p-5">
            <h3 className="mb-3 font-semibold text-slate-800">
              Step-by-Step Calculation
            </h3>

            <p>
              Reading = MSR + (VSR × Least Count)
            </p>

            <p className="mt-2">
              = {msr} + ({vsr} × {leastCount})
            </p>

            <p className="mt-2 font-bold text-blue-700">
              = {result.toFixed(2)} mm
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default VernierCalculator;