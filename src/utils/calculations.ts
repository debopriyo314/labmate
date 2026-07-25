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