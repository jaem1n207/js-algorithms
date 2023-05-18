import changeCaseByCase from '../change-case-by-case';

describe('changeCaseByCase', () => {
  it('str이 "aBcDeFg8"이면 "AbCdEfG8"을 반환한다.', () => {
    expect(changeCaseByCase('aBcDeFg8')).toEqual('AbCdEfG8');
  });

  it('str이 "HELLO"이면 "hello"을 반환한다.', () => {
    expect(changeCaseByCase('HELLO')).toEqual('hello');
  });

  it('str이 빈 값이면 ""을 반환한다.', () => {
    expect(changeCaseByCase('')).toEqual('');
  });
});
