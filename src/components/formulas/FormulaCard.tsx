import { useState } from "react";
import { BlockMath } from "react-katex";

interface Variable {
  symbol: string;
  name: string;
  unit: string;
}

interface FormulaCardProps {
  title: string;
  formula: string;
  plainFormula: string;
  description: string;
  variables: Variable[];
}

function FormulaCard({
  title,
  formula,
  plainFormula,
  description,
  variables,
}: FormulaCardProps) {
  const [copied, setCopied] = useState(false);

  const copyFormula = async () => {
    try {
      await navigator.clipboard.writeText(plainFormula);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy formula:", error);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        <button
          onClick={copyFormula}
          className={`rounded-xl px-4 py-2 text-sm font-medium text-white transition ${
            copied
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>

      {/* Formula */}
      <div className="mt-8 rounded-2xl bg-slate-50 py-8">
        <BlockMath math={formula} />
      </div>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>

      {/* Variables */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-slate-900">
          Variables
        </h3>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left">Symbol</th>
                <th className="px-4 py-3 text-left">Meaning</th>
                <th className="px-4 py-3 text-left">SI Unit</th>
              </tr>
            </thead>

            <tbody>
              {variables.map((variable) => (
                <tr
                  key={variable.symbol}
                  className="border-t border-slate-200"
                >
                  <td className="px-4 py-3 font-bold text-blue-600">
                    {variable.symbol}
                  </td>

                  <td className="px-4 py-3">
                    {variable.name}
                  </td>

                  <td className="px-4 py-3">
                    {variable.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormulaCard;