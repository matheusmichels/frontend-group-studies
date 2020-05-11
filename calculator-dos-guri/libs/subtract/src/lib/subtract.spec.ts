import { subtract } from './subtract';

describe('subtract', () => {
  it('should return -1 when pass the first number as 1 and second number as 2', () => {
    expect(subtract(1, 2)).toEqual(-1);
  });
});
