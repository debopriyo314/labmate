import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Manuals from "./pages/Manuals";
import FormulaBook from "./pages/FormulaBook";
import Records from "./pages/Records";
import VernierCalculator from "./pages/VernierCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/tools" element={<Tools />} />
          <Route path="/manuals" element={<Manuals />} />
          <Route path="/formula-book" element={<FormulaBook />} />
          <Route path="/records" element={<Records />} />

          {/* Tool Pages */}
          <Route
            path="/tools/vernier"
            element={<VernierCalculator />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;