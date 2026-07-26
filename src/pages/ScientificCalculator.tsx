import { useState } from "react";
import { evaluate } from "mathjs";

const physicsConstants = {
  c: "299792458",
  g: "9.81",
  h: "6.62607015e-34",
  e: "2.718281828459045",
  k: "1.380649e-23",
  R: "8.314462618",
  NA: "6.02214076e23",
  "π": "pi",
  "μ₀": "1.25663706212e-6",
  "ε₀": "8.8541878128e-12",
};

function ScientificCalculator() {
  const [expression, setExpression] = useState("0");
  const [physicsMode, setPhysicsMode] = useState(false);
  const [justCalculated, setJustCalculated] = useState(false);

  const buttons = [
    "sin", "cos", "tan", "log", "ln",
    "(", ")", "√", "π", "C",
    "7", "8", "9", "/", "^",
    "4", "5", "6", "*", "%",
    "1", "2", "3", "-", "⌫",
    "0", ".", "=", "+", "Ans",
  ];

 const physicsButtons = [
  // Physics Constants
  "π", "e", "c", "g", "h",
  "μ₀", "ε₀", "k", "NA", "R",

  // Scientific Functions
  "sin", "cos", "tan", "log", "ln",
  "(", ")", "√", "/", "^",

  // Numbers & Operators
  "7", "8", "9", "*", "%",
  "4", "5", "6", "-", "⌫",
  "1", "2", "3", "+", "C",
  "0", ".", "=",
];
 
  const isOperator = (v: string) => ["+", "-", "*", "/", "^", "%"].includes(v);

  const handleButtonClick = (value: string) => {
    // Clear
    if (value === "C") {
      setExpression("0");
      setJustCalculated(false);
      return;
    }

    // Backspace
    if (value === "⌫") {
      setExpression((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      setJustCalculated(false);
      return;
    }

    // Calculate
    if (value === "=") {
      try {
        let exp = expression;
        exp = exp.replace(/sin\(([^()]*)\)/g, "sin($1 deg)");
        exp = exp.replace(/cos\(([^()]*)\)/g, "cos($1 deg)");
        exp = exp.replace(/tan\(([^()]*)\)/g, "tan($1 deg)");

        const result = evaluate(exp);
        setExpression(result.toString());
        setJustCalculated(true);
      } catch {
        setExpression("Error");
        setJustCalculated(false);
      }
      return;
    }

    // Ignore Ans for now
    if (value === "Ans") return;

   // Physics constants
if (physicsMode && value in physicsConstants) {
  const constant =
    physicsConstants[value as keyof typeof physicsConstants];

  if (
    expression === "0" ||
    expression === "Error" ||
    justCalculated
  ) {
    setExpression(constant);
  } else {
    setExpression((prev) => prev + constant);
  }

  setJustCalculated(false);
  return;
}

    // Convert button labels to mathjs syntax
    let input = value;
    switch (value) {
      case "π": input = "pi"; break;
      case "√": input = "sqrt("; break;
      case "sin": input = "sin("; break;
      case "cos": input = "cos("; break;
      case "tan": input = "tan("; break;
      case "log": input = "log10("; break;
      case "ln": input = "log("; break;
      default: break;
    }

    if (expression === "0" || expression === "Error") {
      setExpression(input);
    } else if (justCalculated) {
      // After a result: digits start fresh, operators continue from the result
      if (isOperator(value)) {
        setExpression((prev) => prev + input);
      } else {
        setExpression(input);
      }
    } else {
      setExpression((prev) => prev + input);
    }
    setJustCalculated(false);
  };

  const getButtonStyle = (btn: string) => {
    if (btn === "C" || btn === "⌫") return "bg-red-500 text-white hover:bg-red-600";
    if (btn === "=") return "bg-green-600 text-white hover:bg-green-700";
    if (isOperator(btn)) return "bg-orange-500 text-white hover:bg-orange-600";
    if (["sin","cos","tan","log","ln","√","π","c","g","h","e","k","R","NA","μ₀","ε₀"].includes(btn)) {
      return "bg-blue-600 text-white hover:bg-blue-700";
    }
    return "bg-white text-slate-800 hover:bg-slate-100";
  };

  return (
    <section className="mx-auto max-w-md px-6 pt-28 pb-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold">🧮 Scientific Calculator</h1>

        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setPhysicsMode(false)}
            className={`rounded-l-xl px-5 py-2 font-semibold transition ${!physicsMode ? "bg-blue-600 text-white" : "bg-slate-200"}`}
          >
            Normal
          </button>
          <button
            onClick={() => setPhysicsMode(true)}
            className={`rounded-r-xl px-5 py-2 font-semibold transition ${physicsMode ? "bg-blue-600 text-white" : "bg-slate-200"}`}
          >
            Physics
          </button>
        </div>

        <div className="mb-6 rounded-2xl bg-slate-900 p-5 text-right">
          <p className="break-all text-3xl font-bold text-white">{expression}</p>
        </div>

       <div className="grid grid-cols-5 gap-3">
  {(physicsMode ? physicsButtons : buttons).map((btn) => (
    <button
      key={btn}
      onClick={() => handleButtonClick(btn)}
      className={`rounded-xl p-4 font-semibold transition active:scale-95 ${getButtonStyle(btn)}`}
    >
      {btn}
    </button>
  ))}
</div>
      </div>
    </section>
  );
}

export default ScientificCalculator;