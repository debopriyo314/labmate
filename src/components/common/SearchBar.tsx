import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="mt-10 mx-auto w-full max-w-2xl">
      <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-4 shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200">

        <Search
          size={22}
          className="mr-3 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search tools, manuals, formulas..."
          className="w-full bg-transparent text-slate-700 outline-none"
        />

      </div>
    </div>
  );
}

export default SearchBar;