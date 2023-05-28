import manipulatingNumbers1 from '../manipulating-numbers-1';

describe('manipulatingNumbers1', () => {
  it('string별 연산 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값은 -1이다.', () => {
    expect(manipulatingNumbers1(0, 'wsdawsdassw')).toEqual(-1);
  });
});
