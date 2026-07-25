import type { ReactNode } from "react";

type CalculatorCardProps = {
  children: ReactNode;
};

function CalculatorCard({ children }: CalculatorCardProps) {
  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      {children}
    </div>
  );
}

export default CalculatorCard;