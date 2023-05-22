import findMedian from '../find-median';

describe('findMedian', () => {
  it('[1, 2, 7, 10, 11]의 중앙값은 7이다.', () => {
    expect(findMedian([1, 2, 7, 10, 11])).toEqual(7);
  });

  it('[1, 2, 7, 10, 11, 12]의 중앙값은 8.5이다.', () => {
    expect(findMedian([1, 2, 7, 10, 11, 12])).toEqual(8.5);
  });

  it('[9, -1, 0]의 중앙값은 0이다.', () => {
    expect(findMedian([9, -1, 0])).toEqual(0);
  });
});
