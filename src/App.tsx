import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Manuals from "./pages/Manuals";
import FormulaBook from "./pages/FormulaBook";
import Records from "./pages/Records";

import VernierCalculator from "./pages/VernierCalculator";
import ScrewGaugeCalculator from "./pages/ScrewGaugeCalculator";
import DMSCalculator from "./pages/DMSCalculator";
import PercentageErrorCalculator from "./pages/PercentageErrorCalculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/tools" element={<Tools />} />

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
            path="/tools/percentage-error"
            element={<PercentageErrorCalculator />}
          />

          <Route path="/manuals" element={<Manuals />} />

          <Route
            path="/formula-book"
            element={<FormulaBook />}
          />

          <Route path="/records" element={<Records />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;