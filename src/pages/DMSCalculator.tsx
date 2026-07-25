import { useState } from "react";

import CalculatorHeader from "../components/tools/CalculatorHeader";
import ModeSelector from "../components/tools/ModeSelector";

import DecimalToDMS from "../components/tools/dms/DecimalToDMS";
import DMSToDecimal from "../components/tools/dms/DMSToDecimal";
import DMSArithmetic from "../components/tools/dms/DMSArithmetic";

function DMSCalculator() {
  const [mode, setMode] = useState("decimal-to-dms");

  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-16">
      <CalculatorHeader
        title="📐 DMS Calculator"
        description="Convert and calculate Degree-Minute-Second values."
      />

      <ModeSelector
        selectedMode={mode}
        onChange={setMode}
        modes={[
          {
            label: "Decimal → DMS",
            value: "decimal-to-dms",
          },
          {
            label: "DMS → Decimal",
            value: "dms-to-decimal",
          },
          {
            label: "DMS Arithmetic",
            value: "arithmetic",
          },
        ]}
      />

      {mode === "decimal-to-dms" && <DecimalToDMS />}

      {mode === "dms-to-decimal" && <DMSToDecimal />}

      {mode === "arithmetic" && <DMSArithmetic />}
    </section>
  );
}

export default DMSCalculator;