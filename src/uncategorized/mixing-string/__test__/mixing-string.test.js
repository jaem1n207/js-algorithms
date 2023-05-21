import mixingString from '../mixing-string';

describe('mixingString', () => {
  it('str1이 "aaaaa", str2가 "bbbbb"이면 "ababababab"를 반환한다.', () => {
    expect(mixingString('aaaaa', 'bbbbb')).toEqual('ababababab');
  });
});
