export interface Variable {
  symbol: string;
  name: string;
  unit: string;
}

export interface Formula {
  id: string;
  title: string;
  formula: string;      // LaTeX (display)
  plainFormula: string; // Plain text (copy/search)
  description: string;
  variables: Variable[];
  keywords: string[];
}

export const formulas: Formula[] = [
  {
    id: "newton-second-law",

    title: "Newton's Second Law",

    formula: "F = ma",

    plainFormula: "F = ma",

    description:
      "The net force acting on an object is equal to the product of its mass and acceleration.",

    variables: [
      {
        symbol: "F",
        name: "Force",
        unit: "N",
      },
      {
        symbol: "m",
        name: "Mass",
        unit: "kg",
      },
      {
        symbol: "a",
        name: "Acceleration",
        unit: "m/s²",
      },
    ],

    keywords: [
      "newton",
      "force",
      "mass",
      "acceleration",
      "motion",
      "f",
      "ma",
    ],
  },

  {
    id: "kinetic-energy",

    title: "Kinetic Energy",

    formula: "KE=\\frac{1}{2}mv^2",

    plainFormula: "KE = 1/2 mv²",

    description:
      "The energy possessed by a body due to its motion.",

    variables: [
      {
        symbol: "KE",
        name: "Kinetic Energy",
        unit: "J",
      },
      {
        symbol: "m",
        name: "Mass",
        unit: "kg",
      },
      {
        symbol: "v",
        name: "Velocity",
        unit: "m/s",
      },
    ],

    keywords: [
      "kinetic",
      "energy",
      "motion",
      "velocity",
      "joule",
      "ke",
      "mv²",
    ],
  },

  {
    id: "potential-energy",

    title: "Potential Energy",

    formula: "PE=mgh",

    plainFormula: "PE = mgh",

    description:
      "The energy possessed by a body due to its position.",

    variables: [
      {
        symbol: "PE",
        name: "Potential Energy",
        unit: "J",
      },
      {
        symbol: "m",
        name: "Mass",
        unit: "kg",
      },
      {
        symbol: "g",
        name: "Acceleration due to gravity",
        unit: "m/s²",
      },
      {
        symbol: "h",
        name: "Height",
        unit: "m",
      },
    ],

    keywords: [
      "potential",
      "energy",
      "gravity",
      "height",
      "mgh",
      "pe",
    ],
  },
];