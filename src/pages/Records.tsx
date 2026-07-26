function Records() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          📊 Calculation Records
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          View your saved calculator history in one place.
        </p>
      </div>

      <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-16 text-center">
        <div className="text-6xl">📁</div>

        <h2 className="mt-6 text-3xl font-semibold text-slate-800">
          No Records Yet
        </h2>

        <p className="mt-4 text-slate-600">
          Your calculator history will appear here once record saving is
          available.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 text-left shadow-sm">
          <h3 className="font-semibold text-slate-800">
            Planned Features
          </h3>

          <ul className="mt-4 space-y-2 text-slate-600">
            <li>✅ Recent Vernier Caliper calculations</li>
            <li>✅ Screw Gauge history</li>
            <li>✅ DMS conversion history</li>
            <li>✅ Percentage Error history</li>
            <li>✅ One-click clear history</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Records;