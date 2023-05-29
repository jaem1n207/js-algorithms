import manipulatingNumbers2 from '../manipulating-numbers-2';

describe('manipulatingNumbers2', () => {
  it('숫자 차이 값에 따라 문자열을 반환한다.', () => {
    expect(manipulatingNumbers2([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])).toEqual('wsdawsdassw');
  });
});
