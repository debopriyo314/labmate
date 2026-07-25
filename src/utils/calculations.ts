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
/**
 * Convert DMS to total seconds
 */
function dmsToTotalSeconds(
  degrees: number,
  minutes: number,
  seconds: number
): number {
  return degrees * 3600 + minutes * 60 + seconds;
}

/**
 * Convert total seconds back to DMS
 */
function totalSecondsToDMS(totalSeconds: number) {
  const degrees = Math.floor(totalSeconds / 3600);

  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  return {
    degrees,
    minutes,
    seconds,
  };
}

/**
 * Add two DMS angles
 */
export function addDMS(
  d1: number,
  m1: number,
  s1: number,
  d2: number,
  m2: number,
  s2: number
) {
  const total =
    dmsToTotalSeconds(d1, m1, s1) +
    dmsToTotalSeconds(d2, m2, s2);

  return totalSecondsToDMS(total);
}

/**
 * Subtract two DMS angles
 */
export function subtractDMS(
  d1: number,
  m1: number,
  s1: number,
  d2: number,
  m2: number,
  s2: number
) {
  const total =
    dmsToTotalSeconds(d1, m1, s1) -
    dmsToTotalSeconds(d2, m2, s2);

  return totalSecondsToDMS(Math.abs(total));
}
/**
 * Percentage Error
 * Formula:
 * |Observed - Accepted| / Accepted × 100
 */
export function calculatePercentageError(
  observed: number,
  accepted: number
): number {
  return (
    (Math.abs(observed - accepted) / accepted) * 100
  );
}