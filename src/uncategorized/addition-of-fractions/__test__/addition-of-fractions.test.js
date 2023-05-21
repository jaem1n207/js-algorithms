import additionOfFractions from '../addition-of-fractions';

describe('additionOfFractions', () => {
  it('1/2 + 3/4 = 5/4 => [5, 4]', () => {
    expect(additionOfFractions(1, 2, 3, 4)).toEqual([5, 4]);
  });

  it('9/2 + 1/3 = 29/6 => [29, 6]', () => {
    expect(additionOfFractions(9, 2, 1, 3)).toEqual([29, 6]);
  });
});
