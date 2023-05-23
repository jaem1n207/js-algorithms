import multiplicationSumOfElements from '../multiplication-sum-of-elements';

describe('multiplicationSumOfElements', () => {
  it('모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 반환한다.', () => {
    expect(multiplicationSumOfElements([3, 4, 5, 2, 1])).toEqual(1);
  });

  it('모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 반환한다.', () => {
    expect(multiplicationSumOfElements([5, 7, 8, 3])).toEqual(0);
  });
});
