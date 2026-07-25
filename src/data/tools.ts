import {
  Ruler,
  CircleDot,
  Calculator,
  ArrowLeftRight,
  Sigma,
  ChartColumn,
} from "lucide-react";

export const tools = [
  {
    title: "Vernier Calculator",
    description: "Calculate readings using MSR, VSR and Least Count.",
    icon: Ruler,
    path: "/tools/vernier",
  },
  {
    title: "Screw Gauge",
    description: "Calculate screw gauge readings.",
    icon: CircleDot,
    path: "/tools/screw-gauge",
  },
  {
    title: "DMS Calculator",
    description: "Degree–Minute–Second calculations.",
    icon: Calculator,
    path: "/tools/dms",
  },
  {
    title: "Unit Converter",
    description: "Convert laboratory measurement units.",
    icon: ArrowLeftRight,
    path: "/tools/unit-converter",
  },
  {
    title: "Scientific Calculator",
    description: "Perform scientific calculations.",
    icon: Sigma,
    path: "/tools/scientific",
  },
  {
    title: "Percentage Error",
    description: "Calculate percentage error for experiments.",
    icon: ChartColumn,
    path: "/tools/percentage-error",
  },
];