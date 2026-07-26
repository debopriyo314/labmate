import type { Formula } from "./types";

export const mechanics: Formula[] = [
  {
    id: "newton-second-law",
    title: "Newton's Second Law",
    formula: "F = ma",
    plainFormula: "F = ma",
    description:
      "The net force acting on an object is equal to the product of its mass and acceleration.",
    variables: [
      { symbol: "F", name: "Force", unit: "N" },
      { symbol: "m", name: "Mass", unit: "kg" },
      { symbol: "a", name: "Acceleration", unit: "m/s²" },
    ],
    keywords: ["newton", "force", "mass", "acceleration"],
    applications: [
      "Vehicle dynamics",
      "Rocket propulsion",
      "Machine design",
      "Sports science",
    ],
    commonMistakes: [
      "Don't confuse mass with weight.",
      "Always use SI units.",
      "Force is measured in Newton (N).",
    ],
    relatedFormulas: [
      "Weight (W = mg)",
      "Momentum (p = mv)",
      "Impulse (J = FΔt)",
    ],
    notes: [
      "Force is a vector quantity.",
      "Net force determines acceleration.",
    ],
  },

  {
    id: "weight",
    title: "Weight",
    formula: "W = mg",
    plainFormula: "W = mg",
    description:
      "Weight is the gravitational force acting on an object.",
    variables: [
      { symbol: "W", name: "Weight", unit: "N" },
      { symbol: "m", name: "Mass", unit: "kg" },
      { symbol: "g", name: "Acceleration due to gravity", unit: "m/s²" },
    ],
    keywords: ["weight", "gravity", "mass"],
    applications: [
      "Calculating gravitational force",
      "Engineering",
      "Lift calculations",
    ],
    commonMistakes: [
      "Weight is not the same as mass.",
      "g ≈ 9.8 m/s² on Earth.",
    ],
    relatedFormulas: [
      "Newton's Second Law",
      "Potential Energy",
    ],
    notes: [
      "Weight changes with gravity.",
      "Mass remains constant.",
    ],
  },

  {
    id: "momentum",
    title: "Momentum",
    formula: "p = mv",
    plainFormula: "p = mv",
    description:
      "Momentum is the product of mass and velocity.",
    variables: [
      { symbol: "p", name: "Momentum", unit: "kg·m/s" },
      { symbol: "m", name: "Mass", unit: "kg" },
      { symbol: "v", name: "Velocity", unit: "m/s" },
    ],
    keywords: ["momentum", "collision", "velocity"],
    applications: [
      "Collision analysis",
      "Ballistics",
      "Vehicle safety",
    ],
    commonMistakes: [
      "Momentum is a vector quantity.",
      "Velocity direction matters.",
    ],
    relatedFormulas: [
      "Impulse",
      "Newton's Second Law",
    ],
    notes: [
      "Momentum is conserved in isolated systems.",
    ],
  },

  {
    id: "impulse",
    title: "Impulse",
    formula: "J = F\\Delta t",
    plainFormula: "J = FΔt",
    description:
      "Impulse equals force multiplied by time.",
    variables: [
      { symbol: "J", name: "Impulse", unit: "N·s" },
      { symbol: "F", name: "Force", unit: "N" },
      { symbol: "Δt", name: "Time", unit: "s" },
    ],
    keywords: ["impulse", "collision", "force"],
    applications: [
      "Airbag design",
      "Sports",
      "Crash testing",
    ],
    commonMistakes: [
      "Impulse equals change in momentum.",
    ],
    relatedFormulas: [
      "Momentum",
    ],
    notes: [
      "Longer impact time reduces force.",
    ],
  },

  {
    id: "work",
    title: "Work Done",
    formula: "W = Fs\\cos\\theta",
    plainFormula: "W = Fs cosθ",
    description:
      "Work is done when a force causes displacement.",
    variables: [
      { symbol: "W", name: "Work", unit: "J" },
      { symbol: "F", name: "Force", unit: "N" },
      { symbol: "s", name: "Displacement", unit: "m" },
      { symbol: "θ", name: "Angle", unit: "°" },
    ],
    keywords: ["work", "energy"],
    applications: [
      "Mechanical systems",
      "Lifting loads",
    ],
    commonMistakes: [
      "No displacement means no work.",
    ],
    relatedFormulas: [
      "Power",
      "Energy",
    ],
    notes: [
      "Work is a scalar quantity.",
    ],
  },

  {
    id: "power",
    title: "Power",
    formula: "P = \\frac{W}{t}",
    plainFormula: "P = W/t",
    description:
      "Power is the rate of doing work.",
    variables: [
      { symbol: "P", name: "Power", unit: "W" },
      { symbol: "W", name: "Work", unit: "J" },
      { symbol: "t", name: "Time", unit: "s" },
    ],
    keywords: ["power", "work"],
    applications: [
      "Motor ratings",
      "Electrical systems",
    ],
    commonMistakes: [
      "Power is measured in watts.",
    ],
    relatedFormulas: [
      "Work Done",
    ],
    notes: [
      "Higher power means faster work.",
    ],
  },
  {
  id: "kinetic-energy",
  title: "Kinetic Energy",
  formula: "KE = \\frac{1}{2}mv^2",
  plainFormula: "KE = ½mv²",
  description: "Energy possessed by a body due to its motion.",
  variables: [
    { symbol: "KE", name: "Kinetic Energy", unit: "J" },
    { symbol: "m", name: "Mass", unit: "kg" },
    { symbol: "v", name: "Velocity", unit: "m/s" },
  ],
  keywords: ["kinetic", "energy", "motion"],
  applications: [
    "Vehicle dynamics",
    "Sports science",
    "Engineering calculations",
  ],
  commonMistakes: [
    "Velocity is squared.",
    "Use SI units.",
  ],
  relatedFormulas: [
    "Potential Energy",
    "Mechanical Energy",
  ],
  notes: [
    "Kinetic energy is always positive.",
  ],
},
{
  id: "potential-energy",
  title: "Potential Energy",
  formula: "PE = mgh",
  plainFormula: "PE = mgh",
  description: "Energy possessed due to position in a gravitational field.",
  variables: [
    { symbol: "PE", name: "Potential Energy", unit: "J" },
    { symbol: "m", name: "Mass", unit: "kg" },
    { symbol: "g", name: "Acceleration due to gravity", unit: "m/s²" },
    { symbol: "h", name: "Height", unit: "m" },
  ],
  keywords: ["potential", "energy", "gravity"],
  applications: [
    "Hydroelectric dams",
    "Lifting systems",
    "Roller coasters",
  ],
  commonMistakes: [
    "Height must be measured from the chosen reference level.",
  ],
  relatedFormulas: [
    "Kinetic Energy",
    "Mechanical Energy",
  ],
  notes: [
    "Potential energy depends on the reference level.",
  ],
},
{
  id: "mechanical-energy",
  title: "Mechanical Energy",
  formula: "ME = KE + PE",
  plainFormula: "ME = KE + PE",
  description: "The total mechanical energy is the sum of kinetic and potential energy.",
  variables: [
    { symbol: "ME", name: "Mechanical Energy", unit: "J" },
    { symbol: "KE", name: "Kinetic Energy", unit: "J" },
    { symbol: "PE", name: "Potential Energy", unit: "J" },
  ],
  keywords: ["mechanical", "energy", "conservation"],
  applications: [
    "Energy conservation problems",
    "Roller coasters",
    "Pendulums",
  ],
  commonMistakes: [
    "Mechanical energy is conserved only when non-conservative forces are negligible.",
  ],
  relatedFormulas: [
    "Kinetic Energy",
    "Potential Energy",
  ],
  notes: [
    "Total mechanical energy remains constant in an ideal system.",
  ],
},
{
  id: "efficiency",
  title: "Efficiency",
  formula: "\\eta = \\frac{\\text{Useful Output}}{\\text{Input}} \\times 100\\%",
  plainFormula: "η = (Useful Output / Input) × 100%",
  description: "Efficiency is the percentage of useful output obtained from the total input.",
  variables: [
    { symbol: "η", name: "Efficiency", unit: "%" },
  ],
  keywords: ["efficiency", "output", "input"],
  applications: [
    "Machines",
    "Power plants",
    "Electric motors",
  ],
  commonMistakes: [
    "Efficiency cannot exceed 100% in ordinary physical systems.",
  ],
  relatedFormulas: [
    "Power",
    "Work Done",
  ],
  notes: [
    "Efficiency is often expressed as a percentage.",
  ],
},
{
  id: "friction-force",
  title: "Friction Force",
  formula: "F_f = \\mu N",
  plainFormula: "Ff = μN",
  description: "Frictional force is proportional to the normal reaction.",
  variables: [
    { symbol: "Ff", name: "Friction Force", unit: "N" },
    { symbol: "μ", name: "Coefficient of Friction", unit: "Unitless" },
    { symbol: "N", name: "Normal Reaction", unit: "N" },
  ],
  keywords: ["friction", "coefficient", "normal force"],
  applications: [
    "Vehicle braking",
    "Walking",
    "Machine design",
  ],
  commonMistakes: [
    "Coefficient of friction has no unit.",
    "Normal force is not always equal to weight.",
  ],
  relatedFormulas: [
    "Weight",
    "Newton's Second Law",
  ],
  notes: [
    "Friction always opposes relative motion.",
  ],
},
{
  id: "hookes-law",
  title: "Hooke's Law",
  formula: "F = kx",
  plainFormula: "F = kx",
  description: "The restoring force of a spring is proportional to its extension.",
  variables: [
    { symbol: "F", name: "Force", unit: "N" },
    { symbol: "k", name: "Spring Constant", unit: "N/m" },
    { symbol: "x", name: "Extension", unit: "m" },
  ],
  keywords: ["hooke", "spring", "elasticity"],
  applications: [
    "Spring balance",
    "Suspension systems",
    "Oscillations",
  ],
  commonMistakes: [
    "Valid only within the elastic limit.",
  ],
  relatedFormulas: [
    "Potential Energy",
  ],
  notes: [
    "The restoring force actually acts in the opposite direction of displacement.",
  ],
},
{
  id: "torque",
  title: "Torque",
  formula: "\\tau = rF\\sin\\theta",
  plainFormula: "τ = rF sinθ",
  description: "Torque is the turning effect produced by a force.",
  variables: [
    { symbol: "τ", name: "Torque", unit: "N·m" },
    { symbol: "r", name: "Lever Arm", unit: "m" },
    { symbol: "F", name: "Force", unit: "N" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["torque", "rotation", "moment"],
  applications: [
    "Wrenches",
    "Motors",
    "Rotational mechanics",
  ],
  commonMistakes: [
    "Maximum torque occurs at 90°.",
  ],
  relatedFormulas: [
    "Angular Momentum",
  ],
  notes: [
    "Torque is a vector quantity.",
  ],
},
{
  id: "angular-momentum",
  title: "Angular Momentum",
  formula: "L = I\\omega",
  plainFormula: "L = Iω",
  description: "Angular momentum is the rotational equivalent of linear momentum.",
  variables: [
    { symbol: "L", name: "Angular Momentum", unit: "kg·m²/s" },
    { symbol: "I", name: "Moment of Inertia", unit: "kg·m²" },
    { symbol: "ω", name: "Angular Velocity", unit: "rad/s" },
  ],
  keywords: ["angular momentum", "rotation"],
  applications: [
    "Gyroscopes",
    "Planetary motion",
    "Figure skating",
  ],
  commonMistakes: [
    "Angular momentum is conserved when external torque is zero.",
  ],
  relatedFormulas: [
    "Torque",
  ],
  notes: [
    "Angular momentum is a vector quantity.",
  ],
},
{
  id: "rotational-kinetic-energy",
  title: "Rotational Kinetic Energy",
  formula: "KE = \\frac{1}{2}I\\omega^2",
  plainFormula: "KE = ½Iω²",
  description: "The kinetic energy possessed by a rotating body.",
  variables: [
    { symbol: "KE", name: "Rotational Kinetic Energy", unit: "J" },
    { symbol: "I", name: "Moment of Inertia", unit: "kg·m²" },
    { symbol: "ω", name: "Angular Velocity", unit: "rad/s" },
  ],
  keywords: ["rotational", "kinetic", "energy"],
  applications: [
    "Flywheels",
    "Rotating machinery",
    "Mechanical engineering",
  ],
  commonMistakes: [
    "Use angular velocity in radians per second.",
  ],
  relatedFormulas: [
    "Angular Momentum",
    "Torque",
  ],
  notes: [
    "This is the rotational analogue of translational kinetic energy.",
  ],
},
{
  id: "angular-velocity",
  title: "Angular Velocity",
  formula: "\\omega = \\frac{d\\theta}{dt}",
  plainFormula: "ω = dθ/dt",
  description: "Angular velocity is the rate of change of angular displacement.",
  variables: [
    { symbol: "ω", name: "Angular Velocity", unit: "rad/s" },
    { symbol: "θ", name: "Angular Displacement", unit: "rad" },
    { symbol: "t", name: "Time", unit: "s" },
  ],
  keywords: ["angular velocity", "rotation", "omega"],
  applications: [
    "Rotating machinery",
    "Planetary motion",
    "Gyroscopes",
  ],
  commonMistakes: [
    "Always express angular velocity in rad/s.",
  ],
  relatedFormulas: [
    "Angular Acceleration",
    "Torque",
  ],
  notes: [
    "Angular velocity is a vector quantity.",
  ],
},
{
  id: "angular-acceleration",
  title: "Angular Acceleration",
  formula: "\\alpha = \\frac{d\\omega}{dt}",
  plainFormula: "α = dω/dt",
  description: "Rate of change of angular velocity.",
  variables: [
    { symbol: "α", name: "Angular Acceleration", unit: "rad/s²" },
    { symbol: "ω", name: "Angular Velocity", unit: "rad/s" },
    { symbol: "t", name: "Time", unit: "s" },
  ],
  keywords: ["angular acceleration"],
  applications: [
    "Motor design",
    "Rotational dynamics",
  ],
  commonMistakes: [
    "Radians are dimensionless but use rad/s² conventionally.",
  ],
  relatedFormulas: [
    "Angular Velocity",
  ],
  notes: [
    "Angular acceleration may be positive or negative.",
  ],
},
{
  id: "moment-of-inertia",
  title: "Moment of Inertia",
  formula: "I = \\sum mr^2",
  plainFormula: "I = Σmr²",
  description: "Measure of rotational inertia of a body.",
  variables: [
    { symbol: "I", name: "Moment of Inertia", unit: "kg·m²" },
    { symbol: "m", name: "Mass", unit: "kg" },
    { symbol: "r", name: "Distance from axis", unit: "m" },
  ],
  keywords: ["moment of inertia", "rotational inertia"],
  applications: [
    "Flywheels",
    "Rotating shafts",
    "Rigid body dynamics",
  ],
  commonMistakes: [
    "Moment of inertia depends on the axis of rotation.",
  ],
  relatedFormulas: [
    "Angular Momentum",
    "Torque",
  ],
  notes: [
    "Different body shapes have different standard values of I.",
  ],
},
{
  id: "parallel-axis-theorem",
  title: "Parallel Axis Theorem",
  formula: "I = I_{cm} + Md^2",
  plainFormula: "I = Icm + Md²",
  description: "Moment of inertia about an axis parallel to the centre of mass axis.",
  variables: [
    { symbol: "I", name: "Moment of Inertia", unit: "kg·m²" },
    { symbol: "Icm", name: "Moment of Inertia about CM", unit: "kg·m²" },
    { symbol: "M", name: "Mass", unit: "kg" },
    { symbol: "d", name: "Distance", unit: "m" },
  ],
  keywords: ["parallel axis theorem"],
  applications: [
    "Rigid body mechanics",
    "Mechanical engineering",
  ],
  commonMistakes: [
    "The reference axis must be parallel to the centre-of-mass axis.",
  ],
  relatedFormulas: [
    "Moment of Inertia",
  ],
  notes: [
    "Very important in undergraduate mechanics.",
  ],
},
{
  id: "perpendicular-axis-theorem",
  title: "Perpendicular Axis Theorem",
  formula: "I_z = I_x + I_y",
  plainFormula: "Iz = Ix + Iy",
  description: "Applicable to planar laminae.",
  variables: [
    { symbol: "Iz", name: "Moment about z-axis", unit: "kg·m²" },
    { symbol: "Ix", name: "Moment about x-axis", unit: "kg·m²" },
    { symbol: "Iy", name: "Moment about y-axis", unit: "kg·m²" },
  ],
  keywords: ["perpendicular axis theorem"],
  applications: [
    "Planar rigid bodies",
    "Engineering mechanics",
  ],
  commonMistakes: [
    "Only applicable to plane laminae.",
  ],
  relatedFormulas: [
    "Moment of Inertia",
  ],
  notes: [
    "Frequently asked in B.Sc. examinations.",
  ],
},
{
  id: "radius-of-gyration",
  title: "Radius of Gyration",
  formula: "k = \\sqrt{\\frac{I}{M}}",
  plainFormula: "k = √(I/M)",
  description: "Distance from the axis at which the entire mass can be assumed concentrated.",
  variables: [
    { symbol: "k", name: "Radius of Gyration", unit: "m" },
    { symbol: "I", name: "Moment of Inertia", unit: "kg·m²" },
    { symbol: "M", name: "Mass", unit: "kg" },
  ],
  keywords: ["radius of gyration", "moment of inertia"],
  applications: ["Machine design", "Rigid body dynamics"],
  commonMistakes: ["Do not confuse radius of gyration with radius."],
  relatedFormulas: ["Moment of Inertia"],
  notes: ["Radius of gyration depends on the axis."],
},
{
  id: "rolling-motion",
  title: "Rolling Without Slipping",
  formula: "v = r\\omega",
  plainFormula: "v = rω",
  description: "Condition for pure rolling motion.",
  variables: [
    { symbol: "v", name: "Linear Velocity", unit: "m/s" },
    { symbol: "r", name: "Radius", unit: "m" },
    { symbol: "ω", name: "Angular Velocity", unit: "rad/s" },
  ],
  keywords: ["rolling", "pure rolling"],
  applications: ["Wheel motion", "Vehicle mechanics"],
  commonMistakes: ["Valid only for rolling without slipping."],
  relatedFormulas: ["Angular Velocity"],
  notes: ["Linear and angular motion are related."],
},
{
  id: "centripetal-force",
  title: "Centripetal Force",
  formula: "F = \\frac{mv^2}{r}",
  plainFormula: "F = mv²/r",
  description: "Force required to keep a body moving in a circular path.",
  variables: [
    { symbol: "F", name: "Force", unit: "N" },
    { symbol: "m", name: "Mass", unit: "kg" },
    { symbol: "v", name: "Velocity", unit: "m/s" },
    { symbol: "r", name: "Radius", unit: "m" },
  ],
  keywords: ["centripetal", "circular motion"],
  applications: ["Planetary motion", "Banked roads"],
  commonMistakes: ["Force always points towards the centre."],
  relatedFormulas: ["Angular Velocity"],
  notes: ["It is not a new force but the net inward force."],
},
{
  id: "centripetal-acceleration",
  title: "Centripetal Acceleration",
  formula: "a = \\frac{v^2}{r}",
  plainFormula: "a = v²/r",
  description: "Acceleration directed towards the centre of a circular path.",
  variables: [
    { symbol: "a", name: "Acceleration", unit: "m/s²" },
    { symbol: "v", name: "Velocity", unit: "m/s" },
    { symbol: "r", name: "Radius", unit: "m" },
  ],
  keywords: ["centripetal acceleration"],
  applications: ["Circular motion"],
  commonMistakes: ["Always directed inward."],
  relatedFormulas: ["Centripetal Force"],
  notes: ["Magnitude depends on speed squared."],
},
{
  id: "projectile-range",
  title: "Horizontal Range",
  formula: "R = \\frac{u^2\\sin2\\theta}{g}",
  plainFormula: "R = u² sin2θ / g",
  description: "Maximum horizontal distance travelled by a projectile.",
  variables: [
    { symbol: "R", name: "Range", unit: "m" },
    { symbol: "u", name: "Initial Velocity", unit: "m/s" },
    { symbol: "θ", name: "Angle", unit: "°" },
    { symbol: "g", name: "Gravity", unit: "m/s²" },
  ],
  keywords: ["projectile", "range"],
  applications: ["Ballistics", "Sports"],
  commonMistakes: ["Applicable when launch and landing heights are equal."],
  relatedFormulas: ["Maximum Height", "Time of Flight"],
  notes: ["Maximum range occurs at 45°."],
},
{
  id: "maximum-height",
  title: "Maximum Height",
  formula: "H = \\frac{u^2\\sin^2\\theta}{2g}",
  plainFormula: "H = u² sin²θ / 2g",
  description: "Highest point reached by a projectile.",
  variables: [
    { symbol: "H", name: "Maximum Height", unit: "m" },
    { symbol: "u", name: "Initial Velocity", unit: "m/s" },
    { symbol: "θ", name: "Projection Angle", unit: "°" },
    { symbol: "g", name: "Gravity", unit: "m/s²" },
  ],
  keywords: ["projectile", "height"],
  applications: ["Projectile motion"],
  commonMistakes: ["Use SI units."],
  relatedFormulas: ["Range"],
  notes: ["Occurs when vertical velocity becomes zero."],
},
{
  id: "time-of-flight",
  title: "Time of Flight",
  formula: "T = \\frac{2u\\sin\\theta}{g}",
  plainFormula: "T = 2u sinθ / g",
  description: "Total time spent by a projectile in air.",
  variables: [
    { symbol: "T", name: "Time", unit: "s" },
    { symbol: "u", name: "Initial Velocity", unit: "m/s" },
    { symbol: "θ", name: "Projection Angle", unit: "°" },
    { symbol: "g", name: "Gravity", unit: "m/s²" },
  ],
  keywords: ["projectile", "time"],
  applications: ["Projectile motion"],
  commonMistakes: ["Formula assumes equal launch and landing heights."],
  relatedFormulas: ["Range"],
  notes: ["Depends on the vertical component of velocity."],
},
{
  id: "escape-velocity",
  title: "Escape Velocity",
  formula: "v_e = \\sqrt{\\frac{2GM}{R}}",
  plainFormula: "ve = √(2GM/R)",
  description: "Minimum speed needed to escape a planet's gravitational field.",
  variables: [
    { symbol: "ve", name: "Escape Velocity", unit: "m/s" },
    { symbol: "G", name: "Gravitational Constant", unit: "N·m²/kg²" },
    { symbol: "M", name: "Mass of Planet", unit: "kg" },
    { symbol: "R", name: "Planet Radius", unit: "m" },
  ],
  keywords: ["escape velocity"],
  applications: ["Rocket science", "Space missions"],
  commonMistakes: ["Neglecting air resistance in the ideal formula."],
  relatedFormulas: ["Orbital Velocity"],
  notes: ["Independent of the mass of the escaping object."],
},
{
  id: "orbital-velocity",
  title: "Orbital Velocity",
  formula: "v = \\sqrt{\\frac{GM}{R}}",
  plainFormula: "v = √(GM/R)",
  description: "Velocity required for a stable circular orbit.",
  variables: [
    { symbol: "v", name: "Orbital Velocity", unit: "m/s" },
    { symbol: "G", name: "Gravitational Constant", unit: "N·m²/kg²" },
    { symbol: "M", name: "Mass of Planet", unit: "kg" },
    { symbol: "R", name: "Orbital Radius", unit: "m" },
  ],
  keywords: ["orbital velocity", "satellite"],
  applications: ["Satellite motion"],
  commonMistakes: ["Orbital radius is measured from the planet's centre."],
  relatedFormulas: ["Escape Velocity"],
  notes: ["Escape velocity = √2 × orbital velocity."],
},
{
  id: "conservation-angular-momentum",
  title: "Conservation of Angular Momentum",
  formula: "I_1\\omega_1 = I_2\\omega_2",
  plainFormula: "I₁ω₁ = I₂ω₂",
  description: "Angular momentum remains constant when external torque is zero.",
  variables: [
    { symbol: "I", name: "Moment of Inertia", unit: "kg·m²" },
    { symbol: "ω", name: "Angular Velocity", unit: "rad/s" },
  ],
  keywords: ["angular momentum", "conservation"],
  applications: ["Figure skating", "Astrophysics", "Gyroscopes"],
  commonMistakes: ["Applies only when external torque is zero."],
  relatedFormulas: ["Angular Momentum"],
  notes: ["Used extensively in rotational dynamics."],
},
];