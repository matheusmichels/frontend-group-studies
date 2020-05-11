import { divide } from './divide';

describe('divide', () => {
  it('should work', () => {
    expect(divide(10, 2)).toEqual(5);
  });
  it('should throw error when trying to divide by zero', () => {
    expect.assertions(1);

    try {
      divide(2, 0);
    } catch (error) {
      expect(error.message).toStrictEqual('You shall not divide by zero');
    }
  });
});
