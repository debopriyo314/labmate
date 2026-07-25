type CalculatorHeaderProps = {
  title: string;
  description: string;
};

function CalculatorHeader({
  title,
  description,
}: CalculatorHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default CalculatorHeader;