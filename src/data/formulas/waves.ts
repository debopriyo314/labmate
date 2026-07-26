import type { Formula } from "./types";

export const waves: Formula[] = [
  {
    id: "shm-displacement",
    title: "SHM Displacement",
    formula: "x=A\\cos(\\omega t+\\phi)",
    plainFormula: "x = A cos(ωt + φ)",
    description:
      "Displacement of a particle performing simple harmonic motion.",
    variables: [
      { symbol: "x", name: "Displacement", unit: "m" },
      { symbol: "A", name: "Amplitude", unit: "m" },
      { symbol: "ω", name: "Angular Frequency", unit: "rad/s" },
      { symbol: "t", name: "Time", unit: "s" },
      { symbol: "φ", name: "Phase Constant", unit: "rad" },
    ],
    keywords: ["shm", "displacement", "oscillation"],
    applications: [
      "Spring oscillations",
      "Pendulum motion",
      "Mechanical vibrations",
    ],
    commonMistakes: [
      "Use radians for phase angle.",
      "Amplitude is always positive.",
    ],
    relatedFormulas: [
      "SHM Velocity",
      "SHM Acceleration",
    ],
    notes: [
      "Cosine and sine forms are equivalent depending on initial conditions.",
    ],
  },

  {
    id: "shm-velocity",
    title: "SHM Velocity",
    formula: "v=-A\\omega\\sin(\\omega t+\\phi)",
    plainFormula: "v = -Aω sin(ωt + φ)",
    description: "Instantaneous velocity in SHM.",
    variables: [
      { symbol: "v", name: "Velocity", unit: "m/s" },
      { symbol: "A", name: "Amplitude", unit: "m" },
      { symbol: "ω", name: "Angular Frequency", unit: "rad/s" },
    ],
    keywords: ["velocity", "shm"],
    applications: [
      "Oscillation analysis",
    ],
    commonMistakes: [
      "Maximum velocity occurs at the mean position.",
    ],
    relatedFormulas: [
      "SHM Displacement",
      "SHM Acceleration",
    ],
    notes: [
      "Velocity changes continuously throughout the oscillation.",
    ],
  },

  {
    id: "shm-acceleration",
    title: "SHM Acceleration",
    formula: "a=-\\omega^2x",
    plainFormula: "a = -ω²x",
    description: "Acceleration in SHM is proportional to displacement and directed toward the mean position.",
    variables: [
      { symbol: "a", name: "Acceleration", unit: "m/s²" },
      { symbol: "ω", name: "Angular Frequency", unit: "rad/s" },
      { symbol: "x", name: "Displacement", unit: "m" },
    ],
    keywords: ["acceleration", "shm"],
    applications: [
      "Mechanical oscillators",
    ],
    commonMistakes: [
      "The negative sign indicates restoring acceleration.",
    ],
    relatedFormulas: [
      "SHM Velocity",
      "SHM Displacement",
    ],
    notes: [
      "Acceleration is maximum at extreme positions.",
    ],
  },

  {
    id: "spring-time-period",
    title: "Time Period of Spring",
    formula: "T=2\\pi\\sqrt{\\frac{m}{k}}",
    plainFormula: "T = 2π√(m/k)",
    description: "Time period of a mass attached to a spring.",
    variables: [
      { symbol: "T", name: "Time Period", unit: "s" },
      { symbol: "m", name: "Mass", unit: "kg" },
      { symbol: "k", name: "Spring Constant", unit: "N/m" },
    ],
    keywords: ["spring", "time period"],
    applications: [
      "Spring-mass systems",
    ],
    commonMistakes: [
      "Independent of amplitude for ideal SHM.",
    ],
    relatedFormulas: [
      "Angular Frequency",
    ],
    notes: [
      "Valid only for ideal springs obeying Hooke's law.",
    ],
  },

  {
    id: "simple-pendulum",
    title: "Time Period of Simple Pendulum",
    formula: "T=2\\pi\\sqrt{\\frac{l}{g}}",
    plainFormula: "T = 2π√(l/g)",
    description: "Time period of a simple pendulum for small oscillations.",
    variables: [
      { symbol: "T", name: "Time Period", unit: "s" },
      { symbol: "l", name: "Length", unit: "m" },
      { symbol: "g", name: "Acceleration due to Gravity", unit: "m/s²" },
    ],
    keywords: ["pendulum", "shm"],
    applications: [
      "Pendulum clocks",
      "Gravity measurement",
    ],
    commonMistakes: [
      "Valid only for small angular displacement.",
    ],
    relatedFormulas: [
      "Angular Frequency",
    ],
    notes: [
      "Independent of the mass of the bob.",
    ],
  },
  {
  id: "angular-frequency",
  title: "Angular Frequency",
  formula: "\\omega=2\\pi f=\\frac{2\\pi}{T}",
  plainFormula: "ω = 2πf = 2π/T",
  description: "Angular frequency represents the rate of oscillation in radians per second.",
  variables: [
    { symbol: "ω", name: "Angular Frequency", unit: "rad/s" },
    { symbol: "f", name: "Frequency", unit: "Hz" },
    { symbol: "T", name: "Time Period", unit: "s" },
  ],
  keywords: ["angular frequency", "omega", "shm"],
  applications: [
    "Oscillating systems",
    "Wave analysis",
  ],
  commonMistakes: [
    "Do not confuse ω with frequency.",
  ],
  relatedFormulas: [
    "Frequency",
    "Time Period",
  ],
  notes: [
    "ω = 2πf",
  ],
},
{
  id: "frequency",
  title: "Frequency",
  formula: "f=\\frac{1}{T}",
  plainFormula: "f = 1/T",
  description: "Number of oscillations completed in one second.",
  variables: [
    { symbol: "f", name: "Frequency", unit: "Hz" },
    { symbol: "T", name: "Time Period", unit: "s" },
  ],
  keywords: ["frequency"],
  applications: [
    "Waves",
    "Oscillations",
  ],
  commonMistakes: [
    "Measured in Hertz.",
  ],
  relatedFormulas: [
    "Angular Frequency",
  ],
  notes: [
    "Inverse of time period.",
  ],
},
{
  id: "shm-total-energy",
  title: "Total Energy in SHM",
  formula: "E=\\frac{1}{2}kA^2",
  plainFormula: "E = ½kA²",
  description: "Total mechanical energy remains constant in ideal SHM.",
  variables: [
    { symbol: "E", name: "Energy", unit: "J" },
    { symbol: "k", name: "Spring Constant", unit: "N/m" },
    { symbol: "A", name: "Amplitude", unit: "m" },
  ],
  keywords: ["energy", "shm"],
  applications: [
    "Spring systems",
  ],
  commonMistakes: [
    "Independent of displacement.",
  ],
  relatedFormulas: [
    "Potential Energy",
    "Kinetic Energy",
  ],
  notes: [
    "Energy is conserved in ideal SHM.",
  ],
},
{
  id: "shm-potential-energy",
  title: "Potential Energy in SHM",
  formula: "PE=\\frac{1}{2}kx^2",
  plainFormula: "PE = ½kx²",
  description: "Potential energy stored in a spring during oscillation.",
  variables: [
    { symbol: "PE", name: "Potential Energy", unit: "J" },
    { symbol: "k", name: "Spring Constant", unit: "N/m" },
    { symbol: "x", name: "Displacement", unit: "m" },
  ],
  keywords: ["potential energy", "spring"],
  applications: [
    "Elastic systems",
  ],
  commonMistakes: [
    "Depends on displacement.",
  ],
  relatedFormulas: [
    "SHM Kinetic Energy",
  ],
  notes: [
    "Maximum at extreme positions.",
  ],
},
{
  id: "shm-kinetic-energy",
  title: "Kinetic Energy in SHM",
  formula: "KE=\\frac{1}{2}k(A^2-x^2)",
  plainFormula: "KE = ½k(A² − x²)",
  description: "Kinetic energy of a particle in SHM.",
  variables: [
    { symbol: "KE", name: "Kinetic Energy", unit: "J" },
    { symbol: "k", name: "Spring Constant", unit: "N/m" },
    { symbol: "A", name: "Amplitude", unit: "m" },
    { symbol: "x", name: "Displacement", unit: "m" },
  ],
  keywords: ["kinetic energy", "shm"],
  applications: [
    "Oscillation analysis",
  ],
  commonMistakes: [
    "Maximum at the mean position.",
  ],
  relatedFormulas: [
    "SHM Potential Energy",
  ],
  notes: [
    "PE + KE = constant.",
  ],
},

];