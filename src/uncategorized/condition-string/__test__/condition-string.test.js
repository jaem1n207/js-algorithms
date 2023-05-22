import conditionString from '../condition-string';

describe('conditionString', () => {
  it('20 <= 50이면 1을 반환한다.', () => {
    expect(conditionString('<', '=', 20, 50)).toEqual(1);
  });

  it('41 > 78이면 0을 반환한다.', () => {
    expect(conditionString('>', '!', 41, 78)).toEqual(0);
  });

  it('50 >= 50이면 1을 반환한다.', () => {
    expect(conditionString('>', '=', 50, 50)).toEqual(1);
  });

  it('30 < 30이면 0을 반환한다.', () => {
    expect(conditionString('<', '!', 30, 30)).toEqual(0);
  });
});
