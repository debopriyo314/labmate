type Mode = {
  label: string;
  value: string;
};

type ModeSelectorProps = {
  modes: Mode[];
  selectedMode: string;
  onChange: (mode: string) => void;
};

function ModeSelector({
  modes,
  selectedMode,
  onChange,
}: ModeSelectorProps) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onChange(mode.value)}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            selectedMode === mode.value
              ? "bg-blue-600 text-white shadow-lg"
              : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}

export default ModeSelector;