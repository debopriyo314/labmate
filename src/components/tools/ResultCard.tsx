import type { ReactNode } from "react";

type ResultCardProps = {
  title?: string;
  resultContent: ReactNode;
  formula: string;
  calculation: string;
};

function ResultCard({
  title = "Result",
  resultContent,
  formula,
  calculation,
}: ResultCardProps) {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="mt-6">
        {resultContent}
      </div>

      <div className="mt-8 rounded-2xl bg-slate-100 p-5">
        <h3 className="mb-3 font-semibold">
          Step-by-Step Calculation
        </h3>

        <p>{formula}</p>

        <p className="mt-2">{calculation}</p>
      </div>
    </div>
  );
}

export default ResultCard;