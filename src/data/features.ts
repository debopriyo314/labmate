import {
  Calculator,
  BookOpen,
  BookMarked,
  FolderOpen,
} from "lucide-react";

export const features = [
  {
    title: "Lab Tools",
    description:
      "Vernier, Screw Gauge, DMS Calculator and more.",
    icon: Calculator,
    path: "/tools",
  },
  {
    title: "Manuals",
    description:
      "Access laboratory manuals anytime.",
    icon: BookOpen,
    path: "/manuals",
  },
  {
    title: "Formula Book",
    description:
      "Search important physics formulas instantly.",
    icon: BookMarked,
    path: "/formula-book",
  },
  {
    title: "My Records",
    description:
      "Store observations and experiment results.",
    icon: FolderOpen,
    path: "/records",
  },
];