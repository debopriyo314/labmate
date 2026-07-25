type ActionButtonsProps = {
  onCalculate: () => void;
  onReset: () => void;
};

function ActionButtons({
  onCalculate,
  onReset,
}: ActionButtonsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onCalculate}
        className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Calculate
      </button>

      <button
        onClick={onReset}
        className="rounded-xl border border-slate-300 px-6 font-semibold transition hover:bg-slate-100"
      >
        Reset
      </button>
    </div>
  );
}

export default ActionButtons;