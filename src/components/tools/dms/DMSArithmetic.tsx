import { useState } from "react";

import CalculatorCard from "../CalculatorCard";
import InputField from "../InputField";
import SelectField from "../SelectField";
import ActionButtons from "../ActionButtons";
import ResultCard from "../ResultCard";

import {
  addDMS,
  subtractDMS,
} from "../../../utils/calculations";

function DMSArithmetic() {
  const [operation, setOperation] = useState("add");

  const [d1, setD1] = useState("");
  const [m1, setM1] = useState("");
  const [s1, setS1] = useState("");

  const [d2, setD2] = useState("");
  const [m2, setM2] = useState("");
  const [s2, setS2] = useState("");

  const [result, setResult] = useState<{
    degrees: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const calculate = () => {
    if (
      d1 === "" ||
      m1 === "" ||
      s1 === "" ||
      d2 === "" ||
      m2 === "" ||
      s2 === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const answer =
      operation === "add"
        ? addDMS(
            Number(d1),
            Number(m1),
            Number(s1),
            Number(d2),
            Number(m2),
            Number(s2)
          )
        : subtractDMS(
            Number(d1),
            Number(m1),
            Number(s1),
            Number(d2),
            Number(m2),
            Number(s2)
          );

    setResult(answer);
  };

  const reset = () => {
    setD1("");
    setM1("");
    setS1("");

    setD2("");
    setM2("");
    setS2("");

    setOperation("add");

    setResult(null);
  };

  return (
    <>
      <CalculatorCard>
        <SelectField
          label="Operation"
          value={operation}
          onChange={setOperation}
          options={[
            {
              label: "Addition",
              value: "add",
            },
            {
              label: "Subtraction",
              value: "subtract",
            },
          ]}
        />

        <h2 className="mb-4 text-xl font-bold">
          Angle A
        </h2>

        <InputField
          label="Degrees"
          value={d1}
          onChange={setD1}
        />

        <InputField
          label="Minutes"
          value={m1}
          onChange={setM1}
        />

        <InputField
          label="Seconds"
          value={s1}
          onChange={setS1}
        />

        <h2 className="mb-4 mt-8 text-xl font-bold">
          Angle B
        </h2>

        <InputField
          label="Degrees"
          value={d2}
          onChange={setD2}
        />

        <InputField
          label="Minutes"
          value={m2}
          onChange={setM2}
        />

        <InputField
          label="Seconds"
          value={s2}
          onChange={setS2}
        />

        <ActionButtons
          onCalculate={calculate}
          onReset={reset}
        />
      </CalculatorCard>

      {result && (
        <ResultCard
          formula={
            operation === "add"
              ? "Angle A + Angle B"
              : "Angle A - Angle B"
          }
          calculation={`${d1}° ${m1}' ${s1}" ${
            operation === "add" ? "+" : "-"
          } ${d2}° ${m2}' ${s2}"`}
          resultContent={
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">
                {result.degrees}° {result.minutes}'{" "}
                {result.seconds}"
              </p>
            </div>
          }
        />
      )}
    </>
  );
}

export default DMSArithmetic;