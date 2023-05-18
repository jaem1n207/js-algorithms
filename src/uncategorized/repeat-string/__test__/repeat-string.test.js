import repeatString from '../repeat-string';

describe('repeatString', () => {
  it('n이 3이면 문자열을 3번 반복한다.', () => {
    expect(repeatString('abc', 3)).toEqual('abcabcabc');
  });

  it('n이 0이면 빈 문자열을 반환한다.', () => {
    expect(repeatString('abc', 0)).toEqual('');
  });

  it('n이 음수이면 빈 문자열을 반환한다.', () => {
    expect(repeatString('abc', -2)).toEqual('');
  });
});
