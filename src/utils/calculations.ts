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