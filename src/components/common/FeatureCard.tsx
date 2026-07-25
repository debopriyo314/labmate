import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  path: string;
};

function FeatureCard({
  title,
  description,
  icon,
  path,
}: FeatureCardProps) {
  return (
    <Link to={path}>
      <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
        {/* Icon */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-slate-600 leading-7">
          {description}
        </p>

        {/* Button */}
        <div className="mt-6 flex items-center gap-2 font-medium text-blue-600 transition-all group-hover:gap-3">
          Open
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}

export default FeatureCard;