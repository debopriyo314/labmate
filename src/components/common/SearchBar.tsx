import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchData } from "../../data/searchData";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];

    return searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(q)
        )
      );
    });
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case "calculator":
        return "🧮";
      case "page":
        return "📄";
      default:
        return "🔍";
    }
  };

  return (
    <div className="relative mx-auto mt-10 w-full max-w-2xl">
      <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-4 shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">
        <Search
          size={22}
          className="mr-3 text-slate-500"
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search calculators, formulas, manuals..."
          className="w-full bg-transparent text-slate-700 outline-none"
        />
      </div>

      {query.trim() !== "" && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          {results.length > 0 ? (
            results.slice(0, 8).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setQuery("");
                }}
                className="flex w-full items-center gap-3 border-b border-slate-100 px-5 py-4 text-left transition hover:bg-blue-50 last:border-b-0"
              >
                <span className="text-xl">
                  {getIcon(item.type)}
                </span>

                <div>
                  <p className="font-medium text-slate-800">
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-500 capitalize">
                    {item.type}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <div className="px-5 py-4 text-slate-500">
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;