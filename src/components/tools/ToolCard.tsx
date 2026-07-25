import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ToolCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
};

function ToolCard({
  title,
  description,
  icon,
  path,
}: ToolCardProps) {
  return (
    <Link to={path}>
      <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          {icon}
        </div>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 text-slate-600">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default ToolCard;