export interface SearchItem {
  id: string;
  title: string;
  path: string;
  keywords: string[];
  type: "calculator" | "page";
}

export const searchData: SearchItem[] = [
  // Main Pages
  {
    id: "tools",
    title: "Physics Tools",
    path: "/tools",
    type: "page",
    keywords: ["tools", "calculators", "physics"],
  },
  {
    id: "formula-book",
    title: "Formula Book",
    path: "/formula-book",
    type: "page",
    keywords: [
      "formula",
      "physics",
      "newton",
      "momentum",
      "energy",
      "optics",
      "waves",
      "electricity",
      "mechanics",
      "gauss",
      "ohm",
      "lens",
    ],
  },
  {
    id: "manuals",
    title: "Lab Manuals",
    path: "/manuals",
    type: "page",
    keywords: ["manual", "practical", "experiment", "lab"],
  },
  {
    id: "records",
    title: "Records",
    path: "/records",
    type: "page",
    keywords: ["records", "history", "saved", "recent"],
  },

  // Calculators
  {
    id: "vernier",
    title: "Vernier Caliper Calculator",
    path: "/tools/vernier",
    type: "calculator",
    keywords: [
      "vernier",
      "caliper",
      "measurement",
      "least count",
    ],
  },
  {
    id: "screw-gauge",
    title: "Screw Gauge Calculator",
    path: "/tools/screw-gauge",
    type: "calculator",
    keywords: [
      "screw",
      "gauge",
      "micrometer",
      "least count",
    ],
  },
  {
    id: "dms",
    title: "Degree Minute Second Calculator",
    path: "/tools/dms",
    type: "calculator",
    keywords: [
      "degree",
      "minute",
      "second",
      "dms",
      "angle",
    ],
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    path: "/tools/unit-converter",
    type: "calculator",
    keywords: [
      "unit",
      "converter",
      "conversion",
      "physics",
    ],
  },
  {
    id: "scientific",
    title: "Scientific Calculator",
    path: "/tools/scientific",
    type: "calculator",
    keywords: [
      "scientific",
      "calculator",
      "math",
    ],
  },
  {
    id: "percentage-error",
    title: "Percentage Error Calculator",
    path: "/tools/percentage-error",
    type: "calculator",
    keywords: [
      "percentage",
      "error",
      "relative error",
      "absolute error",
      "experiment",
    ],
  },
];