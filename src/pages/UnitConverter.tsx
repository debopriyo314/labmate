import { useEffect, useState } from "react";

const unitData = {
  Length: {
    units: ["mm", "cm", "m", "km"],
    factors: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
    },
  },

  Mass: {
    units: ["mg", "g", "kg"],
    factors: {
      mg: 0.000001,
      g: 0.001,
      kg: 1,
    },
  },

  Force: {
    units: ["N", "dyne"],
    factors: {
      N: 1,
      dyne: 0.00001,
    },
  },

  Energy: {
    units: ["J", "kJ", "eV"],
    factors: {
      J: 1,
      kJ: 1000,
      eV: 1.602176634e-19,
    },
  },

  Angle: {
    units: ["Degree", "Radian"],
    factors: {
      Degree: Math.PI / 180,
      Radian: 1,
    },
  },
};

function UnitConverter() {
  const [category, setCategory] = useState("Length");
  const [fromUnit, setFromUnit] = useState("mm");
  const [toUnit, setToUnit] = useState("cm");
  const [value, setValue] = useState("");

  const currentUnits =
    category === "Temperature"
      ? ["°C", "°F", "K"]
      : unitData[category as keyof typeof unitData].units;

  useEffect(() => {
    setFromUnit(currentUnits[0]);
    setToUnit(currentUnits[1]);
  }, [category]);

  const convert = () => {
    const num = parseFloat(value);

    if (isNaN(num)) return "";

    // Temperature
    if (category === "Temperature") {
      if (fromUnit === toUnit) return num.toString();

      if (fromUnit === "°C" && toUnit === "K")
        return (num + 273.15).toFixed(2);

      if (fromUnit === "K" && toUnit === "°C")
        return (num - 273.15).toFixed(2);

      if (fromUnit === "°C" && toUnit === "°F")
        return ((num * 9) / 5 + 32).toFixed(2);

      if (fromUnit === "°F" && toUnit === "°C")
        return (((num - 32) * 5) / 9).toFixed(2);

      if (fromUnit === "K" && toUnit === "°F")
        return (((num - 273.15) * 9) / 5 + 32).toFixed(2);

      if (fromUnit === "°F" && toUnit === "K")
        return ((((num - 32) * 5) / 9) + 273.15).toFixed(2);

      return "";
    }

    const factors =
      unitData[category as keyof typeof unitData].factors;

    const base =
      num * factors[fromUnit as keyof typeof factors];

    const result =
      base /
      factors[toUnit as keyof typeof factors];

    return Number(result.toFixed(6)).toString();
  };

  return (
    <section className="mx-auto max-w-xl px-6 pt-28 pb-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

        <h1 className="mb-6 text-center text-3xl font-bold">
          🔄 Unit Converter
        </h1>

        {/* Category */}
        <div className="mb-5">
          <label className="mb-2 block font-semibold">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            <option>Length</option>
            <option>Mass</option>
            <option>Temperature</option>
            <option>Force</option>
            <option>Energy</option>
            <option>Angle</option>
          </select>
        </div>

        {/* From */}
        <div className="mb-5">
          <label className="mb-2 block font-semibold">
            From
          </label>

          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            {currentUnits.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>
        </div>

        {/* To */}
        <div className="mb-5">
          <label className="mb-2 block font-semibold">
            To
          </label>

          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3"
          >
            {currentUnits.map((unit) => (
              <option key={unit}>{unit}</option>
            ))}
          </select>
        </div>

        {/* Value */}
        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Value
          </label>

          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full rounded-xl border border-slate-300 p-3"
          />
        </div>

        {/* Result */}
        <div className="rounded-2xl bg-slate-100 p-5 text-center">
          <p className="text-slate-500">
            Converted Value
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {convert() || "--"} {value && toUnit}
          </h2>
        </div>

      </div>
    </section>
  );
}

export default UnitConverter;