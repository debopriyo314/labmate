import type { Formula } from "./types";

export const electricity: Formula[] = [

  {
  id: "coulombs-law",
  title: "Coulomb's Law",
  formula: "F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1q_2}{r^2}",
  plainFormula: "F = (1/4πε₀)(q₁q₂/r²)",
  description: "Electrostatic force between two point charges.",
  variables: [
    { symbol: "F", name: "Electrostatic Force", unit: "N" },
    { symbol: "q₁", name: "Charge 1", unit: "C" },
    { symbol: "q₂", name: "Charge 2", unit: "C" },
    { symbol: "r", name: "Distance", unit: "m" },
    { symbol: "ε₀", name: "Permittivity of Free Space", unit: "F/m" },
  ],
  keywords: ["coulomb", "electrostatic", "force"],
  applications: [
    "Electrostatics",
    "Electric force calculations",
    "Charge interactions",
  ],
  commonMistakes: [
    "Distance is between the centres of the charges.",
    "Force is attractive for unlike charges and repulsive for like charges.",
  ],
  relatedFormulas: [
    "Electric Field",
    "Electric Potential",
  ],
  notes: [
    "Inverse square law.",
  ],
},  
{
  id: "electric-field",
  title: "Electric Field",
  formula: "E = \\frac{F}{q}",
  plainFormula: "E = F/q",
  description: "Electric field strength is force per unit positive test charge.",
  variables: [
    { symbol: "E", name: "Electric Field", unit: "N/C" },
    { symbol: "F", name: "Force", unit: "N" },
    { symbol: "q", name: "Charge", unit: "C" },
  ],
  keywords: ["electric field", "field strength"],
  applications: [
    "Electrostatics",
    "Field calculations",
  ],
  commonMistakes: [
    "Use a positive test charge.",
  ],
  relatedFormulas: [
    "Coulomb's Law",
    "Electric Potential",
  ],
  notes: [
    "Electric field is a vector quantity.",
  ],
},
{
  id: "point-charge-field",
  title: "Electric Field due to a Point Charge",
  formula: "E = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r^2}",
  plainFormula: "E = (1/4πε₀)(q/r²)",
  description: "Electric field produced by a point charge.",
  variables: [
    { symbol: "E", name: "Electric Field", unit: "N/C" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "r", name: "Distance", unit: "m" },
  ],
  keywords: ["point charge", "electric field"],
  applications: [
    "Field mapping",
    "Charge distribution",
  ],
  commonMistakes: [
    "Field decreases as 1/r².",
  ],
  relatedFormulas: [
    "Electric Field",
  ],
  notes: [
    "Field points away from positive charges and towards negative charges.",
  ],
},
{
  id: "electric-potential",
  title: "Electric Potential",
  formula: "V = \\frac{W}{q}",
  plainFormula: "V = W/q",
  description: "Electric potential is work done per unit charge.",
  variables: [
    { symbol: "V", name: "Potential", unit: "V" },
    { symbol: "W", name: "Work Done", unit: "J" },
    { symbol: "q", name: "Charge", unit: "C" },
  ],
  keywords: ["potential", "voltage"],
  applications: [
    "Electrical circuits",
    "Electrostatics",
  ],
  commonMistakes: [
    "Potential is a scalar quantity.",
  ],
  relatedFormulas: [
    "Electric Potential Energy",
  ],
  notes: [
    "Measured in volts.",
  ],
},
{
  id: "point-charge-potential",
  title: "Potential due to a Point Charge",
  formula: "V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}",
  plainFormula: "V = (1/4πε₀)(q/r)",
  description: "Electric potential due to a point charge.",
  variables: [
    { symbol: "V", name: "Potential", unit: "V" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "r", name: "Distance", unit: "m" },
  ],
  keywords: ["potential", "point charge"],
  applications: [
    "Electrostatics",
  ],
  commonMistakes: [
    "Potential decreases as 1/r.",
  ],
  relatedFormulas: [
    "Electric Field",
  ],
  notes: [
    "Scalar quantity.",
  ],
},
{
  id: "electric-potential-energy",
  title: "Electric Potential Energy",
  formula: "U = qV",
  plainFormula: "U = qV",
  description: "Potential energy possessed by a charge in an electric field.",
  variables: [
    { symbol: "U", name: "Potential Energy", unit: "J" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "V", name: "Potential", unit: "V" },
  ],
  keywords: ["potential energy", "electric"],
  applications: [
    "Electrostatic systems",
  ],
  commonMistakes: [
    "Do not confuse potential with potential energy.",
  ],
  relatedFormulas: [
    "Electric Potential",
  ],
  notes: [
    "Measured in joules.",
  ],
},
{
  id: "electric-flux",
  title: "Electric Flux",
  formula: "\\Phi_E = EA\\cos\\theta",
  plainFormula: "ΦE = EA cosθ",
  description: "Electric flux through a surface.",
  variables: [
    { symbol: "ΦE", name: "Electric Flux", unit: "N·m²/C" },
    { symbol: "E", name: "Electric Field", unit: "N/C" },
    { symbol: "A", name: "Area", unit: "m²" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["electric flux"],
  applications: [
    "Gauss's Law",
    "Electrostatics",
  ],
  commonMistakes: [
    "Angle is between the field and the surface normal.",
  ],
  relatedFormulas: [
    "Gauss's Law",
  ],
  notes: [
    "Flux is maximum when the field is perpendicular to the surface.",
  ],
},
{
  id: "gauss-law",
  title: "Gauss's Law",
  formula: "\\oint \\vec{E}\\cdot d\\vec{A}=\\frac{Q_{enc}}{\\varepsilon_0}",
  plainFormula: "∮E·dA = Qenc/ε₀",
  description: "The total electric flux through a closed surface equals the enclosed charge divided by the permittivity of free space.",
  variables: [
    { symbol: "E", name: "Electric Field", unit: "N/C" },
    { symbol: "A", name: "Area", unit: "m²" },
    { symbol: "Qenc", name: "Enclosed Charge", unit: "C" },
    { symbol: "ε₀", name: "Permittivity of Free Space", unit: "F/m" },
  ],
  keywords: ["gauss", "electric flux"],
  applications: [
    "Electric field calculations",
    "Symmetric charge distributions",
  ],
  commonMistakes: [
    "Only enclosed charge contributes to total flux.",
  ],
  relatedFormulas: [
    "Electric Flux",
  ],
  notes: [
    "Fundamental law of electrostatics.",
  ],
},
{
  id: "electric-dipole-moment",
  title: "Electric Dipole Moment",
  formula: "\\vec{p}=q\\vec{d}",
  plainFormula: "p = qd",
  description: "Product of charge and separation between the charges.",
  variables: [
    { symbol: "p", name: "Dipole Moment", unit: "C·m" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "d", name: "Separation", unit: "m" },
  ],
  keywords: ["dipole", "moment"],
  applications: [
    "Molecular physics",
    "Electrostatics",
  ],
  commonMistakes: [
    "Direction is from negative to positive charge.",
  ],
  relatedFormulas: [
    "Torque on Dipole",
  ],
  notes: [
    "Vector quantity.",
  ],
},
{
  id: "torque-on-dipole",
  title: "Torque on Electric Dipole",
  formula: "\\tau=pE\\sin\\theta",
  plainFormula: "τ = pE sinθ",
  description: "Torque experienced by a dipole in a uniform electric field.",
  variables: [
    { symbol: "τ", name: "Torque", unit: "N·m" },
    { symbol: "p", name: "Dipole Moment", unit: "C·m" },
    { symbol: "E", name: "Electric Field", unit: "N/C" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["dipole", "torque"],
  applications: [
    "Electric dipoles",
    "Molecular alignment",
  ],
  commonMistakes: [
    "Torque is maximum at 90°.",
  ],
  relatedFormulas: [
    "Electric Dipole Moment",
  ],
  notes: [
    "No torque when aligned with the field.",
  ],
},
{
  id: "capacitance",
  title: "Capacitance",
  formula: "C=\\frac{Q}{V}",
  plainFormula: "C = Q/V",
  description: "Capacitance is the charge stored per unit potential difference.",
  variables: [
    { symbol: "C", name: "Capacitance", unit: "F" },
    { symbol: "Q", name: "Charge", unit: "C" },
    { symbol: "V", name: "Potential Difference", unit: "V" },
  ],
  keywords: ["capacitance", "capacitor"],
  applications: [
    "Electronic circuits",
    "Energy storage",
  ],
  commonMistakes: [
    "Measured in farads.",
  ],
  relatedFormulas: [
    "Parallel Plate Capacitor",
  ],
  notes: [
    "Depends only on geometry and dielectric.",
  ],
},
{
  id: "parallel-plate-capacitor",
  title: "Parallel Plate Capacitor",
  formula: "C=\\frac{\\varepsilon_0A}{d}",
  plainFormula: "C = ε₀A/d",
  description: "Capacitance of an ideal parallel plate capacitor.",
  variables: [
    { symbol: "A", name: "Plate Area", unit: "m²" },
    { symbol: "d", name: "Plate Separation", unit: "m" },
    { symbol: "ε₀", name: "Permittivity", unit: "F/m" },
  ],
  keywords: ["parallel plate", "capacitor"],
  applications: [
    "Electronic design",
  ],
  commonMistakes: [
    "Neglect edge effects in the ideal formula.",
  ],
  relatedFormulas: [
    "Capacitance",
  ],
  notes: [
    "Valid for vacuum or air.",
  ],
},
{
  id: "capacitor-energy",
  title: "Energy Stored in Capacitor",
  formula: "U=\\frac12CV^2",
  plainFormula: "U = ½CV²",
  description: "Electrical energy stored in a charged capacitor.",
  variables: [
    { symbol: "U", name: "Energy", unit: "J" },
    { symbol: "C", name: "Capacitance", unit: "F" },
    { symbol: "V", name: "Voltage", unit: "V" },
  ],
  keywords: ["capacitor", "energy"],
  applications: [
    "Power supplies",
    "Electronic circuits",
  ],
  commonMistakes: [
    "Equivalent forms include U = ½QV and U = Q²/2C.",
  ],
  relatedFormulas: [
    "Capacitance",
  ],
  notes: [
    "Energy is stored in the electric field.",
  ],
},
{
  id: "ohms-law",
  title: "Ohm's Law",
  formula: "V = IR",
  plainFormula: "V = IR",
  description: "The potential difference across a conductor is directly proportional to the current flowing through it, provided temperature remains constant.",
  variables: [
    { symbol: "V", name: "Voltage", unit: "V" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "R", name: "Resistance", unit: "Ω" },
  ],
  keywords: ["ohm", "voltage", "current", "resistance"],
  applications: [
    "Circuit analysis",
    "Electronic devices",
    "Electrical engineering",
  ],
  commonMistakes: [
    "Valid only for ohmic conductors.",
    "Resistance may change with temperature.",
  ],
  relatedFormulas: [
    "Electrical Power",
    "Resistance",
  ],
  notes: [
    "One of the most fundamental laws of electricity.",
  ],
},
{
  id: "resistance",
  title: "Resistance",
  formula: "R = \\rho\\frac{L}{A}",
  plainFormula: "R = ρL/A",
  description: "Resistance of a conductor depends on its resistivity, length and cross-sectional area.",
  variables: [
    { symbol: "R", name: "Resistance", unit: "Ω" },
    { symbol: "ρ", name: "Resistivity", unit: "Ω·m" },
    { symbol: "L", name: "Length", unit: "m" },
    { symbol: "A", name: "Area", unit: "m²" },
  ],
  keywords: ["resistance", "resistivity"],
  applications: [
    "Wire design",
    "Electrical circuits",
  ],
  commonMistakes: [
    "Cross-sectional area must be in square metres.",
  ],
  relatedFormulas: [
    "Conductivity",
  ],
  notes: [
    "Longer wires have greater resistance.",
  ],
},
{
  id: "conductivity",
  title: "Conductivity",
  formula: "\\sigma = \\frac{1}{\\rho}",
  plainFormula: "σ = 1/ρ",
  description: "Conductivity is the reciprocal of resistivity.",
  variables: [
    { symbol: "σ", name: "Conductivity", unit: "S/m" },
    { symbol: "ρ", name: "Resistivity", unit: "Ω·m" },
  ],
  keywords: ["conductivity", "resistivity"],
  applications: [
    "Material science",
    "Electrical engineering",
  ],
  commonMistakes: [
    "Conductivity and resistivity are inversely related.",
  ],
  relatedFormulas: [
    "Resistance",
  ],
  notes: [
    "Good conductors have high conductivity.",
  ],
},
{
  id: "current-density",
  title: "Current Density",
  formula: "J = \\frac{I}{A}",
  plainFormula: "J = I/A",
  description: "Current flowing per unit cross-sectional area.",
  variables: [
    { symbol: "J", name: "Current Density", unit: "A/m²" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "A", name: "Area", unit: "m²" },
  ],
  keywords: ["current density"],
  applications: [
    "Current distribution",
    "Electrical engineering",
  ],
  commonMistakes: [
    "Area must be perpendicular to current flow.",
  ],
  relatedFormulas: [
    "Drift Velocity",
  ],
  notes: [
    "Current density is a vector quantity.",
  ],
},
{
  id: "drift-velocity",
  title: "Drift Velocity",
  formula: "I = nAeV_d",
  plainFormula: "I = nAeVd",
  description: "Current in a conductor expressed in terms of drift velocity.",
  variables: [
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "n", name: "Electron Density", unit: "m⁻³" },
    { symbol: "A", name: "Area", unit: "m²" },
    { symbol: "e", name: "Electronic Charge", unit: "C" },
    { symbol: "Vd", name: "Drift Velocity", unit: "m/s" },
  ],
  keywords: ["drift velocity"],
  applications: [
    "Electron transport",
    "Conductors",
  ],
  commonMistakes: [
    "Drift velocity is much smaller than the random speed of electrons.",
  ],
  relatedFormulas: [
    "Current Density",
  ],
  notes: [
    "Explains microscopic origin of electric current.",
  ],
},
{
  id: "electrical-power",
  title: "Electrical Power",
  formula: "P = VI = I^2R = \\frac{V^2}{R}",
  plainFormula: "P = VI = I²R = V²/R",
  description: "Rate at which electrical energy is converted or consumed.",
  variables: [
    { symbol: "P", name: "Power", unit: "W" },
    { symbol: "V", name: "Voltage", unit: "V" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "R", name: "Resistance", unit: "Ω" },
  ],
  keywords: ["electrical power"],
  applications: [
    "Appliance ratings",
    "Circuit design",
  ],
  commonMistakes: [
    "Choose the correct form depending on known quantities.",
  ],
  relatedFormulas: [
    "Ohm's Law",
  ],
  notes: [
    "Measured in watts.",
  ],
},
{
  id: "electrical-energy",
  title: "Electrical Energy",
  formula: "W = Pt = VIt",
  plainFormula: "W = Pt = VIt",
  description: "Electrical energy consumed over a period of time.",
  variables: [
    { symbol: "W", name: "Energy", unit: "J" },
    { symbol: "P", name: "Power", unit: "W" },
    { symbol: "t", name: "Time", unit: "s" },
  ],
  keywords: ["electrical energy"],
  applications: [
    "Electricity billing",
    "Power consumption",
  ],
  commonMistakes: [
    "Energy is measured in joules; commercial energy is often expressed in kWh.",
  ],
  relatedFormulas: [
    "Electrical Power",
  ],
  notes: [
    "1 kWh = 3.6 × 10⁶ J.",
  ],
},
{
  id: "kirchhoffs-current-law",
  title: "Kirchhoff's Current Law (KCL)",
  formula: "\\sum I_{in}=\\sum I_{out}",
  plainFormula: "ΣIin = ΣIout",
  description: "At any junction in an electrical circuit, the total current entering equals the total current leaving.",
  variables: [
    { symbol: "I", name: "Current", unit: "A" },
  ],
  keywords: ["kirchhoff", "kcl", "junction"],
  applications: [
    "Circuit analysis",
    "Electrical networks",
  ],
  commonMistakes: [
    "Take care with current directions.",
  ],
  relatedFormulas: [
    "Kirchhoff's Voltage Law",
  ],
  notes: [
    "Based on conservation of charge.",
  ],
},
{
  id: "kirchhoffs-voltage-law",
  title: "Kirchhoff's Voltage Law (KVL)",
  formula: "\\sum V=0",
  plainFormula: "ΣV = 0",
  description: "The algebraic sum of all potential differences around a closed loop is zero.",
  variables: [
    { symbol: "V", name: "Voltage", unit: "V" },
  ],
  keywords: ["kirchhoff", "kvl", "loop"],
  applications: [
    "Loop analysis",
    "Complex circuits",
  ],
  commonMistakes: [
    "Maintain a consistent sign convention.",
  ],
  relatedFormulas: [
    "Kirchhoff's Current Law",
  ],
  notes: [
    "Based on conservation of energy.",
  ],
},
{
  id: "wheatstone-bridge",
  title: "Wheatstone Bridge",
  formula: "\\frac{P}{Q}=\\frac{R}{S}",
  plainFormula: "P/Q = R/S",
  description: "Condition for a balanced Wheatstone bridge.",
  variables: [
    { symbol: "P", name: "Resistance P", unit: "Ω" },
    { symbol: "Q", name: "Resistance Q", unit: "Ω" },
    { symbol: "R", name: "Resistance R", unit: "Ω" },
    { symbol: "S", name: "Resistance S", unit: "Ω" },
  ],
  keywords: ["wheatstone bridge"],
  applications: [
    "Resistance measurement",
    "Laboratory experiments",
  ],
  commonMistakes: [
    "Applicable only under balanced conditions.",
  ],
  relatedFormulas: [
    "Meter Bridge",
  ],
  notes: [
    "Used extensively in practical physics.",
  ],
},
{
  id: "meter-bridge",
  title: "Meter Bridge",
  formula: "\\frac{R}{S}=\\frac{l}{100-l}",
  plainFormula: "R/S = l/(100-l)",
  description: "Balance condition for a metre bridge.",
  variables: [
    { symbol: "R", name: "Unknown Resistance", unit: "Ω" },
    { symbol: "S", name: "Known Resistance", unit: "Ω" },
    { symbol: "l", name: "Balance Length", unit: "cm" },
  ],
  keywords: ["meter bridge"],
  applications: [
    "Resistance measurement",
  ],
  commonMistakes: [
    "Length is measured in centimetres.",
  ],
  relatedFormulas: [
    "Wheatstone Bridge",
  ],
  notes: [
    "Based on the Wheatstone bridge principle.",
  ],
},
{
  id: "potentiometer-principle",
  title: "Potentiometer Principle",
  formula: "V\\propto l",
  plainFormula: "V ∝ l",
  description: "Potential difference is proportional to balancing length for a uniform potentiometer wire.",
  variables: [
    { symbol: "V", name: "Potential Difference", unit: "V" },
    { symbol: "l", name: "Balance Length", unit: "m" },
  ],
  keywords: ["potentiometer"],
  applications: [
    "Comparing EMFs",
    "Internal resistance measurement",
  ],
  commonMistakes: [
    "Current through the potentiometer wire should remain constant.",
  ],
  relatedFormulas: [
    "EMF",
  ],
  notes: [
    "A null-deflection method.",
  ],
},
{
  id: "cells-in-series",
  title: "Cells in Series",
  formula: "E=nE_0",
  plainFormula: "E = nE₀",
  description: "Equivalent EMF of identical cells connected in series.",
  variables: [
    { symbol: "E", name: "Equivalent EMF", unit: "V" },
    { symbol: "n", name: "Number of Cells", unit: "" },
    { symbol: "E₀", name: "EMF of One Cell", unit: "V" },
  ],
  keywords: ["cells", "series"],
  applications: [
    "Battery design",
  ],
  commonMistakes: [
    "Assumes identical cells connected in the same orientation.",
  ],
  relatedFormulas: [
    "Cells in Parallel",
  ],
  notes: [
    "Voltage increases in series.",
  ],
},
{
  id: "cells-in-parallel",
  title: "Cells in Parallel",
  formula: "E=E_0",
  plainFormula: "E = E₀",
  description: "Equivalent EMF of identical cells connected in parallel.",
  variables: [
    { symbol: "E", name: "Equivalent EMF", unit: "V" },
    { symbol: "E₀", name: "EMF of One Cell", unit: "V" },
  ],
  keywords: ["cells", "parallel"],
  applications: [
    "Battery packs",
  ],
  commonMistakes: [
    "Parallel connection mainly increases current capacity, not voltage.",
  ],
  relatedFormulas: [
    "Cells in Series",
  ],
  notes: [
    "Ideal identical cells are assumed.",
  ],
},
{
  id: "biot-savart-law",
  title: "Biot–Savart Law",
  formula: "dB=\\frac{\\mu_0}{4\\pi}\\frac{Idl\\sin\\theta}{r^2}",
  plainFormula: "dB = (μ₀/4π)(Idl sinθ/r²)",
  description: "Magnetic field produced by a small current element.",
  variables: [
    { symbol: "dB", name: "Magnetic Field", unit: "T" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "dl", name: "Current Element", unit: "m" },
    { symbol: "r", name: "Distance", unit: "m" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["biot savart", "magnetic field"],
  applications: [
    "Magnetic field calculations",
    "Current carrying conductors",
  ],
  commonMistakes: [
    "Use the right-hand rule for direction.",
  ],
  relatedFormulas: [
    "Ampere's Circuital Law",
  ],
  notes: [
    "Fundamental law of magnetostatics.",
  ],
},
{
  id: "amperes-law",
  title: "Ampere's Circuital Law",
  formula: "\\oint \\vec{B}\\cdot d\\vec{l}=\\mu_0I",
  plainFormula: "∮B·dl = μ₀I",
  description: "The line integral of magnetic field around a closed loop equals μ₀ times the enclosed current.",
  variables: [
    { symbol: "B", name: "Magnetic Field", unit: "T" },
    { symbol: "I", name: "Current", unit: "A" },
  ],
  keywords: ["ampere", "circuital law"],
  applications: [
    "Solenoids",
    "Toroids",
  ],
  commonMistakes: [
    "Applies to steady currents.",
  ],
  relatedFormulas: [
    "Biot–Savart Law",
  ],
  notes: [
    "Useful for highly symmetric current distributions.",
  ],
},
{
  id: "lorentz-force",
  title: "Lorentz Force",
  formula: "F=q(\\vec{E}+\\vec{v}\\times\\vec{B})",
  plainFormula: "F = q(E + v × B)",
  description: "Force experienced by a charged particle moving in electric and magnetic fields.",
  variables: [
    { symbol: "F", name: "Force", unit: "N" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "v", name: "Velocity", unit: "m/s" },
    { symbol: "B", name: "Magnetic Field", unit: "T" },
  ],
  keywords: ["lorentz", "force"],
  applications: [
    "Cyclotron",
    "Mass spectrometer",
  ],
  commonMistakes: [
    "Use the vector cross product correctly.",
  ],
  relatedFormulas: [
    "Magnetic Force on Conductor",
  ],
  notes: [
    "Direction follows the right-hand rule for positive charges.",
  ],
},
{
  id: "force-on-conductor",
  title: "Force on a Current-Carrying Conductor",
  formula: "F=BIL\\sin\\theta",
  plainFormula: "F = BIL sinθ",
  description: "Force acting on a straight current-carrying conductor in a magnetic field.",
  variables: [
    { symbol: "F", name: "Force", unit: "N" },
    { symbol: "B", name: "Magnetic Field", unit: "T" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "L", name: "Length", unit: "m" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["force", "current", "magnetic field"],
  applications: [
    "Electric motors",
    "Galvanometers",
  ],
  commonMistakes: [
    "Maximum force occurs at 90°.",
  ],
  relatedFormulas: [
    "Lorentz Force",
  ],
  notes: [
    "Direction is given by Fleming's Left-Hand Rule.",
  ],
},
{
  id: "parallel-conductors-force",
  title: "Force Between Two Parallel Conductors",
  formula: "\\frac{F}{L}=\\frac{\\mu_0I_1I_2}{2\\pi d}",
  plainFormula: "F/L = μ₀I₁I₂/(2πd)",
  description: "Force per unit length between two long parallel current-carrying conductors.",
  variables: [
    { symbol: "F/L", name: "Force per Unit Length", unit: "N/m" },
    { symbol: "I₁", name: "Current in Conductor 1", unit: "A" },
    { symbol: "I₂", name: "Current in Conductor 2", unit: "A" },
    { symbol: "d", name: "Distance Between Conductors", unit: "m" },
  ],
  keywords: ["parallel conductors", "force"],
  applications: [
    "Power transmission",
    "Electromagnetic systems",
  ],
  commonMistakes: [
    "Currents in the same direction attract; opposite directions repel.",
  ],
  relatedFormulas: [
    "Biot–Savart Law",
  ],
  notes: [
    "Basis of the historical definition of the ampere.",
  ],
},
{
  id: "magnetic-dipole-moment",
  title: "Magnetic Dipole Moment",
  formula: "\\mu = NIA",
  plainFormula: "μ = NIA",
  description: "Magnetic dipole moment of a current-carrying coil.",
  variables: [
    { symbol: "μ", name: "Magnetic Dipole Moment", unit: "A·m²" },
    { symbol: "N", name: "Number of Turns", unit: "" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "A", name: "Area of Coil", unit: "m²" },
  ],
  keywords: ["magnetic dipole", "coil"],
  applications: [
    "Electric motors",
    "Galvanometers",
    "Magnetic field analysis",
  ],
  commonMistakes: [
    "Area refers to the area enclosed by one turn of the coil.",
  ],
  relatedFormulas: [
    "Torque on Current Loop",
  ],
  notes: [
    "Vector quantity directed perpendicular to the coil.",
  ],
},
{
  id: "torque-on-current-loop",
  title: "Torque on a Current Loop",
  formula: "\\tau = N I A B \\sin\\theta",
  plainFormula: "τ = NIAB sinθ",
  description: "Torque acting on a current-carrying coil placed in a magnetic field.",
  variables: [
    { symbol: "τ", name: "Torque", unit: "N·m" },
    { symbol: "N", name: "Number of Turns", unit: "" },
    { symbol: "I", name: "Current", unit: "A" },
    { symbol: "A", name: "Area", unit: "m²" },
    { symbol: "B", name: "Magnetic Field", unit: "T" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["torque", "current loop"],
  applications: [
    "Electric motors",
    "Moving coil galvanometers",
  ],
  commonMistakes: [
    "Torque is maximum when θ = 90°.",
  ],
  relatedFormulas: [
    "Magnetic Dipole Moment",
  ],
  notes: [
    "Acts to align the loop with the magnetic field.",
  ],
},
{
  id: "cyclotron-radius",
  title: "Cyclotron Radius",
  formula: "r = \\frac{mv}{qB}",
  plainFormula: "r = mv/qB",
  description: "Radius of the circular path of a charged particle in a magnetic field.",
  variables: [
    { symbol: "r", name: "Radius", unit: "m" },
    { symbol: "m", name: "Mass", unit: "kg" },
    { symbol: "v", name: "Velocity", unit: "m/s" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "B", name: "Magnetic Field", unit: "T" },
  ],
  keywords: ["cyclotron"],
  applications: [
    "Particle accelerators",
    "Nuclear physics",
  ],
  commonMistakes: [
    "Applicable only when velocity is perpendicular to the magnetic field.",
  ],
  relatedFormulas: [
    "Cyclotron Frequency",
    "Lorentz Force",
  ],
  notes: [
    "Larger magnetic fields produce smaller circular paths.",
  ],
},
{
  id: "cyclotron-frequency",
  title: "Cyclotron Frequency",
  formula: "f = \\frac{qB}{2\\pi m}",
  plainFormula: "f = qB/2πm",
  description: "Frequency of revolution of a charged particle inside a cyclotron.",
  variables: [
    { symbol: "f", name: "Frequency", unit: "Hz" },
    { symbol: "q", name: "Charge", unit: "C" },
    { symbol: "B", name: "Magnetic Field", unit: "T" },
    { symbol: "m", name: "Mass", unit: "kg" },
  ],
  keywords: ["cyclotron", "frequency"],
  applications: [
    "Cyclotrons",
    "Particle physics",
  ],
  commonMistakes: [
    "Independent of the particle's speed in the non-relativistic case.",
  ],
  relatedFormulas: [
    "Cyclotron Radius",
  ],
  notes: [
    "Valid only for non-relativistic speeds.",
  ],
},
{
  id: "magnetic-flux",
  title: "Magnetic Flux",
  formula: "\\Phi_B = BA\\cos\\theta",
  plainFormula: "ΦB = BA cosθ",
  description: "Magnetic flux passing through a surface.",
  variables: [
    { symbol: "ΦB", name: "Magnetic Flux", unit: "Wb" },
    { symbol: "B", name: "Magnetic Field", unit: "T" },
    { symbol: "A", name: "Area", unit: "m²" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["magnetic flux"],
  applications: [
    "Electromagnetic induction",
    "Generators",
  ],
  commonMistakes: [
    "Angle is between the magnetic field and the surface normal.",
  ],
  relatedFormulas: [
    "Faraday's Law",
  ],
  notes: [
    "Measured in weber (Wb).",
  ],
},
{
  id: "faradays-law",
  title: "Faraday's Law of Electromagnetic Induction",
  formula: "\\mathcal{E}=-\\frac{d\\Phi_B}{dt}",
  plainFormula: "ℰ = -dΦB/dt",
  description: "The induced EMF equals the negative rate of change of magnetic flux.",
  variables: [
    { symbol: "ℰ", name: "Induced EMF", unit: "V" },
    { symbol: "ΦB", name: "Magnetic Flux", unit: "Wb" },
    { symbol: "t", name: "Time", unit: "s" },
  ],
  keywords: ["faraday", "induction"],
  applications: [
    "Generators",
    "Transformers",
    "Electric motors",
  ],
  commonMistakes: [
    "Negative sign represents Lenz's Law.",
  ],
  relatedFormulas: [
    "Lenz's Law",
    "Magnetic Flux",
  ],
  notes: [
    "One of Maxwell's fundamental laws.",
  ],
},
{
  id: "lenzs-law",
  title: "Lenz's Law",
  formula: "\\mathcal{E}=-\\frac{d\\Phi_B}{dt}",
  plainFormula: "ℰ = -dΦB/dt",
  description: "The induced current opposes the change producing it.",
  variables: [
    { symbol: "ℰ", name: "Induced EMF", unit: "V" },
  ],
  keywords: ["lenz", "induction"],
  applications: [
    "Electromagnetic braking",
    "Generators",
  ],
  commonMistakes: [
    "The negative sign indicates opposition, not a negative voltage.",
  ],
  relatedFormulas: [
    "Faraday's Law",
  ],
  notes: [
    "Based on conservation of energy.",
  ],
},
{
  id: "self-inductance",
  title: "Self Inductance",
  formula: "\\mathcal{E}=-L\\frac{dI}{dt}",
  plainFormula: "ℰ = -L(dI/dt)",
  description: "Induced EMF produced by change in current within the same coil.",
  variables: [
    { symbol: "L", name: "Inductance", unit: "H" },
    { symbol: "I", name: "Current", unit: "A" },
  ],
  keywords: ["self inductance"],
  applications: [
    "Inductors",
    "RL circuits",
  ],
  commonMistakes: [
    "Unit of inductance is henry.",
  ],
  relatedFormulas: [
    "Mutual Inductance",
  ],
  notes: [
    "Opposes changes in current.",
  ],
},
{
  id: "mutual-inductance",
  title: "Mutual Inductance",
  formula: "\\mathcal{E}=-M\\frac{dI}{dt}",
  plainFormula: "ℰ = -M(dI/dt)",
  description: "Induced EMF in one coil due to changing current in another coil.",
  variables: [
    { symbol: "M", name: "Mutual Inductance", unit: "H" },
    { symbol: "I", name: "Current", unit: "A" },
  ],
  keywords: ["mutual inductance"],
  applications: [
    "Transformers",
    "Wireless charging",
  ],
  commonMistakes: [
    "Occurs only between magnetically coupled coils.",
  ],
  relatedFormulas: [
    "Self Inductance",
  ],
  notes: [
    "Fundamental principle behind transformers.",
  ],
},
{
  id: "inductor-energy",
  title: "Energy Stored in an Inductor",
  formula: "U=\\frac12LI^2",
  plainFormula: "U = ½LI²",
  description: "Energy stored in the magnetic field of an inductor.",
  variables: [
    { symbol: "U", name: "Energy", unit: "J" },
    { symbol: "L", name: "Inductance", unit: "H" },
    { symbol: "I", name: "Current", unit: "A" },
  ],
  keywords: ["inductor energy"],
  applications: [
    "Power electronics",
    "Magnetic energy storage",
  ],
  commonMistakes: [
    "Measured in joules.",
  ],
  relatedFormulas: [
    "Self Inductance",
  ],
  notes: [
    "Analogous to capacitor energy storage.",
  ],
},
{
  id: "rms-voltage",
  title: "RMS Voltage",
  formula: "V_{rms}=\\frac{V_0}{\\sqrt2}",
  plainFormula: "Vrms = V₀/√2",
  description: "Root mean square value of AC voltage.",
  variables: [
    { symbol: "Vrms", name: "RMS Voltage", unit: "V" },
    { symbol: "V₀", name: "Peak Voltage", unit: "V" },
  ],
  keywords: ["rms voltage", "ac"],
  applications: [
    "AC circuits",
    "Household electricity",
  ],
  commonMistakes: [
    "Applicable to sinusoidal AC.",
  ],
  relatedFormulas: [
    "RMS Current",
  ],
  notes: [
    "Standard voltage reported for AC supplies.",
  ],
},
{
  id: "rms-current",
  title: "RMS Current",
  formula: "I_{rms}=\\frac{I_0}{\\sqrt2}",
  plainFormula: "Irms = I₀/√2",
  description: "Root mean square value of AC current.",
  variables: [
    { symbol: "Irms", name: "RMS Current", unit: "A" },
    { symbol: "I₀", name: "Peak Current", unit: "A" },
  ],
  keywords: ["rms current", "ac"],
  applications: [
    "AC analysis",
  ],
  commonMistakes: [
    "Applicable for sinusoidal waveforms.",
  ],
  relatedFormulas: [
    "RMS Voltage",
  ],
  notes: [
    "Used in power calculations.",
  ],
},

];