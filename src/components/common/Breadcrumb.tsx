import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
      <Home className="h-4 w-4" />

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-slate-400" />

          {item.path ? (
            <Link
              to={item.path}
              className="transition hover:text-blue-600 hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-slate-900">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumb;