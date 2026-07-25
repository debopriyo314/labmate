type ResultCardProps = {
  result: number;
  formula: string;
  calculation: string;
  unit?: string;
};

function ResultCard({
  result,
  formula,
  calculation,
  unit = "mm",
}: ResultCardProps) {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-900">
        Result
      </h2>

      <p className="mt-6">
        <span className="font-semibold">
          Final Reading:
        </span>

        <span className="ml-3 text-3xl font-bold text-blue-600">
          {result.toFixed(2)} {unit}
        </span>
      </p>

      <div className="mt-8 rounded-2xl bg-slate-100 p-5">
        <h3 className="mb-3 font-semibold">
          Step-by-Step Calculation
        </h3>

        <p>{formula}</p>

        <p className="mt-2">{calculation}</p>

        <p className="mt-2 font-bold text-blue-700">
          = {result.toFixed(2)} {unit}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;