import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🔬 LabMate
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tools">Tools</NavLink>
          <NavLink to="/manuals">Manuals</NavLink>
          <NavLink to="/formula-book">Formula Book</NavLink>
          <NavLink to="/records">Records</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;