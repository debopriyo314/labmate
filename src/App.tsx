import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import FormulaBook from "./pages/FormulaBook";
import Manuals from "./pages/Manuals";
import Records from "./pages/Records";

import VernierCalculator from "./pages/VernierCalculator";
import ScrewGaugeCalculator from "./pages/ScrewGaugeCalculator";
import DMSCalculator from "./pages/DMSCalculator";
import UnitConverter from "./pages/UnitConverter";
import ScientificCalculator from "./pages/ScientificCalculator";
import PercentageErrorCalculator from "./pages/PercentageErrorCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/tools" element={<Tools />} />
          <Route path="/formula-book" element={<FormulaBook />} />
          <Route path="/manuals" element={<Manuals />} />
          <Route path="/records" element={<Records />} />

          {/* Tools */}
          <Route
            path="/tools/vernier"
            element={<VernierCalculator />}
          />

          <Route
            path="/tools/screw-gauge"
            element={<ScrewGaugeCalculator />}
          />

          <Route
            path="/tools/dms"
            element={<DMSCalculator />}
          />

          <Route
            path="/tools/unit-converter"
            element={<UnitConverter />}
          />

          <Route
            path="/tools/scientific"
            element={<ScientificCalculator />}
          />

          <Route
            path="/tools/percentage-error"
            element={<PercentageErrorCalculator />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;