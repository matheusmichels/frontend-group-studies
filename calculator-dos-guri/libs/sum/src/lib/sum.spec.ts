import { sum } from './sum';
describe('sum', () => {
  it('should work 2 + 5', () => {
    expect(sum(2, 5)).toEqual(7);
    expect(sum(2, 5)).toEqual(7);
  });

  it('should work sum with 0', () => {
    expect(sum(0, 2)).toEqual(2);
  });

  it('Should work sum with negative number', () => {
    expect(sum(-2, 3)).toEqual(1);
  });

  it('Should work with decimal value', () => {
    expect(sum(0.5, 1)).toEqual(1.5);
  });
});
