import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🔬 LabMate
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/manuals">Manuals</Link>
          <Link to="/formula-book">Formula Book</Link>
          <Link to="/records">Records</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;