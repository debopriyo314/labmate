import { useState } from "react";
import { formulas } from "../data/formulas/index";
import FormulaCard from "../components/formulas/FormulaCard";


function FormulaBook() {
  const [search, setSearch] = useState("");

  const popularSearches = [
    "Newton",
    "Energy",
    "Lens",
    "Wave",
    "Momentum",
    "Ohm",
  ];

  const filteredFormulas = formulas.filter((formula) => {
    const query = search.toLowerCase().trim();

    return (
      formula.title.toLowerCase().includes(query) ||
      formula.plainFormula.toLowerCase().includes(query) ||
      formula.description.toLowerCase().includes(query) ||
      formula.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query)
      )
    );
  });

  const suggestions =
    search.trim() === ""
      ? []
      : formulas.filter((formula) =>
          formula.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          📖 Formula Book
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Search any physics formula instantly.
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-10">
        <input
          type="text"
          placeholder="🔍 Search by formula name, keyword or symbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-lg shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            {suggestions.slice(0, 5).map((formula) => (
              <button
                key={formula.id}
                onClick={() => setSearch(formula.title)}
                className="block w-full border-b border-slate-100 px-5 py-3 text-left transition hover:bg-blue-50 last:border-b-0"
              >
                🔍 {formula.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Popular Searches */}
      {search.trim() === "" && (
        <div className="mt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Popular Searches
          </p>

          <div className="flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <button
                key={item}
                onClick={() => setSearch(item)}
                className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mt-10 space-y-8">
        {filteredFormulas.length > 0 ? (
          filteredFormulas.map((formula) => (
            <FormulaCard
              key={formula.id}
              title={formula.title}
              formula={formula.formula}
              plainFormula={formula.plainFormula}
              description={formula.description}
              variables={formula.variables}
            />
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <h2 className="text-2xl font-semibold text-slate-700">
              😕 No Formula Found
            </h2>

            <p className="mt-3 text-slate-500">
              Try another keyword, symbol or formula name.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormulaBook;