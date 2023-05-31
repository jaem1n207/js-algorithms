import evenOddLength from '../even-odd-length';

describe('evenOddLength', () => {
  it('[1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다. 따라서 [2, 3]을 반환합니다.', () => {
    expect(evenOddLength([1, 2, 3, 4, 5])).toEqual([2, 3]);
  });

  it('[1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다. 따라서 [0, 4]를 반환합니다.', () => {
    expect(evenOddLength([1, 3, 5, 7])).toEqual([0, 4]);
  });
});
