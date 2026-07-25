import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Manuals from "./pages/Manuals";
import FormulaBook from "./pages/FormulaBook";
import Records from "./pages/Records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/manuals" element={<Manuals />} />
        <Route path="/formula-book" element={<FormulaBook />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;