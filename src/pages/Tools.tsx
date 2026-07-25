import ToolCard from "../components/tools/ToolCard";
import { tools } from "../data/tools";

function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-28 pb-12">
      {/* Page Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          🔧 Lab Tools
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Choose a tool to begin your calculations.
        </p>
      </div>

      {/* Tool Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={<Icon size={32} />}
              path={tool.path}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tools;