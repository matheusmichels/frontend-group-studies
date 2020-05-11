export function divide(n1: number, n2: number): number {
  if (n2 === 0) {
    throw new Error('You shall not divide by zero');
  }

  return n1 / n2;
}
