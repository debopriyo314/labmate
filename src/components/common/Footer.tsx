function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            🔬 LabMate
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Your Complete Physics Companion
          </p>
        </div>

        <div className="text-sm text-slate-500">
          <p>LabMate v1.0 Beta</p>
          <p>Built with React • TypeScript • Tailwind CSS</p>
        </div>

        <div className="text-sm text-slate-500">
          © {year} Debopriya Mandal
        </div>
      </div>
    </footer>
  );
}

export default Footer;