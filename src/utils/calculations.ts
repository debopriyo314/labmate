/**
 * Vernier Caliper
 * Formula:
 * Reading = MSR + (VSR × Least Count)
 */
export function calculateVernierReading(
  msr: number,
  vsr: number,
  leastCount: number
): number {
  return msr + vsr * leastCount;
}

/**
 * Screw Gauge
 * Formula:
 * Reading = PSR + (CSR × Least Count)
 */
export function calculateScrewGaugeReading(
  psr: number,
  csr: number,
  leastCount: number
): number {
  return psr + csr * leastCount;
}
/**
 * Decimal Degrees → DMS
 */
export function decimalToDMS(decimal: number) {
  const degrees = Math.trunc(decimal);

  const minutesFloat = (decimal - degrees) * 60;
  const minutes = Math.trunc(minutesFloat);

  const seconds = (minutesFloat - minutes) * 60;

  return {
    degrees,
    minutes,
    seconds,
  };
}
/**
 * DMS → Decimal Degrees
 */
export function dmsToDecimal(
  degrees: number,
  minutes: number,
  seconds: number
): number {
  return degrees + minutes / 60 + seconds / 3600;
}