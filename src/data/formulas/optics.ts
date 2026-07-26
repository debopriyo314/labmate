import type { Formula } from "./types";

export const optics: Formula[] = [

    {
  id: "mirror-formula",
  title: "Mirror Formula",
  formula: "\\frac{1}{f}=\\frac{1}{v}+\\frac{1}{u}",
  plainFormula: "1/f = 1/v + 1/u",
  description: "Relates the object distance, image distance and focal length of a spherical mirror.",
  variables: [
    { symbol: "f", name: "Focal Length", unit: "m" },
    { symbol: "u", name: "Object Distance", unit: "m" },
    { symbol: "v", name: "Image Distance", unit: "m" },
  ],
  keywords: ["mirror", "concave", "convex", "image"],
  applications: [
    "Ray optics",
    "Image formation",
    "Mirror calculations",
  ],
  commonMistakes: [
    "Always use the Cartesian sign convention.",
  ],
  relatedFormulas: [
    "Magnification",
    "Lens Formula",
  ],
  notes: [
    "Applicable only for spherical mirrors.",
  ],
},
{
  id: "lens-formula",
  title: "Lens Formula",
  formula: "\\frac{1}{f}=\\frac{1}{v}-\\frac{1}{u}",
  plainFormula: "1/f = 1/v - 1/u",
  description: "Relates object distance, image distance and focal length of a thin lens.",
  variables: [
    { symbol: "f", name: "Focal Length", unit: "m" },
    { symbol: "u", name: "Object Distance", unit: "m" },
    { symbol: "v", name: "Image Distance", unit: "m" },
  ],
  keywords: ["lens", "convex", "concave"],
  applications: [
    "Cameras",
    "Microscopes",
    "Telescopes",
  ],
  commonMistakes: [
    "Use the proper sign convention.",
  ],
  relatedFormulas: [
    "Power of Lens",
    "Magnification",
  ],
  notes: [
    "Applicable to thin lenses.",
  ],
},
{
  id: "magnification",
  title: "Magnification",
  formula: "m=\\frac{h_i}{h_o}=\\frac{v}{u}",
  plainFormula: "m = hi/ho = v/u",
  description: "Ratio of image height to object height.",
  variables: [
    { symbol: "m", name: "Magnification", unit: "Unitless" },
    { symbol: "hi", name: "Image Height", unit: "m" },
    { symbol: "ho", name: "Object Height", unit: "m" },
  ],
  keywords: ["magnification", "image"],
  applications: [
    "Microscopes",
    "Cameras",
    "Telescopes",
  ],
  commonMistakes: [
    "Negative magnification indicates an inverted image.",
  ],
  relatedFormulas: [
    "Mirror Formula",
    "Lens Formula",
  ],
  notes: [
    "Magnification has no unit.",
  ],
},
{
  id: "power-of-lens",
  title: "Power of Lens",
  formula: "P=\\frac{1}{f}",
  plainFormula: "P = 1/f",
  description: "Power is the reciprocal of focal length in metres.",
  variables: [
    { symbol: "P", name: "Power", unit: "Dioptre (D)" },
    { symbol: "f", name: "Focal Length", unit: "m" },
  ],
  keywords: ["power", "lens"],
  applications: [
    "Spectacles",
    "Optical instruments",
  ],
  commonMistakes: [
    "Focal length must be in metres.",
  ],
  relatedFormulas: [
    "Lens Formula",
  ],
  notes: [
    "Convex lenses have positive power.",
    "Concave lenses have negative power.",
  ],
},
{
  id: "lens-maker-formula",
  title: "Lens Maker's Formula",
  formula: "\\frac{1}{f}=(\\mu-1)\\left(\\frac{1}{R_1}-\\frac{1}{R_2}\\right)",
  plainFormula: "1/f = (μ−1)(1/R₁ − 1/R₂)",
  description: "Relates focal length to refractive index and radii of curvature.",
  variables: [
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
    { symbol: "R₁", name: "Radius of First Surface", unit: "m" },
    { symbol: "R₂", name: "Radius of Second Surface", unit: "m" },
    { symbol: "f", name: "Focal Length", unit: "m" },
  ],
  keywords: ["lens maker", "refractive index"],
  applications: [
    "Lens manufacturing",
    "Optical engineering",
  ],
  commonMistakes: [
    "Use the correct sign convention for R₁ and R₂.",
  ],
  relatedFormulas: [
    "Lens Formula",
  ],
  notes: [
    "Assumes a thin lens in air.",
  ],
},
{
  id: "combination-of-lenses",
  title: "Combination of Thin Lenses",
  formula: "\\frac{1}{F}=\\frac{1}{f_1}+\\frac{1}{f_2}",
  plainFormula: "1/F = 1/f₁ + 1/f₂",
  description: "Equivalent focal length of two thin lenses in contact.",
  variables: [
    { symbol: "F", name: "Equivalent Focal Length", unit: "m" },
    { symbol: "f₁", name: "Lens 1 Focal Length", unit: "m" },
    { symbol: "f₂", name: "Lens 2 Focal Length", unit: "m" },
  ],
  keywords: ["combination", "lenses"],
  applications: [
    "Compound optical systems",
    "Microscopes",
  ],
  commonMistakes: [
    "Valid only when the lenses are in contact.",
  ],
  relatedFormulas: [
    "Power of Lens",
  ],
  notes: [
    "Equivalent power is the sum of individual powers.",
  ],
},
{
  id: "refractive-index",
  title: "Refractive Index",
  formula: "\\mu=\\frac{c}{v}",
  plainFormula: "μ = c/v",
  description: "Refractive index is the ratio of the speed of light in vacuum to its speed in a medium.",
  variables: [
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
    { symbol: "c", name: "Speed of Light in Vacuum", unit: "m/s" },
    { symbol: "v", name: "Speed of Light in Medium", unit: "m/s" },
  ],
  keywords: ["refractive index", "speed of light"],
  applications: [
    "Lens design",
    "Optical materials",
  ],
  commonMistakes: [
    "Refractive index has no unit.",
  ],
  relatedFormulas: [
    "Snell's Law",
  ],
  notes: [
    "Greater refractive index means light travels more slowly in the medium.",
  ],
},
{
  id: "snells-law",
  title: "Snell's Law",
  formula: "\\mu_1\\sin\\theta_1=\\mu_2\\sin\\theta_2",
  plainFormula: "μ₁ sinθ₁ = μ₂ sinθ₂",
  description: "Relates the angles of incidence and refraction when light passes between two media.",
  variables: [
    { symbol: "μ₁", name: "Refractive Index of Medium 1", unit: "Unitless" },
    { symbol: "μ₂", name: "Refractive Index of Medium 2", unit: "Unitless" },
    { symbol: "θ₁", name: "Angle of Incidence", unit: "°" },
    { symbol: "θ₂", name: "Angle of Refraction", unit: "°" },
  ],
  keywords: ["snell", "refraction", "law"],
  applications: [
    "Lens design",
    "Optical fibres",
    "Refraction problems",
  ],
  commonMistakes: [
    "Angles are measured from the normal, not the surface.",
  ],
  relatedFormulas: [
    "Refractive Index",
    "Critical Angle",
  ],
  notes: [
    "Fundamental law of refraction.",
  ],
},
{
  id: "critical-angle",
  title: "Critical Angle",
  formula: "\\sin C=\\frac{1}{\\mu}",
  plainFormula: "sin C = 1/μ",
  description: "Critical angle for light travelling from a denser medium to a rarer medium.",
  variables: [
    { symbol: "C", name: "Critical Angle", unit: "°" },
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
  ],
  keywords: ["critical angle", "tir"],
  applications: [
    "Optical fibres",
    "Diamond brilliance",
  ],
  commonMistakes: [
    "Applicable only when light travels from denser to rarer medium.",
  ],
  relatedFormulas: [
    "Snell's Law",
    "Total Internal Reflection",
  ],
  notes: [
    "Occurs when the refracted ray makes 90° with the normal.",
  ],
},
{
  id: "total-internal-reflection",
  title: "Total Internal Reflection",
  formula: "\\theta_i>C",
  plainFormula: "θi > C",
  description: "Condition required for total internal reflection.",
  variables: [
    { symbol: "θi", name: "Angle of Incidence", unit: "°" },
    { symbol: "C", name: "Critical Angle", unit: "°" },
  ],
  keywords: ["tir", "reflection"],
  applications: [
    "Optical fibres",
    "Endoscopes",
    "Prisms",
  ],
  commonMistakes: [
    "Occurs only from denser to rarer medium.",
  ],
  relatedFormulas: [
    "Critical Angle",
  ],
  notes: [
    "No refraction occurs during total internal reflection.",
  ],
},
{
  id: "apparent-depth",
  title: "Apparent Depth",
  formula: "\\mu=\\frac{\\text{Real Depth}}{\\text{Apparent Depth}}",
  plainFormula: "μ = Real Depth / Apparent Depth",
  description: "Relates the apparent depth of an object in a refracting medium.",
  variables: [
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
  ],
  keywords: ["apparent depth", "refraction"],
  applications: [
    "Swimming pools",
    "Optical measurements",
  ],
  commonMistakes: [
    "Applicable for near-normal viewing.",
  ],
  relatedFormulas: [
    "Snell's Law",
  ],
  notes: [
    "Objects appear closer to the surface.",
  ],
},
{
  id: "prism-formula",
  title: "Thin Prism Formula",
  formula: "\\delta=(\\mu-1)A",
  plainFormula: "δ = (μ − 1)A",
  description: "Deviation produced by a thin prism.",
  variables: [
    { symbol: "δ", name: "Angle of Deviation", unit: "°" },
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
    { symbol: "A", name: "Prism Angle", unit: "°" },
  ],
  keywords: ["prism", "deviation"],
  applications: [
    "Spectrometers",
    "Optical instruments",
  ],
  commonMistakes: [
    "Valid only for thin prisms.",
  ],
  relatedFormulas: [
    "Minimum Deviation",
  ],
  notes: [
    "An approximation used for small prism angles.",
  ],
},
{
  id: "minimum-deviation",
  title: "Refractive Index using Minimum Deviation",
  formula: "\\mu=\\frac{\\sin\\left(\\frac{A+\\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}",
  plainFormula: "μ = sin((A + δm)/2) / sin(A/2)",
  description: "Calculates the refractive index of a prism using the minimum deviation method.",
  variables: [
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
    { symbol: "A", name: "Prism Angle", unit: "°" },
    { symbol: "δm", name: "Minimum Deviation", unit: "°" },
  ],
  keywords: ["minimum deviation", "prism"],
  applications: [
    "Spectrometer experiments",
    "Laboratory optics",
  ],
  commonMistakes: [
    "Angles must be measured accurately.",
  ],
  relatedFormulas: [
    "Prism Formula",
  ],
  notes: [
    "One of the most common B.Sc. practical formulas.",
  ],
},
{
  id: "spherical-surface-refraction",
  title: "Refraction at a Spherical Surface",
  formula: "\\frac{\\mu_2}{v}-\\frac{\\mu_1}{u}=\\frac{\\mu_2-\\mu_1}{R}",
  plainFormula: "μ₂/v − μ₁/u = (μ₂ − μ₁)/R",
  description: "Relates object distance, image distance and radius of curvature for refraction at a spherical surface.",
  variables: [
    { symbol: "μ₁", name: "Refractive Index of Object Medium", unit: "Unitless" },
    { symbol: "μ₂", name: "Refractive Index of Image Medium", unit: "Unitless" },
    { symbol: "u", name: "Object Distance", unit: "m" },
    { symbol: "v", name: "Image Distance", unit: "m" },
    { symbol: "R", name: "Radius of Curvature", unit: "m" },
  ],
  keywords: ["spherical surface", "refraction", "bsc optics"],
  applications: [
    "Lens derivations",
    "Optical system design",
  ],
  commonMistakes: [
    "Use the proper Cartesian sign convention.",
  ],
  relatedFormulas: [
    "Lens Formula",
    "Lens Maker's Formula",
  ],
  notes: [
    "A fundamental undergraduate optics formula.",
  ],
},
{
  id: "path-difference",
  title: "Path Difference",
  formula: "\\Delta=d\\sin\\theta",
  plainFormula: "Δ = d sinθ",
  description: "Path difference between light from two coherent sources.",
  variables: [
    { symbol: "Δ", name: "Path Difference", unit: "m" },
    { symbol: "d", name: "Slit Separation", unit: "m" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["path difference", "ydse", "interference"],
  applications: [
    "Young's Double Slit Experiment",
    "Interference analysis",
  ],
  commonMistakes: [
    "Use small-angle approximation only when applicable.",
  ],
  relatedFormulas: [
    "Fringe Width",
    "Bright Fringe",
    "Dark Fringe",
  ],
  notes: [
    "Fundamental relation for interference.",
  ],
},
{
  id: "fringe-width",
  title: "Fringe Width",
  formula: "\\beta=\\frac{\\lambda D}{d}",
  plainFormula: "β = λD/d",
  description: "Distance between two consecutive bright or dark fringes.",
  variables: [
    { symbol: "β", name: "Fringe Width", unit: "m" },
    { symbol: "λ", name: "Wavelength", unit: "m" },
    { symbol: "D", name: "Screen Distance", unit: "m" },
    { symbol: "d", name: "Slit Separation", unit: "m" },
  ],
  keywords: ["fringe", "ydse"],
  applications: [
    "Optics experiments",
    "Wavelength determination",
  ],
  commonMistakes: [
    "Keep all quantities in SI units.",
  ],
  relatedFormulas: [
    "Path Difference",
  ],
  notes: [
    "Fringe width increases with wavelength.",
  ],
},
{
  id: "bright-fringe",
  title: "Bright Fringe Condition",
  formula: "\\Delta=n\\lambda",
  plainFormula: "Δ = nλ",
  description: "Condition for constructive interference.",
  variables: [
    { symbol: "Δ", name: "Path Difference", unit: "m" },
    { symbol: "n", name: "Order", unit: "" },
    { symbol: "λ", name: "Wavelength", unit: "m" },
  ],
  keywords: ["constructive interference", "bright fringe"],
  applications: [
    "Young's Double Slit",
  ],
  commonMistakes: [
    "n starts from zero.",
  ],
  relatedFormulas: [
    "Dark Fringe",
  ],
  notes: [
    "Produces maximum intensity.",
  ],
},
{
  id: "dark-fringe",
  title: "Dark Fringe Condition",
  formula: "\\Delta=\\frac{(2n+1)\\lambda}{2}",
  plainFormula: "Δ = (2n+1)λ/2",
  description: "Condition for destructive interference.",
  variables: [
    { symbol: "Δ", name: "Path Difference", unit: "m" },
    { symbol: "n", name: "Order", unit: "" },
    { symbol: "λ", name: "Wavelength", unit: "m" },
  ],
  keywords: ["destructive interference", "dark fringe"],
  applications: [
    "Young's Double Slit",
  ],
  commonMistakes: [
    "Do not confuse with bright fringe condition.",
  ],
  relatedFormulas: [
    "Bright Fringe",
  ],
  notes: [
    "Produces minimum intensity.",
  ],
},
{
  id: "grating-equation",
  title: "Diffraction Grating Equation",
  formula: "d\\sin\\theta=n\\lambda",
  plainFormula: "d sinθ = nλ",
  description: "Condition for principal maxima in a diffraction grating.",
  variables: [
    { symbol: "d", name: "Grating Spacing", unit: "m" },
    { symbol: "θ", name: "Diffraction Angle", unit: "°" },
    { symbol: "n", name: "Order", unit: "" },
    { symbol: "λ", name: "Wavelength", unit: "m" },
  ],
  keywords: ["grating", "diffraction"],
  applications: [
    "Spectrometers",
    "Wavelength measurement",
  ],
  commonMistakes: [
    "Use the correct diffraction order.",
  ],
  relatedFormulas: [
    "Resolving Power",
  ],
  notes: [
    "Used extensively in spectroscopy.",
  ],
},
{
  id: "grating-resolving-power",
  title: "Resolving Power of Grating",
  formula: "R=nN",
  plainFormula: "R = nN",
  description: "Resolving power of a diffraction grating.",
  variables: [
    { symbol: "R", name: "Resolving Power", unit: "" },
    { symbol: "n", name: "Order", unit: "" },
    { symbol: "N", name: "Number of Lines", unit: "" },
  ],
  keywords: ["resolving power", "grating"],
  applications: [
    "Spectroscopy",
    "Optical instruments",
  ],
  commonMistakes: [
    "Higher order increases resolving power.",
  ],
  relatedFormulas: [
    "Grating Equation",
  ],
  notes: [
    "Important B.Sc. optics formula.",
  ],
},
{
  id: "rayleigh-criterion",
  title: "Rayleigh Criterion",
  formula: "\\theta=1.22\\frac{\\lambda}{D}",
  plainFormula: "θ = 1.22λ/D",
  description: "Minimum angular separation for two sources to be resolved.",
  variables: [
    { symbol: "θ", name: "Angular Resolution", unit: "rad" },
    { symbol: "λ", name: "Wavelength", unit: "m" },
    { symbol: "D", name: "Aperture Diameter", unit: "m" },
  ],
  keywords: ["rayleigh", "resolution"],
  applications: [
    "Telescopes",
    "Microscopes",
    "Astronomy",
  ],
  commonMistakes: [
    "Applicable to circular apertures.",
  ],
  relatedFormulas: [
    "Resolving Power",
  ],
  notes: [
    "Defines the limit of optical resolution.",
  ],
},
{
  id: "brewsters-law",
  title: "Brewster's Law",
  formula: "\\mu=\\tan\\theta_B",
  plainFormula: "μ = tanθB",
  description: "Relates the refractive index of a medium to its polarising (Brewster) angle.",
  variables: [
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
    { symbol: "θB", name: "Brewster Angle", unit: "°" },
  ],
  keywords: ["brewster", "polarisation"],
  applications: [
    "Polarising filters",
    "Laser optics",
  ],
  commonMistakes: [
    "Applicable only for completely polarised reflected light.",
  ],
  relatedFormulas: [
    "Malus' Law",
  ],
  notes: [
    "At Brewster's angle, reflected and refracted rays are perpendicular.",
  ],
},
{
  id: "malus-law",
  title: "Malus' Law",
  formula: "I=I_0\\cos^2\\theta",
  plainFormula: "I = I₀ cos²θ",
  description: "Intensity of plane-polarised light after passing through an analyser.",
  variables: [
    { symbol: "I", name: "Transmitted Intensity", unit: "W/m²" },
    { symbol: "I₀", name: "Initial Intensity", unit: "W/m²" },
    { symbol: "θ", name: "Angle", unit: "°" },
  ],
  keywords: ["malus", "polarisation"],
  applications: [
    "Optical instruments",
    "LCD displays",
  ],
  commonMistakes: [
    "Angle is between the transmission axes.",
  ],
  relatedFormulas: [
    "Brewster's Law",
  ],
  notes: [
    "Maximum intensity occurs at θ = 0°.",
  ],
},
{
  id: "optical-path-length",
  title: "Optical Path Length",
  formula: "OPL=\\mu d",
  plainFormula: "OPL = μd",
  description: "Optical path travelled by light inside a medium.",
  variables: [
    { symbol: "μ", name: "Refractive Index", unit: "Unitless" },
    { symbol: "d", name: "Distance", unit: "m" },
  ],
  keywords: ["optical path"],
  applications: [
    "Interference",
    "Thin films",
  ],
  commonMistakes: [
    "Optical path differs from geometrical distance.",
  ],
  relatedFormulas: [
    "Refractive Index",
  ],
  notes: [
    "Used extensively in interference calculations.",
  ],
},
{
  id: "degree-of-polarisation",
  title: "Degree of Polarisation",
  formula: "P=\\frac{I_{max}-I_{min}}{I_{max}+I_{min}}",
  plainFormula: "P = (Imax − Imin)/(Imax + Imin)",
  description: "Measures how completely light is polarised.",
  variables: [
    { symbol: "P", name: "Degree of Polarisation", unit: "Unitless" },
    { symbol: "Imax", name: "Maximum Intensity", unit: "W/m²" },
    { symbol: "Imin", name: "Minimum Intensity", unit: "W/m²" },
  ],
  keywords: ["polarisation"],
  applications: [
    "Optical experiments",
    "Polarised light analysis",
  ],
  commonMistakes: [
    "Value always lies between 0 and 1.",
  ],
  relatedFormulas: [
    "Malus' Law",
  ],
  notes: [
    "P = 1 represents completely polarised light.",
  ],
},
{
  id: "polarising-angle",
  title: "Polarising Angle",
  formula: "\\theta_P+\\theta_r=90^\\circ",
  plainFormula: "θP + θr = 90°",
  description: "Relationship between the polarising angle and refracted angle.",
  variables: [
    { symbol: "θP", name: "Polarising Angle", unit: "°" },
    { symbol: "θr", name: "Refracted Angle", unit: "°" },
  ],
  keywords: ["polarising angle"],
  applications: [
    "Brewster's law",
    "Polarisation experiments",
  ],
  commonMistakes: [
    "Valid at Brewster's angle only.",
  ],
  relatedFormulas: [
    "Brewster's Law",
  ],
  notes: [
    "Reflected and refracted rays are perpendicular.",
  ],
},

];

