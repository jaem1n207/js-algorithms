import findMode from '../find-mode';

describe('findMode', () => {
  it('[1, 2, 3, 3, 3, 4]의 최빈값은 3이다.', () => {
    expect(findMode([1, 2, 3, 3, 3, 4])).toEqual(3);
  });

  it('[1, 1, 2, 2]의 최빈값은 1, 2이다. 최빈값이 여러 개이므로 -1을 반환한다.', () => {
    expect(findMode([1, 1, 2, 2])).toEqual(-1);
  });

  it('[1]의 최빈값은 1이다.', () => {
    expect(findMode([1])).toEqual(1);
  });
});
